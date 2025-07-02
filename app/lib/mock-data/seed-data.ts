import type { 
  Client, 
  Position, 
  Candidate, 
  Conversation, 
  KPI, 
  User, 
  Activity,
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
 * Mock clients data
 */
export const mockClients: Client[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    industry: 'Technology',
    size: '500-1000',
    location: 'San Francisco, CA',
    status: 'active',
    contactEmail: 'hr@techcorp.com',
    contactPhone: '+1 (555) 123-4567',
    createdAt: '2024-01-15T10:00:00Z',
    lastActivityDate: '2024-12-20T14:30:00Z',
    activePositions: 12,
    totalHires: 45,
    successRate: 78.5,
  },
  {
    id: '2',
    name: 'Global Finance Inc',
    industry: 'Finance',
    size: '1000-5000',
    location: 'New York, NY',
    status: 'active',
    contactEmail: 'recruitment@globalfinance.com',
    contactPhone: '+1 (555) 234-5678',
    createdAt: '2024-02-20T09:00:00Z',
    lastActivityDate: '2024-12-19T16:45:00Z',
    activePositions: 8,
    totalHires: 32,
    successRate: 82.3,
  },
  {
    id: '3',
    name: 'Healthcare Systems LLC',
    industry: 'Healthcare',
    size: '100-500',
    location: 'Boston, MA',
    status: 'active',
    contactEmail: 'jobs@healthcaresystems.com',
    contactPhone: '+1 (555) 345-6789',
    createdAt: '2024-03-10T11:30:00Z',
    lastActivityDate: '2024-12-18T13:20:00Z',
    activePositions: 5,
    totalHires: 18,
    successRate: 71.2,
  },
];

/**
 * Mock positions data
 */
export const mockPositions: Position[] = [
  {
    id: '1',
    clientId: '1',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'full-time',
    experienceLevel: 'senior',
    salary: {
      min: 150000,
      max: 200000,
      currency: 'USD',
    },
    description: 'We are looking for a Senior Software Engineer to join our growing team...',
    requirements: [
      '5+ years of software development experience',
      'Proficiency in React, TypeScript, and Node.js',
      'Experience with cloud platforms (AWS/GCP)',
      'Strong problem-solving skills',
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
    ],
    status: 'open',
    postedDate: '2024-12-01T09:00:00Z',
    applicationDeadline: '2025-01-31T23:59:59Z',
    applicantCount: 125,
    shortlistedCount: 15,
    interviewCount: 8,
    offerCount: 2,
  },
  {
    id: '2',
    clientId: '2',
    title: 'Financial Analyst',
    department: 'Finance',
    location: 'New York, NY',
    type: 'full-time',
    experienceLevel: 'mid',
    salary: {
      min: 80000,
      max: 120000,
      currency: 'USD',
    },
    description: 'Join our finance team as a Financial Analyst...',
    requirements: [
      '3-5 years of financial analysis experience',
      'CFA or working towards CFA preferred',
      'Advanced Excel and financial modeling skills',
      'Experience with Bloomberg Terminal',
    ],
    benefits: [
      'Annual bonus',
      'Health benefits',
      'Retirement matching',
      'Gym membership',
    ],
    status: 'open',
    postedDate: '2024-12-05T10:00:00Z',
    applicationDeadline: '2025-01-15T23:59:59Z',
    applicantCount: 89,
    shortlistedCount: 12,
    interviewCount: 6,
    offerCount: 1,
  },
];

/**
 * Mock candidates data
 */
export const mockCandidates: Candidate[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 111-2222',
    location: 'San Francisco, CA',
    currentRole: 'Software Engineer',
    currentCompany: 'StartupXYZ',
    experienceYears: 6,
    skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'Python'],
    education: [
      {
        degree: 'BS Computer Science',
        institution: 'UC Berkeley',
        graduationYear: 2018,
      },
    ],
    resumeUrl: '/resumes/john-doe.pdf',
    linkedInUrl: 'https://linkedin.com/in/johndoe',
    status: 'interviewing',
    appliedPositions: ['1'],
    notes: 'Strong technical background, good communication skills',
    score: 85,
    lastActivityDate: '2024-12-20T10:00:00Z',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    phone: '+1 (555) 222-3333',
    location: 'New York, NY',
    currentRole: 'Senior Financial Analyst',
    currentCompany: 'BigBank Corp',
    experienceYears: 5,
    skills: ['Financial Modeling', 'Excel', 'SQL', 'Python', 'Tableau'],
    education: [
      {
        degree: 'MBA Finance',
        institution: 'NYU Stern',
        graduationYear: 2020,
      },
      {
        degree: 'BS Economics',
        institution: 'Columbia University',
        graduationYear: 2018,
      },
    ],
    resumeUrl: '/resumes/jane-smith.pdf',
    linkedInUrl: 'https://linkedin.com/in/janesmith',
    status: 'screening',
    appliedPositions: ['2'],
    notes: 'CFA Level 2 candidate, strong analytical skills',
    score: 78,
    lastActivityDate: '2024-12-19T14:30:00Z',
  },
];

