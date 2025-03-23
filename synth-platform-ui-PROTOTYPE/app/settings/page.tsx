import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Configure your fog network and platform settings</p>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Configure general platform settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform-name">Platform Name</Label>
                    <Input id="platform-name" defaultValue="synth" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" type="email" defaultValue="admin@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">Eastern Time (EST)</SelectItem>
                        <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                        <SelectItem value="cet">Central European Time (CET)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notifications</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alerts">Critical Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for critical events</p>
                    </div>
                    <Switch id="alerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reports">Daily Reports</Label>
                      <p className="text-sm text-muted-foreground">Receive daily performance reports</p>
                    </div>
                    <Switch id="reports" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="maintenance">Maintenance Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications about maintenance events</p>
                    </div>
                    <Switch id="maintenance" />
                  </div>
                </div>

                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Network Settings</CardTitle>
                <CardDescription>Configure fog network settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="discovery-mode">Device Discovery Mode</Label>
                    <Select defaultValue="auto">
                      <SelectTrigger id="discovery-mode">
                        <SelectValue placeholder="Select discovery mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Automatic</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="load-balancing">Load Balancing Strategy</Label>
                    <Select defaultValue="dynamic">
                      <SelectTrigger id="load-balancing">
                        <SelectValue placeholder="Select load balancing strategy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dynamic">Dynamic (Adaptive)</SelectItem>
                        <SelectItem value="round-robin">Round Robin</SelectItem>
                        <SelectItem value="least-load">Least Load First</SelectItem>
                        <SelectItem value="proximity">Proximity Based</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cloud-fallback">Cloud Fallback Threshold</Label>
                    <div className="flex items-center gap-2">
                      <Input id="cloud-fallback" type="number" defaultValue="85" />
                      <span className="text-sm text-muted-foreground">%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Fog network load percentage at which tasks are offloaded to cloud
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Network Policies</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-healing">Auto-Healing</Label>
                      <p className="text-sm text-muted-foreground">Automatically recover from network failures</p>
                    </div>
                    <Switch id="auto-healing" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dynamic-scaling">Dynamic Scaling</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically scale computation resources based on demand
                      </p>
                    </div>
                    <Switch id="dynamic-scaling" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="power-saving">Power Saving Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Optimize for energy efficiency during low demand periods
                      </p>
                    </div>
                    <Switch id="power-saving" />
                  </div>
                </div>

                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Configure security and privacy settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="encryption-level">Data Encryption Level</Label>
                    <Select defaultValue="aes256">
                      <SelectTrigger id="encryption-level">
                        <SelectValue placeholder="Select encryption level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aes128">AES-128</SelectItem>
                        <SelectItem value="aes256">AES-256 (Recommended)</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="auth-method">Authentication Method</Label>
                    <Select defaultValue="oauth2">
                      <SelectTrigger id="auth-method">
                        <SelectValue placeholder="Select authentication method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Auth</SelectItem>
                        <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                        <SelectItem value="jwt">JWT</SelectItem>
                        <SelectItem value="mfa">Multi-Factor Auth</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="data-retention">Data Retention Period</Label>
                    <Select defaultValue="30">
                      <SelectTrigger id="data-retention">
                        <SelectValue placeholder="Select data retention period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Security Policies</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-anonymization">Data Anonymization</Label>
                      <p className="text-sm text-muted-foreground">Anonymize sensitive data before processing</p>
                    </div>
                    <Switch id="data-anonymization" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="intrusion-detection">Intrusion Detection</Label>
                      <p className="text-sm text-muted-foreground">Monitor and alert on suspicious network activity</p>
                    </div>
                    <Switch id="intrusion-detection" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-updates">Automatic Security Updates</Label>
                      <p className="text-sm text-muted-foreground">Automatically apply security patches to devices</p>
                    </div>
                    <Switch id="auto-updates" defaultChecked />
                  </div>
                </div>

                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                <CardDescription>Configure advanced platform settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="task-priority">Default Task Priority</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="task-priority">
                        <SelectValue placeholder="Select default priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="log-level">Logging Level</Label>
                    <Select defaultValue="info">
                      <SelectTrigger id="log-level">
                        <SelectValue placeholder="Select logging level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debug">Debug</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="warn">Warning</SelectItem>
                        <SelectItem value="error">Error</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-rate-limit">API Rate Limit</Label>
                    <div className="flex items-center gap-2">
                      <Input id="api-rate-limit" type="number" defaultValue="1000" />
                      <span className="text-sm text-muted-foreground">requests/minute</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Advanced Features</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ml-optimization">ML-based Optimization</Label>
                      <p className="text-sm text-muted-foreground">
                        Use machine learning to optimize task distribution
                      </p>
                    </div>
                    <Switch id="ml-optimization" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="predictive-scaling">Predictive Scaling</Label>
                      <p className="text-sm text-muted-foreground">Predict resource needs and scale proactively</p>
                    </div>
                    <Switch id="predictive-scaling" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="experimental">Experimental Features</Label>
                      <p className="text-sm text-muted-foreground">Enable experimental platform features</p>
                    </div>
                    <Switch id="experimental" />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium text-red-600 mb-2">Danger Zone</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    These actions are destructive and cannot be undone
                  </p>

                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                      Reset Network Configuration
                    </Button>
                    <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                      Clear All Data
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

