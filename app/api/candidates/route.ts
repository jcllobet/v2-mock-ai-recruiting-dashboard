import { NextResponse } from 'next/server';
import { candidateService } from '@/app/lib/mock-data/mock-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const positionId = searchParams.get('positionId');
    
    if (positionId) {
      const candidates = await candidateService.getByPositionId(positionId);
      return NextResponse.json(candidates);
    }
    
    const candidates = await candidateService.getAll();
    return NextResponse.json(candidates);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch candidates' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const candidate = await candidateService.create(body);
    return NextResponse.json(candidate, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create candidate' },
      { status: 500 }
    );
  }
}