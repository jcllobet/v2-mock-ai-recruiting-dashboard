'use client';

import { useState, useEffect } from 'react';
import { clientService } from '@/app/lib/mock-data/mock-service';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import { 
  Search, 
  Plus, 
  Building2, 
  MapPin, 
  Users as UsersIcon,
  TrendingUp,
  MoreVertical,
  Filter
} from 'lucide-react';
import type { Client } from '@/app/lib/types';
import { cn } from '@/app/lib/utils/cn';

/**
 * Clients page component with responsive table/card view
 */
export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await clientService.getAll();
        setClients(data);
      } catch (error) {
        console.error('Failed to fetch clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || client.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

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
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">
            Manage your client relationships and track performance
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className={cn(selectedStatus === 'all' && 'bg-primary text-primary-foreground')}
            onClick={() => setSelectedStatus('all')}
          >
            All
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn(selectedStatus === 'active' && 'bg-primary text-primary-foreground')}
            onClick={() => setSelectedStatus('active')}
          >
            Active
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn(selectedStatus === 'inactive' && 'bg-primary text-primary-foreground')}
            onClick={() => setSelectedStatus('inactive')}
          >
            Inactive
          </Button>
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredClients.length} of {clients.length} clients
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left text-sm font-medium">Client</th>
                    <th className="p-4 text-left text-sm font-medium">Industry</th>
                    <th className="p-4 text-left text-sm font-medium">Location</th>
                    <th className="p-4 text-left text-sm font-medium">Status</th>
                    <th className="p-4 text-left text-sm font-medium">Active Positions</th>
                    <th className="p-4 text-left text-sm font-medium">Success Rate</th>
                    <th className="p-4 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-sm text-muted-foreground">{client.contactEmail}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span>{client.industry}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{client.location}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={cn(
                          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                          client.status === 'active' && 'bg-green-100 text-green-800',
                          client.status === 'inactive' && 'bg-gray-100 text-gray-800',
                          client.status === 'pending' && 'bg-yellow-100 text-yellow-800'
                        )}>
                          {client.status}
                        </span>
                      </td>
                      <td className="p-4">{client.activePositions}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span>{client.successRate}%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Card View */}
      <div className="grid gap-4 lg:hidden">
        {filteredClients.map((client) => (
          <Card key={client.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{client.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{client.contactEmail}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span>{client.industry}</span>
                </div>
                <span className={cn(
                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                  client.status === 'active' && 'bg-green-100 text-green-800',
                  client.status === 'inactive' && 'bg-gray-100 text-gray-800',
                  client.status === 'pending' && 'bg-yellow-100 text-yellow-800'
                )}>
                  {client.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{client.location}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold">{client.activePositions}</div>
                  <div className="text-xs text-muted-foreground">Positions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{client.totalHires}</div>
                  <div className="text-xs text-muted-foreground">Hires</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{client.successRate}%</div>
                  <div className="text-xs text-muted-foreground">Success</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}