/**
 * Mock conversations data
 */
export const mockConversations: Conversation[] = [
  {
    id: '1',
    candidateId: '1',
    positionId: '1',
    type: 'screening',
    status: 'completed',
    scheduledDate: '2024-12-18T14:00:00Z',
    duration: 30,
    transcript: 'AI: Hello John, thank you for your interest in the Senior Software Engineer position...',
    summary: 'Candidate has strong technical skills and relevant experience. Recommended for technical interview.',
    sentiment: 'positive',
    keyPoints: [
      '6 years of relevant experience',
      'Strong React and TypeScript skills',
      'Led team of 3 developers',
      'Interested in technical challenges',
    ],
    nextSteps: [
      'Schedule technical interview',
      'Send coding assessment',
    ],
    score: 85,
  },
];

/**
 * Mock KPIs data
 */
export const mockKPIs: KPI[] = [
  {
    label: 'Total Active Clients',
    value: 127,
    change: 12.5,
    changeType: 'increase',
    period: 'vs last month',
  },
  {
    label: 'Open Positions',
    value: 342,
    change: 8.3,
    changeType: 'increase',
    period: 'vs last month',
  },
  {
    label: 'Total Candidates',
    value: '5.2K',
    change: 15.7,
    changeType: 'increase',
    period: 'vs last month',
  },
  {
    label: 'Average Time to Hire',
    value: '21 days',
    change: 5.2,
    changeType: 'decrease',
    period: 'vs last month',
  },
];

/**
 * Mock user data
 */
export const mockUser: User = {
  id: '1',
  email: 'admin@airecruiting.com',
  name: 'Admin User',
  role: 'admin',
  company: 'AI Recruiting Platform',
  lastLogin: '2024-12-20T09:00:00Z',
};

/**
 * Mock activity data
 */
export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'client_added',
    description: 'New client "TechStartup Inc" added',
    timestamp: '2024-12-20T10:30:00Z',
    userId: '1',
    metadata: { clientId: '4' },
  },
  {
    id: '2',
    type: 'position_posted',
    description: 'New position "DevOps Engineer" posted by TechCorp Solutions',
    timestamp: '2024-12-20T09:45:00Z',
    userId: '1',
    metadata: { positionId: '3', clientId: '1' },
  },
  {
    id: '3',
    type: 'interview_scheduled',
    description: 'Interview scheduled with John Doe for Senior Software Engineer',
    timestamp: '2024-12-19T16:20:00Z',
    userId: '1',
    metadata: { candidateId: '1', positionId: '1' },
  },
];

/**
 * Mock workflows data
 */
export const mockWorkflows: Workflow[] = [
  {
    id: '1',
    name: 'Auto-Schedule Screening',
    description: 'Automatically schedule screening interviews for qualified candidates',
    trigger: 'candidate_applied',
    conditions: [
      {
        field: 'score',
        operator: 'greater_than',
        value: 70,
      },
      {
        field: 'experienceYears',
        operator: 'greater_than',
        value: 3,
      },
    ],
    actions: [
      {
        type: 'schedule_interview',
        parameters: {
          type: 'screening',
          duration: 30,
          agentId: '1',
        },
      },
      {
        type: 'send_email',
        parameters: {
          template: 'interview_scheduled',
          to: 'candidate',
        },
      },
    ],
    isActive: true,
    createdAt: '2024-11-01T10:00:00Z',
    updatedAt: '2024-12-15T14:30:00Z',
    executionCount: 145,
    lastExecuted: '2024-12-20T11:00:00Z',
  },
  {
    id: '2',
    name: 'Follow-up on Pending Offers',
    description: 'Send follow-up emails to candidates with pending offers',
    trigger: 'time_based',
    conditions: [
      {
        field: 'daysSinceOffer',
        operator: 'equals',
        value: 3,
      },
    ],
    actions: [
      {
        type: 'send_email',
        parameters: {
          template: 'offer_follow_up',
          to: 'candidate',
        },
      },
      {
        type: 'add_note',
        parameters: {
          content: 'Follow-up email sent for pending offer',
        },
      },
    ],
    isActive: true,
    createdAt: '2024-11-15T09:00:00Z',
    updatedAt: '2024-12-10T11:20:00Z',
    executionCount: 23,
    lastExecuted: '2024-12-19T09:00:00Z',
  },
];

