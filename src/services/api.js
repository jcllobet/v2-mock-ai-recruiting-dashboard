// Mock API service that simulates API calls using local JSON files

const API_BASE = '/mocks';

// Helper function to encode URL path for file names
const encodePathForFile = (path) => {
  // Remove leading slash and replace all slashes with underscores
  return path.replace(/^\//, '').replace(/\//g, '_').replace(/[{}:]/g, '');
};

// Helper function to generate random UUID
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Helper function to simulate network delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API client
export const api = {
  // GET request
  get: async (endpoint, params = {}) => {
    await delay();
    
    try {
      // Convert endpoint to file path
      const fileName = encodePathForFile(endpoint) + '.json';
      const response = await fetch(`${API_BASE}/${fileName}`);
      
      if (!response.ok) {
        // If file doesn't exist, return empty data based on endpoint
        if (response.status === 404) {
          return getDefaultResponse(endpoint);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.warn(`Failed to fetch ${endpoint}, returning default response:`, error);
      return getDefaultResponse(endpoint);
    }
  },

  // POST request
  post: async (endpoint, data) => {
    await delay();
    
    // Simulate successful creation
    return {
      ...data,
      uuid: generateUUID(),
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
    };
  },

  // PATCH request
  patch: async (endpoint, data) => {
    await delay();
    
    // Simulate successful update
    return {
      ...data,
      updated: new Date().toISOString(),
    };
  },

  // DELETE request
  delete: async (endpoint) => {
    await delay();
    
    // Simulate successful deletion
    return { success: true };
  },
};

// Default responses for different endpoints
function getDefaultResponse(endpoint) {
  // Extract resource type from endpoint
  if (endpoint.includes('/clients')) {
    if (endpoint.endsWith('/clients/')) {
      return generateMockClients();
    }
    return generateMockClient();
  }
  
  if (endpoint.includes('/positions')) {
    if (endpoint.endsWith('/positions')) {
      return generateMockPositions();
    }
    return generateMockPosition();
  }
  
  if (endpoint.includes('/candidates')) {
    if (endpoint.endsWith('/candidates')) {
      return generateMockCandidates();
    }
    return generateMockCandidate();
  }
  
  if (endpoint.includes('/kpis')) {
    return generateMockKPIs();
  }
  
  if (endpoint.includes('/stats')) {
    return generateMockStats();
  }
  
  if (endpoint.includes('/conversations')) {
    return generateMockConversations();
  }
  
  if (endpoint.includes('/agents')) {
    if (endpoint.endsWith('/agents')) {
      return generateMockAgents();
    }
    return generateMockAgent();
  }
  
  if (endpoint.includes('/workflows')) {
    return generateMockWorkflows();
  }
  
  if (endpoint.includes('/knowledge')) {
    return generateMockKnowledgeBases();
  }
  
  if (endpoint.includes('/integrations')) {
    return generateMockIntegrations();
  }
  
  if (endpoint.includes('/applications')) {
    if (endpoint.includes('/application-statuses')) {
      return generateMockApplicationStatuses();
    }
    return generateMockApplication();
  }
  
  if (endpoint.includes('/members')) {
    return generateMockMembers();
  }
  
  // Default empty array
  return [];
}

// Mock data generators
function generateMockClients() {
  return [
    {
      uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      code: 'TECH001',
      domain: 'techcorp.com',
      name: 'TechCorp Solutions',
      description: 'Leading technology solutions provider',
      total_positions: 12,
      timezone: 'UTC',
    },
    {
      uuid: '4fb96f75-6828-4673-c4gd-3d074g77bgb7',
      code: 'FIN002',
      domain: 'financehub.com',
      name: 'Finance Hub Inc',
      description: 'Financial services and consulting',
      total_positions: 8,
      timezone: 'EST',
    },
  ];
}

function generateMockClient() {
  return {
    uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    code: 'TECH001',
    domain: 'techcorp.com',
    name: 'TechCorp Solutions',
    candidate_criteria: 'Strong technical background, 5+ years experience',
    description: 'Leading technology solutions provider specializing in cloud infrastructure',
    timezone: 'UTC',
    call_start_time: '09:30:00',
    call_end_time: '18:30:00',
    language_default: 'en-us',
    expand_position_description: false,
    infer_position_criteria: true,
    infer_position_skills: true,
    privacy_policy_url: 'https://techcorp.com/privacy',
    created: '2024-01-15T08:28:02.592Z',
    updated: '2024-12-20T08:28:02.592Z',
  };
}

function generateMockPositions() {
  return [
    {
      uuid: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
      name: 'Senior Software Engineer',
      status: 'open',
      description: 'Looking for experienced software engineer',
      client_name: 'TechCorp Solutions',
      attribute_type: 'technical',
      applications_count: 45,
      created: '2024-12-01T10:00:00.000Z',
    },
    {
      uuid: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
      name: 'Product Manager',
      status: 'open',
      description: 'Seeking experienced product manager',
      client_name: 'TechCorp Solutions',
      attribute_type: 'management',
      applications_count: 32,
      created: '2024-12-05T10:00:00.000Z',
    },
    {
      uuid: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
      name: 'UX Designer',
      status: 'draft',
      description: 'Draft position for UX designer role',
      client_name: 'Finance Hub Inc',
      attribute_type: 'design',
      applications_count: 0,
      created: '2024-12-10T10:00:00.000Z',
    },
  ];
}

function generateMockPosition() {
  return {
    uuid: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    name: 'Senior Software Engineer',
    status: 'open',
    description: `We are looking for a Senior Software Engineer to join our growing team.
    
Key Responsibilities:
- Design and develop scalable software solutions
- Lead technical initiatives and mentor junior developers
- Collaborate with cross-functional teams
- Review code and ensure quality standards

Requirements:
- 5+ years of software development experience
- Strong knowledge of modern web technologies
- Experience with cloud platforms (AWS/GCP/Azure)
- Excellent problem-solving skills`,
    client_uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    client_name: 'TechCorp Solutions',
    criteria: {
      experience_years: 5,
      required_skills: ['JavaScript', 'React', 'Node.js', 'AWS'],
      nice_to_have: ['Python', 'Docker', 'Kubernetes'],
    },
    created: '2024-12-01T10:00:00.000Z',
    updated: '2024-12-15T14:30:00.000Z',
  };
}

function generateMockCandidates() {
  return [
    {
      uuid: 'cand-001',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1-555-0123',
      current_position: 'Software Engineer',
      current_company: 'StartupXYZ',
      experience_years: 6,
      status: 'active',
      applications: [
        {
          uuid: 'app-001',
          position_name: 'Senior Software Engineer',
          status: 'screening',
          applied_at: '2024-12-10T10:00:00.000Z',
        },
      ],
    },
    {
      uuid: 'cand-002',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+1-555-0124',
      current_position: 'Senior Developer',
      current_company: 'BigTech Inc',
      experience_years: 8,
      status: 'active',
      applications: [
        {
          uuid: 'app-002',
          position_name: 'Senior Software Engineer',
          status: 'interview',
          applied_at: '2024-12-08T10:00:00.000Z',
        },
      ],
    },
  ];
}

function generateMockCandidate() {
  return {
    uuid: 'cand-001',
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1-555-0123',
    current_position: 'Software Engineer',
    current_company: 'StartupXYZ',
    experience_years: 6,
    status: 'active',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'State University',
        year: 2016,
      },
    ],
    work_experience: [
      {
        position: 'Software Engineer',
        company: 'StartupXYZ',
        duration: '2020 - Present',
        description: 'Full-stack development using React and Node.js',
      },
      {
        position: 'Junior Developer',
        company: 'Tech Solutions Ltd',
        duration: '2017 - 2020',
        description: 'Web development and maintenance',
      },
    ],
    resume_url: '/mocks/resume_john_doe.pdf',
    linkedin_url: 'https://linkedin.com/in/johndoe',
    created: '2024-12-01T10:00:00.000Z',
  };
}

function generateMockKPIs() {
  return {
    active_positions: 15,
    total_applications: 342,
    interviews_scheduled: 48,
    offers_extended: 12,
    hires_completed: 8,
    avg_time_to_hire: 28,
    conversation_hours: [
      { date: '2024-12-01', hours: 12.5 },
      { date: '2024-12-02', hours: 15.2 },
      { date: '2024-12-03', hours: 18.7 },
      { date: '2024-12-04', hours: 14.3 },
      { date: '2024-12-05', hours: 16.8 },
      { date: '2024-12-06', hours: 11.2 },
      { date: '2024-12-07', hours: 9.5 },
    ],
    funnel_data: {
      applied: 342,
      screened: 256,
      interviewed: 89,
      offered: 23,
      hired: 8,
    },
  };
}

function generateMockStats() {
  return {
    period: 'last_30_days',
    metrics: {
      total_conversations: 1247,
      avg_conversation_duration: '8:32',
      candidate_satisfaction: 4.6,
      response_time_avg: '2.3 hours',
    },
  };
}

function generateMockConversations() {
  return [
    {
      uuid: 'conv-001',
      candidate_name: 'John Doe',
      candidate_uuid: 'cand-001',
      position_name: 'Senior Software Engineer',
      last_message: 'Thank you for the information about the role',
      last_message_time: '2024-12-20T14:30:00.000Z',
      unread_count: 2,
      status: 'active',
    },
    {
      uuid: 'conv-002',
      candidate_name: 'Jane Smith',
      candidate_uuid: 'cand-002',
      position_name: 'Senior Software Engineer',
      last_message: 'I am available for the interview next week',
      last_message_time: '2024-12-20T13:15:00.000Z',
      unread_count: 0,
      status: 'active',
    },
  ];
}

function generateMockAgents() {
  return [
    {
      uuid: 'agent-001',
      name: 'Technical Recruiter AI',
      type: 'screening',
      status: 'active',
      description: 'Specialized in technical screening and initial assessments',
      total_conversations: 542,
      success_rate: 0.78,
    },
    {
      uuid: 'agent-002',
      name: 'Interview Scheduler',
      type: 'scheduling',
      status: 'active',
      description: 'Handles interview scheduling and coordination',
      total_conversations: 389,
      success_rate: 0.92,
    },
  ];
}

function generateMockAgent() {
  return {
    uuid: 'agent-001',
    name: 'Technical Recruiter AI',
    type: 'screening',
    status: 'active',
    description: 'Specialized in technical screening and initial assessments',
    voice_config: {
      language: 'en-US',
      voice_type: 'professional',
      speed: 1.0,
    },
    knowledge_bases: ['technical-skills', 'company-culture'],
    tools: ['calendar-integration', 'email-sender', 'assessment-runner'],
    phone_number: '+1-555-0100',
    total_conversations: 542,
    success_rate: 0.78,
    avg_conversation_duration: '12:45',
    created: '2024-11-01T10:00:00.000Z',
  };
}

function generateMockWorkflows() {
  return [
    {
      uuid: 'wf-001',
      name: 'Technical Screening Workflow',
      type: 'screening',
      status: 'active',
      steps: [
        { id: '1', name: 'Initial Contact', type: 'email' },
        { id: '2', name: 'Phone Screening', type: 'call' },
        { id: '3', name: 'Technical Assessment', type: 'assessment' },
        { id: '4', name: 'Results Review', type: 'review' },
      ],
    },
  ];
}

function generateMockKnowledgeBases() {
  return [
    {
      uuid: 'kb-001',
      name: 'Company Culture & Values',
      type: 'general',
      status: 'active',
      documents_count: 15,
      last_updated: '2024-12-15T10:00:00.000Z',
    },
    {
      uuid: 'kb-002',
      name: 'Technical Skills Database',
      type: 'technical',
      status: 'active',
      documents_count: 42,
      last_updated: '2024-12-18T10:00:00.000Z',
    },
  ];
}

function generateMockIntegrations() {
  return [
    {
      uuid: 'int-001',
      name: 'LinkedIn',
      type: 'job_board',
      status: 'connected',
      icon: 'linkedin',
      last_sync: '2024-12-20T10:00:00.000Z',
    },
    {
      uuid: 'int-002',
      name: 'Indeed',
      type: 'job_board',
      status: 'disconnected',
      icon: 'indeed',
      last_sync: null,
    },
    {
      uuid: 'int-003',
      name: 'Greenhouse',
      type: 'ats',
      status: 'connected',
      icon: 'greenhouse',
      last_sync: '2024-12-20T12:00:00.000Z',
    },
  ];
}

function generateMockApplication() {
  return {
    uuid: 'app-001',
    candidate: {
      uuid: 'cand-001',
      name: 'John Doe',
      email: 'john.doe@email.com',
    },
    position: {
      uuid: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
      name: 'Senior Software Engineer',
    },
    status: 'screening',
    scores: {
      technical_skills: 85,
      experience: 78,
      cultural_fit: 92,
      overall: 85,
    },
    assessment_results: [
      {
        name: 'JavaScript Assessment',
        score: 88,
        completed_at: '2024-12-10T14:00:00.000Z',
      },
      {
        name: 'System Design',
        score: 82,
        completed_at: '2024-12-11T10:00:00.000Z',
      },
    ],
    documents: [
      {
        name: 'Resume',
        type: 'resume',
        url: '/mocks/resume_john_doe.pdf',
      },
      {
        name: 'Cover Letter',
        type: 'cover_letter',
        url: '/mocks/cover_letter_john_doe.pdf',
      },
    ],
    applied_at: '2024-12-10T10:00:00.000Z',
    last_updated: '2024-12-15T16:30:00.000Z',
  };
}

function generateMockApplicationStatuses() {
  return [
    { id: 'new', name: 'New', order: 1 },
    { id: 'screening', name: 'Screening', order: 2 },
    { id: 'interview', name: 'Interview', order: 3 },
    { id: 'assessment', name: 'Assessment', order: 4 },
    { id: 'offer', name: 'Offer', order: 5 },
    { id: 'hired', name: 'Hired', order: 6 },
    { id: 'rejected', name: 'Rejected', order: 7 },
  ];
}

function generateMockMembers() {
  return [
    {
      uuid: 'member-001',
      email: 'admin@techcorp.com',
      first_name: 'Admin',
      last_name: 'User',
      role: 'admin',
      status: 'active',
      created: '2024-01-15T10:00:00.000Z',
    },
    {
      uuid: 'member-002',
      email: 'recruiter@techcorp.com',
      first_name: 'Sarah',
      last_name: 'Johnson',
      role: 'recruiter',
      status: 'active',
      created: '2024-02-20T10:00:00.000Z',
    },
  ];
}

// WebSocket simulation for conversations
export const createMockWebSocket = (conversationId) => {
  const mockMessages = [
    'Hi, I am interested in learning more about the position.',
    'Can you tell me about the team structure?',
    'What technologies do you use?',
    'The role sounds very interesting!',
    'I have experience with all the required skills.',
  ];

  return {
    send: (message) => {
      console.log('Mock WebSocket sending:', message);
    },
    close: () => {
      console.log('Mock WebSocket closed');
    },
    // Simulate receiving messages
    simulateMessage: (onMessage) => {
      const interval = setInterval(() => {
        const randomMessage = mockMessages[Math.floor(Math.random() * mockMessages.length)];
        onMessage({
          data: JSON.stringify({
            type: 'message',
            content: randomMessage,
            sender: 'candidate',
            timestamp: new Date().toISOString(),
          }),
        });
      }, 10000); // Every 10 seconds
      
      return () => clearInterval(interval);
    },
  };
};

export default api;