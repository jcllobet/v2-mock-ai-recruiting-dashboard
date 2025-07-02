import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Save, Users, Palette, Plug, Building } from 'lucide-react';
import api from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../hooks/useToast';

function ClientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({});
  const [isDirty, setIsDirty] = useState(false);

  const { data: client, isLoading, error } = useQuery({
    queryKey: ['client', id],
    queryFn: () => api.get(`/api/account/clients/${id}`),
  });

  const { data: members = [] } = useQuery({
    queryKey: ['client-members', id],
    queryFn: () => api.get(`/api/account/clients/${id}/members/`),
    enabled: activeTab === 'members',
  });

  useEffect(() => {
    if (client) {
      setFormData({
        name: client.name || '',
        domain: client.domain || '',
        description: client.description || '',
        timezone: client.timezone || 'UTC',
        candidate_criteria: client.candidate_criteria || '',
        call_start_time: client.call_start_time || '09:00:00',
        call_end_time: client.call_end_time || '18:00:00',
        language_default: client.language_default || 'en-us',
        expand_position_description: client.expand_position_description || false,
        infer_position_criteria: client.infer_position_criteria || true,
        infer_position_skills: client.infer_position_skills || true,
        privacy_policy_url: client.privacy_policy_url || '',
      });
    }
  }, [client]);

  const updateMutation = useMutation({
    mutationFn: (data) => api.patch(`/api/account/clients/${id}`, data),
    onSuccess: () => {
      toast.success('Client updated successfully');
      setIsDirty(false);
      queryClient.invalidateQueries(['client', id]);
    },
    onError: () => {
      toast.error('Failed to update client');
    },
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    setIsDirty(true);
  };

  const handleSave = () => {
    updateMutation.mutate(formData);
  };

  if (isLoading) {
    return <LoadingSpinner text="Loading client details..." />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Failed to load client</h3>
        <p>{error.message || 'Client not found'}</p>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Domain</label>
              <input
                type="text"
                value={formData.domain}
                onChange={(e) => handleInputChange('domain', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
              />
            </div>
            
            <div className="form-group">
              <label>Timezone</label>
              <select
                value={formData.timezone}
                onChange={(e) => handleInputChange('timezone', e.target.value)}
              >
                <option value="UTC">UTC</option>
                <option value="EST">EST</option>
                <option value="CST">CST</option>
                <option value="MST">MST</option>
                <option value="PST">PST</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Candidate Criteria</label>
              <textarea
                value={formData.candidate_criteria}
                onChange={(e) => handleInputChange('candidate_criteria', e.target.value)}
                rows={6}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Call Start Time</label>
                <input
                  type="time"
                  value={formData.call_start_time}
                  onChange={(e) => handleInputChange('call_start_time', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Call End Time</label>
                <input
                  type="time"
                  value={formData.call_end_time}
                  onChange={(e) => handleInputChange('call_end_time', e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.infer_position_criteria}
                  onChange={(e) => handleInputChange('infer_position_criteria', e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                Automatically infer position criteria
              </label>
            </div>
            
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.infer_position_skills}
                  onChange={(e) => handleInputChange('infer_position_skills', e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                Automatically infer position skills
              </label>
            </div>
          </div>
        );
        
      case 'members':
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3>Team Members</h3>
              <button 
                className="button"
                onClick={() => navigate(`/clients/${id}/members`)}
              >
                Manage Members
              </button>
            </div>
            
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {members.length === 0 ? (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                      No team members yet
                    </td>
                  </tr>
                ) : (
                  members.map(member => (
                    <tr key={member.uuid}>
                      <td>{member.first_name} {member.last_name}</td>
                      <td>{member.email}</td>
                      <td>{member.role}</td>
                      <td>
                        <span className={`status-chip ${member.status === 'active' ? 'open' : 'draft'}`}>
                          {member.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        );
        
      case 'branding':
        return (
          <div>
            <h3>Branding & Customization</h3>
            <p style={{ color: 'var(--secondary-color)', marginBottom: '2rem' }}>
              Customize how your application page appears to candidates
            </p>
            
            <div className="form-group">
              <label>Logo URL</label>
              <input
                type="text"
                placeholder="https://example.com/logo.png"
                value={formData.logo_url || ''}
                onChange={(e) => handleInputChange('logo_url', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Custom CSS</label>
              <textarea
                placeholder="/* Add custom styles for your application page */"
                rows={10}
                style={{ fontFamily: 'monospace' }}
                value={formData.custom_css || ''}
                onChange={(e) => handleInputChange('custom_css', e.target.value)}
              />
            </div>
            
            <div style={{ 
              marginTop: '2rem', 
              padding: '2rem', 
              border: '1px solid #ddd', 
              borderRadius: 'var(--border-radius)',
              background: '#f9f9f9'
            }}>
              <h4>Preview</h4>
              <p>Application page preview will appear here</p>
            </div>
          </div>
        );
        
      case 'integrations':
        return (
          <div>
            <h3>Connected Integrations</h3>
            <div className="platforms">
              <div className="platform-card">
                <Building size={48} />
                <h3>LinkedIn</h3>
                <p>Post jobs directly to LinkedIn</p>
                <button className="button">Connect</button>
              </div>
              
              <div className="platform-card">
                <Building size={48} />
                <h3>Indeed</h3>
                <p>Sync with Indeed job postings</p>
                <button className="button">Connect</button>
              </div>
              
              <div className="platform-card">
                <Building size={48} />
                <h3>Greenhouse</h3>
                <p>Import candidates from Greenhouse</p>
                <button className="button secondary">Connected</button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>{client?.name}</h1>
        {isDirty && (
          <button className="button" onClick={handleSave} disabled={updateMutation.isLoading}>
            <Save size={20} style={{ marginRight: '0.5rem' }} />
            {updateMutation.isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        )}
      </div>
      
      <div className="tabs-container">
        <div className="tabs-list">
          <button 
            className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <Building size={16} style={{ marginRight: '0.5rem' }} />
            Profile
          </button>
          <button 
            className={`tab ${activeTab === 'members' ? 'active' : ''}`}
            onClick={() => setActiveTab('members')}
          >
            <Users size={16} style={{ marginRight: '0.5rem' }} />
            Members
          </button>
          <button 
            className={`tab ${activeTab === 'branding' ? 'active' : ''}`}
            onClick={() => setActiveTab('branding')}
          >
            <Palette size={16} style={{ marginRight: '0.5rem' }} />
            Branding
          </button>
          <button 
            className={`tab ${activeTab === 'integrations' ? 'active' : ''}`}
            onClick={() => setActiveTab('integrations')}
          >
            <Plug size={16} style={{ marginRight: '0.5rem' }} />
            Integrations
          </button>
        </div>
        
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default ClientDetail;