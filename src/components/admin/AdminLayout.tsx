import React, { ReactNode } from 'react';
import { LayoutDashboard, FileText, MessageSquare, BarChart3, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

type AdminView = 'dashboard' | 'articles' | 'conversations' | 'analytics';

interface AdminLayoutProps {
  children: ReactNode;
  currentView: AdminView;
  onViewChange: (view: AdminView) => void;
  onLogout: () => void;
}

export function AdminLayout({ children, currentView, onViewChange, onLogout }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard' as AdminView, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'articles' as AdminView, label: 'Articoli', icon: FileText },
    { id: 'conversations' as AdminView, label: 'Conversazioni', icon: MessageSquare },
    { id: 'analytics' as AdminView, label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-[#FFFCF2] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-[#0A0A0A] border-r-4 border-[#000]">
        {/* Logo */}
        <div className="p-6 border-b-4 border-[#2D2D2D]">
          <div className="px-4 py-2 bg-[#0D7EFF] border-3 border-[#FFFCF2] rounded-lg shadow-brutal-sm">
            <h1 
              className="text-white text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: '20px' }}
            >
              MFDL Admin
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-3 transition-all ${
                  isActive
                    ? 'bg-[#0D7EFF] border-[#0D7EFF] text-white shadow-brutal-sm'
                    : 'bg-transparent border-[#2D2D2D] text-[#FFFCF2] hover:bg-[#2D2D2D] hover:border-[#FFFCF2]'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t-4 border-[#2D2D2D]">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 bg-[#FF006E] text-white rounded-lg border-3 border-[#FF006E] shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal transition-all"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
          >
            <LogOut className="w-5 h-5" />
            Esci
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm">
          <aside className="w-64 h-full bg-[#0A0A0A] border-r-4 border-[#000] flex flex-col">
            {/* Header with close */}
            <div className="p-6 border-b-4 border-[#2D2D2D] flex items-center justify-between">
              <div className="px-4 py-2 bg-[#0D7EFF] border-3 border-[#FFFCF2] rounded-lg shadow-brutal-sm">
                <h1 
                  className="text-white"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: '18px' }}
                >
                  MFDL Admin
                </h1>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-white hover:text-[#0D7EFF] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onViewChange(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-3 transition-all ${
                      isActive
                        ? 'bg-[#0D7EFF] border-[#0D7EFF] text-white shadow-brutal-sm'
                        : 'bg-transparent border-[#2D2D2D] text-[#FFFCF2] hover:bg-[#2D2D2D]'
                    }`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t-4 border-[#2D2D2D]">
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-4 py-3 bg-[#FF006E] text-white rounded-lg border-3 border-[#FF006E] shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
              >
                <LogOut className="w-5 h-5" />
                Esci
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar - Mobile */}
        <div className="lg:hidden bg-white border-b-4 border-[#000] p-4 flex items-center justify-between sticky top-0 z-40">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="px-4 py-1 bg-[#0D7EFF] border-3 border-[#000] rounded-lg">
            <span 
              className="text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: '16px' }}
            >
              MFDL Admin
            </span>
          </div>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
