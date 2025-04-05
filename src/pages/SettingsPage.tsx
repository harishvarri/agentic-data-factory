import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Lock, Bot, BarChart2, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const SettingsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    setIsLoading(true);
    // Simulate saving
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Settings saved",
        description: "Your changes have been successfully saved."
      });
    }, 1000);
  };
  
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure your data product platform</p>
      </div>
      
      <Tabs defaultValue="data-sources" className="w-full">
        <TabsList className="grid grid-cols-5 w-full max-w-3xl">
          <TabsTrigger value="data-sources" className="flex items-center">
            <Database className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Data Sources</span>
          </TabsTrigger>
          <TabsTrigger value="agents" className="flex items-center">
            <Bot className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Agents</span>
          </TabsTrigger>
          <TabsTrigger value="governance" className="flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Governance</span>
          </TabsTrigger>
          <TabsTrigger value="visualization" className="flex items-center">
            <BarChart2 className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Visualization</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center">
            <Lock className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="data-sources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Sources</CardTitle>
              <CardDescription>
                Configure connections to your data sources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Connected Warehouses</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                        <Database className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">Snowflake</h4>
                        <p className="text-xs text-muted-foreground">analytics.company.snowflakecomputing.com</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      Connected
                    </Badge>
                  </div>
                  
                  <div className="p-4 border rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                        <Database className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">BigQuery</h4>
                        <p className="text-xs text-muted-foreground">company-analytics.googlecloud.com</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      Connected
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Metadata Catalog</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="catalog-url">OpenMetadata URL</Label>
                    <Input id="catalog-url" defaultValue="https://metadata.company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="catalog-api-key">API Key</Label>
                    <Input id="catalog-api-key" type="password" defaultValue="•••••••••••••••••" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <Switch id="autosync" defaultChecked />
                  <Label htmlFor="autosync">Auto-sync metadata (every 6 hours)</Label>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Add New Data Source</h3>
                <Button>Connect Data Source</Button>
              </div>
              
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="agents" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent Configuration</CardTitle>
              <CardDescription>
                Configure the behavior of your autonomous agents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">LLM Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="model-provider">Model Provider</Label>
                    <select 
                      id="model-provider" 
                      className="w-full p-2 border rounded-md"
                      defaultValue="openai"
                    >
                      <option value="openai">OpenAI</option>
                      <option value="anthropic">Anthropic</option>
                      <option value="azure">Azure OpenAI</option>
                      <option value="local">Local LLM</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model-name">Model Name</Label>
                    <select 
                      id="model-name" 
                      className="w-full p-2 border rounded-md"
                      defaultValue="gpt-4o"
                    >
                      <option value="gpt-4o">GPT-4o</option>
                      <option value="claude-3-opus">Claude 3 Opus</option>
                      <option value="gpt-4-turbo">GPT-4 Turbo</option>
                      <option value="mixtral-8x7b">Mixtral 8x7B</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input 
                      id="temperature" 
                      type="number" 
                      min="0" 
                      max="1" 
                      step="0.1" 
                      defaultValue="0.2" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-tokens">Max Tokens</Label>
                    <Input id="max-tokens" type="number" defaultValue="8192" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="context-window">Context Window Size</Label>
                    <Input id="context-window" defaultValue="128K" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Agent Behavior</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="human-in-the-loop">Human-in-the-loop</Label>
                      <p className="text-xs text-muted-foreground">
                        Require human approval for critical actions
                      </p>
                    </div>
                    <Switch id="human-in-the-loop" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-certify">Auto-certification</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically certify data products that pass all checks
                      </p>
                    </div>
                    <Switch id="auto-certify" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="feedback-loop">Feedback Loop Training</Label>
                      <p className="text-xs text-muted-foreground">
                        Improve agents based on user feedback
                      </p>
                    </div>
                    <Switch id="feedback-loop" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="governance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Governance Settings</CardTitle>
              <CardDescription>
                Configure data governance and compliance options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">PII Handling</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-detect-pii">Auto-detect PII</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically identify and flag PII in data sources
                      </p>
                    </div>
                    <Switch id="auto-detect-pii" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-mask-pii">Auto-mask PII</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically mask or tokenize PII in data products
                      </p>
                    </div>
                    <Switch id="auto-mask-pii" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pii-masking-level">PII Masking Level</Label>
                  <select 
                    id="pii-masking-level" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="hashed"
                  >
                    <option value="none">None</option>
                    <option value="partial">Partial (last 4 visible)</option>
                    <option value="hashed">Hashed</option>
                    <option value="tokenized">Tokenized</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Certification Requirements</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="require-lineage">Require Data Lineage</Label>
                      <p className="text-xs text-muted-foreground">
                        All data products must have complete lineage documentation
                      </p>
                    </div>
                    <Switch id="require-lineage" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="require-quality">Require Quality Checks</Label>
                      <p className="text-xs text-muted-foreground">
                        Data products must pass quality validation
                      </p>
                    </div>
                    <Switch id="require-quality" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="require-freshness">Require Freshness SLA</Label>
                      <p className="text-xs text-muted-foreground">
                        Data products must specify and meet freshness SLAs
                      </p>
                    </div>
                    <Switch id="require-freshness" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="visualization" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Visualization Settings</CardTitle>
              <CardDescription>
                Configure dashboard and reporting options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Dashboard Integration</h3>
                <div className="space-y-2">
                  <Label htmlFor="dashboard-provider">Dashboard Provider</Label>
                  <select 
                    id="dashboard-provider" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="looker"
                  >
                    <option value="looker">Looker</option>
                    <option value="powerbi">Power BI</option>
                    <option value="tableau">Tableau</option>
                    <option value="metabase">Metabase</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dashboard-url">Dashboard URL</Label>
                    <Input id="dashboard-url" defaultValue="https://looker.company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dashboard-api-key">API Key</Label>
                    <Input id="dashboard-api-key" type="password" defaultValue="•••••••••••••••••" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-dashboard">Auto-generate Dashboards</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically create dashboards for new data products
                      </p>
                    </div>
                    <Switch id="auto-dashboard" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Visualization Defaults</h3>
                <div className="space-y-2">
                  <Label htmlFor="default-theme">Default Theme</Label>
                  <select 
                    id="default-theme" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="corporate"
                  >
                    <option value="corporate">Corporate</option>
                    <option value="modern">Modern</option>
                    <option value="minimal">Minimal</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="color-palette">Color Palette</Label>
                  <select 
                    id="color-palette" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="blue"
                  >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-refresh">Auto-refresh</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically refresh dashboards
                      </p>
                    </div>
                    <Switch id="auto-refresh" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure security and access control
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Authentication</h3>
                <div className="space-y-2">
                  <Label htmlFor="auth-provider">Authentication Provider</Label>
                  <select 
                    id="auth-provider" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="sso"
                  >
                    <option value="local">Local Authentication</option>
                    <option value="sso">Single Sign-On (SSO)</option>
                    <option value="oauth">OAuth 2.0</option>
                    <option value="oidc">OpenID Connect</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mfa">Multi-factor Authentication</Label>
                      <p className="text-xs text-muted-foreground">
                        Require MFA for all users
                      </p>
                    </div>
                    <Switch id="mfa" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Session Timeout</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically log out inactive sessions
                      </p>
                    </div>
                    <Switch id="session-timeout" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Access Control</h3>
                <div className="space-y-2">
                  <Label htmlFor="access-model">Access Control Model</Label>
                  <select 
                    id="access-model" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="rbac"
                  >
                    <option value="rbac">Role-Based Access Control (RBAC)</option>
                    <option value="abac">Attribute-Based Access Control (ABAC)</option>
                    <option value="hybrid">Hybrid (RBAC + ABAC)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-inheritance">Automatic Inheritance</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically inherit access controls from parent resources
                      </p>
                    </div>
                    <Switch id="auto-inheritance" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="api-keys">API Key Management</Label>
                      <p className="text-xs text-muted-foreground">
                        Enable API key management for service accounts
                      </p>
                    </div>
                    <Switch id="api-keys" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
