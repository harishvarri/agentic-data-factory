
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart2, Database, LineChart, Table } from "lucide-react";

interface DataProductCardProps {
  id: string;
  name: string;
  type: "data-mart" | "dashboard" | "ml-feature" | "api" | "report";
  status: "building" | "certifying" | "deployed" | "failed";
  description: string;
  createdAt: string;
  creator: string;
}

const DataProductCard = ({
  id,
  name,
  type,
  status,
  description,
  createdAt,
  creator,
}: DataProductCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case "data-mart":
        return <Database className="h-5 w-5" />;
      case "dashboard":
        return <BarChart2 className="h-5 w-5" />;
      case "ml-feature":
        return <LineChart className="h-5 w-5" />;
      case "api":
        return <Table className="h-5 w-5" />;
      case "report":
        return <BarChart2 className="h-5 w-5" />;
      default:
        return <Database className="h-5 w-5" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "building":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "certifying":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "deployed":
        return "bg-green-100 text-green-800 border-green-200";
      case "failed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "data-mart":
        return "Data Mart";
      case "dashboard":
        return "Dashboard";
      case "ml-feature":
        return "ML Feature";
      case "api":
        return "API";
      case "report":
        return "Report";
      default:
        return "Unknown";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "building":
        return "Building";
      case "certifying":
        return "Certifying";
      case "deployed":
        return "Deployed";
      case "failed":
        return "Failed";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-brand-blue-100 p-1.5">
            {getTypeIcon()}
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-xs text-muted-foreground">Created by {creator}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Badge variant="outline" className={`text-xs mb-1 ${getStatusColor()}`}>
            {getStatusLabel()}
          </Badge>
          <span className="text-xs text-muted-foreground">{getTypeLabel()}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
        Created on {new Date(createdAt).toLocaleDateString()}
      </CardFooter>
    </Card>
  );
};

export default DataProductCard;
