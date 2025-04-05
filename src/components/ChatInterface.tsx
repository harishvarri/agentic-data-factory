
import { useState, useRef, useEffect } from "react";
import { Send, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  role: "user" | "assistant" | "agent";
  content: string;
  agentName?: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm your Data Product Builder assistant. What kind of data product would you like to create today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate response delay
    setTimeout(() => {
      // Simulate agent messages
      const intentAgentMessage: Message = {
        id: messages.length + 2,
        role: "agent",
        content: "Analyzing request: I interpret this as a request for a 'Data Mart' type product.",
        agentName: "Intent Agent",
      };

      const sourceAgentMessage: Message = {
        id: messages.length + 3,
        role: "agent",
        content: "Discovering sources: Located relevant tables in data catalog: customer_profile, transaction_history, and subscription_events.",
        agentName: "Source Agent",
      };

      // Simulate assistant's response
      const assistantMessage: Message = {
        id: messages.length + 4,
        role: "assistant",
        content: "I've analyzed your request and started designing a data product. Our Intent Agent has classified this as a Data Mart, and the Source Agent has identified the necessary tables. Would you like me to proceed with creation?",
      };

      // Add all messages with delays
      setTimeout(() => {
        setMessages((prev) => [...prev, intentAgentMessage]);
        
        setTimeout(() => {
          setMessages((prev) => [...prev, sourceAgentMessage]);
          
          setTimeout(() => {
            setMessages((prev) => [...prev, assistantMessage]);
            setIsLoading(false);
          }, 1000);
        }, 1000);
      }, 1000);
      
    }, 1000);
  };

  const handleNewChat = () => {
    toast({
      title: "New conversation started",
      description: "Your previous conversation has been saved.",
    });
    
    setMessages([
      {
        id: 1,
        role: "assistant",
        content: "Hello! I'm your Data Product Builder assistant. What kind of data product would you like to create today?",
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-semibold">New Data Product</h2>
        <Button variant="outline" size="sm" onClick={handleNewChat}>
          <Plus className="h-4 w-4 mr-2" />
          New Chat
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            {message.role === "agent" ? (
              <div className="flex flex-col space-y-1">
                <span className="text-xs font-medium text-brand-teal-700">{message.agentName}</span>
                <div className="agent-bubble">
                  <p>{message.content}</p>
                </div>
              </div>
            ) : (
              <div className={message.role === "user" ? "chat-bubble-user" : "chat-bubble-assistant"}>
                <p>{message.content}</p>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="chat-bubble-assistant flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Processing request...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-lg">
        <div className="flex space-x-2">
          <Textarea
            placeholder="Describe the data product you want to create..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[60px] resize-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button type="submit" disabled={isLoading || !input.trim()} className="shrink-0">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
