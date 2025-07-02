'use client';

import { useState, useEffect } from 'react';
import { positionService } from '@/app/lib/mock-data/mock-service';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import { 
  Search, 
  Plus, 
  Building2, 
  MapPin,
  DollarSign,
  Users,
  MoreVertical,
  Filter,
  Briefcase,
  Calendar
} from 'lucide-react';
import type { Position } from '@/app/lib/types';
import { cn } from '@/app/lib/utils/cn';

/**
 * Positions page component with responsive grid view
 */
export default function PositionsPage() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const data = await positionService.getAll();
        setPositions(data);
      } catch (error) {
        console.error('Failed to fetch positions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  const filteredPositions = positions.filter(position => {
    const matchesSearch = 
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || position.status === selectedStatus;
    const matchesLevel = selectedLevel === 'all' || position.experienceLevel === selectedLevel;
    return matchesSearch && matchesStatus && matchesLevel;
  });

  const formatSalary = (position: Position) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: position.salary.currency,
      maximumFractionDigits: 0,
    });
    return `${formatter.format(position.salary.min)} - ${formatter.format(position.salary.max)}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Positions</h1>
          <p className="text-muted-foreground">
            Manage job openings and track applicant progress
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Create Position
        </Button>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className={cn(selectedStatus === 'all' && 'bg-primary text-primary-foreground')}
              onClick={() => setSelectedStatus('all')}
            >
              All Status
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(selectedStatus === 'open' && 'bg-primary text-primary-foreground')}
              onClick={() => setSelectedStatus('open')}
            >
              Open
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(selectedStatus === 'closed' && 'bg-primary text-primary-foreground')}
              onClick={() => setSelectedStatus('closed')}
            >
              Closed
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className={cn(selectedLevel === 'all' && 'bg-primary text-primary-foreground')}
              onClick={() => setSelectedLevel('all')}
            >
              All Levels
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(selectedLevel === 'entry' && 'bg-primary text-primary-foreground')}
              onClick={() => setSelectedLevel('entry')}
            >
              Entry
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(selectedLevel === 'mid' && 'bg-primary text-primary-foreground')}
              onClick={() => setSelectedLevel('mid')}
            >
              Mid
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={cn(selectedLevel === 'senior' && 'bg-primary text-primary-foreground')}
              onClick={() => setSelectedLevel('senior')}
            >
              Senior
            </Button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredPositions.length} of {positions.length} positions
      </div>

      {/* Positions Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPositions.map((position) => (
          <Card key={position.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg line-clamp-1">{position.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-3 w-3" />
                    <span>{position.department}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Location and Type */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{position.location}</span>
                </div>
                <span className={cn(
                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                  getStatusColor(position.status)
                )}>
                  {position.status}
                </span>
              </div>

              {/* Salary */}
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{formatSalary(position)}</span>
              </div>

              {/* Type and Level */}
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                  {position.type}
                </span>
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">
                  {position.experienceLevel}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                <div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-lg font-semibold">{position.applicantCount}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Applicants</p>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-lg font-semibold">{position.interviewCount}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Interviews</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" className="flex-1">
                  View Applicants
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPositions.length === 0 && (
        <Card className="p-12">
          <div className="text-center space-y-3">
            <Briefcase className="h-12 w-12 mx-auto text-muted-foreground" />
            <h3 className="text-lg font-semibold">No positions found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or create a new position.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}