import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';

interface SearchResult {
  key: string;
  title: string;
  path: string;
  category: string;
}

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // All searchable topics
  const searchableTopics: SearchResult[] = [
    { key: 'loadBalancers', title: t('topics.loadBalancers'), path: '/architecture/load-balancers', category: t('nav.architecture') },
    { key: 'appServers', title: t('topics.appServers'), path: '/architecture/app-servers', category: t('nav.architecture') },
    { key: 'caching', title: t('topics.caching'), path: '/architecture/caching', category: t('nav.architecture') },
    { key: 'databases', title: t('topics.databases'), path: '/architecture/databases', category: t('nav.architecture') },
    { key: 'storage', title: t('topics.storage'), path: '/architecture/storage', category: t('nav.architecture') },
    { key: 'replication', title: t('topics.replication'), path: '/scalability/replication', category: t('nav.scalability') },
    { key: 'sharding', title: t('topics.sharding'), path: '/scalability/sharding', category: t('nav.scalability') },
    { key: 'cdn', title: t('topics.cdn'), path: '/scalability/cdn', category: t('nav.scalability') },
    { key: 'scalingTypes', title: t('topics.scalingTypes'), path: '/scalability/scaling-types', category: t('nav.scalability') },
    { key: 'capTheorem', title: t('topics.capTheorem'), path: '/scalability/cap-theorem', category: t('nav.scalability') },
    { key: 'httpGrpc', title: t('topics.httpGrpc'), path: '/communication/http-grpc', category: t('nav.communication') },
    { key: 'restGraphql', title: t('topics.restGraphql'), path: '/communication/rest-graphql', category: t('nav.communication') },
    { key: 'websockets', title: t('topics.websockets'), path: '/communication/websockets', category: t('nav.communication') },
    { key: 'apiGateway', title: t('topics.apiGateway'), path: '/communication/api-gateway', category: t('nav.communication') },
    { key: 'serviceMesh', title: t('topics.serviceMesh'), path: '/communication/service-mesh', category: t('nav.communication') },
    { key: 'messageQueues', title: t('topics.messageQueues'), path: '/async/message-queues', category: t('nav.async') },
    { key: 'eventualConsistency', title: t('topics.eventualConsistency'), path: '/async/eventual-consistency', category: t('nav.async') },
    { key: 'eventSourcing', title: t('topics.eventSourcing'), path: '/async/event-sourcing', category: t('nav.async') },
    { key: 'cqrs', title: t('topics.cqrs'), path: '/async/cqrs', category: t('nav.async') },
    { key: 'cachingPatterns', title: t('topics.cachingPatterns'), path: '/performance/caching-patterns', category: t('nav.performance') },
    { key: 'circuitBreaker', title: t('topics.circuitBreaker'), path: '/performance/circuit-breaker', category: t('nav.performance') },
    { key: 'retryTimeout', title: t('topics.retryTimeout'), path: '/performance/retry-timeout', category: t('nav.performance') },
    { key: 'observability', title: t('topics.observability'), path: '/performance/observability', category: t('nav.performance') },
    { key: 'jwt', title: t('topics.jwt'), path: '/security/jwt', category: t('nav.security') },
    { key: 'rateLimiting', title: t('topics.rateLimiting'), path: '/security/rate-limiting', category: t('nav.security') },
    { key: 'tls', title: t('topics.tls'), path: '/security/tls', category: t('nav.security') },
    { key: 'featureFlags', title: t('topics.featureFlags'), path: '/security/feature-flags', category: t('nav.security') },
    { key: 'deployment', title: t('topics.deployment'), path: '/security/deployment', category: t('nav.security') },
  ];

  // Search functionality
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    const filteredResults = searchableTopics.filter(topic =>
      topic.title.toLowerCase().includes(query.toLowerCase()) ||
      topic.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(-1);
  }, [query, t]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setQuery('');
          inputRef.current?.blur();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    setIsOpen(false);
    setQuery('');
    inputRef.current?.blur();
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
        <input
          ref={inputRef}
          type="text"
          placeholder={t('search.placeholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-64 pl-10 pr-10 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query.trim() !== '' || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={result.key}
                  onClick={() => handleResultClick(result)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    index === selectedIndex ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {result.title}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {result.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : query.trim() !== '' ? (
            <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">{t('search.noResults')} "{query}"</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;