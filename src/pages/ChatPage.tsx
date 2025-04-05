
import ChatInterface from "@/components/ChatInterface";
import AgentFlowVisualizer from "@/components/AgentFlowVisualizer";

const ChatPage = () => {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Data Product</h1>
        <p className="text-muted-foreground">
          Describe what you want to build and our agents will create it for you
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="h-[calc(100vh-220px)]">
            <ChatInterface />
          </div>
        </div>
        
        <div className="space-y-6">
          <AgentFlowVisualizer 
            currentStep="schema"
            completedSteps={["intent"]}
          />
          
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Data Product Examples</h3>
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue-50 rounded-md cursor-pointer hover:bg-brand-blue-100 transition-colors">
                "I want a 30-day view of customer churn based on transaction and demographic data."
              </div>
              <div className="p-3 bg-brand-blue-50 rounded-md cursor-pointer hover:bg-brand-blue-100 transition-colors">
                "Create a dashboard showing marketing campaign performance by channel and segment."
              </div>
              <div className="p-3 bg-brand-blue-50 rounded-md cursor-pointer hover:bg-brand-blue-100 transition-colors">
                "Build a fraud detection ML feature table that includes transactions and KYC data."
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Tips</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                Be specific about what data sources you want to use
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                Mention if you need real-time or batch processing
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                Describe your business goal, not just the technical requirements
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                You can specify fields you want to include in your data product
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
