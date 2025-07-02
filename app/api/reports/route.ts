import { NextResponse } from 'next/server';
import { reportService } from '@/app/lib/mock-data/mock-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const candidateId = searchParams.get('candidateId');
    
    if (candidateId) {
      const reports = await reportService.getByCandidateId(candidateId);
      return NextResponse.json(reports);
    }
    
    const reports = await reportService.getAll();
    return NextResponse.json(reports);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const report = await reportService.create(body);
    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create report' },
      { status: 500 }
    );
  }
}