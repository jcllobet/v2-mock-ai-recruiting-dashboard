import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { 
  Calendar, 
  Mail, 
  Phone, 
  Briefcase, 
  Building, 
  FileText, 
  Clock,
  CheckCircle,
  MessageSquare,
  Star,
  Download
} from 'lucide-react';
import api from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

function CandidateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const { data: candidate, isLoading, error } = useQuery({
    queryKey: ['candidate', id],
    queryFn: () => api.get(`/api/candidates/${id}`),
  });

  const { data: timeline = [] } = useQuery({
    queryKey: ['candidate-timeline', id],
    queryFn: () => api.get(`/api/candidates/${id}/timeline`),
    select: (data) => data || [
      {
        id: '1',
        type: 'application',
        title: 'Applied for Senior Software Engineer',
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        icon: FileText,
      },
      {
        id: '2',
        type: 'screening',
        title: 'Completed phone screening',
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        icon: Phone,
      },
      {
        id: '3',
        type: 'assessment',
        title: 'Technical assessment completed',
        score: '88%',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        icon: CheckCircle,
      },
      {
        id: '4',
        type: 'interview',
        title: 'Technical interview scheduled',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        icon: Calendar,
      },
    ],
  });

  if (isLoading) {
    return <LoadingSpinner text="Loading candidate details..." />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Failed to load candidate</h3>
        <p>{error.message || 'Candidate not found'}</p>
      </div>
    );
  }

  const renderOverview = () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      <div>
        <h3>Contact Information</h3>
        <div className="form-group">
          <label>Email</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={16} />
            <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
          </div>
        </div>
        
        <div className="form-group">
          <label>Phone</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={16} />
            <a href={`tel:${candidate.phone}`}>{candidate.phone}</a>
          </div>
        </div>
        
        <div className="form-group">
          <label>LinkedIn</label>
          <a href={candidate.linkedin_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      </div>
      
      <div>
        <h3>Current Position</h3>
        <div className="form-group">
          <label>Role</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Briefcase size={16} />
            {candidate.current_position}
          </div>
        </div>
        
        <div className="form-group">
          <label>Company</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Building size={16} />
            {candidate.current_company}
          </div>
        </div>
        
        <div className="form-group">
          <label>Experience</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} />
            {candidate.experience_years} years
          </div>
        </div>
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div style={{ maxWidth: '800px' }}>
      <h3>Activity Timeline</h3>
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div style={{
          position: 'absolute',
          left: '0.75rem',
          top: '2rem',
          bottom: '2rem',
          width: '2px',
          backgroundColor: '#e5e5e5',
        }} />
        
        {timeline.map((event, index) => {
          const Icon = event.icon;
          return (
            <div key={event.id} style={{ position: 'relative', marginBottom: '2rem' }}>
              <div style={{
                position: 'absolute',
                left: '-1.75rem',
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'white',
                border: '2px solid var(--primary-color)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={16} color="var(--primary-color)" />
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--box-shadow)',
              }}>
                <h4 style={{ margin: '0 0 0.5rem' }}>{event.title}</h4>
                {event.score && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Star size={16} color="var(--warning-color)" />
                    <span>Score: {event.score}</span>
                  </div>
                )}
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
                  {new Date(event.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div>
      <h3>Documents</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--box-shadow)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FileText size={24} color="var(--primary-color)" />
            <div>
              <h4 style={{ margin: 0 }}>Resume</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
                Updated {new Date(candidate.created).toLocaleDateString()}
              </p>
            </div>
          </div>
          <button className="button">
            <Download size={16} style={{ marginRight: '0.5rem' }} />
            Download
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--box-shadow)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FileText size={24} color="var(--primary-color)" />
            <div>
              <h4 style={{ margin: 0 }}>Cover Letter</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
                For Senior Software Engineer position
              </p>
            </div>
          </div>
          <button className="button">
            <Download size={16} style={{ marginRight: '0.5rem' }} />
            Download
          </button>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div>
      <h3>Skills & Experience</h3>
      
      <div className="form-group">
        <label>Technical Skills</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {candidate.skills?.map((skill) => (
            <span key={skill} className="status-chip open">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="form-group">
        <label>Education</label>
        {candidate.education?.map((edu, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h4 style={{ margin: '0 0 0.25rem' }}>{edu.degree}</h4>
            <p style={{ margin: 0, color: 'var(--secondary-color)' }}>
              {edu.institution} • {edu.year}
            </p>
          </div>
        ))}
      </div>
      
      <div className="form-group">
        <label>Work Experience</label>
        {candidate.work_experience?.map((exp, index) => (
          <div key={index} style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ margin: '0 0 0.25rem' }}>{exp.position}</h4>
            <p style={{ margin: '0 0 0.5rem', color: 'var(--secondary-color)' }}>
              {exp.company} • {exp.duration}
            </p>
            <p style={{ margin: 0 }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem' 
      }}>
        <div>
          <h1>{candidate?.name}</h1>
          <p style={{ color: 'var(--secondary-color)', margin: 0 }}>
            {candidate?.current_position} at {candidate?.current_company}
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            className="button"
            onClick={() => navigate('/conversations')}
          >
            <MessageSquare size={20} style={{ marginRight: '0.5rem' }} />
            Message
          </button>
          
          {candidate?.applications?.map((app) => (
            <button 
              key={app.uuid}
              className="button secondary"
              onClick={() => navigate(`/applications/${app.uuid}`)}
            >
              View Application
            </button>
          ))}
        </div>
      </div>
      
      <div className="tabs-container">
        <div className="tabs-list">
          <button 
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => setActiveTab('timeline')}
          >
            Timeline
          </button>
          <button 
            className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills & Experience
          </button>
          <button 
            className={`tab ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            Documents
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'timeline' && renderTimeline()}
          {activeTab === 'skills' && renderSkills()}
          {activeTab === 'documents' && renderDocuments()}
        </div>
      </div>
    </div>
  );
}

export default CandidateDetail;