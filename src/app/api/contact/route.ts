import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodbConfig';
import ContactMessage from './_model';

export async function GET(request: NextRequest) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');

        const result = await (ContactMessage as any).paginate(
            {},
            {
                page,
                limit,
                sort: { createdAt: -1 },
                select: '-__v',
                lean: true
            }
        );

        return NextResponse.json(
            {
                success: true,
                data: result.docs,
                pagination: {
                    totalDocs: result.totalDocs,
                    page: result.page,
                    limit: result.limit,
                    totalPages: result.totalPages,
                    hasNextPage: result.hasNextPage,
                    hasPrevPage: result.hasPrevPage
                }
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.error('Get contacts error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch messages' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Trim and validate
        const trimmedName = name.trim();
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedMessage = message.trim();

        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            return NextResponse.json(
                { success: false, error: 'Fields cannot be empty' },
                { status: 400 }
            );
        }

        // Length validation
        if (trimmedName.length > 100) {
            return NextResponse.json(
                { success: false, error: 'Name cannot exceed 100 characters' },
                { status: 400 }
            );
        }

        if (trimmedMessage.length > 1000) {
            return NextResponse.json(
                { success: false, error: 'Message cannot exceed 1000 characters' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(trimmedEmail)) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // ✅ RATE LIMITING: Check if user sent 5+ messages in last hour
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        const recentMessagesCount = await ContactMessage.countDocuments({
            email: trimmedEmail,
            createdAt: { $gte: oneHourAgo },
        });

        if (recentMessagesCount >= 5) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'You have reached the maximum limit of 5 messages per hour. Please try again later.',
                },
                { status: 429 } // 429 = Too Many Requests
            );
        }

        // Get client information
        const ipAddress =
            request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
            request.headers.get('x-real-ip') ||
            'Unknown';
        const userAgent = request.headers.get('user-agent') || 'Unknown';

        // ✅ Create message (no duplicate check - allows multiple messages)
        const contactMessage = await ContactMessage.create({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
            ipAddress,
            userAgent,
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Message sent successfully!',
                data: {
                    id: contactMessage._id,
                    name: contactMessage.name,
                    email: contactMessage.email,
                    remainingMessages: 5 - recentMessagesCount - 1, // ✅ Tell user how many left
                },
            },
            { status: 201 }
        );

    } catch (error: unknown) {
        console.error('Contact form error:', error);

        // Handle validation errors
        if (error && typeof error === 'object' && 'name' in error && error.name === 'ValidationError' && 'errors' in error) {
            const errors = Object.values(error.errors as Record<string, { message: string }>).map((err) => err.message);
            return NextResponse.json(
                { success: false, error: errors.join(', ') },
                { status: 400 }
            );
        }

        // Handle database connection errors
        if (error && typeof error === 'object' && 'name' in error && (error.name === 'MongoNetworkError' || error.name === 'MongooseServerSelectionError')) {
            return NextResponse.json(
                { success: false, error: 'Database connection failed. Please try again later.' },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { success: false, error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}


