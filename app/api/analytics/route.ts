import { NextResponse } from 'next/server';
import { analyticsService } from '@/app/lib/mock-data/mock-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    if (startDate && endDate) {
      const metrics = await analyticsService.getMetricsByDateRange(startDate, endDate);
      return NextResponse.json(metrics);
    }
    
    const metrics = await analyticsService.getMetrics();
    return NextResponse.json(metrics);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}