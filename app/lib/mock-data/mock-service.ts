import { 
  mockClients, 
  mockPositions, 
  mockCandidates, 
  mockConversations,
  mockKPIs,
  mockUser,
  mockActivities,
  mockWorkflows,
  mockAgents,
  mockCalendarEvents,
  mockAnalyticsMetrics,
  mockReports,
  mockSettings,
  mockMessages,
  mockTouchpoints
} from './seed-data';
import type { 
  Client, 
  Position, 
  Candidate, 
  Conversation, 
  KPI, 
  User, 
  Activity,
  DashboardMetrics,
  Workflow,
  Agent,
  CalendarEvent,
  AnalyticsMetrics,
  Report,
  Settings,
  Message,
  Touchpoint
} from '@/app/lib/types';

/**
 * Simulates API delay for realistic loading states
 * @param ms - Milliseconds to delay
 */
const delay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mock service for client operations
 */
export const clientService = {
  /**
   * Get all clients
   */
  async getAll(): Promise<Client[]> {
    await delay();
    return mockClients;
  },

  /**
   * Get client by ID
   */
  async getById(id: string): Promise<Client | null> {
    await delay();
    return mockClients.find(client => client.id === id) || null;
  },

  /**
   * Create new client
   */
  async create(client: Omit<Client, 'id' | 'createdAt' | 'lastActivityDate'>): Promise<Client> {
    await delay();
    const newClient: Client = {
      ...client,
      id: String(mockClients.length + 1),
      createdAt: new Date().toISOString(),
      lastActivityDate: new Date().toISOString(),
    };
    mockClients.push(newClient);
    return newClient;
  },

  /**
   * Update client
   */
  async update(id: string, updates: Partial<Client>): Promise<Client | null> {
    await delay();
    const index = mockClients.findIndex(client => client.id === id);
    if (index === -1) return null;
    
    mockClients[index] = {
      ...mockClients[index],
      ...updates,
      lastActivityDate: new Date().toISOString(),
    };
    return mockClients[index];
  },

  /**
   * Delete client
   */
  async delete(id: string): Promise<boolean> {
    await delay();
    const index = mockClients.findIndex(client => client.id === id);
    if (index === -1) return false;
    
    mockClients.splice(index, 1);
    return true;
  },
};

/**
 * Mock service for position operations
 */
export const positionService = {
  /**
   * Get all positions
   */
  async getAll(): Promise<Position[]> {
    await delay();
    return mockPositions;
  },

  /**
   * Get positions by client ID
   */
  async getByClientId(clientId: string): Promise<Position[]> {
    await delay();
    return mockPositions.filter(position => position.clientId === clientId);
  },

  /**
   * Get position by ID
   */
  async getById(id: string): Promise<Position | null> {
    await delay();
    return mockPositions.find(position => position.id === id) || null;
  },

  /**
   * Create new position
   */
  async create(position: Omit<Position, 'id' | 'postedDate' | 'applicantCount' | 'shortlistedCount' | 'interviewCount' | 'offerCount'>): Promise<Position> {
    await delay();
    const newPosition: Position = {
      ...position,
      id: String(mockPositions.length + 1),
      postedDate: new Date().toISOString(),
      applicantCount: 0,
      shortlistedCount: 0,
      interviewCount: 0,
      offerCount: 0,
    };
    mockPositions.push(newPosition);
    return newPosition;
  },

  /**
   * Update position
   */
  async update(id: string, updates: Partial<Position>): Promise<Position | null> {
    await delay();
    const index = mockPositions.findIndex(position => position.id === id);
    if (index === -1) return null;
    
    mockPositions[index] = {
      ...mockPositions[index],
      ...updates,
    };
    return mockPositions[index];
  },

  /**
   * Delete position
   */
  async delete(id: string): Promise<boolean> {
    await delay();
    const index = mockPositions.findIndex(position => position.id === id);
    if (index === -1) return false;
    
    mockPositions.splice(index, 1);
    return true;
  },
};

/**
 * Mock service for candidate operations
 */
export const candidateService = {
  /**
   * Get all candidates
   */
  async getAll(): Promise<Candidate[]> {
    await delay();
    return mockCandidates;
  },

  /**
   * Get candidate by ID
   */
  async getById(id: string): Promise<Candidate | null> {
    await delay();
    return mockCandidates.find(candidate => candidate.id === id) || null;
  },

  /**
   * Get candidates by position ID
   */
  async getByPositionId(positionId: string): Promise<Candidate[]> {
    await delay();
    return mockCandidates.filter(candidate => 
      candidate.appliedPositions.includes(positionId)
    );
  },

  /**
   * Create new candidate
   */
  async create(candidate: Omit<Candidate, 'id' | 'lastActivityDate'>): Promise<Candidate> {
    await delay();
    const newCandidate: Candidate = {
      ...candidate,
      id: String(mockCandidates.length + 1),
      lastActivityDate: new Date().toISOString(),
    };
    mockCandidates.push(newCandidate);
    return newCandidate;
  },

  /**
   * Update candidate
   */
  async update(id: string, updates: Partial<Candidate>): Promise<Candidate | null> {
    await delay();
    const index = mockCandidates.findIndex(candidate => candidate.id === id);
    if (index === -1) return null;
    
    mockCandidates[index] = {
      ...mockCandidates[index],
      ...updates,
      lastActivityDate: new Date().toISOString(),
    };
    return mockCandidates[index];
  },
};

/**
 * Mock service for conversation operations
 */
export const conversationService = {
  /**
   * Get all conversations
   */
  async getAll(): Promise<Conversation[]> {
    await delay();
    return mockConversations;
  },

  /**
   * Get conversations by candidate ID
   */
  async getByCandidateId(candidateId: string): Promise<Conversation[]> {
    await delay();
    return mockConversations.filter(conv => conv.candidateId === candidateId);
  },

  /**
   * Create new conversation
   */
  async create(conversation: Omit<Conversation, 'id'>): Promise<Conversation> {
    await delay();
    const newConversation: Conversation = {
      ...conversation,
      id: String(mockConversations.length + 1),
    };
    mockConversations.push(newConversation);
    return newConversation;
  },
};

/**
 * Mock service for dashboard operations
 */
export const dashboardService = {
  /**
   * Get dashboard metrics
   */
  async getMetrics(): Promise<DashboardMetrics> {
    await delay();
    return {
      totalClients: mockClients.length,
      activePositions: mockPositions.filter(p => p.status === 'open').length,
      totalCandidates: mockCandidates.length,
      hireRate: 68.5,
      avgTimeToHire: 21,
      interviewsScheduled: mockConversations.filter(c => c.status === 'scheduled').length,
      pendingOffers: mockPositions.reduce((sum, p) => sum + p.offerCount, 0),
      recentActivity: mockActivities.slice(0, 5),
    };
  },

  /**
   * Get KPIs
   */
  async getKPIs(): Promise<KPI[]> {
    await delay();
    return mockKPIs;
  },
};

/**
 * Mock service for user operations
 */
export const userService = {
  /**
   * Get current user
   */
  async getCurrentUser(): Promise<User> {
    await delay();
    return mockUser;
  },

  /**
   * Login user
   */
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    await delay(500);
    // Mock validation
    if (email === 'admin@airecruiting.com' && password === 'password') {
      return {
        user: mockUser,
        token: 'mock-jwt-token-' + Date.now(),
      };
    }
    throw new Error('Invalid credentials');
  },

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    await delay();
    // Clear any stored tokens
  },
};

/**
 * Mock service for activity operations
 */
