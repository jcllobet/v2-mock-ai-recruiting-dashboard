'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  Calendar,
  User,
  Briefcase,
  Star,
  TrendingUp,
  Brain,
  Users,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronDown,
  Share2,
  Mail
} from 'lucide-react';
import type { Report, Candidate, Position } from '@/app/lib/types';

interface ReportWithDetails extends Report {
  candidate?: Candidate;
  position?: Position;
}

export default function ReportsPage() {
  const [reports, setReports] = useState<ReportWithDetails[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [reportsRes, candidatesRes, positionsRes] = await Promise.all([
        fetch('/api/reports'),
        fetch('/api/candidates'),
        fetch('/api/positions')
      ]);
      
      const reportsData = await reportsRes.json();
      const candidatesData = await candidatesRes.json();
      const positionsData = await positionsRes.json();
      
      // Enrich reports with candidate and position data
      const enrichedReports = reportsData.map((report: Report) => ({
        ...report,
        candidate: candidatesData.find((c: Candidate) => c.id === report.candidateId),
        position: positionsData.find((p: Position) => p.id === report.positionId)
      }));
      
      setReports(enrichedReports);
      setCandidates(candidatesData);
      setPositions(positionsData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredReports = reports.filter(report => {
    const candidate = report.candidate;
    const matchesSearch = 
      candidate?.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate?.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.position?.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || report.type === filterType;
    
    return matchesSearch && matchesType;
  });

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'strong_yes':
        return 'bg-green-100 text-green-700';
      case 'yes':
        return 'bg-blue-100 text-blue-700';
      case 'maybe':
        return 'bg-yellow-100 text-yellow-700';
      case 'no':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'strong_yes':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'yes':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case 'maybe':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'no':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getRecommendationLabel = (recommendation: string) => {
    const labels = {
      'strong_yes': 'Strong Yes',
      'yes': 'Yes',
      'maybe': 'Maybe',
      'no': 'No'
    };
    return labels[recommendation as keyof typeof labels] || recommendation;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <LoadingSpinner />
      </div>
    );
  }

  const selectedReportData = reports.find(r => r.id === selectedReport);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Interview Reports</h1>
        <p className="text-muted-foreground">
          Comprehensive assessment reports from AI-powered interviews
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          className="px-3 py-2 border rounded-md"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="screening">Screening</option>
          <option value="technical">Technical</option>
          <option value="behavioral">Behavioral</option>
          <option value="final">Final</option>
        </select>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export All
        </Button>
      </div>

      {selectedReport ? (
        // Detailed Report View
        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedReport(null)}
            className="mb-4"
          >
            ← Back to Reports
          </Button>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">
                    {selectedReportData?.candidate?.firstName} {selectedReportData?.candidate?.lastName}
                  </CardTitle>
                  <p className="text-muted-foreground mt-1">
                    {selectedReportData?.position?.title} • {selectedReportData?.type} Interview
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Generated on {new Date(selectedReportData?.generatedAt || '').toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold">{selectedReportData?.overallScore}</p>
                    <p className="text-sm text-muted-foreground">Overall Score</p>
                  </div>
                  <div className={`px-4 py-2 rounded-lg flex items-center gap-2 ${getRecommendationColor(selectedReportData?.recommendation || '')}`}>
                    {getRecommendationIcon(selectedReportData?.recommendation || '')}
                    <span className="font-medium">
                      {getRecommendationLabel(selectedReportData?.recommendation || '')}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* AI Summary */}
              <div>
                <h3 className="text-lg font-semibold mb-3">AI Assessment Summary</h3>
                <p className="text-muted-foreground">{selectedReportData?.aiNotes}</p>
              </div>

              {/* Assessment Sections */}
              <div className="grid gap-4">
                {selectedReportData?.sections.map((section) => (
                  <Card key={section.title}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{section.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{section.score}/100</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{section.feedback}</p>
                      
                      <div className="grid gap-3 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-medium mb-2 text-green-700">Strengths</p>
                          <ul className="list-disc list-inside space-y-1">
                            {section.strengths.map((strength, index) => (
                              <li key={index} className="text-sm text-muted-foreground">{strength}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2 text-orange-700">Areas for Improvement</p>
                          <ul className="list-disc list-inside space-y-1">
                            {section.improvements.map((improvement, index) => (
                              <li key={index} className="text-sm text-muted-foreground">{improvement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Technical Assessment */}
              {selectedReportData?.technicalAssessment && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      Technical Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3">
                        {Object.entries(selectedReportData.technicalAssessment)
                          .filter(([key]) => key !== 'details')
                          .map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between">
                              <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-24 bg-muted rounded-full h-2">
                                  <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: `${value}%` }}
                                  />
                                </div>
                                <span className="text-sm font-medium w-10">{value}/100</span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {selectedReportData.technicalAssessment.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Behavioral Assessment */}
              {selectedReportData?.behavioralAssessment && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Behavioral Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3">
                        {Object.entries(selectedReportData.behavioralAssessment)
                          .filter(([key]) => key !== 'details')
                          .map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between">
                              <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-24 bg-muted rounded-full h-2">
                                  <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: `${value}%` }}
                                  />
                                </div>
                                <span className="text-sm font-medium w-10">{value}/100</span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {selectedReportData.behavioralAssessment.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedReportData?.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronDown className="h-4 w-4 text-primary mt-0.5 rotate-[-90deg]" />
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex gap-2 pt-4">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email Report
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share with Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        // Reports List View
        <div className="grid gap-4">
          {filteredReports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedReport(report.id)}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {report.candidate?.firstName} {report.candidate?.lastName}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {report.position?.title} • {report.type.charAt(0).toUpperCase() + report.type.slice(1)} Interview
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`px-3 py-1 rounded-full flex items-center gap-2 ${getRecommendationColor(report.recommendation)}`}>
                          {getRecommendationIcon(report.recommendation)}
                          <span className="text-sm font-medium">
                            {getRecommendationLabel(report.recommendation)}
                          </span>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{report.overallScore}</p>
                          <p className="text-xs text-muted-foreground">Score</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {report.sections.slice(0, 3).map((section) => (
                        <div key={section.title} className="bg-muted/50 p-3 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium">{section.title}</p>
                            <p className="text-sm font-semibold">{section.score}/100</p>
                          </div>
                          <div className="w-full bg-background rounded-full h-2">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${section.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {report.aiNotes}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(report.generatedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {report.sections.length} sections assessed
                        </span>
                      </div>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Eye className="h-4 w-4" />
                        View Full Report
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredReports.length === 0 && !selectedReport && (
        <Card>
          <CardContent className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No reports found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}