import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';
import api from '../services/api';

function Positions() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState([]);
  const [attributeFilter, setAttributeFilter] = useState('');

  const { data: positions = [], isLoading } = useQuery({
    queryKey: ['positions'],
    queryFn: () => api.get('/api/positions'),
  });

  const filteredPositions = positions.filter(position => {
    const matchesSearch = position.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         position.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter.length === 0 || statusFilter.includes(position.status);
    const matchesAttribute = !attributeFilter || position.attribute_type === attributeFilter;
    
    return matchesSearch && matchesStatus && matchesAttribute;
  });

  const handleStatusToggle = (status) => {
    setStatusFilter(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="table-container">
        <div className="table-header">
          <h1>Positions</h1>
          <button className="button" onClick={() => navigate('/positions/new')}>
            <Plus size={20} style={{ marginRight: '0.5rem' }} />
            Create Position
          </button>
        </div>
        
        {/* Filters */}
        <div style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <div className="navbar-search" style={{ margin: 0 }}>
              <Search size={20} />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              className={`status-chip ${statusFilter.includes('draft') ? 'draft' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleStatusToggle('draft')}
            >
              Draft
            </button>
            <button
              className={`status-chip ${statusFilter.includes('open') ? 'open' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleStatusToggle('open')}
            >
              Open
            </button>
            <button
              className={`status-chip ${statusFilter.includes('closed') ? 'closed' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleStatusToggle('closed')}
            >
              Closed
            </button>
          </div>
          
          <select
            className="select-trigger"
            value={attributeFilter}
            onChange={(e) => setAttributeFilter(e.target.value)}
            style={{ minWidth: '150px' }}
          >
            <option value="">All Types</option>
            <option value="technical">Technical</option>
            <option value="management">Management</option>
            <option value="design">Design</option>
            <option value="sales">Sales</option>
          </select>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Client</th>
              <th>Status</th>
              <th>Applications</th>
              <th>Type</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {filteredPositions.map((position) => (
              <tr 
                key={position.uuid}
                onClick={() => navigate(`/positions/${position.uuid}`)}
                style={{ cursor: 'pointer' }}
              >
                <td>{position.name}</td>
                <td>{position.client_name}</td>
                <td>
                  <span className={`status-chip ${position.status}`}>
                    {position.status}
                  </span>
                </td>
                <td>{position.applications_count || 0}</td>
                <td>{position.attribute_type}</td>
                <td>{new Date(position.created).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Positions;