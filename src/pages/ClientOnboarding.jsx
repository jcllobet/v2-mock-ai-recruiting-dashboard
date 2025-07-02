import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import api from '../services/api';

const steps = [
  { id: 1, name: 'Company', label: 'Company Info' },
  { id: 2, name: 'Criteria', label: 'Hiring Criteria' },
  { id: 3, name: 'Branding', label: 'Branding' },
  { id: 4, name: 'Users', label: 'Users' },
  { id: 5, name: 'Summary', label: 'Summary' },
];

function ClientOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Info
    name: '',
    domain: '',
    timezone: 'UTC',
    description: '',
    // Hiring Criteria
    candidate_criteria: '',
    // Branding
    logo: '',
    apply_page_css: '',
    apply_page_js: '',
    // Users
    users: [],
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.name || !formData.domain) {
          alert('Please fill in all required fields');
          return false;
        }
        return true;
      case 2:
        if (!formData.candidate_criteria) {
          alert('Please specify your candidate criteria');
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep() && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const newClient = await api.post('/api/account/clients/', {
        name: formData.name,
        domain: formData.domain,
        timezone: formData.timezone,
        description: formData.description,
        candidate_criteria: formData.candidate_criteria,
        code: formData.name.toUpperCase().slice(0, 3) + '001',
      });
      
      navigate(`/clients/${newClient.uuid}`);
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Company Information</h2>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter company name"
              />
            </div>
            <div className="form-group">
              <label>Domain</label>
              <input
                type="text"
                value={formData.domain}
                onChange={(e) => handleInputChange('domain', e.target.value)}
                placeholder="example.com"
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
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Brief description of your company"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div>
            <h2>Hiring Criteria</h2>
            <div className="form-group">
              <label>Candidate Criteria</label>
              <textarea
                value={formData.candidate_criteria}
                onChange={(e) => handleInputChange('candidate_criteria', e.target.value)}
                placeholder="Describe your ideal candidate criteria..."
                rows={10}
              />
            </div>
            <button 
              className="button secondary"
              onClick={() => console.log('Check criteria compliance')}
            >
              Check Criteria Compliance
            </button>
          </div>
        );
      
      case 3:
        return (
          <div>
            <h2>Branding</h2>
            <div className="form-group">
              <label>Logo URL</label>
              <input
                type="text"
                value={formData.logo}
                onChange={(e) => handleInputChange('logo', e.target.value)}
                placeholder="https://example.com/logo.png"
              />
            </div>
            <div className="form-group">
              <label>Custom CSS for Apply Page</label>
              <textarea
                value={formData.apply_page_css}
                onChange={(e) => handleInputChange('apply_page_css', e.target.value)}
                placeholder="/* Custom CSS styles */"
                rows={5}
              />
            </div>
            <div className="form-group">
              <label>Custom JavaScript for Apply Page</label>
              <textarea
                value={formData.apply_page_js}
                onChange={(e) => handleInputChange('apply_page_js', e.target.value)}
                placeholder="// Custom JavaScript code"
                rows={5}
              />
            </div>
            <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: 'var(--border-radius)' }}>
              <p>Preview will appear here</p>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div>
            <h2>Invite Users</h2>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="user@example.com"
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select>
                <option value="admin">Admin</option>
                <option value="recruiter">Recruiter</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
            <button className="button">Add User</button>
            
            <div style={{ marginTop: '2rem' }}>
              <h3>Invited Users</h3>
              <p>No users invited yet</p>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div>
            <h2>Summary</h2>
            <div style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: 'var(--border-radius)' }}>
              <h3>Company Information</h3>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Domain:</strong> {formData.domain}</p>
              <p><strong>Timezone:</strong> {formData.timezone}</p>
              <p><strong>Description:</strong> {formData.description}</p>
              
              <h3 style={{ marginTop: '1rem' }}>Hiring Criteria</h3>
              <p>{formData.candidate_criteria || 'Not specified'}</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Stepper */}
      <div className="stepper">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={`step ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
          >
            <div className="step-indicator">
              {currentStep > step.id ? <Check size={20} /> : step.id}
            </div>
            <div className="step-label">{step.label}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
        {renderStepContent()}
        
        {/* Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <button 
            className="button secondary" 
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </button>
          
          {currentStep < steps.length ? (
            <button className="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className="button" onClick={handleSubmit}>
              Create Client
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientOnboarding;