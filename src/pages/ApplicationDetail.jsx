import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { 
  RefreshCw, 
  FileText, 
  MessageSquare,
  Calendar,
  Award,
  Target,
  Briefcase,
  Users
} from 'lucide-react';
import api from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../hooks/useToast';

function ScoreGauge({ label, score, icon: Icon }) {
  const percentage = score || 0;
  const radius = 60;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  const getColor = () => {
    if (percentage >= 80) return 'var(--success-color)';
    if (percentage >= 60) return 'var(--warning-color)';
    return 'var(--danger-color)';
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', width: radius * 2, height: radius * 2, margin: '0 auto' }}>
        <svg width={radius * 2} height={radius * 2}>
          <circle
            stroke="#e0e0e0"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={getColor()}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease' }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        </svg>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}>
          {percentage}%
        </div>
      </div>
      <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <Icon size={16} />
        <span style={{ fontSize: '0.875rem', color: 'var(--secondary-color)' }}>{label}</span>
      </div>
    </div>
  );
}

function ApplicationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [isRescoring, setIsRescoring] = useState(false);

  const { data: application, isLoading, error, refetch } = useQuery({
    queryKey: ['application', id],
    queryFn: () => api.get(`/api/applications/${id}`),
  });

  const rescoreMutation = useMutation({
    mutationFn: () => api.post(`/api/applications/${id}/rescore`),
    onSuccess: (data) => {
      toast.success('Application rescored successfully');
      setIsRescoring(false);
      refetch();
    },
    onError: () => {
      toast.error('Failed to rescore application');
      setIsRescoring(false);
    },
  });

  const handleRescore = () => {
    setIsRescoring(true);
    rescoreMutation.mutate();
  };

  if (isLoading) {
    return <LoadingSpinner text="Loading application details..." />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Failed to load application</h3>
        <p>{error.message || 'Application not found'}</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem' 
      }}>
        <div>
          <h1>{application?.candidate?.name}</h1>
          <p style={{ color: 'var(--secondary-color)', margin: 0 }}>
            Application for {application?.position?.name}
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            className="button"
            onClick={handleRescore}
            disabled={isRescoring}
          >
            <RefreshCw size={20} style={{ marginRight: '0.5rem' }} className={isRescoring ? 'loading-spinner' : ''} />
            {isRescoring ? 'Rescoring...' : 'Rescore'}
          </button>
          
          <button 
            className="button secondary"
            onClick={() => navigate(`/candidates/${application?.candidate?.uuid}`)}
          >
            View Candidate
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '2rem' }}>
        {/* Scores Section */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
          <h3>Assessment Scores</h3>
          
          <div style={{ marginBottom: '2rem' }}>
            <ScoreGauge 
              label="Overall Score" 
              score={application?.scores?.overall} 
              icon={Award}
            />
          </div>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <ScoreGauge 
              label="Technical Skills" 
              score={application?.scores?.technical_skills} 
              icon={Target}
            />
            <ScoreGauge 
              label="Experience" 
              score={application?.scores?.experience} 
              icon={Briefcase}
            />
            <ScoreGauge 
              label="Cultural Fit" 
              score={application?.scores?.cultural_fit} 
              icon={Users}
            />
          </div>
        </div>

        {/* Q&A Section */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
          <h3>Assessment Results</h3>
          
          {application?.assessment_results?.map((assessment, index) => (
            <div key={index} style={{ 
              marginBottom: '1.5rem', 
              padding: '1rem', 
              background: 'var(--light-color)',
              borderRadius: 'var(--border-radius)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0 }}>{assessment.name}</h4>
                <span style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold',
                  color: assessment.score >= 80 ? 'var(--success-color)' : 'var(--warning-color)'
                }}>
                  {assessment.score}%
                </span>
              </div>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
                Completed {new Date(assessment.completed_at).toLocaleDateString()}
              </p>
            </div>
          ))}
          
          <div style={{ marginTop: '2rem' }}>
            <h4>Application Timeline</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Calendar size={16} />
              <span>Applied: {new Date(application?.applied_at).toLocaleDateString()}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RefreshCw size={16} />
              <span>Last Updated: {new Date(application?.last_updated).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h4>Current Status</h4>
            <span className={`status-chip ${application?.status === 'interview' ? 'open' : 'draft'}`}>
              {application?.status}
            </span>
          </div>
        </div>

        {/* Documents Section */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
          <h3>Documents</h3>
          
          {application?.documents?.map((doc, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              padding: '0.75rem',
              marginBottom: '0.75rem',
              background: 'var(--light-color)',
              borderRadius: 'var(--border-radius)',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}>
              <FileText size={20} color="var(--primary-color)" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>{doc.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--secondary-color)' }}>
                  {doc.type.replace('_', ' ').charAt(0).toUpperCase() + doc.type.slice(1).replace('_', ' ')}
                </div>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: '2rem' }}>
            <button 
              className="button" 
              style={{ width: '100%' }}
              onClick={() => navigate('/conversations')}
            >
              <MessageSquare size={16} style={{ marginRight: '0.5rem' }} />
              Message Candidate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetail;