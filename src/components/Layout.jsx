import { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  UserCheck,
  MessageSquare,
  GitBranch,
  Brain,
  Bot,
  Plug,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  User,
  LogOut,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

function Layout({ onLogout }) {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/clients', label: 'Clients', icon: Users },
    { path: '/positions', label: 'Positions', icon: Briefcase },
    { path: '/candidates', label: 'Candidates', icon: UserCheck },
    { path: '/conversations', label: 'Conversations', icon: MessageSquare },
    { path: '/workflows', label: 'Workflows', icon: GitBranch },
    { path: '/knowledge', label: 'Knowledge', icon: Brain },
    { path: '/agents', label: 'Agents', icon: Bot },
    { path: '/integrations', label: 'Integrations', icon: Plug },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  // Fetch data for global search
  const { data: clients = [] } = useQuery({
    queryKey: ['search-clients'],
    queryFn: () => api.get('/api/account/clients/'),
    enabled: searchQuery.length > 2,
  });

  const { data: positions = [] } = useQuery({
    queryKey: ['search-positions'],
    queryFn: () => api.get('/api/positions'),
    enabled: searchQuery.length > 2,
  });

  const { data: candidates = [] } = useQuery({
    queryKey: ['search-candidates'],
    queryFn: () => api.get('/api/candidates'),
    enabled: searchQuery.length > 2,
  });

  useEffect(() => {
    if (searchQuery.length > 2) {
      const results = [];
      
      // Search clients
      clients.forEach(client => {
        if (client.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            type: 'client',
            id: client.uuid,
            title: client.name,
            subtitle: client.domain,
            path: `/clients/${client.uuid}`,
          });
        }
      });
      
      // Search positions
      positions.forEach(position => {
        if (position.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            type: 'position',
            id: position.uuid,
            title: position.name,
            subtitle: position.client_name,
            path: `/positions/${position.uuid}`,
          });
        }
      });
      
      // Search candidates
      candidates.forEach(candidate => {
        if (candidate.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            type: 'candidate',
            id: candidate.uuid,
            title: candidate.name,
            subtitle: `${candidate.current_position} at ${candidate.current_company}`,
            path: `/candidates/${candidate.uuid}`,
          });
        }
      });
      
      setSearchResults(results.slice(0, 8)); // Limit to 8 results
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery, clients, positions, candidates]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSelect = (result) => {
    navigate(result.path);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : 'expanded'}`}>
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-nav-item ${isActive ? 'active' : ''}`
                }
                title={sidebarCollapsed ? item.label : ''}
              >
                <Icon size={20} />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>
        
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <header className="navbar">
          <div ref={searchRef} style={{ position: 'relative' }}>
            <div className="navbar-search">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search clients, positions, candidates..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {showSearchResults && searchResults.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: 'var(--border-radius)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maxHeight: '400px',
                overflowY: 'auto',
                marginTop: '0.5rem',
                zIndex: 100,
              }}>
                {searchResults.map((result) => (
                  <div
                    key={`${result.type}-${result.id}`}
                    style={{
                      padding: '0.75rem 1rem',
                      cursor: 'pointer',
                      borderBottom: '1px solid #eee',
                      transition: 'var(--transition)',
                    }}
                    onClick={() => handleSearchSelect(result)}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--light-color)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                  >
                    <div style={{ fontWeight: 500 }}>{result.title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
                      {result.subtitle} • {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="navbar-account">
            <button className="button" style={{ padding: '0.5rem' }}>
              <Bell size={20} />
            </button>
            
            <button className="button" style={{ padding: '0.5rem' }}>
              <User size={20} />
            </button>
            
            <button 
              className="button secondary" 
              style={{ padding: '0.5rem' }}
              onClick={handleLogout}
            >
              <LogOut size={20} />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="outlet">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;