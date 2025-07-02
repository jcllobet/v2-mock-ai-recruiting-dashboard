import { NextResponse } from 'next/server';
import { agentService } from '@/app/lib/mock-data/mock-service';

export async function GET() {
  try {
    const agents = await agentService.getAll();
    return NextResponse.json(agents);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch agents' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const agent = await agentService.create(body);
    return NextResponse.json(agent, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create agent' },
      { status: 500 }
    );
  }
}