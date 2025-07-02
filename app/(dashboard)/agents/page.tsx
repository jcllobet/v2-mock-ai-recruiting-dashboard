'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import {
  Bot,
  Mic,
  MicOff,
  Play,
  Settings,
  Clock,
  Users,
  Star,
  Calendar,
  Globe,
  Volume2,
  Brain,
  Activity,
  ChevronDown,
  Plus,
  Edit,
  Power,
  Phone,
  PhoneCall,
  PhoneOff
} from 'lucide-react';
import type { Agent } from '@/app/lib/types';

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [interviewState, setInterviewState] = useState<'idle' | 'connecting' | 'active' | 'ended'>('idle');

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const response = await fetch('/api/agents');
      const data = await response.json();
      setAgents(data);
    } catch (error) {
      console.error('Failed to fetch agents:', error);
    } finally {
      setLoading(false);
    }
  };

  const getVoiceLabel = (voice: string) => {
    const labels = {
      professional: 'Professional',
      friendly: 'Friendly',
      casual: 'Casual'
    };
    return labels[voice as keyof typeof labels] || voice;
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      screening: 'Screening Specialist',
      interview: 'Technical Interviewer',
      follow_up: 'Follow-up Specialist',
      reference_check: 'Reference Checker'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const handleStartInterview = () => {
    setInterviewState('connecting');
    setTimeout(() => {
      setInterviewState('active');
      setIsInterviewActive(true);
    }, 2000);
  };

  const handleEndInterview = () => {
    setInterviewState('ended');
    setIsInterviewActive(false);
    setTimeout(() => {
      setInterviewState('idle');
    }, 1000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <LoadingSpinner />
      </div>
    );
  }

  const selectedAgentData = agents.find(a => a.id === selectedAgent);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Agents</h1>
          <p className="text-muted-foreground">
            Manage your AI recruitment agents and conduct voice interviews
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Agent
        </Button>
      </div>

      {/* Agent Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agents.filter(a => a.isActive).length}</div>
            <p className="text-xs text-muted-foreground">Currently available</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interviews</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {agents.reduce((sum, a) => sum + a.totalInterviews, 0)}
            </div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Interview Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(agents.reduce((sum, a) => sum + a.avgDuration, 0) / agents.length)} min
            </div>
            <p className="text-xs text-muted-foreground">Per interview</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Quality Score</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(agents.reduce((sum, a) => sum + a.avgScore, 0) / agents.length).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground">Out of 100</p>
          </CardContent>
        </Card>
      </div>

      {/* Voice Interview Interface */}
      {selectedAgent && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-xl">Voice Interview Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-6">
              {interviewState === 'idle' && (
                <>
                  <div className="p-8">
                    <Bot className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Start Interview with {selectedAgentData?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Click the button below to start a mock voice interview. This is a demonstration
                      of how candidates would interact with the AI agent.
                    </p>
                  </div>
                  <Button size="lg" onClick={handleStartInterview} className="gap-2">
                    <PhoneCall className="h-5 w-5" />
                    Start Voice Interview
                  </Button>
                </>
              )}

              {interviewState === 'connecting' && (
                <div className="p-8">
                  <div className="relative">
                    <Phone className="h-16 w-16 text-primary mx-auto animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 border-4 border-primary/20 rounded-full animate-ping" />
                    </div>
                  </div>
                  <p className="text-lg font-medium mt-4">Connecting to {selectedAgentData?.name}...</p>
                  <p className="text-sm text-muted-foreground">Please wait</p>
                </div>
              )}

              {interviewState === 'active' && (
                <div className="p-8">
                  <div className="flex items-center justify-center gap-8 mb-6">
                    <div className="text-center">
                      <div className="relative">
                        <Bot className="h-16 w-16 text-primary mx-auto" />
                        <div className="absolute -bottom-2 -right-2">
                          <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                        </div>
                      </div>
                      <p className="text-sm font-medium mt-2">{selectedAgentData?.name}</p>
                    </div>
                    <Activity className="h-8 w-8 text-muted-foreground animate-pulse" />
                    <div className="text-center">
                      <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8" />
                      </div>
                      <p className="text-sm font-medium mt-2">Candidate</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-muted-foreground mb-2">AI Agent is speaking...</p>
                    <p className="italic">"Hello! Thank you for joining me today. I'm {selectedAgentData?.name}, 
                    and I'll be conducting your screening interview. How are you doing today?"</p>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" size="lg" className="gap-2">
                      <MicOff className="h-5 w-5" />
                      Mute
                    </Button>
                    <Button variant="destructive" size="lg" onClick={handleEndInterview} className="gap-2">
                      <PhoneOff className="h-5 w-5" />
                      End Interview
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2">
                      <Volume2 className="h-5 w-5" />
                      Speaker
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4">
                    Interview Duration: 00:42
                  </p>
                </div>
              )}

              {interviewState === 'ended' && (
                <div className="p-8">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PhoneOff className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Interview Ended</h3>
                  <p className="text-sm text-muted-foreground">
                    The interview has been completed. A report will be generated shortly.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Agents Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {agents.map((agent) => (
          <Card 
            key={agent.id} 
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedAgent === agent.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedAgent(agent.id)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{getTypeLabel(agent.type)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {agent.isActive ? (
                    <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      Active
                    </span>
                  ) : (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      Inactive
                    </span>
                  )}
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{agent.personality}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Volume2 className="h-4 w-4 text-muted-foreground" />
                    <span>{getVoiceLabel(agent.voice)} Voice</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>{agent.language}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{agent.availability.startTime} - {agent.availability.endTime}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{agent.totalInterviews} interviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>~{agent.avgDuration} min avg</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-muted-foreground" />
                    <span>{agent.avgScore}/100 avg score</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {agent.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAgent(agent.id);
                  }}>
                  <Play className="h-4 w-4 mr-1" />
                  Test Interview
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}