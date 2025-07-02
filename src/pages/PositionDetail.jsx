import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Save, Wand2 } from 'lucide-react';
import api from '../services/api';

function PositionDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('draft');
  const [description, setDescription] = useState('');
  const [criteria, setCriteria] = useState('');

  const { data: position, isLoading } = useQuery({
    queryKey: ['position', id],
    queryFn: () => api.get(`/api/positions/${id}`),
  });

  const { data: applications = [] } = useQuery({
    queryKey: ['position-applications', id],
    queryFn: () => api.get(`/api/positions/${id}/applications`),
    enabled: activeTab === 'applications',
  });

  useEffect(() => {
    if (position) {
      setTitle(position.name || '');
      setStatus(position.status || 'draft');
      setDescription(position.description || '');
      setCriteria(JSON.stringify(position.criteria || {}, null, 2));
    }
  }, [position]);

  const updateMutation = useMutation({
    mutationFn: (data) => api.patch(`/api/positions/${id}`, data),
  });

  const handleSave = () => {
    updateMutation.mutate({
      name: title,
      status,
      description,
      criteria: criteria,
    });
  };

  const handleInferCriteria = async () => {
    // Simulate inference
    const inferredCriteria = {
      experience_years: 5,
      required_skills: ['JavaScript', 'React', 'Node.js'],
      nice_to_have: ['TypeScript', 'GraphQL'],
      education: "Bachelor's degree in Computer Science or related field",
    };
    setCriteria(JSON.stringify(inferredCriteria, null, 2));
  };

  const handleEnhanceDescription = async () => {
    // Simulate enhancement
    const enhanced = description + '\n\nWhat We Offer:\n- Competitive salary and benefits\n- Remote work options\n- Professional development opportunities\n- Collaborative team environment';
    setDescription(enhanced);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
      {/* Main Content */}
      <div>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              border: 'none',
              borderBottom: '2px solid transparent',
              padding: '0.5rem 0',
              flex: 1,
              background: 'transparent'
            }}
            onFocus={(e) => e.target.style.borderBottomColor = 'var(--primary-color)'}
            onBlur={(e) => e.target.style.borderBottomColor = 'transparent'}
          />
          
          <select
            className="select-trigger"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
          
          <button className="button" onClick={handleSave}>
            <Save size={20} style={{ marginRight: '0.5rem' }} />
            Save
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs-list">
            <button 
              className={`tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              Applications ({applications.length})
            </button>
            <button 
              className={`tab ${activeTab === 'integrations' ? 'active' : ''}`}
              onClick={() => setActiveTab('integrations')}
            >
              Integrations
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <button 
                    className="button secondary"
                    onClick={handleEnhanceDescription}
                  >
                    <Wand2 size={16} style={{ marginRight: '0.5rem' }} />
                    Enhance Description
                  </button>
                </div>
                
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, 3, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      ['link'],
                      ['clean']
                    ],
                  }}
                  style={{ height: '400px', marginBottom: '50px' }}
                />
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Candidate</th>
                      <th>Status</th>
                      <th>Applied</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.length === 0 && (
                      <tr>
                        <td colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                          No applications yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <p>No integrations configured for this position.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem', 
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--box-shadow)'
        }}>
          <h3>Criteria</h3>
          <button 
            className="button secondary" 
            style={{ width: '100%', marginBottom: '1rem' }}
            onClick={handleInferCriteria}
          >
            <Wand2 size={16} style={{ marginRight: '0.5rem' }} />
            Infer from Description
          </button>
          
          <textarea
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            style={{ 
              width: '100%', 
              minHeight: '300px',
              fontFamily: 'monospace',
              fontSize: '0.875rem'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PositionDetail;