/**
 * Client entity representing a company using the recruiting platform
 */
export interface Client {
  id: string;
  name: string;
  industry: string;
  size: string;
  location: string;
  status: 'active' | 'inactive' | 'pending';
  contactEmail: string;
  contactPhone: string;
  createdAt: string;
  lastActivityDate: string;
  activePositions: number;
  totalHires: number;
  successRate: number;
}

/**
 * Job position posted by a client
 */
export interface Position {
  id: string;
  clientId: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experienceLevel: 'entry' | 'mid' | 'senior' | 'executive';
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  benefits: string[];
  status: 'open' | 'closed' | 'draft' | 'paused';
  postedDate: string;
  applicationDeadline: string;
  applicantCount: number;
  shortlistedCount: number;
  interviewCount: number;
  offerCount: number;
}

/**
 * Candidate applying for positions
 */
export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  currentRole: string;
  currentCompany: string;
  experienceYears: number;
  skills: string[];
  education: {
    degree: string;
    institution: string;
    graduationYear: number;
  }[];
  resumeUrl: string;
  linkedInUrl: string;
  status: 'new' | 'screening' | 'interviewing' | 'offered' | 'hired' | 'rejected';
  appliedPositions: string[];
  notes: string;
  score: number;
  lastActivityDate: string;
}

/**
 * AI conversation/interaction
 */
export interface Conversation {
  id: string;
  candidateId: string;
  positionId: string;
  type: 'screening' | 'interview' | 'follow-up';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  scheduledDate: string;
  duration: number;
  transcript: string;
  summary: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  keyPoints: string[];
  nextSteps: string[];
  score: number;
}

/**
 * Key Performance Indicator
 */
export interface KPI {
  label: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  period: string;
}

/**
 * User/Account information
 */
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'recruiter' | 'hiring-manager' | 'viewer';
  avatar?: string;
  company: string;
  lastLogin: string;
}

/**
 * Dashboard metrics
 */
export interface DashboardMetrics {
  totalClients: number;
  activePositions: number;
  totalCandidates: number;
  hireRate: number;
  avgTimeToHire: number;
  interviewsScheduled: number;
  pendingOffers: number;
  recentActivity: Activity[];
}

/**
 * Activity log entry
 */
