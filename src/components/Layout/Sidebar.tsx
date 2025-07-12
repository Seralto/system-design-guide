import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Shield 
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
      { key: 'loadBalancers', titleKey: 'topics.loadBalancers', path: '/load-balancers' },
      { key: 'appServers', titleKey: 'topics.appServers', path: '/app-servers' },
      { key: 'caching', titleKey: 'topics.caching', path: '/caching' },
      { key: 'databases', titleKey: 'topics.databases', path: '/databases' },
      { key: 'storage', titleKey: 'topics.storage', path: '/storage' },
    ],
  },
  {
    key: 'scalability',
    titleKey: 'nav.scalability',
    path: '/scalability',
    icon: BarChart3,
    topics: [
      { key: 'replication', titleKey: 'topics.replication', path: '/replication' },
      { key: 'sharding', titleKey: 'topics.sharding', path: '/sharding' },
      { key: 'cdn', titleKey: 'topics.cdn', path: '/cdn' },
      { key: 'scalingTypes', titleKey: 'topics.scalingTypes', path: '/scaling-types' },
      { key: 'capTheorem', titleKey: 'topics.capTheorem', path: '/cap-theorem' },
    ],
  },
  {
    key: 'communication',
    titleKey: 'nav.communication',
    path: '/communication',
    icon: Globe,
    topics: [
      { key: 'httpGrpc', titleKey: 'topics.httpGrpc', path: '/http-grpc' },
      { key: 'restGraphql', titleKey: 'topics.restGraphql', path: '/rest-graphql' },
      { key: 'websockets', titleKey: 'topics.websockets', path: '/websockets' },
      { key: 'apiGateway', titleKey: 'topics.apiGateway', path: '/api-gateway' },
      { key: 'serviceMesh', titleKey: 'topics.serviceMesh', path: '/service-mesh' },
    ],
  },
  {
    key: 'async',
    titleKey: 'nav.async',
    path: '/async',
    icon: Zap,
    topics: [
      { key: 'messageQueues', titleKey: 'topics.messageQueues', path: '/message-queues' },
      { key: 'eventualConsistency', titleKey: 'topics.eventualConsistency', path: '/eventual-consistency' },
      { key: 'eventSourcing', titleKey: 'topics.eventSourcing', path: '/event-sourcing' },
      { key: 'cqrs', titleKey: 'topics.cqrs', path: '/cqrs' },
    ],
  },
  {
    key: 'performance',
    titleKey: 'nav.performance',
    path: '/performance',
    icon: Database,
    topics: [
      { key: 'cachingPatterns', titleKey: 'topics.cachingPatterns', path: '/caching-patterns' },
      { key: 'circuitBreaker', titleKey: 'topics.circuitBreaker', path: '/circuit-breaker' },
      { key: 'retryTimeout', titleKey: 'topics.retryTimeout', path: '/retry-timeout' },
      { key: 'observability', titleKey: 'topics.observability', path: '/observability' },
    ],
  },
  {
    key: 'security',
    titleKey: 'nav.security',
    path: '/security',
    icon: Shield,
    topics: [
      { key: 'jwt', titleKey: 'topics.jwt', path: '/jwt' },
      { key: 'rateLimiting', titleKey: 'topics.rateLimiting', path: '/rate-limiting' },
      { key: 'tls', titleKey: 'topics.tls', path: '/tls' },
      { key: 'featureFlags', titleKey: 'topics.featureFlags', path: '/feature-flags' },
      { key: 'deployment', titleKey: 'topics.deployment', path: '/deployment' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['architecture']) // Default expanded section
  );

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

  const isActiveLink = (path: string) => location.pathname === path;
  const isActiveSectionLink = (path: string) => location.pathname === path;

  return (
    <div className="w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto">
      <nav className="p-4 space-y-2">
        {/* <Link to="/" className="flex items-center mb-6 px-2">
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            {t('nav.title')}
          </span>
        </Link> */}
        <div className="mb-6">
          <Link 
            to="/" 
            className={`flex items-center px-4 py-2 mb-2 rounded-md ${location.pathname === '/' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            <BookOpen className="mr-2" size={18} />
            <span className="text-sm font-medium">
              {t('nav.fundamentals')}
            </span>
          </Link>
          <Link 
            to="/system-design-framework" 
            className={`flex items-center px-4 py-2 rounded-md ${location.pathname === '/system-design-framework' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
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
    </div>
  );
};

export default Sidebar;