/**
 * Mock agents data
 */
export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Sarah AI',
    type: 'screening',
    voice: 'professional',
    language: 'en-US',
    personality: 'Friendly and professional recruiter with a focus on understanding candidate experience and cultural fit',
    skills: ['Technical Screening', 'Behavioral Assessment', 'Culture Fit'],
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      startTime: '09:00',
      endTime: '18:00',
      timezone: 'America/New_York',
    },
    interviewQuestions: [
      'Tell me about your experience with the technologies listed in the job description',
      'What interests you most about this position?',
      'Describe a challenging project you worked on recently',
    ],
    evaluationCriteria: [
      'Technical competence',
      'Communication skills',
      'Problem-solving ability',
      'Cultural fit',
    ],
    isActive: true,
    totalInterviews: 342,
    avgDuration: 28,
    avgScore: 82,
  },
  {
    id: '2',
    name: 'Michael AI',
    type: 'interview',
    voice: 'friendly',
    language: 'en-US',
    personality: 'Technical interviewer specializing in deep-dive technical assessments',
    skills: ['System Design', 'Coding Assessment', 'Technical Architecture'],
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      startTime: '10:00',
      endTime: '19:00',
      timezone: 'America/New_York',
    },
    isActive: true,
    totalInterviews: 156,
    avgDuration: 45,
    avgScore: 78,
  },
];

/**
 * Mock calendar events data
 */
export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Technical Interview - John Doe',
    type: 'interview',
    startTime: '2024-12-21T14:00:00Z',
    endTime: '2024-12-21T15:00:00Z',
    location: 'Virtual - Zoom',
    attendees: [
      {
        candidateId: '1',
        email: 'john.doe@email.com',
        name: 'John Doe',
      },
      {
        agentId: '2',
        email: 'agent@airecruiting.com',
        name: 'Michael AI',
      },
    ],
    positionId: '1',
    candidateId: '1',
    description: 'Technical interview for Senior Software Engineer position',
    status: 'scheduled',
    meetingUrl: 'https://zoom.us/j/123456789',
    reminders: [60, 15],
  },
  {
    id: '2',
    title: 'Team Sync - Recruitment Review',
    type: 'meeting',
    startTime: '2024-12-22T10:00:00Z',
    endTime: '2024-12-22T10:30:00Z',
    location: 'Conference Room A',
    attendees: [
      {
        userId: '1',
        email: 'admin@airecruiting.com',
        name: 'Admin User',
      },
    ],
    description: 'Weekly recruitment pipeline review',
    status: 'scheduled',
    reminders: [30],
  },
];

/**
 * Mock analytics metrics data
 */
export const mockAnalyticsMetrics: AnalyticsMetrics = {
  overview: {
    totalApplications: 1247,
    totalInterviews: 423,
    totalHires: 89,
    avgTimeToHire: 21.5,
    avgCostPerHire: 3250,
    offerAcceptanceRate: 78.5,
  },
  funnel: [
    { stage: 'Applied', count: 1247, conversionRate: 100 },
    { stage: 'Screened', count: 742, conversionRate: 59.5 },
    { stage: 'Interviewed', count: 423, conversionRate: 33.9 },
    { stage: 'Offered', count: 113, conversionRate: 9.1 },
    { stage: 'Hired', count: 89, conversionRate: 7.1 },
  ],
  sourceAnalysis: [
    {
      source: 'LinkedIn',
      applications: 423,
      interviews: 156,
      hires: 34,
      quality: 8.0,
    },
    {
      source: 'Company Website',
      applications: 312,
      interviews: 98,
      hires: 23,
      quality: 7.4,
    },
    {
      source: 'Indeed',
      applications: 267,
      interviews: 87,
      hires: 18,
      quality: 6.7,
    },
    {
      source: 'Referrals',
      applications: 145,
      interviews: 82,
      hires: 14,
      quality: 9.7,
    },
  ],
  timeMetrics: {
    applicationToScreening: 1.2,
    screeningToInterview: 3.5,
    interviewToOffer: 5.8,
    offerToAcceptance: 4.2,
  },
  demographicInsights: [
    {
      category: 'Experience Level',
      data: {
        'Entry Level': 23,
        'Mid Level': 45,
        'Senior Level': 28,
        'Executive': 4,
      },
    },
    {
      category: 'Education',
      data: {
        'High School': 12,
        'Bachelor': 58,
        'Master': 26,
        'PhD': 4,
      },
    },
  ],
  roi: {
    totalInvestment: 289500,
    totalSavings: 425000,
    netBenefit: 135500,
    roiPercentage: 46.8,
    costBreakdown: [
      { category: 'AI Platform', amount: 45000 },
      { category: 'Staff Time', amount: 125000 },
      { category: 'Job Postings', amount: 35000 },
      { category: 'Other Tools', amount: 84500 },
    ],
  },
};

