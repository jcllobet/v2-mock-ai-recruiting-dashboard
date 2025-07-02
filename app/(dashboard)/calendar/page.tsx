'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Video,
  Phone,
  Plus,
  Filter,
  List,
  Grid3X3,
  User,
  Bot,
  FileText,
  Briefcase
} from 'lucide-react';
import type { CalendarEvent, Candidate, Position } from '@/app/lib/types';

interface EventWithDetails extends CalendarEvent {
  candidate?: Candidate;
  position?: Position;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<EventWithDetails[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [eventsRes, candidatesRes, positionsRes] = await Promise.all([
        fetch('/api/calendar'),
        fetch('/api/candidates'),
        fetch('/api/positions')
      ]);
      
      const eventsData = await eventsRes.json();
      const candidatesData = await candidatesRes.json();
      const positionsData = await positionsRes.json();
      
      // Enrich events with candidate and position data
      const enrichedEvents = eventsData.map((event: CalendarEvent) => ({
        ...event,
        candidate: candidatesData.find((c: Candidate) => c.id === event.candidateId),
        position: positionsData.find((p: Position) => p.id === event.positionId)
      }));
      
      setEvents(enrichedEvents);
      setCandidates(candidatesData);
      setPositions(positionsData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event => {
    if (filterType === 'all') return true;
    return event.type === filterType;
  });

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'interview':
        return 'bg-blue-500';
      case 'meeting':
        return 'bg-purple-500';
      case 'follow_up':
        return 'bg-yellow-500';
      case 'deadline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'interview':
        return <Users className="h-4 w-4" />;
      case 'meeting':
        return <Video className="h-4 w-4" />;
      case 'follow_up':
        return <Phone className="h-4 w-4" />;
      case 'deadline':
        return <FileText className="h-4 w-4" />;
      default:
        return <CalendarIcon className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Scheduled</span>;
      case 'in_progress':
        return <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">In Progress</span>;
      case 'completed':
        return <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Completed</span>;
      case 'cancelled':
        return <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Cancelled</span>;
      default:
        return null;
    }
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getEventsForDate = (date: Date | null) => {
    if (!date) return [];
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.startTime);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Manage interviews, meetings, and important dates
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Schedule Event
        </Button>
      </div>

      {/* Calendar Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth('prev')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-semibold min-w-[200px] text-center">
            {formatMonth(currentDate)}
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth('next')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentDate(new Date())}
            className="ml-2"
          >
            Today
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <select
            className="px-3 py-2 border rounded-md text-sm"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Events</option>
            <option value="interview">Interviews</option>
            <option value="meeting">Meetings</option>
            <option value="follow_up">Follow-ups</option>
            <option value="deadline">Deadlines</option>
          </select>
          <div className="flex gap-1 border rounded-md p-1">
            <Button
              variant={viewMode === 'month' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('month')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'week' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('week')}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'day' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('day')}
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      {viewMode === 'month' && (
        <Card>
          <CardContent className="p-0">
            <div className="grid grid-cols-7">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-3 text-center text-sm font-medium border-b">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {getDaysInMonth(currentDate).map((day, index) => {
                const dayEvents = getEventsForDate(day);
                const isToday = day && day.toDateString() === new Date().toDateString();
                
                return (
                  <div
                    key={index}
                    className={`min-h-[100px] p-2 border-b border-r ${
                      !day ? 'bg-muted/20' : ''
                    } ${isToday ? 'bg-primary/5' : ''}`}
                  >
                    {day && (
                      <>
                        <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : ''}`}>
                          {day.getDate()}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 3).map((event) => (
                            <div
                              key={event.id}
                              className={`text-xs p-1 rounded truncate ${getEventTypeColor(event.type)} text-white cursor-pointer hover:opacity-80`}
                              title={event.title}
                            >
                              <div className="flex items-center gap-1">
                                {getEventTypeIcon(event.type)}
                                <span className="truncate">{event.title}</span>
                              </div>
                            </div>
                          ))}
                          {dayEvents.length > 3 && (
                            <div className="text-xs text-muted-foreground text-center">
                              +{dayEvents.length - 3} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* List View for Week/Day */}
      {(viewMode === 'week' || viewMode === 'day') && (
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-lg ${getEventTypeColor(event.type)} text-white`}>
                      {getEventTypeIcon(event.type)}
                    </div>
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {new Date(event.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                          {new Date(event.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          {new Date(event.startTime).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        {event.candidate && (
                          <div className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{event.candidate.firstName} {event.candidate.lastName}</span>
                          </div>
                        )}
                        {event.position && (
                          <div className="flex items-center gap-2 text-sm">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <span>{event.position.title}</span>
                          </div>
                        )}
                      </div>

                      {event.attendees.length > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Attendees:</span>
                          <div className="flex -space-x-2">
                            {event.attendees.slice(0, 3).map((attendee, index) => (
                              <div
                                key={index}
                                className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                                title={attendee.name}
                              >
                                {attendee.agentId ? (
                                  <Bot className="h-4 w-4" />
                                ) : (
                                  <span className="text-xs font-medium">
                                    {attendee.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                )}
                              </div>
                            ))}
                            {event.attendees.length > 3 && (
                              <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                                <span className="text-xs">+{event.attendees.length - 3}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    {getStatusBadge(event.status)}
                    {event.meetingUrl && (
                      <Button size="sm" variant="outline" className="gap-2">
                        <Video className="h-4 w-4" />
                        Join Meeting
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {filteredEvents.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No events scheduled</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Upcoming Events Sidebar */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredEvents
              .filter(event => new Date(event.startTime) >= new Date())
              .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
              .slice(0, 5)
              .map((event) => (
                <div key={event.id} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50">
                  <div className={`p-2 rounded ${getEventTypeColor(event.type)} text-white`}>
                    {getEventTypeIcon(event.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(event.startTime).toLocaleDateString()} at {new Date(event.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}