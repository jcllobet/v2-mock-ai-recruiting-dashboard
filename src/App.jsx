import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { ToastProvider } from './hooks/useToast';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ClientOnboarding from './pages/ClientOnboarding';
import Clients from './pages/Clients';
import ClientDetail from './pages/ClientDetail';
import ClientMembers from './pages/ClientMembers';
import Positions from './pages/Positions';
import PositionDetail from './pages/PositionDetail';
import Candidates from './pages/Candidates';
import CandidateDetail from './pages/CandidateDetail';
import ApplicationDetail from './pages/ApplicationDetail';
import Conversations from './pages/Conversations';
import Workflows from './pages/Workflows';
import Knowledge from './pages/Knowledge';
import Agents from './pages/Agents';
import AgentDetail from './pages/AgentDetail';
import Integrations from './pages/Integrations';
import Settings from './pages/Settings';

// Components
import Layout from './components/Layout';

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Router>
          <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          } />
          
          {/* Protected routes */}
          <Route path="/" element={
            isAuthenticated ? <Layout onLogout={handleLogout} /> : <Navigate to="/login" />
          }>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="onboarding" element={<ClientOnboarding />} />
            <Route path="clients" element={<Clients />} />
            <Route path="clients/:id" element={<ClientDetail />} />
            <Route path="clients/:id/members" element={<ClientMembers />} />
            <Route path="positions" element={<Positions />} />
            <Route path="positions/:id" element={<PositionDetail />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="candidates/:id" element={<CandidateDetail />} />
            <Route path="applications/:id" element={<ApplicationDetail />} />
            <Route path="conversations" element={<Conversations />} />
            <Route path="workflows" element={<Workflows />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="agents" element={<Agents />} />
            <Route path="agents/:id" element={<AgentDetail />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          </Routes>
        </Router>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App