export interface Activity {
  id: string;
  type: 'client_added' | 'position_posted' | 'candidate_applied' | 'interview_scheduled' | 'offer_made' | 'hire_completed';
  description: string;
  timestamp: string;
  userId: string;
  metadata: Record<string, any>;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Workflow entity for recruitment automation
 */
export interface Workflow {
  id: string;
  name: string;
  description: string;
  trigger: 'candidate_applied' | 'interview_completed' | 'status_change' | 'time_based';
  conditions: {
    field: string;
    operator: 'equals' | 'contains' | 'greater_than' | 'less_than';
    value: any;
  }[];
  actions: {
    type: 'send_email' | 'schedule_interview' | 'update_status' | 'assign_to' | 'add_note';
    parameters: Record<string, any>;
  }[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  executionCount: number;
  lastExecuted?: string;
}

/**
 * AI Agent configuration
 */
export interface Agent {
  id: string;
  name: string;
  type: 'screening' | 'interview' | 'follow_up' | 'reference_check';
  voice: 'professional' | 'friendly' | 'casual';
  language: string;
  personality: string;
  skills: string[];
  availability: {
    days: string[];
    startTime: string;
    endTime: string;
    timezone: string;
  };
  interviewQuestions?: string[];
  evaluationCriteria?: string[];
  isActive: boolean;
  totalInterviews: number;
  avgDuration: number;
  avgScore: number;
}

/**
 * Calendar event
 */
export interface CalendarEvent {
  id: string;
  title: string;
  type: 'interview' | 'meeting' | 'follow_up' | 'deadline';
  startTime: string;
  endTime: string;
  location: string;
  attendees: {
    candidateId?: string;
    agentId?: string;
    userId?: string;
    email: string;
    name: string;
  }[];
  positionId?: string;
  candidateId?: string;
  description: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  meetingUrl?: string;
  reminders: number[];
}

/**
 * Detailed analytics metrics
 */
export interface AnalyticsMetrics {
  overview: {
    totalApplications: number;
    totalInterviews: number;
    totalHires: number;
    avgTimeToHire: number;
    avgCostPerHire: number;
    offerAcceptanceRate: number;
  };
  funnel: {
    stage: string;
    count: number;
    conversionRate: number;
  }[];
  sourceAnalysis: {
    source: string;
    applications: number;
    interviews: number;
    hires: number;
    quality: number;
  }[];
  timeMetrics: {
    applicationToScreening: number;
    screeningToInterview: number;
    interviewToOffer: number;
    offerToAcceptance: number;
  };
  demographicInsights: {
    category: string;
    data: Record<string, number>;
  }[];
  roi: {
    totalInvestment: number;
    totalSavings: number;
    netBenefit: number;
    roiPercentage: number;
    costBreakdown: {
      category: string;
      amount: number;
    }[];
  };
}

/**
 * Interview report
 */
export interface Report {
  id: string;
  candidateId: string;
  positionId: string;
  conversationId: string;
  generatedAt: string;
  type: 'screening' | 'technical' | 'behavioral' | 'final';
  overallScore: number;
  sections: {
    title: string;
    score: number;
    feedback: string;
    strengths: string[];
    improvements: string[];
  }[];
  technicalAssessment?: {
    problemSolving: number;
    codingSkills: number;
    systemDesign: number;
    communication: number;
    details: string;
  };
  behavioralAssessment?: {
    leadership: number;
    teamwork: number;
    communication: number;
    adaptability: number;
    cultureFit: number;
    details: string;
  };
  recommendation: 'strong_yes' | 'yes' | 'maybe' | 'no';
  nextSteps: string[];
  aiNotes: string;
  humanNotes?: string;
}

/**
 * Settings configuration
 */
export interface Settings {
  general: {
    companyName: string;
    timezone: string;
    language: string;
    dateFormat: string;
    currency: string;
  };
  recruitment: {
    autoScreening: boolean;
    scoringThreshold: number;
    interviewDuration: number;
    reminderTiming: number[];
    emailTemplates: {
      type: string;
      subject: string;
      body: string;
    }[];
  };
  integrations: {
    calendar: {
      provider: 'google' | 'outlook' | 'none';
      syncEnabled: boolean;
    };
    ats: {
      provider: string;
      apiKey?: string;
      syncEnabled: boolean;
    };
    communication: {
      email: boolean;
      sms: boolean;
      linkedin: boolean;
    };
  };
  notifications: {
    email: {
      newApplication: boolean;
      interviewScheduled: boolean;
      statusChange: boolean;
      weeklyReport: boolean;
    };
    inApp: {
      newApplication: boolean;
      interviewScheduled: boolean;
      statusChange: boolean;
    };
  };
  billing: {
    plan: 'starter' | 'professional' | 'enterprise';
    billingCycle: 'monthly' | 'yearly';
    nextBillingDate: string;
    usage: {
      interviews: number;
      candidates: number;
      agents: number;
    };
    limits: {
      interviews: number;
      candidates: number;
      agents: number;
    };
  };
}

/**
 * Message in a conversation
 */
export interface Message {
  id: string;
  conversationId: string;
  sender: 'candidate' | 'agent' | 'system';
  content: string;
  timestamp: string;
  channel: 'email' | 'linkedin' | 'phone' | 'platform';
  attachments?: {
    type: string;
    url: string;
    name: string;
  }[];
  metadata?: Record<string, any>;
}

/**
 * Touchpoint in candidate journey
 */
export interface Touchpoint {
  id: string;
  candidateId: string;
  type: 'application_received' | 'screening_started' | 'interview_scheduled' | 'interview_completed' | 'reference_check' | 'offer_sent' | 'offer_accepted' | 'offer_declined' | 'reminder_sent';
  timestamp: string;
  description: string;
  outcome?: string;
  nextAction?: string;
}