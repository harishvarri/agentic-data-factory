
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Settings, HelpCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-brand-blue-500 to-brand-teal-500"></div>
            <span className="hidden md:inline-block font-bold text-xl tracking-tight">DataAgents</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-brand-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-brand-blue-600 transition-colors">
              Data Products
            </Link>
            <Link to="/agents" className="text-sm font-medium hover:text-brand-blue-600 transition-colors">
              Agents
            </Link>
            <Link to="/settings" className="text-sm font-medium hover:text-brand-blue-600 transition-colors">
              Settings
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-brand-blue-100 text-brand-blue-800">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-3 border-t border-border">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-sm font-medium px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Dashboard
            </Link>
            <Link to="/products" className="text-sm font-medium px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Data Products
            </Link>
            <Link to="/agents" className="text-sm font-medium px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Agents
            </Link>
            <Link to="/settings" className="text-sm font-medium px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Settings
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