export const activityService = {
  /**
   * Get recent activities
   */
  async getRecent(limit: number = 10): Promise<Activity[]> {
    await delay();
    return mockActivities.slice(0, limit);
  },

  /**
   * Create new activity
   */
  async create(activity: Omit<Activity, 'id' | 'timestamp'>): Promise<Activity> {
    await delay();
    const newActivity: Activity = {
      ...activity,
      id: String(mockActivities.length + 1),
      timestamp: new Date().toISOString(),
    };
    mockActivities.unshift(newActivity);
    return newActivity;
  },
};

/**
 * Mock service for workflow operations
 */
export const workflowService = {
  /**
   * Get all workflows
   */
  async getAll(): Promise<Workflow[]> {
    await delay();
    return mockWorkflows;
  },

  /**
   * Get workflow by ID
   */
  async getById(id: string): Promise<Workflow | null> {
    await delay();
    return mockWorkflows.find(workflow => workflow.id === id) || null;
  },

  /**
   * Create new workflow
   */
  async create(workflow: Omit<Workflow, 'id' | 'createdAt' | 'updatedAt' | 'executionCount'>): Promise<Workflow> {
    await delay();
    const newWorkflow: Workflow = {
      ...workflow,
      id: String(mockWorkflows.length + 1),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      executionCount: 0,
    };
    mockWorkflows.push(newWorkflow);
    return newWorkflow;
  },

  /**
   * Update workflow
   */
  async update(id: string, updates: Partial<Workflow>): Promise<Workflow | null> {
    await delay();
    const index = mockWorkflows.findIndex(workflow => workflow.id === id);
    if (index === -1) return null;
    
    mockWorkflows[index] = {
      ...mockWorkflows[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return mockWorkflows[index];
  },

  /**
   * Delete workflow
   */
  async delete(id: string): Promise<boolean> {
    await delay();
    const index = mockWorkflows.findIndex(workflow => workflow.id === id);
    if (index === -1) return false;
    
    mockWorkflows.splice(index, 1);
    return true;
  },
};

/**
 * Mock service for agent operations
 */
export const agentService = {
  /**
   * Get all agents
   */
  async getAll(): Promise<Agent[]> {
    await delay();
    return mockAgents;
  },

  /**
   * Get agent by ID
   */
  async getById(id: string): Promise<Agent | null> {
    await delay();
    return mockAgents.find(agent => agent.id === id) || null;
  },

  /**
   * Create new agent
   */
  async create(agent: Omit<Agent, 'id' | 'totalInterviews' | 'avgDuration' | 'avgScore'>): Promise<Agent> {
    await delay();
    const newAgent: Agent = {
      ...agent,
      id: String(mockAgents.length + 1),
      totalInterviews: 0,
      avgDuration: 0,
      avgScore: 0,
    };
    mockAgents.push(newAgent);
    return newAgent;
  },

  /**
   * Update agent
   */
  async update(id: string, updates: Partial<Agent>): Promise<Agent | null> {
    await delay();
    const index = mockAgents.findIndex(agent => agent.id === id);
    if (index === -1) return null;
    
    mockAgents[index] = {
      ...mockAgents[index],
      ...updates,
    };
    return mockAgents[index];
  },
};

/**
 * Mock service for calendar operations
 */
export const calendarService = {
  /**
   * Get all calendar events
   */
  async getAll(): Promise<CalendarEvent[]> {
    await delay();
    return mockCalendarEvents;
  },

  /**
   * Get events by date range
   */
  async getByDateRange(startDate: string, endDate: string): Promise<CalendarEvent[]> {
    await delay();
    return mockCalendarEvents.filter(event => 
      event.startTime >= startDate && event.startTime <= endDate
    );
  },

  /**
   * Get events by candidate ID
   */
  async getByCandidateId(candidateId: string): Promise<CalendarEvent[]> {
    await delay();
    return mockCalendarEvents.filter(event => event.candidateId === candidateId);
  },

  /**
   * Create new calendar event
   */
  async create(event: Omit<CalendarEvent, 'id'>): Promise<CalendarEvent> {
    await delay();
    const newEvent: CalendarEvent = {
      ...event,
      id: String(mockCalendarEvents.length + 1),
    };
    mockCalendarEvents.push(newEvent);
    return newEvent;
  },

  /**
   * Update calendar event
   */
  async update(id: string, updates: Partial<CalendarEvent>): Promise<CalendarEvent | null> {
    await delay();
    const index = mockCalendarEvents.findIndex(event => event.id === id);
    if (index === -1) return null;
    
    mockCalendarEvents[index] = {
      ...mockCalendarEvents[index],
      ...updates,
    };
    return mockCalendarEvents[index];
  },
};

/**
 * Mock service for analytics operations
 */
export const analyticsService = {
  /**
   * Get analytics metrics
   */
  async getMetrics(): Promise<AnalyticsMetrics> {
    await delay();
    return mockAnalyticsMetrics;
  },

  /**
   * Get metrics by date range
   */
  async getMetricsByDateRange(startDate: string, endDate: string): Promise<AnalyticsMetrics> {
    await delay();
    // In a real implementation, this would filter data by date range
    return mockAnalyticsMetrics;
  },
};

/**
 * Mock service for report operations
 */
export const reportService = {
  /**
   * Get all reports
   */
  async getAll(): Promise<Report[]> {
    await delay();
    return mockReports;
  },

  /**
   * Get report by ID
   */
  async getById(id: string): Promise<Report | null> {
    await delay();
    return mockReports.find(report => report.id === id) || null;
  },

  /**
   * Get reports by candidate ID
   */
  async getByCandidateId(candidateId: string): Promise<Report[]> {
    await delay();
    return mockReports.filter(report => report.candidateId === candidateId);
  },

  /**
   * Create new report
   */
  async create(report: Omit<Report, 'id' | 'generatedAt'>): Promise<Report> {
    await delay();
    const newReport: Report = {
      ...report,
      id: String(mockReports.length + 1),
      generatedAt: new Date().toISOString(),
    };
    mockReports.push(newReport);
    return newReport;
  },
};

/**
 * Mock service for settings operations
 */
export const settingsService = {
  /**
   * Get current settings
   */
  async get(): Promise<Settings> {
    await delay();
    return mockSettings;
  },

  /**
   * Update settings
   */
  async update(updates: Partial<Settings>): Promise<Settings> {
    await delay();
    Object.assign(mockSettings, updates);
    return mockSettings;
  },
};

/**
 * Mock service for message operations
 */
export const messageService = {
  /**
   * Get messages by conversation ID
   */
  async getByConversationId(conversationId: string): Promise<Message[]> {
    await delay();
    return mockMessages.filter(message => message.conversationId === conversationId);
  },

  /**
   * Create new message
   */
  async create(message: Omit<Message, 'id' | 'timestamp'>): Promise<Message> {
    await delay();
    const newMessage: Message = {
      ...message,
      id: String(mockMessages.length + 1),
      timestamp: new Date().toISOString(),
    };
    mockMessages.push(newMessage);
    return newMessage;
  },
};

/**
 * Mock service for touchpoint operations
 */
export const touchpointService = {
  /**
   * Get touchpoints by candidate ID
   */
  async getByCandidateId(candidateId: string): Promise<Touchpoint[]> {
    await delay();
    return mockTouchpoints.filter(touchpoint => touchpoint.candidateId === candidateId);
  },

  /**
   * Create new touchpoint
   */
  async create(touchpoint: Omit<Touchpoint, 'id' | 'timestamp'>): Promise<Touchpoint> {
    await delay();
    const newTouchpoint: Touchpoint = {
      ...touchpoint,
      id: String(mockTouchpoints.length + 1),
      timestamp: new Date().toISOString(),
    };
    mockTouchpoints.push(newTouchpoint);
    return newTouchpoint;
  },
};