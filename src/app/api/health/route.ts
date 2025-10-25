// app/api/health/route.ts
import { NextResponse } from 'next/server';
import { isConnected } from '@/lib/mongodbConfig';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    database: isConnected() ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  });
}
