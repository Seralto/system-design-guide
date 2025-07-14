import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';
import { useSidebar } from '../../contexts/SidebarContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  
  // Close sidebar when clicking outside on mobile
  const handleMainContentClick = () => {
    if (window.innerWidth < 768 && isSidebarOpen) {
      closeSidebar();
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 md:hidden" 
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
      
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden" onClick={handleMainContentClick}>
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;