/**
 * Mock reports data
 */
export const mockReports: Report[] = [
  {
    id: '1',
    candidateId: '1',
    positionId: '1',
    conversationId: '1',
    generatedAt: '2024-12-18T14:30:00Z',
    type: 'screening',
    overallScore: 85,
    sections: [
      {
        title: 'Technical Skills',
        score: 88,
        feedback: 'Strong technical background with relevant experience in required technologies',
        strengths: ['React expertise', 'Cloud architecture knowledge', 'Problem-solving skills'],
        improvements: ['Could benefit from more experience with microservices'],
      },
      {
        title: 'Communication',
        score: 82,
        feedback: 'Clear and articulate communication style',
        strengths: ['Explains technical concepts well', 'Active listener'],
        improvements: ['Could provide more concise responses'],
      },
    ],
    recommendation: 'yes',
    nextSteps: [
      'Schedule technical interview',
      'Send coding assessment',
      'Check references',
    ],
    aiNotes: 'Candidate shows strong potential for the role. Technical skills align well with requirements.',
  },
];

/**
 * Mock settings data
 */
export const mockSettings: Settings = {
  general: {
    companyName: 'AI Recruiting Platform',
    timezone: 'America/New_York',
    language: 'en-US',
    dateFormat: 'MM/DD/YYYY',
    currency: 'USD',
  },
  recruitment: {
    autoScreening: true,
    scoringThreshold: 70,
    interviewDuration: 30,
    reminderTiming: [60, 15],
    emailTemplates: [
      {
        type: 'interview_scheduled',
        subject: 'Your interview has been scheduled',
        body: 'Dear {{candidateName}}, Your interview for {{positionTitle}} has been scheduled...',
      },
    ],
  },
  integrations: {
    calendar: {
      provider: 'google',
      syncEnabled: true,
    },
    ats: {
      provider: 'greenhouse',
      syncEnabled: false,
    },
    communication: {
      email: true,
      sms: false,
      linkedin: true,
    },
  },
  notifications: {
    email: {
      newApplication: true,
      interviewScheduled: true,
      statusChange: true,
      weeklyReport: true,
    },
    inApp: {
      newApplication: true,
      interviewScheduled: true,
      statusChange: false,
    },
  },
  billing: {
    plan: 'professional',
    billingCycle: 'monthly',
    nextBillingDate: '2025-01-15',
    usage: {
      interviews: 423,
      candidates: 1247,
      agents: 2,
    },
    limits: {
      interviews: 1000,
      candidates: 5000,
      agents: 5,
    },
  },
};

/**
 * Mock messages data
 */
export const mockMessages: Message[] = [
  {
    id: '1',
    conversationId: '1',
    sender: 'agent',
    content: 'Hello John, thank you for your interest in the Senior Software Engineer position at TechCorp Solutions. I\'m Sarah from the recruitment team. How are you today?',
    timestamp: '2024-12-18T14:00:00Z',
    channel: 'platform',
  },
  {
    id: '2',
    conversationId: '1',
    sender: 'candidate',
    content: 'Hi Sarah! I\'m doing great, thank you. I\'m very excited about this opportunity.',
    timestamp: '2024-12-18T14:00:30Z',
    channel: 'platform',
  },
  {
    id: '3',
    conversationId: '1',
    sender: 'agent',
    content: 'Wonderful! Let\'s start with your background. Can you tell me about your experience with React and TypeScript?',
    timestamp: '2024-12-18T14:01:00Z',
    channel: 'platform',
  },
];

/**
 * Mock touchpoints data
 */
export const mockTouchpoints: Touchpoint[] = [
  {
    id: '1',
    candidateId: '1',
    type: 'application_received',
    timestamp: '2024-12-15T10:30:00Z',
    description: 'Application received for Senior Software Engineer position',
    nextAction: 'Initial screening',
  },
  {
    id: '2',
    candidateId: '1',
    type: 'screening_started',
    timestamp: '2024-12-18T14:00:00Z',
    description: 'AI screening interview started with Sarah AI',
    outcome: 'Completed successfully',
    nextAction: 'Technical interview',
  },
  {
    id: '3',
    candidateId: '1',
    type: 'interview_scheduled',
    timestamp: '2024-12-19T09:00:00Z',
    description: 'Technical interview scheduled for Dec 21, 2024',
    nextAction: 'Send reminder',
  },
];