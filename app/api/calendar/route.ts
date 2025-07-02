import { NextResponse } from 'next/server';
import { calendarService } from '@/app/lib/mock-data/mock-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const candidateId = searchParams.get('candidateId');
    
    if (candidateId) {
      const events = await calendarService.getByCandidateId(candidateId);
      return NextResponse.json(events);
    }
    
    if (startDate && endDate) {
      const events = await calendarService.getByDateRange(startDate, endDate);
      return NextResponse.json(events);
    }
    
    const events = await calendarService.getAll();
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch calendar events' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const event = await calendarService.create(body);
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create calendar event' },
      { status: 500 }
    );
  }
}