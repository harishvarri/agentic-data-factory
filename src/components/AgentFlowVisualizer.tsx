
import { useEffect, useState } from "react";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";

const steps = [
  { id: "intent", name: "Intent", description: "Understanding business goal" },
  { id: "schema", name: "Schema", description: "Locating relevant source tables" },
  { id: "mapping", name: "Mapping", description: "Designing target schema" },
  { id: "transform", name: "Transform", description: "Building pipeline code" },
  { id: "certify", name: "Certify", description: "Validating data quality" },
  { id: "deploy", name: "Deploy", description: "Publishing product" },
];

interface AgentFlowVisualizerProps {
  currentStep?: string;
  completedSteps?: string[];
}

const AgentFlowVisualizer = ({
  currentStep = "schema",
  completedSteps = ["intent"],
}: AgentFlowVisualizerProps) => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  useEffect(() => {
    // Demo animation cycling through steps
    let currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex === -1) currentIndex = 0;
    
    const interval = setInterval(() => {
      setActiveStep(steps[currentIndex].id);
      currentIndex = (currentIndex + 1) % steps.length;
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="rounded-lg p-6 bg-white border border-gray-100 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Agent Flow</h2>
      <div className="flex flex-wrap gap-2 md:gap-0 relative">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = step.id === currentStep;
          const isActive = step.id === activeStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center w-[calc(33.33%-8px)] md:w-1/6 relative mb-8">
              <div 
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center mb-2
                  ${isCompleted ? 'bg-brand-blue-500 text-white' : ''}
                  ${isCurrent ? 'bg-brand-orange-500 text-white' : ''}
                  ${!isCompleted && !isCurrent ? 'bg-gray-100 text-gray-400' : ''}
                  ${isActive ? 'ring-4 ring-brand-blue-100' : ''}
                  transition-all duration-300
                `}
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : isCurrent ? (
                  <Clock className="h-5 w-5 animate-pulse" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <span className="text-sm font-medium text-center">{step.name}</span>
              <span className="text-xs text-muted-foreground text-center hidden md:block">{step.description}</span>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(100%-4px)] w-full h-0.5 bg-gray-200 z-0">
                  <ArrowRight className="h-4 w-4 text-gray-300 absolute -right-2 -top-1.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentFlowVisualizer;
