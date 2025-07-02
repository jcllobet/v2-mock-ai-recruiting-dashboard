'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import { 
  GitBranch, 
  Zap, 
  Clock, 
  CheckCircle,
  Play,
  Pause,
  Settings,
  Edit,
  Trash2,
  Plus,
  Filter,
  Mail,
  Calendar,
  UserCheck,
  StickyNote,
  Users,
  ArrowRight,
  BarChart,
  AlertCircle
} from 'lucide-react';
import type { Workflow } from '@/app/lib/types';

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterActive, setFilterActive] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const fetchWorkflows = async () => {
    try {
      const response = await fetch('/api/workflows');
      const data = await response.json();
      setWorkflows(data);
    } catch (error) {
      console.error('Failed to fetch workflows:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredWorkflows = workflows.filter(workflow => {
    if (filterActive === 'all') return true;
    if (filterActive === 'active') return workflow.isActive;
    if (filterActive === 'inactive') return !workflow.isActive;
    return true;
  });

  const getTriggerIcon = (trigger: string) => {
    switch (trigger) {
      case 'candidate_applied':
        return <Users className="h-4 w-4" />;
      case 'interview_completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'status_change':
        return <GitBranch className="h-4 w-4" />;
      case 'time_based':
        return <Clock className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'send_email':
        return <Mail className="h-4 w-4" />;
      case 'schedule_interview':
        return <Calendar className="h-4 w-4" />;
      case 'update_status':
        return <UserCheck className="h-4 w-4" />;
      case 'assign_to':
        return <Users className="h-4 w-4" />;
      case 'add_note':
        return <StickyNote className="h-4 w-4" />;
      default:
        return <Settings className="h-4 w-4" />;
    }
  };

  const getTriggerLabel = (trigger: string) => {
    const labels = {
      'candidate_applied': 'When candidate applies',
      'interview_completed': 'After interview completed',
      'status_change': 'On status change',
      'time_based': 'Time-based trigger'
    };
    return labels[trigger as keyof typeof labels] || trigger;
  };

  const getActionLabel = (action: string) => {
    const labels = {
      'send_email': 'Send email',
      'schedule_interview': 'Schedule interview',
      'update_status': 'Update status',
      'assign_to': 'Assign to user',
      'add_note': 'Add note'
    };
    return labels[action as keyof typeof labels] || action;
  };

  const handleToggleWorkflow = async (workflowId: string, isActive: boolean) => {
    // In a real app, this would make an API call
    setWorkflows(workflows.map(w => 
      w.id === workflowId ? { ...w, isActive: !isActive } : w
    ));
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
        <h1 className="text-3xl font-bold tracking-tight">Workflows</h1>
        <p className="text-muted-foreground">
          Automate your recruitment processes with intelligent workflows
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant={filterActive === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterActive('all')}
          >
            All ({workflows.length})
          </Button>
          <Button
            variant={filterActive === 'active' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterActive('active')}
          >
            Active ({workflows.filter(w => w.isActive).length})
          </Button>
          <Button
            variant={filterActive === 'inactive' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterActive('inactive')}
          >
            Inactive ({workflows.filter(w => !w.isActive).length})
          </Button>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Workflow
        </Button>
      </div>

      {/* Workflow Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{workflows.filter(w => w.isActive).length}</div>
            <p className="text-xs text-muted-foreground">Currently running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Executions</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {workflows.reduce((sum, w) => sum + w.executionCount, 0)}
            </div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Daily Runs</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Workflows List */}
      <div className="grid gap-4">
        {filteredWorkflows.map((workflow) => (
          <Card key={workflow.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">{workflow.name}</CardTitle>
                    {workflow.isActive ? (
                      <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Active
                      </span>
                    ) : (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{workflow.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleWorkflow(workflow.id, workflow.isActive)}
                  >
                    {workflow.isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Trigger */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-primary/10 rounded">
                    {getTriggerIcon(workflow.trigger)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Trigger</p>
                    <p className="text-sm text-muted-foreground">{getTriggerLabel(workflow.trigger)}</p>
                  </div>
                </div>
                
                {workflow.conditions.length > 0 && (
                  <div className="ml-10 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Conditions:</p>
                    {workflow.conditions.map((condition, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Filter className="h-3 w-3 text-muted-foreground" />
                        <span className="font-mono text-xs bg-background px-2 py-1 rounded">
                          {condition.field} {condition.operator} {condition.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Then</span>
              </div>

              <div className="space-y-2">
                {workflow.actions.map((action, index) => (
                  <div key={index} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                    <div className="p-2 bg-primary/10 rounded">
                      {getActionIcon(action.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{getActionLabel(action.type)}</p>
                      {action.parameters && Object.entries(action.parameters).length > 0 && (
                        <p className="text-xs text-muted-foreground">
                          {Object.entries(action.parameters).map(([key, value]) => 
                            `${key}: ${value}`
                          ).join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>
                    Executed {workflow.executionCount} times
                  </span>
                  {workflow.lastExecuted && (
                    <span>
                      Last run: {new Date(workflow.lastExecuted).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>View logs</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredWorkflows.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground">No workflows found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}