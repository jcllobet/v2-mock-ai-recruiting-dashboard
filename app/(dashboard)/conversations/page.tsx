'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import { 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  Linkedin,
  Clock,
  Calendar,
  CheckCircle,
  Circle,
  XCircle,
  User,
  Bot,
  AlertCircle,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import type { Conversation, Candidate, Position, Message, Touchpoint } from '@/app/lib/types';

interface ConversationWithDetails extends Conversation {
  messages?: Message[];
  touchpoints?: Touchpoint[];
  candidate?: Candidate;
  position?: Position;
}

export default function ConversationsPage() {
  const [conversations, setConversations] = useState<ConversationWithDetails[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [conversationsRes, candidatesRes, positionsRes] = await Promise.all([
        fetch('/api/conversations?includeMessages=true&includeTouchpoints=true'),
        fetch('/api/candidates'),
        fetch('/api/positions')
      ]);
      
      const conversationsData = await conversationsRes.json();
      const candidatesData = await candidatesRes.json();
      const positionsData = await positionsRes.json();
      
      // Enrich conversations with candidate and position data
      const enrichedConversations = conversationsData.map((conv: ConversationWithDetails) => ({
        ...conv,
        candidate: candidatesData.find((c: Candidate) => c.id === conv.candidateId),
        position: positionsData.find((p: Position) => p.id === conv.positionId)
      }));
      
      setConversations(enrichedConversations);
      setCandidates(candidatesData);
      setPositions(positionsData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredConversations = conversations.filter(conversation => {
    const candidate = conversation.candidate;
    const matchesSearch = 
      candidate?.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate?.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate?.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conversation.position?.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || conversation.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress':
        return <Circle className="h-4 w-4 text-blue-500 animate-pulse" />;
      case 'scheduled':
        return <Calendar className="h-4 w-4 text-purple-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Circle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email':
        return <Mail className="h-4 w-4" />;
      case 'phone':
        return <Phone className="h-4 w-4" />;
      case 'linkedin':
        return <Linkedin className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-600 bg-green-50';
      case 'negative':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTouchpointIcon = (type: string) => {
    switch (type) {
      case 'application_received':
        return <Circle className="h-4 w-4 text-blue-500" />;
      case 'screening_started':
        return <MessageSquare className="h-4 w-4 text-purple-500" />;
      case 'interview_scheduled':
        return <Calendar className="h-4 w-4 text-green-500" />;
      case 'interview_completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'offer_sent':
        return <Mail className="h-4 w-4 text-blue-600" />;
      case 'reminder_sent':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Circle className="h-4 w-4 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <LoadingSpinner />
      </div>
    );
  }

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="h-[calc(100vh-64px)] flex">
      {/* Conversations List */}
      <div className={`${selectedConversation ? 'hidden md:block' : 'block'} w-full md:w-96 border-r overflow-y-auto`}>
        <div className="p-4 border-b sticky top-0 bg-background">
          <h1 className="text-2xl font-bold mb-4">Conversations</h1>
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              className="w-full px-3 py-2 border rounded-md"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="divide-y">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                selectedConversation === conversation.id ? 'bg-muted' : ''
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-medium">
                    {conversation.candidate?.firstName} {conversation.candidate?.lastName}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {conversation.position?.title}
                  </p>
                </div>
                {getStatusIcon(conversation.status)}
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {new Date(conversation.scheduledDate).toLocaleDateString()}
                </span>
                <span className={`px-2 py-1 rounded-full ${getSentimentColor(conversation.sentiment)}`}>
                  {conversation.sentiment}
                </span>
              </div>

              {conversation.messages && conversation.messages.length > 0 && (
                <p className="text-sm mt-2 truncate text-muted-foreground">
                  {conversation.messages[conversation.messages.length - 1].content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Conversation Detail */}
      {selectedConv ? (
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  onClick={() => setSelectedConversation(null)}
                >
                  ← Back
                </Button>
                <div>
                  <h2 className="text-xl font-semibold">
                    {selectedConv.candidate?.firstName} {selectedConv.candidate?.lastName}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {selectedConv.position?.title} • {selectedConv.type}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(selectedConv.status)}
                <span className="text-sm capitalize">{selectedConv.status}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6">
              {/* Summary Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Conversation Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">AI Summary</p>
                    <p>{selectedConv.summary}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="font-medium">{selectedConv.duration} minutes</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Score</p>
                      <p className="font-medium">{selectedConv.score}/100</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Key Points</p>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedConv.keyPoints.map((point, index) => (
                        <li key={index} className="text-sm">{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Next Steps</p>
                    <ul className="space-y-1">
                      {selectedConv.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <ChevronRight className="h-3 w-3" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Messages */}
              {selectedConv.messages && selectedConv.messages.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Message Trail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedConv.messages.map((message) => (
                        <div key={message.id} className="flex gap-3">
                          <div className="flex-shrink-0">
                            {message.sender === 'agent' ? (
                              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <Bot className="h-4 w-4 text-primary-foreground" />
                              </div>
                            ) : message.sender === 'candidate' ? (
                              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                <User className="h-4 w-4" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                <AlertCircle className="h-4 w-4 text-orange-600" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium">
                                {message.sender === 'agent' ? 'AI Agent' : 
                                 message.sender === 'candidate' ? selectedConv.candidate?.firstName : 
                                 'System'}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {new Date(message.timestamp).toLocaleString()}
                              </span>
                              {getChannelIcon(message.channel)}
                            </div>
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Touchpoints */}
              {selectedConv.touchpoints && selectedConv.touchpoints.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Candidate Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedConv.touchpoints.map((touchpoint, index) => (
                        <div key={touchpoint.id} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="flex-shrink-0">
                              {getTouchpointIcon(touchpoint.type)}
                            </div>
                            {index < selectedConv.touchpoints!.length - 1 && (
                              <div className="w-0.5 h-16 bg-muted mt-2" />
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <p className="font-medium text-sm">{touchpoint.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(touchpoint.timestamp).toLocaleString()}
                            </p>
                            {touchpoint.outcome && (
                              <p className="text-sm mt-2 text-muted-foreground">
                                Outcome: {touchpoint.outcome}
                              </p>
                            )}
                            {touchpoint.nextAction && (
                              <p className="text-sm mt-1 text-primary">
                                Next: {touchpoint.nextAction}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Button className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Full Transcript
              </Button>
              <Button variant="outline">Schedule Follow-up</Button>
              <Button variant="outline">Generate Report</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center text-muted-foreground">
          <p>Select a conversation to view details</p>
        </div>
      )}
    </div>
  );
}