
import { useState } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DataProductCard from "@/components/DataProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const mockProducts = [
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
  },
  {
    id: "4",
    name: "Customer 360 API",
    type: "api" as const,
    status: "deployed" as const,
    description: "REST API for customer profile data with real-time updates",
    createdAt: "2025-03-28T16:45:00Z",
    creator: "Sarah Williams"
  },
  {
    id: "5",
    name: "Compliance Audit Report",
    type: "report" as const,
    status: "deployed" as const,
    description: "Monthly PII compliance and data quality audit report",
    createdAt: "2025-03-25T11:30:00Z",
    creator: "Michael Brown"
  },
  {
    id: "6",
    name: "Revenue Forecast Model",
    type: "ml-feature" as const,
    status: "failed" as const,
    description: "Predictive model for quarterly revenue forecasting",
    createdAt: "2025-03-22T10:20:00Z",
    creator: "David Chen"
  },
  {
    id: "7",
    name: "Inventory Optimization",
    type: "data-mart" as const,
    status: "deployed" as const,
    description: "Analytical tables for inventory management and optimization",
    createdAt: "2025-03-18T14:15:00Z",
    creator: "Lisa Taylor"
  },
  {
    id: "8",
    name: "Customer Segmentation",
    type: "dashboard" as const,
    status: "deployed" as const,
    description: "Interactive dashboard for customer segmentation analysis",
    createdAt: "2025-03-15T09:45:00Z",
    creator: "Ryan Wilson"
  }
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredProducts = mockProducts.filter(product => {
    return (
      (searchTerm === "" || 
       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (typeFilter === "all" || product.type === typeFilter) &&
      (statusFilter === "all" || product.status === statusFilter)
    );
  });

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data Products</h1>
          <p className="text-muted-foreground">Browse and manage your data products</p>
        </div>
        <Button asChild>
          <Link to="/chat">Create New Data Product</Link>
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search data products..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-40">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <SelectValue placeholder="All Types" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="data-mart">Data Mart</SelectItem>
                <SelectItem value="dashboard">Dashboard</SelectItem>
                <SelectItem value="ml-feature">ML Feature</SelectItem>
                <SelectItem value="api">API</SelectItem>
                <SelectItem value="report">Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-40">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <SelectValue placeholder="All Status" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="building">Building</SelectItem>
                <SelectItem value="certifying">Certifying</SelectItem>
                <SelectItem value="deployed">Deployed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <DataProductCard key={product.id} {...product} />
        ))}
        
        {filteredProducts.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center p-12 text-center">
            <div className="rounded-full bg-muted p-3 mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No data products found</h3>
            <p className="text-muted-foreground mt-1">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
