import { NextResponse } from 'next/server';
import { conversationService, messageService, touchpointService } from '@/app/lib/mock-data/mock-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const candidateId = searchParams.get('candidateId');
    const includeMessages = searchParams.get('includeMessages') === 'true';
    const includeTouchpoints = searchParams.get('includeTouchpoints') === 'true';
    
    if (candidateId) {
      const conversations = await conversationService.getByCandidateId(candidateId);
      
      // Optionally include messages and touchpoints
      if (includeMessages || includeTouchpoints) {
        const enrichedConversations = await Promise.all(
          conversations.map(async (conv) => {
            const result: any = { ...conv };
            
            if (includeMessages) {
              result.messages = await messageService.getByConversationId(conv.id);
            }
            
            if (includeTouchpoints) {
              result.touchpoints = await touchpointService.getByCandidateId(candidateId);
            }
            
            return result;
          })
        );
        return NextResponse.json(enrichedConversations);
      }
      
      return NextResponse.json(conversations);
    }
    
    const conversations = await conversationService.getAll();
    return NextResponse.json(conversations);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch conversations' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const conversation = await conversationService.create(body);
    return NextResponse.json(conversation, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create conversation' },
      { status: 500 }
    );
  }
}