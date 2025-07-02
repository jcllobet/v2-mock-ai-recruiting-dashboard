import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Eye } from 'lucide-react';
import api from '../services/api';

function Clients() {
  const navigate = useNavigate();
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  const { data: clients = [], isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: () => api.get('/api/account/clients/'),
  });

  const handleAddClient = () => {
    navigate('/onboarding');
  };

  const handleViewClient = (clientId) => {
    navigate(`/clients/${clientId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="table-container">
        <div className="table-header">
          <h1>Clients</h1>
          <button className="button" onClick={handleAddClient}>
            <Plus size={20} style={{ marginRight: '0.5rem' }} />
            Add Client
          </button>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Domain</th>
              <th>Timezone</th>
              <th>Total Positions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.uuid}>
                <td>{client.name}</td>
                <td>{client.domain}</td>
                <td>{client.timezone || 'UTC'}</td>
                <td>{client.total_positions || 0}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      className="button"
                      style={{ padding: '0.25rem 0.5rem' }}
                      onClick={() => handleViewClient(client.uuid)}
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      className="button secondary"
                      style={{ padding: '0.25rem 0.5rem' }}
                      onClick={() => navigate(`/clients/${client.uuid}`)}
                    >
                      <Edit size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clients;