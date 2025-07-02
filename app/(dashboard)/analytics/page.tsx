'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  DollarSign,
  BarChart3,
  PieChart,
  Calendar,
  Target,
  Briefcase,
  Award,
  Download,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import type { AnalyticsMetrics } from '@/app/lib/types';

export default function AnalyticsPage() {
  const [metrics, setMetrics] = useState<AnalyticsMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('30days');

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange]);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!metrics) {
    return <div>Failed to load analytics</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into your recruitment performance and ROI
          </p>
        </div>
        <div className="flex gap-2">
          <select
            className="px-3 py-2 border rounded-md"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="year">Last year</option>
          </select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.overview.totalApplications}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+12.5%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interviews</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.overview.totalInterviews}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+8.3%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hires</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.overview.totalHires}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+15.7%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Time to Hire</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.overview.avgTimeToHire} days</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowDownRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">-5.2%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost per Hire</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(metrics.overview.avgCostPerHire)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowDownRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">-8.1%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offer Accept Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.overview.offerAcceptanceRate}%</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+3.2%</span> from last period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ROI Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Return on Investment (ROI)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm text-green-900 font-medium">Total ROI</p>
                  <p className="text-3xl font-bold text-green-900">{metrics.roi.roiPercentage}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Investment</p>
                  <p className="text-lg font-semibold">{formatCurrency(metrics.roi.totalInvestment)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Savings</p>
                  <p className="text-lg font-semibold text-green-600">{formatCurrency(metrics.roi.totalSavings)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Net Benefit</p>
                  <p className="text-lg font-semibold text-green-600">{formatCurrency(metrics.roi.netBenefit)}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3">Cost Breakdown</h4>
              <div className="space-y-3">
                {metrics.roi.costBreakdown.map((item) => (
                  <div key={item.category} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span className="text-sm">{item.category}</span>
                    </div>
                    <span className="text-sm font-medium">{formatCurrency(item.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recruitment Funnel */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Recruitment Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {metrics.funnel.map((stage, index) => (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{stage.stage}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{stage.count} candidates</span>
                    <span className="text-sm font-medium">{stage.conversionRate}%</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-8 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500 flex items-center justify-end px-3"
                    style={{ width: `${stage.conversionRate}%` }}
                  >
                    <span className="text-xs text-primary-foreground font-medium">
                      {stage.conversionRate}%
                    </span>
                  </div>
                </div>
                {index < metrics.funnel.length - 1 && (
                  <ChevronDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-4 w-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Source Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Source Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {metrics.sourceAnalysis.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{source.source}</span>
                    <span className="text-sm text-muted-foreground">Quality: {source.quality}/10</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-muted rounded">
                      <p className="font-semibold">{source.applications}</p>
                      <p className="text-muted-foreground">Applied</p>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <p className="font-semibold">{source.interviews}</p>
                      <p className="text-muted-foreground">Interviewed</p>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <p className="font-semibold">{source.hires}</p>
                      <p className="text-muted-foreground">Hired</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Time Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <span className="text-sm">Application to Screening</span>
                <span className="font-semibold">{metrics.timeMetrics.applicationToScreening} days</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <span className="text-sm">Screening to Interview</span>
                <span className="font-semibold">{metrics.timeMetrics.screeningToInterview} days</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <span className="text-sm">Interview to Offer</span>
                <span className="font-semibold">{metrics.timeMetrics.interviewToOffer} days</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <span className="text-sm">Offer to Acceptance</span>
                <span className="font-semibold">{metrics.timeMetrics.offerToAcceptance} days</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Demographic Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Demographic Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {metrics.demographicInsights.map((insight) => (
              <div key={insight.category}>
                <h4 className="text-sm font-medium mb-3">{insight.category}</h4>
                <div className="space-y-2">
                  {Object.entries(insight.data).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm">{key}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-10 text-right">{value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}