
import { Activity, Database, BarChart2, ChevronRight, LineChart, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricsCard from "@/components/MetricsCard";
import AgentFlowVisualizer from "@/components/AgentFlowVisualizer";
import DataProductCard from "@/components/DataProductCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const recentProducts = [
    {
      id: "1",
      name: "Customer Churn Analysis",
      type: "data-mart" as const,
      status: "deployed" as const,
      description: "30-day view of customer churn with predictors and segments",
      createdAt: "2025-04-01T12:00:00Z",
      creator: "John Doe"
    },
    {
      id: "2",
      name: "Transaction Fraud Detection",
      type: "ml-feature" as const,
      status: "certifying" as const,
      description: "ML feature table for fraud detection combining transaction patterns and KYC data",
      createdAt: "2025-04-02T14:30:00Z",
      creator: "Jane Smith"
    },
    {
      id: "3",
      name: "Marketing Campaign Performance",
      type: "dashboard" as const,
      status: "building" as const,
      description: "Executive dashboard for marketing campaign ROI and performance metrics",
      createdAt: "2025-04-03T09:15:00Z",
      creator: "Alex Johnson"
    }
  ];

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your data product ecosystem</p>
        </div>
        <Button asChild>
          <Link to="/chat">Create New Data Product</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsCard
          title="Total Data Products"
          value={42}
          description="Across all categories"
          icon={<Database className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
        />
        <MetricsCard
          title="Active Agent Sessions"
          value={7}
          description="Currently building or certifying"
          icon={<Activity className="h-4 w-4" />}
          trend={{ value: 3, isPositive: true }}
        />
        <MetricsCard
          title="Avg. Certification Time"
          value="4.2m"
          description="Time to validate products"
          icon={<ChevronRight className="h-4 w-4" />}
          trend={{ value: 8, isPositive: true }}
        />
        <MetricsCard
          title="Data Sources Connected"
          value={15}
          description="Tables and APIs monitored"
          icon={<Database className="h-4 w-4" />}
        />
      </div>

      <AgentFlowVisualizer 
        currentStep="mapping"
        completedSteps={["intent", "schema"]}
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Recent Data Products</h2>
          <Button variant="ghost" asChild>
            <Link to="/products">View all</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentProducts.map(product => (
            <DataProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Data Product Types</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm h-40">
            <Database className="h-8 w-8 mb-2 text-brand-blue-500" />
            <h3 className="font-medium text-center">Data Marts</h3>
            <p className="text-sm text-muted-foreground text-center mt-1">Structured analytical tables</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm h-40">
            <BarChart2 className="h-8 w-8 mb-2 text-brand-blue-500" />
            <h3 className="font-medium text-center">Dashboards</h3>
            <p className="text-sm text-muted-foreground text-center mt-1">Visual decision support</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm h-40">
            <LineChart className="h-8 w-8 mb-2 text-brand-blue-500" />
            <h3 className="font-medium text-center">ML Features</h3>
            <p className="text-sm text-muted-foreground text-center mt-1">For AI/ML pipelines</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm h-40">
            <Table className="h-8 w-8 mb-2 text-brand-blue-500" />
            <h3 className="font-medium text-center">REST APIs</h3>
            <p className="text-sm text-muted-foreground text-center mt-1">System integrations</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm h-40">
            <Table className="h-8 w-8 mb-2 text-brand-blue-500" />
            <h3 className="font-medium text-center">Compliance</h3>
            <p className="text-sm text-muted-foreground text-center mt-1">Governance reports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
