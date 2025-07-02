import { NextResponse } from 'next/server';
import { settingsService } from '@/app/lib/mock-data/mock-service';

export async function GET() {
  try {
    const settings = await settingsService.get();
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const settings = await settingsService.update(body);
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}