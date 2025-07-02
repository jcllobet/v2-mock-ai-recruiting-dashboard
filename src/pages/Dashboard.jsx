import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, AlertCircle } from 'lucide-react';
import api from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

function Dashboard() {
  const [selectedClient, setSelectedClient] = useState('all');
  const [dateRange, setDateRange] = useState('last_7_days');

  // Fetch clients for selector
  const { data: clients = [] } = useQuery({
    queryKey: ['clients'],
    queryFn: () => api.get('/api/account/clients/'),
  });

  // Fetch KPIs
  const { data: kpis = {}, isLoading: kpisLoading, error: kpisError } = useQuery({
    queryKey: ['kpis', selectedClient],
    queryFn: () => api.get(`/api/hiring/${selectedClient}/kpis`),
  });

  // Fetch stats
  const { data: stats = {}, error: statsError } = useQuery({
    queryKey: ['stats'],
    queryFn: () => api.get('/api/stats'),
  });

  const kpiCards = [
    {
      title: 'Active Positions',
      value: kpis.active_positions || 0,
      change: '+12%',
      trend: 'up',
    },
    {
      title: 'Total Applications',
      value: kpis.total_applications || 0,
      change: '+23%',
      trend: 'up',
    },
    {
      title: 'Interviews Scheduled',
      value: kpis.interviews_scheduled || 0,
      change: '+8%',
      trend: 'up',
    },
    {
      title: 'Offers Extended',
      value: kpis.offers_extended || 0,
      change: '-5%',
      trend: 'down',
    },
    {
      title: 'Hires Completed',
      value: kpis.hires_completed || 0,
      change: '+15%',
      trend: 'up',
    },
    {
      title: 'Avg. Time to Hire',
      value: `${kpis.avg_time_to_hire || 0} days`,
      change: '-10%',
      trend: 'down',
    },
  ];

  // Prepare funnel data
  const funnelData = kpis.funnel_data ? [
    { stage: 'Applied', count: kpis.funnel_data.applied || 0, percentage: 100 },
    { stage: 'Screened', count: kpis.funnel_data.screened || 0, percentage: ((kpis.funnel_data.screened || 0) / (kpis.funnel_data.applied || 1)) * 100 },
    { stage: 'Interviewed', count: kpis.funnel_data.interviewed || 0, percentage: ((kpis.funnel_data.interviewed || 0) / (kpis.funnel_data.applied || 1)) * 100 },
    { stage: 'Offered', count: kpis.funnel_data.offered || 0, percentage: ((kpis.funnel_data.offered || 0) / (kpis.funnel_data.applied || 1)) * 100 },
    { stage: 'Hired', count: kpis.funnel_data.hired || 0, percentage: ((kpis.funnel_data.hired || 0) / (kpis.funnel_data.applied || 1)) * 100 },
  ] : [];

  if (kpisLoading) {
    return <LoadingSpinner text="Loading dashboard data..." />;
  }

  if (kpisError) {
    return (
      <div className="error-container">
        <h3>Failed to load dashboard</h3>
        <p>{kpisError.message || 'Please try refreshing the page.'}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="dashboard-header">
        <div className="client-selector">
          <select 
            className="select-trigger"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <option value="all">All Clients</option>
            {clients.map((client) => (
              <option key={client.uuid} value={client.uuid}>
                {client.name}
              </option>
            ))}
          </select>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={20} />
            <select 
              className="select-trigger"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="last_7_days">Last 7 days</option>
              <option value="last_30_days">Last 30 days</option>
              <option value="last_90_days">Last 90 days</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="kpi-grid">
        {kpiCards.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <h3>{kpi.title}</h3>
            <div className="value">{kpi.value}</div>
            <div className={`change ${kpi.trend === 'up' ? 'positive' : 'negative'}`}>
              {kpi.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {kpi.change}
            </div>
          </div>
        ))}
      </div>

      {/* Conversation Hours Trend Chart */}
      <div className="chart-container">
        <h2>Conversation Hours Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={kpis.conversation_hours || []}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="hours" 
              stroke="var(--primary-color)" 
              strokeWidth={2}
              name="Hours"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Hiring Funnel */}
      <div className="funnel-container">
        <h2>Hiring Funnel</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {funnelData.map((stage, index) => (
            <div key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>{stage.stage}</span>
                <span>{stage.count}</span>
              </div>
              <div style={{ 
                width: '100%', 
                height: '30px', 
                backgroundColor: 'var(--light-color)',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${stage.percentage}%`,
                  height: '100%',
                  backgroundColor: 'var(--primary-color)',
                  transition: 'width 0.5s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;