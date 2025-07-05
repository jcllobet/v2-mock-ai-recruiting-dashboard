import { NextResponse } from 'next/server';
import { mockService } from '@/app/lib/mock-data/mock-service';

export async function GET() {
  try {
    const positions = await mockService.positions.getAll();
    return NextResponse.json(positions);
  } catch (error) {
    console.error('Error fetching positions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch positions' },
      { status: 500 }
    );
  }
}