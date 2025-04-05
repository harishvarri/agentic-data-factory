
import { Brain, Search, Settings, RefreshCcw, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const agentPerformanceData = [
  { id: 1, name: "Intent Agent", runs: 156, successRate: 98.7, avgTime: "1.2s", lastRun: "30 min ago" },
  { id: 2, name: "Schema Agent", runs: 142, successRate: 97.2, avgTime: "2.8s", lastRun: "45 min ago" },
  { id: 3, name: "Mapping Agent", runs: 130, successRate: 94.6, avgTime: "4.3s", lastRun: "1 hour ago" },
  { id: 4, name: "Transformation Agent", runs: 112, successRate: 91.1, avgTime: "6.7s", lastRun: "1.5 hours ago" },
  { id: 5, name: "Certification Agent", runs: 98, successRate: 99.0, avgTime: "5.2s", lastRun: "2 hours ago" },
  { id: 6, name: "Deployment Agent", runs: 92, successRate: 98.9, avgTime: "3.5s", lastRun: "2.5 hours ago" },
];

const recentAgentLogsData = [
  { id: 1, agent: "Intent Agent", action: "Analyzed request", result: "success", timestamp: "10:45 AM", message: "Classified as Data Mart request" },
  { id: 2, agent: "Schema Agent", action: "Located tables", result: "success", timestamp: "10:46 AM", message: "Found customer_profile, transaction_history in catalog" },
  { id: 3, agent: "Mapping Agent", action: "Designed schema", result: "success", timestamp: "10:48 AM", message: "Created target schema with 12 columns" },
  { id: 4, agent: "Transformation Agent", action: "Generated dbt model", result: "warning", timestamp: "10:52 AM", message: "Missing column statistics, using defaults" },
  { id: 5, agent: "Certification Agent", action: "Validated PII compliance", result: "success", timestamp: "10:55 AM", message: "All PII columns properly masked" },
  { id: 6, agent: "Deployment Agent", action: "Published to warehouse", result: "success", timestamp: "10:57 AM", message: "Table deployed to analytical_schema" },
];

const AgentsPage = () => {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agent Management</h1>
          <p className="text-muted-foreground">Monitor and configure your autonomous agents</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCcw className="h-4 w-4 mr-2" />
            Refresh Agents
          </Button>
          <Button>
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Active Agents</CardTitle>
            <CardDescription>Currently running agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">6 / 6</div>
            <div className="text-xs text-muted-foreground">All agents operational</div>
            <div className="h-4 w-full bg-gray-100 rounded-full mt-4 overflow-hidden">
              <div className="h-4 bg-brand-blue-500 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Today's Agent Runs</CardTitle>
            <CardDescription>Total agent executions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">357</div>
            <div className="text-xs text-muted-foreground flex items-center">
              <span className="text-green-600 mr-1">↑ 12%</span> vs. yesterday
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
              <div>Successful: <span className="text-green-600 font-medium">342</span></div>
              <div>Failed: <span className="text-red-600 font-medium">15</span></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">System Health</CardTitle>
            <CardDescription>Agent infrastructure status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-3xl font-bold">Optimal</div>
              <Badge className="ml-2 bg-green-100 text-green-800 border-green-200">
                Healthy
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground">All systems operational</div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="text-xs flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                Memory: 58%
              </div>
              <div className="text-xs flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                CPU: 42%
              </div>
              <div className="text-xs flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                API Rate: 62%
              </div>
              <div className="text-xs flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                Storage: 31%
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList>
          <TabsTrigger value="performance">Agent Performance</TabsTrigger>
          <TabsTrigger value="logs">Recent Logs</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="performance" className="mt-4">
          <Card>
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <CardTitle>Agent Performance Metrics</CardTitle>
                <Input
                  placeholder="Search agents..."
                  className="max-w-xs"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Agent</TableHead>
                    <TableHead className="text-right">Total Runs</TableHead>
                    <TableHead className="text-right">Success Rate</TableHead>
                    <TableHead className="text-right">Avg. Time</TableHead>
                    <TableHead className="text-right">Last Run</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {agentPerformanceData.map((agent) => (
                    <TableRow key={agent.id}>
                      <TableCell className="font-medium flex items-center">
                        <Brain className="h-4 w-4 mr-2 text-brand-blue-500" />
                        {agent.name}
                      </TableCell>
                      <TableCell className="text-right">{agent.runs}</TableCell>
                      <TableCell className="text-right">
                        <span 
                          className={agent.successRate > 95 ? "text-green-600" : "text-yellow-600"}
                        >
                          {agent.successRate}%
                        </span>
                      </TableCell>
                      <TableCell className="text-right">{agent.avgTime}</TableCell>
                      <TableCell className="text-right">{agent.lastRun}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="logs" className="mt-4">
          <Card>
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <CardTitle>Agent Activity Logs</CardTitle>
                <Input
                  placeholder="Search logs..."
                  className="max-w-xs"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAgentLogsData.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="text-sm">{log.timestamp}</TableCell>
                      <TableCell className="font-medium text-sm">{log.agent}</TableCell>
                      <TableCell className="text-sm">{log.action}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            log.result === "success" 
                              ? "bg-green-100 text-green-800 border-green-200" 
                              : log.result === "warning"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : "bg-red-100 text-red-800 border-red-200"
                          }
                        >
                          {log.result}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm max-w-[300px] truncate">{log.message}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Configuration</CardTitle>
              <CardDescription>Adjust settings for your autonomous agents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Model Configuration</h3>
                    <div className="p-4 rounded-md border border-gray-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Model Provider</span>
                        <Badge variant="outline">OpenAI GPT-4o</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Model Temperature</span>
                        <span className="text-sm font-medium">0.2</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Context Window</span>
                        <span className="text-sm font-medium">128K tokens</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Memory Settings</h3>
                    <div className="p-4 rounded-md border border-gray-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Memory Type</span>
                        <Badge variant="outline">Vector DB</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Memory Capacity</span>
                        <span className="text-sm font-medium">10,000 sessions</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Retention Policy</span>
                        <span className="text-sm font-medium">90 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Access Control</h3>
                    <div className="p-4 rounded-md border border-gray-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">PII Access</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                          Restricted
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Access Policy</span>
                        <span className="text-sm font-medium">Rule-based</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Audit Logging</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Agent Coordination</h3>
                    <div className="p-4 rounded-md border border-gray-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Orchestration</span>
                        <Badge variant="outline">LangGraph</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Parallel Execution</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Fallback Strategy</span>
                        <span className="text-sm font-medium">Retry → Human</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>Save Configuration</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AgentsPage;
