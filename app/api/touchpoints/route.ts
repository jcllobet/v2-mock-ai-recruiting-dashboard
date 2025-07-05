import { NextResponse } from 'next/server';
import { mockService } from '@/app/lib/mock-data/mock-service';

export async function GET() {
  try {
    const touchpoints = await mockService.touchpoints.getAll();
    return NextResponse.json(touchpoints);
  } catch (error) {
    console.error('Error fetching touchpoints:', error);
    return NextResponse.json(
      { error: 'Failed to fetch touchpoints' },
      { status: 500 }
    );
  }
}