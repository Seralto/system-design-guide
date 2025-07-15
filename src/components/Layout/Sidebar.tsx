import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext';
import { useTranslation } from 'react-i18next';
import { 
  ChevronDown, 
  ChevronRight, 
  BookOpen, 
  Layout, 
  Server, 
  BarChart3, 
  Globe, 
  Zap, 
  Database, 
  Shield,
  X
} from 'lucide-react';

interface SidebarSection {
  key: string;
  titleKey: string;
  path: string;
  icon: React.ElementType;
  topics: Array<{
    key: string;
    titleKey: string;
    path: string;
  }>;
}

const sidebarSections: SidebarSection[] = [
  {
    key: 'architecture',
    titleKey: 'nav.architecture',
    path: '/architecture',
    icon: Server,
    topics: [
      { key: 'loadBalancers', titleKey: 'topics.loadBalancers', path: '/architecture/load-balancers' },
      { key: 'appServers', titleKey: 'topics.appServers', path: '/architecture/app-servers' },
      { key: 'caching', titleKey: 'topics.caching', path: '/architecture/caching' },
      { key: 'databases', titleKey: 'topics.databases', path: '/architecture/databases' },
      { key: 'storage', titleKey: 'topics.storage', path: '/architecture/storage' },
    ],
  },
  {
    key: 'scalability',
    titleKey: 'nav.scalability',
    path: '/scalability',
    icon: BarChart3,
    topics: [
      { key: 'replication', titleKey: 'topics.replication', path: '/scalability/replication' },
      { key: 'sharding', titleKey: 'topics.sharding', path: '/scalability/sharding' },
      { key: 'cdn', titleKey: 'topics.cdn', path: '/scalability/cdn' },
      { key: 'scalingTypes', titleKey: 'topics.scalingTypes', path: '/scalability/scaling-types' },
      { key: 'capTheorem', titleKey: 'topics.capTheorem', path: '/scalability/cap-theorem' },
    ],
  },
  {
    key: 'communication',
    titleKey: 'nav.communication',
    path: '/communication',
    icon: Globe,
    topics: [
      { key: 'httpGrpc', titleKey: 'topics.httpGrpc', path: '/communication/http-grpc' },
      { key: 'restGraphql', titleKey: 'topics.restGraphql', path: '/communication/rest-graphql' },
      { key: 'websockets', titleKey: 'topics.websockets', path: '/communication/websockets' },
      { key: 'apiGateway', titleKey: 'topics.apiGateway', path: '/communication/api-gateway' },
      { key: 'serviceMesh', titleKey: 'topics.serviceMesh', path: '/communication/service-mesh' },
    ],
  },
  {
    key: 'async',
    titleKey: 'nav.async',
    path: '/async',
    icon: Zap,
    topics: [
      { key: 'messageQueues', titleKey: 'topics.messageQueues', path: '/async/message-queues' },
      { key: 'eventualConsistency', titleKey: 'topics.eventualConsistency', path: '/async/eventual-consistency' },
      { key: 'eventSourcing', titleKey: 'topics.eventSourcing', path: '/async/event-sourcing' },
      { key: 'cqrs', titleKey: 'topics.cqrs', path: '/async/cqrs' },
    ],
  },
  {
    key: 'performance',
    titleKey: 'nav.performance',
    path: '/performance',
    icon: Database,
    topics: [
      { key: 'cachingPatterns', titleKey: 'topics.cachingPatterns', path: '/performance/caching-patterns' },
      { key: 'circuitBreaker', titleKey: 'topics.circuitBreaker', path: '/performance/circuit-breaker' },
      { key: 'retryTimeout', titleKey: 'topics.retryTimeout', path: '/performance/retry-timeout' },
      { key: 'observability', titleKey: 'topics.observability', path: '/performance/observability' },
    ],
  },
  {
    key: 'security',
    titleKey: 'nav.security',
    path: '/security',
    icon: Shield,
    topics: [
      { key: 'jwt', titleKey: 'topics.jwt', path: '/security/jwt' },
      { key: 'rateLimiting', titleKey: 'topics.rateLimiting', path: '/security/rate-limiting' },
      { key: 'tls', titleKey: 'topics.tls', path: '/security/tls' },
      { key: 'featureFlags', titleKey: 'topics.featureFlags', path: '/security/feature-flags' },
      { key: 'deployment', titleKey: 'topics.deployment', path: '/security/deployment' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useSidebar();
  
  // Determine which section should be expanded based on the current path
  const getCurrentSection = () => {
    const path = location.pathname;
    
    // Don't expand any section on the home page
    if (path === '/') {
      return '';
    }
    
    // First check for exact matches with section paths
    for (const section of sidebarSections) {
      if (path === section.path) {
        return section.key;
      }
    }
    
    // Then check if the path is a nested route under any section
    // Extract the first segment of the path
    const pathSegments = path.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const firstSegment = pathSegments[0];
      
      // Find the section that matches this segment
      for (const section of sidebarSections) {
        const sectionPathSegments = section.path.split('/').filter(Boolean);
        if (sectionPathSegments.length > 0 && sectionPathSegments[0] === firstSegment) {
          return section.key;
        }
      }
    }
    
    // Don't default to any section if no match
    return '';
  };
  
  // Initialize with the current section expanded
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([getCurrentSection()])
  );
  
  // Update expanded sections when the location changes
  useEffect(() => {
    const currentSection = getCurrentSection();
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      newSet.add(currentSection);
      return newSet;
    });
  }, [location.pathname]);

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionKey)) {
        newSet.delete(sectionKey);
      } else {
        newSet.add(sectionKey);
      }
      return newSet;
    });
  };

  const isActiveLink = (path: string) => {
    // Check if the current path matches exactly or is a nested route
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  const isActiveSectionLink = (path: string) => {
    // Check if the current path matches exactly or is a nested route
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Close sidebar when clicking a link on mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && window.innerWidth < 768 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 h-screen overflow-y-auto
          bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
          z-30 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-64' : 'w-0 md:w-0'}
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:-translate-x-full'}
        `}
      >
        <nav className="p-4 space-y-2 w-64 h-full"> {/* Fixed width container */}
          <div className="flex items-center justify-between mb-6 px-2">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-800 dark:text-white">
                {t('nav.title')}
              </span>
            </Link>
            <button 
              onClick={closeSidebar}
              className="p-1 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:block hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        <div className="mb-6">
          <Link 
            to="/" 
            className={`flex items-center px-4 py-2 mb-2 rounded-md ${location.pathname === '/' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={handleLinkClick}
          >
            <BookOpen className="mr-2" size={18} />
            <span className="text-sm font-medium">
              {t('nav.fundamentals')}
            </span>
          </Link>
          <Link 
            to="/system-design-framework" 
            className={`flex items-center px-4 py-2 rounded-md ${location.pathname === '/system-design-framework' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={handleLinkClick}
          >
            <Layout className="mr-2" size={18} />
            <span className="text-sm font-medium">
              {t('nav.systemDesignFramework')}
            </span>
          </Link>
        </div>
        
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          {sidebarSections.map((section) => (
            <div key={section.key}>
              <div className="flex items-center">
                <Link
                  to={section.path}
                  className={`
                    flex-1 p-3 text-left font-medium rounded-lg transition-colors mr-2
                    ${isActiveSectionLink(section.path)
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }
                  `}
                  onClick={handleLinkClick}
                >
                  {React.createElement(section.icon, { className: "inline-block mr-2 w-4 h-4" })}
                  <span className="text-sm font-semibold tracking-wide">
                    {t(section.titleKey)}
                  </span>
                </Link>
                <button
                  onClick={() => toggleSection(section.key)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded transition-colors"
                  aria-label={`Toggle ${t(section.titleKey)} section`}
                >
                  {expandedSections.has(section.key) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {expandedSections.has(section.key) && (
                <div className="pl-4">
                  {section.topics.map((topic) => (
                    <Link
                      key={topic.key}
                      to={topic.path}
                      className={`
                        block p-2 text-sm rounded-md transition-colors
                        ${isActiveLink(topic.path)
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                        }
                      `}
                      onClick={handleLinkClick}
                    >
                      {t(topic.titleKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;