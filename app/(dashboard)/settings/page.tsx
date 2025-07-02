'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { LoadingSpinner } from '@/app/components/ui/loading-spinner';
import {
  Settings as SettingsIcon,
  Building,
  Globe,
  Clock,
  DollarSign,
  Mail,
  Bell,
  Shield,
  CreditCard,
  Database,
  Zap,
  Save,
  ChevronRight,
  Check,
  X,
  AlertCircle,
  Link,
  MessageSquare,
  Phone
} from 'lucide-react';
import type { Settings } from '@/app/lib/types';

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/settings');
      const data = await response.json();
      setSettings(data);
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    if (!settings) return;
    
    setSaving(true);
    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });
      
      if (response.ok) {
        setHasChanges(false);
        // Show success message
      }
    } catch (error) {
      console.error('Failed to save settings:', error);
    } finally {
      setSaving(false);
    }
  };

  const updateSettings = (path: string[], value: any) => {
    if (!settings) return;
    
    const newSettings = { ...settings };
    let current: any = newSettings;
    
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    
    current[path[path.length - 1]] = value;
    setSettings(newSettings);
    setHasChanges(true);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: Building },
    { id: 'recruitment', label: 'Recruitment', icon: Zap },
    { id: 'integrations', label: 'Integrations', icon: Link },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!settings) {
    return <div>Failed to load settings</div>;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {/* Sidebar */}
        <Card className="h-fit">
          <CardContent className="p-0">
            <nav className="space-y-1 p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </button>
                );
              })}
            </nav>
          </CardContent>
        </Card>

        {/* Content */}
        <div className="md:col-span-3 space-y-6">
          {/* General Settings */}
          {activeTab === 'general' && (
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Company Name</label>
                  <Input
                    value={settings.general.companyName}
                    onChange={(e) => updateSettings(['general', 'companyName'], e.target.value)}
                  />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Timezone</label>
                    <select
                      className="w-full px-3 py-2 border rounded-md"
                      value={settings.general.timezone}
                      onChange={(e) => updateSettings(['general', 'timezone'], e.target.value)}
                    >
                      <option value="America/New_York">Eastern Time</option>
                      <option value="America/Chicago">Central Time</option>
                      <option value="America/Denver">Mountain Time</option>
                      <option value="America/Los_Angeles">Pacific Time</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Language</label>
                    <select
                      className="w-full px-3 py-2 border rounded-md"
                      value={settings.general.language}
                      onChange={(e) => updateSettings(['general', 'language'], e.target.value)}
                    >
                      <option value="en-US">English (US)</option>
                      <option value="en-GB">English (UK)</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Date Format</label>
                    <select
                      className="w-full px-3 py-2 border rounded-md"
                      value={settings.general.dateFormat}
                      onChange={(e) => updateSettings(['general', 'dateFormat'], e.target.value)}
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Currency</label>
                    <select
                      className="w-full px-3 py-2 border rounded-md"
                      value={settings.general.currency}
                      onChange={(e) => updateSettings(['general', 'currency'], e.target.value)}
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="CAD">CAD ($)</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recruitment Settings */}
          {activeTab === 'recruitment' && (
            <Card>
              <CardHeader>
                <CardTitle>Recruitment Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-Screening</p>
                    <p className="text-sm text-muted-foreground">
                      Automatically screen candidates based on criteria
                    </p>
                  </div>
                  <button
                    onClick={() => updateSettings(['recruitment', 'autoScreening'], !settings.recruitment.autoScreening)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.recruitment.autoScreening ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.recruitment.autoScreening ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Minimum Scoring Threshold
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={settings.recruitment.scoringThreshold}
                      onChange={(e) => updateSettings(['recruitment', 'scoringThreshold'], parseInt(e.target.value))}
                      className="w-24"
                    />
                    <span className="text-sm text-muted-foreground">out of 100</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Default Interview Duration
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min="15"
                      max="120"
                      value={settings.recruitment.interviewDuration}
                      onChange={(e) => updateSettings(['recruitment', 'interviewDuration'], parseInt(e.target.value))}
                      className="w-24"
                    />
                    <span className="text-sm text-muted-foreground">minutes</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Interview Reminders
                  </label>
                  <div className="flex gap-2">
                    {settings.recruitment.reminderTiming.map((timing, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <Input
                          type="number"
                          min="5"
                          max="1440"
                          value={timing}
                          onChange={(e) => {
                            const newTimings = [...settings.recruitment.reminderTiming];
                            newTimings[index] = parseInt(e.target.value);
                            updateSettings(['recruitment', 'reminderTiming'], newTimings);
                          }}
                          className="w-20"
                        />
                        <span className="text-sm text-muted-foreground">min</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Integrations */}
          {activeTab === 'integrations' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar Integration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    {(['google', 'outlook', 'none'] as const).map((provider) => (
                      <button
                        key={provider}
                        onClick={() => updateSettings(['integrations', 'calendar', 'provider'], provider)}
                        className={`p-4 border rounded-lg transition-colors ${
                          settings.integrations.calendar.provider === provider
                            ? 'border-primary bg-primary/5'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {provider === 'google' && <Globe className="h-8 w-8 mb-2" />}
                        {provider === 'outlook' && <Mail className="h-8 w-8 mb-2" />}
                        {provider === 'none' && <X className="h-8 w-8 mb-2" />}
                        <p className="font-medium capitalize">{provider}</p>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Sync Enabled</p>
                      <p className="text-sm text-muted-foreground">
                        Automatically sync events with your calendar
                      </p>
                    </div>
                    <button
                      onClick={() => updateSettings(['integrations', 'calendar', 'syncEnabled'], !settings.integrations.calendar.syncEnabled)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.integrations.calendar.syncEnabled ? 'bg-primary' : 'bg-muted'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.integrations.calendar.syncEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Communication Channels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(settings.integrations.communication).map(([channel, enabled]) => (
                    <div key={channel} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {channel === 'email' && <Mail className="h-5 w-5" />}
                        {channel === 'sms' && <Phone className="h-5 w-5" />}
                        {channel === 'linkedin' && <MessageSquare className="h-5 w-5" />}
                        <div>
                          <p className="font-medium capitalize">{channel}</p>
                          <p className="text-sm text-muted-foreground">
                            Enable {channel} communication
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => updateSettings(['integrations', 'communication', channel], !enabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          enabled ? 'bg-primary' : 'bg-muted'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(settings.notifications.email).map(([type, enabled]) => (
                    <div key={type} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          {type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Receive email when {type.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </p>
                      </div>
                      <button
                        onClick={() => updateSettings(['notifications', 'email', type], !enabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          enabled ? 'bg-primary' : 'bg-muted'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>In-App Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(settings.notifications.inApp).map(([type, enabled]) => (
                    <div key={type} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          {type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Show notification when {type.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </p>
                      </div>
                      <button
                        onClick={() => updateSettings(['notifications', 'inApp', type], !enabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          enabled ? 'bg-primary' : 'bg-muted'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Billing */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold capitalize">{settings.billing.plan} Plan</h3>
                      <p className="text-muted-foreground">
                        Billed {settings.billing.billingCycle}ly
                      </p>
                    </div>
                    <Button>Upgrade Plan</Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Next billing date</span>
                      <span className="font-medium">{new Date(settings.billing.nextBillingDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage & Limits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(settings.billing.usage).map(([resource, used]) => {
                    const limit = settings.billing.limits[resource as keyof typeof settings.billing.limits];
                    const percentage = (used / limit) * 100;
                    
                    return (
                      <div key={resource}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium capitalize">{resource}</span>
                          <span className="text-sm text-muted-foreground">
                            {used} / {limit}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`h-full rounded-full transition-all ${
                              percentage > 90 ? 'bg-red-500' : percentage > 75 ? 'bg-yellow-500' : 'bg-primary'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Save Button */}
          {hasChanges && (
            <div className="sticky bottom-6 flex justify-end">
              <Card className="shadow-lg">
                <CardContent className="flex items-center gap-4 p-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm">You have unsaved changes</span>
                  <Button
                    onClick={handleSaveSettings}
                    disabled={saving}
                    className="gap-2"
                  >
                    {saving ? (
                      <>
                        <LoadingSpinner />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}