import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Database, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3,
  ArrowRight,
  Share2,
  Check,
  BookOpen
} from 'lucide-react';

interface CategoryPageProps {
  categoryKey: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryKey }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const categoryData: Record<string, any> = {
    architecture: {
      icon: Server,
      color: 'bg-blue-500',
      topics: [
        { key: 'loadBalancers', titleKey: 'topics.loadBalancers', path: '/load-balancers', description: 'Distribute traffic across multiple servers for high availability' },
        { key: 'appServers', titleKey: 'topics.appServers', path: '/app-servers', description: 'Host and execute application logic and business processing' },
        { key: 'caching', titleKey: 'topics.caching', path: '/caching', description: 'Improve performance by storing frequently accessed data' },
        { key: 'databases', titleKey: 'topics.databases', path: '/databases', description: 'Choose between SQL and NoSQL for data storage needs' },
        { key: 'storage', titleKey: 'topics.storage', path: '/storage', description: 'Understand different storage types: disk, memory, and blob' },
      ]
    },
    scalability: {
      icon: BarChart3,
      color: 'bg-green-500',
      topics: [
        { key: 'replication', titleKey: 'topics.replication', path: '/replication', description: 'Create copies of data for availability and performance' },
        { key: 'sharding', titleKey: 'topics.sharding', path: '/sharding', description: 'Distribute data across multiple databases' },
        { key: 'cdn', titleKey: 'topics.cdn', path: '/cdn', description: 'Deliver content from geographically distributed servers' },
        { key: 'scalingTypes', titleKey: 'topics.scalingTypes', path: '/scaling-types', description: 'Horizontal vs vertical scaling strategies' },
        { key: 'capTheorem', titleKey: 'topics.capTheorem', path: '/cap-theorem', description: 'Understand consistency, availability, and partition tolerance' },
      ]
    },
    communication: {
      icon: Globe,
      color: 'bg-purple-500',
      topics: [
        { key: 'httpGrpc', titleKey: 'topics.httpGrpc', path: '/http-grpc', description: 'Compare HTTP and gRPC communication protocols' },
        { key: 'restGraphql', titleKey: 'topics.restGraphql', path: '/rest-graphql', description: 'REST vs GraphQL API design approaches' },
        { key: 'websockets', titleKey: 'topics.websockets', path: '/websockets', description: 'Real-time communication patterns and protocols' },
        { key: 'apiGateway', titleKey: 'topics.apiGateway', path: '/api-gateway', description: 'Centralized API management and routing' },
        { key: 'serviceMesh', titleKey: 'topics.serviceMesh', path: '/service-mesh', description: 'Infrastructure layer for service-to-service communication' },
      ]
    },
    async: {
      icon: Zap,
      color: 'bg-yellow-500',
      topics: [
        { key: 'messageQueues', titleKey: 'topics.messageQueues', path: '/message-queues', description: 'Asynchronous communication between services' },
        { key: 'eventualConsistency', titleKey: 'topics.eventualConsistency', path: '/eventual-consistency', description: 'Consistency models in distributed systems' },
        { key: 'eventSourcing', titleKey: 'topics.eventSourcing', path: '/event-sourcing', description: 'Store events as the source of truth' },
        { key: 'cqrs', titleKey: 'topics.cqrs', path: '/cqrs', description: 'Separate read and write operations' },
      ]
    },
    performance: {
      icon: Database,
      color: 'bg-red-500',
      topics: [
        { key: 'cachingPatterns', titleKey: 'topics.cachingPatterns', path: '/caching-patterns', description: 'Common caching strategies and patterns' },
        { key: 'circuitBreaker', titleKey: 'topics.circuitBreaker', path: '/circuit-breaker', description: 'Prevent cascading failures in distributed systems' },
        { key: 'retryTimeout', titleKey: 'topics.retryTimeout', path: '/retry-timeout', description: 'Handle transient failures gracefully' },
        { key: 'observability', titleKey: 'topics.observability', path: '/observability', description: 'Monitor, log, and trace system behavior' },
      ]
    },
    security: {
      icon: Shield,
      color: 'bg-indigo-500',
      topics: [
        { key: 'jwt', titleKey: 'topics.jwt', path: '/jwt', description: 'Authentication and authorization with JWT and OAuth2' },
        { key: 'rateLimiting', titleKey: 'topics.rateLimiting', path: '/rate-limiting', description: 'Control request rates to prevent abuse' },
        { key: 'tls', titleKey: 'topics.tls', path: '/tls', description: 'Secure communication with TLS/HTTPS' },
        { key: 'featureFlags', titleKey: 'topics.featureFlags', path: '/feature-flags', description: 'Control feature rollouts and experimentation' },
        { key: 'deployment', titleKey: 'topics.deployment', path: '/deployment', description: 'Safe deployment strategies and practices' },
      ]
    }
  };

  const category = categoryData[categoryKey];
  const Icon = category?.icon || BookOpen;

  const handleShare = async () => {
    const currentUrl = window.location.href;
    
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The requested category could not be found.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {t(`nav.${categoryKey}`)}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore the fundamental concepts and patterns in {t(`nav.${categoryKey}`).toLowerCase()}
              </p>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            title="Share this page"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.topics.map((topic: any) => (
          <Link
            key={topic.key}
            to={topic.path}
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t(topic.titleKey)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {topic.description}
              </p>
            </div>
            <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
              <span className="text-sm font-medium">Learn more</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Back to Home */}
      <div className="mt-12 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CategoryPage;