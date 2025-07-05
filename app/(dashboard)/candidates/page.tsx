'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  Building,
  Calendar,
  Star,
  Download,
  ChevronDown,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  UserCheck,
  PhoneCall,
  Video,
  FileText,
  Send
} from 'lucide-react';
import type { Candidate, Position, Touchpoint, CalendarEvent } from '@/app/lib/types';

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [touchpoints, setTouchpoints] = useState<Touchpoint[]>([]);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPosition, setFilterPosition] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCandidate, setExpandedCandidate] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [candidatesRes, positionsRes, touchpointsRes, calendarRes] = await Promise.all([
        fetch('/api/candidates'),
        fetch('/api/positions'),
        fetch('/api/touchpoints'),
        fetch('/api/calendar')
      ]);
      
      const candidatesData = await candidatesRes.json();
      const positionsData = await positionsRes.json();
      const touchpointsData = await touchpointsRes.json();
      const calendarData = await calendarRes.json();
      
      setCandidates(candidatesData);
      setPositions(positionsData);
      setTouchpoints(touchpointsData);
      setCalendarEvents(calendarData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = 
      candidate.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.currentCompany.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPosition = filterPosition === 'all' || 
      candidate.appliedPositions.includes(filterPosition);
    
    const matchesStatus = filterStatus === 'all' || 
      candidate.status === filterStatus;
    
    return matchesSearch && matchesPosition && matchesStatus;
  });

  const getPositionTitle = (positionId: string) => {
    const position = positions.find(p => p.id === positionId);
    return position?.title || 'Unknown Position';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-700',
      screening: 'bg-yellow-100 text-yellow-700',
      interviewing: 'bg-purple-100 text-purple-700',
      offered: 'bg-green-100 text-green-700',
      hired: 'bg-green-600 text-white',
      rejected: 'bg-red-100 text-red-700'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getCandidateTouchpoints = (candidateId: string) => {
    return touchpoints.filter(tp => tp.candidateId === candidateId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  };

  const getCandidateEvents = (candidateId: string) => {
    return calendarEvents.filter(event => event.candidateId === candidateId)
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
  };

  const getPositionDeadline = (positionId: string) => {
    const position = positions.find(p => p.id === positionId);
    if (!position) return null;
    
    const deadline = new Date(position.applicationDeadline);
    const today = new Date();
    const daysUntil = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    return { deadline, daysUntil };
  };

  const getTouchpointIcon = (type: string) => {
    const icons = {
      application_received: FileText,
      screening_started: PhoneCall,
      interview_scheduled: Calendar,
      interview_completed: Video,
      reference_check: UserCheck,
      offer_sent: Send,
      offer_accepted: CheckCircle,
      offer_declined: AlertCircle,
      reminder_sent: Clock
    };
    return icons[type as keyof typeof icons] || FileText;
  };

  const formatTimeAgo = (date: string) => {
    const now = new Date();
    const past = new Date(date);
    const diffInHours = Math.floor((now.getTime() - past.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return past.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Candidates</h1>
        <p className="text-muted-foreground">
          Manage and track all candidate applications
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search candidates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {showFilters && (
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Position</label>
                <select
                  className="w-full px-3 py-2 border rounded-md"
                  value={filterPosition}
                  onChange={(e) => setFilterPosition(e.target.value)}
                >
                  <option value="all">All Positions</option>
                  {positions.map(position => (
                    <option key={position.id} value={position.id}>
                      {position.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Status</label>
                <select
                  className="w-full px-3 py-2 border rounded-md"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="screening">Screening</option>
                  <option value="interviewing">Interviewing</option>
                  <option value="offered">Offered</option>
                  <option value="hired">Hired</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {filteredCandidates.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground">No candidates found</p>
            </CardContent>
          </Card>
        ) : (
          filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {candidate.firstName} {candidate.lastName}
                        </h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {candidate.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {candidate.phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {candidate.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                          {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{candidate.score}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{candidate.currentRole}</span>
                          <span className="text-muted-foreground">
                            ({candidate.experienceYears} years)
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span>{candidate.currentCompany}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Applied for: </span>
                          {candidate.appliedPositions.map((posId, index) => (
                            <span key={posId}>
                              {getPositionTitle(posId)}
                              {index < candidate.appliedPositions.length - 1 && ', '}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Last activity: {new Date(candidate.lastActivityDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-2">Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.slice(0, 5).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {candidate.skills.length > 5 && (
                          <span className="px-2 py-1 text-muted-foreground text-xs">
                            +{candidate.skills.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        className="gap-2"
                        onClick={() => setExpandedCandidate(expandedCandidate === candidate.id ? null : candidate.id)}
                      >
                        <Eye className="h-4 w-4" />
                        {expandedCandidate === candidate.id ? 'Hide' : 'View'} Timeline
                      </Button>
                      <Button size="sm" variant="outline">
                        Download Resume
                      </Button>
                      <Button size="sm" variant="outline">
                        Schedule Interview
                      </Button>
                    </div>

                    {/* Timeline View */}
                    {expandedCandidate === candidate.id && (
                      <div className="mt-6 border-t pt-6">
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          Candidate Journey Timeline
                        </h4>
                        
                        {/* Position Deadlines */}
                        <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                          <div className="flex items-center gap-2 text-amber-700">
                            <AlertCircle className="h-5 w-5" />
                            <span className="font-medium">Position Deadlines:</span>
                          </div>
                          {candidate.appliedPositions.map(posId => {
                            const deadlineInfo = getPositionDeadline(posId);
                            if (!deadlineInfo) return null;
                            return (
                              <div key={posId} className="mt-1 text-sm text-amber-600">
                                {getPositionTitle(posId)}: {deadlineInfo.daysUntil} days remaining
                                {deadlineInfo.daysUntil <= 7 && ' ⚠️ URGENT'}
                              </div>
                            );
                          })}
                        </div>

                        {/* Touchpoints */}
                        <div className="space-y-3">
                          {getCandidateTouchpoints(candidate.id).map((touchpoint) => {
                            const Icon = getTouchpointIcon(touchpoint.type);
                            return (
                              <div key={touchpoint.id} className="flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Icon className="h-5 w-5 text-primary" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{touchpoint.description}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {formatTimeAgo(touchpoint.timestamp)}
                                    </span>
                                  </div>
                                  {touchpoint.outcome && (
                                    <div className="text-sm text-muted-foreground mt-1">
                                      ✓ {touchpoint.outcome}
                                    </div>
                                  )}
                                  {touchpoint.nextAction && (
                                    <div className="text-sm text-blue-600 mt-1">
                                      → Next: {touchpoint.nextAction}
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Upcoming Events */}
                        {getCandidateEvents(candidate.id).filter(e => new Date(e.startTime) > new Date()).length > 0 && (
                          <div className="mt-6">
                            <h5 className="font-medium mb-3 text-green-700">Upcoming Events</h5>
                            <div className="space-y-2">
                              {getCandidateEvents(candidate.id)
                                .filter(e => new Date(e.startTime) > new Date())
                                .map(event => (
                                  <div key={event.id} className="flex items-center gap-3 p-2 bg-green-50 rounded">
                                    <Calendar className="h-4 w-4 text-green-600" />
                                    <div className="flex-1">
                                      <div className="font-medium text-sm">{event.title}</div>
                                      <div className="text-xs text-muted-foreground">
                                        {new Date(event.startTime).toLocaleString()}
                                      </div>
                                    </div>
                                    {event.meetingUrl && (
                                      <Button size="sm" variant="outline" className="text-xs">
                                        Join
                                      </Button>
                                    )}
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}