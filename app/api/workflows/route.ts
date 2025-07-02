import { NextResponse } from 'next/server';
import { workflowService } from '@/app/lib/mock-data/mock-service';

export async function GET() {
  try {
    const workflows = await workflowService.getAll();
    return NextResponse.json(workflows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch workflows' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const workflow = await workflowService.create(body);
    return NextResponse.json(workflow, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create workflow' },
      { status: 500 }
    );
  }
}