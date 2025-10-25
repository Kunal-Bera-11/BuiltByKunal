import mongoose, { Connection } from 'mongoose';

if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

const MONGODB_URI: string = process.env.MONGODB_URI;

interface MongooseCache {
    conn: Connection | null;
    promise: Promise<Connection> | null;
}

// Extend global type for caching
const globalForMongoose = globalThis as typeof globalThis & {
    _mongooseCache?: MongooseCache;
};

const cached: MongooseCache = globalForMongoose._mongooseCache || {
    conn: null,
    promise: null,
};

if (!globalForMongoose._mongooseCache) {
    globalForMongoose._mongooseCache = cached;
}

/**
 * Connect to MongoDB with connection caching
 * Reuses existing connection in serverless environments
 */
async function dbConnect(): Promise<Connection> {
    // Return existing connection if available
    if (cached.conn) {
        console.log('📦 Using cached database connection');
        return cached.conn;
    }

    // Return existing promise if connection is in progress
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            maxPoolSize: 10,
            minPoolSize: 2,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        };

        console.log('🔌 Creating new database connection...');

        cached.promise = mongoose
            .connect(MONGODB_URI, opts)
            .then((mongoose) => {
                console.log('✅ Database connected successfully');
                return mongoose.connection;
            })
            .catch((error) => {
                console.error('❌ Database connection failed:', error);
                // Reset promise on failure
                cached.promise = null;
                throw error;
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

/**
 * Check if database is connected
 */
export function isConnected(): boolean {
    return cached.conn?.readyState === 1;
}

/**
 * Disconnect from database (useful for cleanup in tests)
 */
export async function dbDisconnect(): Promise<void> {
    if (cached.conn) {
        await mongoose.disconnect();
        cached.conn = null;
        cached.promise = null;
        console.log('🔌 Database disconnected');
    }
}

export default dbConnect;
