'use client';

import { useEffect, useState } from 'react';
import { dashboardService } from '@/app/lib/mock-data/mock-service';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Briefcase, 
  UserCheck,
  Clock,
  Calendar,
  DollarSign
} from 'lucide-react';
import type { DashboardMetrics, KPI } from '@/app/lib/types';

/**
 * Dashboard page component with key metrics and KPIs
 */
export default function DashboardPage() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [kpis, setKpis] = useState<KPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [metricsData, kpisData] = await Promise.all([
          dashboardService.getMetrics(),
          dashboardService.getKPIs(),
        ]);
        setMetrics(metricsData);
        setKpis(kpisData);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const getKpiIcon = (label: string) => {
    if (label.includes('Client')) return Users;
    if (label.includes('Position')) return Briefcase;
    if (label.includes('Candidate')) return UserCheck;
    if (label.includes('Time')) return Clock;
    return DollarSign;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s your recruiting overview.
        </p>
      </div>

      {/* KPI Cards - Responsive Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => {
          const Icon = getKpiIcon(kpi.label);
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {kpi.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {kpi.changeType === 'increase' ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={kpi.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}>
                    {kpi.change}%
                  </span>
                  <span className="ml-1">{kpi.period}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats - Responsive Grid */}
      {metrics && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hiring Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Interviews Scheduled</span>
                <span className="font-medium">{metrics.interviewsScheduled}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Pending Offers</span>
                <span className="font-medium">{metrics.pendingOffers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Hire Rate</span>
                <span className="font-medium">{metrics.hireRate}%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {metrics.recentActivity.slice(0, 3).map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-2">
                    <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm leading-none">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(activity.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Avg. Time to Hire</span>
                <span className="font-medium">{metrics.avgTimeToHire} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Active Positions</span>
                <span className="font-medium">{metrics.activePositions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Candidates</span>
                <span className="font-medium">{metrics.totalCandidates}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}