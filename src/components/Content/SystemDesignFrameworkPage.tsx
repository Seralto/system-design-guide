import React from 'react';
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
  CheckCircle,
  Clock,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Settings,
  Activity,
  Lock
} from 'lucide-react';

const SystemDesignFrameworkPage: React.FC = () => {
  const { t } = useTranslation();
  const showLeftMenu = false;

  const categories = [
    {
      icon: Server,
      titleKey: 'nav.architecture',
      color: 'bg-blue-500',
      topics: ['Load Balancers', 'App Servers', 'Caching', 'Databases', 'Storage']
    },
    {
      icon: BarChart3,
      titleKey: 'nav.scalability',
      color: 'bg-green-500',
      topics: ['Replication', 'Sharding', 'CDN', 'Scaling Types', 'CAP Theorem']
    },
    {
      icon: Globe,
      titleKey: 'nav.communication',
      color: 'bg-purple-500',
      topics: ['HTTP vs gRPC', 'REST vs GraphQL', 'WebSockets', 'API Gateway']
    },
    {
      icon: Zap,
      titleKey: 'nav.async',
      color: 'bg-yellow-500',
      topics: ['Message Queues', 'Event Sourcing', 'CQRS', 'Consistency']
    },
    {
      icon: Database,
      titleKey: 'nav.performance',
      color: 'bg-red-500',
      topics: ['Caching Patterns', 'Circuit Breaker', 'Observability', 'Retry Logic']
    },
    {
      icon: Shield,
      titleKey: 'nav.security',
      color: 'bg-indigo-500',
      topics: ['JWT & OAuth2', 'Rate Limiting', 'TLS/HTTPS', 'Feature Flags']
    }
  ];

  const interviewSteps = [
    {
      icon: Target,
      titleKey: 'home.framework.steps.step1.title',
      pointsKey: 'home.framework.steps.step1.points',
      color: 'bg-red-500'
    },
    {
      icon: BarChart3,
      titleKey: 'home.framework.steps.step2.title',
      pointsKey: 'home.framework.steps.step2.points',
      color: 'bg-blue-500'
    },
    {
      icon: Database,
      titleKey: 'home.framework.steps.step3.title',
      pointsKey: 'home.framework.steps.step3.points',
      color: 'bg-gray-600'
    },
    {
      icon: TrendingUp,
      titleKey: 'home.framework.steps.step4.title',
      pointsKey: 'home.framework.steps.step4.points',
      color: 'bg-purple-500'
    },
    {
      icon: CheckCircle,
      titleKey: 'home.framework.steps.step5.title',
      pointsKey: 'home.framework.steps.step5.points',
      color: 'bg-green-500'
    }
  ];

  const timeAllocation = [
    { phaseKey: 'home.framework.timeAllocation.phases.clarify', duration: '5-10min' },
    { phaseKey: 'home.framework.timeAllocation.phases.highlevel', duration: '10-15min' },
    { phaseKey: 'home.framework.timeAllocation.phases.deepdive', duration: '15-20min' },
    { phaseKey: 'home.framework.timeAllocation.phases.iterate', duration: '10-15min' },
    { phaseKey: 'home.framework.timeAllocation.phases.wrapup', duration: '5min' }
  ];
  const renderStep1Content = () => {
    const points = t('home.framework.steps.step1.points', { returnObjects: true }) as string[];
    
    return (
      <div className="space-y-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {points[0]}
        </p>
        
        {/* Functional Requirements */}
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center mb-4">
            <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
              Functional Requirements: What the system should DO
            </h4>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">User Actions</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Post content, search, send messages</li>
                <li>• Upload files, share media</li>
                <li>• User registration and profiles</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">System Behaviors</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Notifications and recommendations</li>
                <li>• Data processing and analytics</li>
                <li>• Content moderation</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Example:</strong> "Users can create posts, like/comment on posts, follow other users"
            </p>
          </div>
        </div>

        {/* Non-Functional Requirements */}
        <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center mb-4">
            <Activity className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">
              Non-Functional Requirements: HOW WELL the system should perform
            </h4>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Scale</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                How many users? (100K DAU vs 100M DAU)
              </p>
            </div>
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Performance</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                Response time (&lt;200ms), throughput (1000 QPS)
              </p>
            </div>
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Availability</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                Uptime requirements (99.9% vs 99.99%)
              </p>
            </div>
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Consistency</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                Strong vs eventual consistency needs
              </p>
            </div>
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Security</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                Authentication, authorization, data privacy
              </p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 rounded border-l-4 border-green-500">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Example:</strong> "Support 10M users, &lt;100ms response time, 99.9% uptime"
            </p>
          </div>
        </div>

        {/* Edge Cases & Constraints */}
        <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center mb-4">
            <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
            <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
              Edge Cases & Constraints
            </h4>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Geographic</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">Global distribution requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Platform</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">Mobile vs web considerations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Budget</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">Cost and resource limits</p>
            </div>
          </div>
        </div>

        {/* Final Step */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            {points[points.length - 1]}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex">

      {/* Main Content */}
      <div className={`flex-1 ${showLeftMenu ? 'ml-0' : ''} overflow-y-auto`}>
        <div className="max-w-6xl mx-auto p-8">

          {/* Hero Section */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6 text-center">
              {t('home.framework.title')}
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300 text-lg">
              {t('home.framework.subtitle')}
            </p>
          </div>

          {/* System Design Interview Framework */}
          <div className="mb-16">
            {/* Interview Steps */}
            <div className="space-y-6 mb-12">
              {interviewSteps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <div
                    id={`step-${index + 1}`}
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    <div className="flex items-start mb-4">
                      <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {t(step.titleKey)}
                        </h3>
                        {index === 0 ? (
                          renderStep1Content()
                        ) : (
                          <ul className="space-y-2">
                            {(t(step.pointsKey, { returnObjects: true }) as string[]).map((point, pointIndex) => (
                              <li key={pointIndex} className="text-gray-600 dark:text-gray-300">
                                {point.startsWith('•') ? (
                                  <div className="ml-4">{point}</div>
                                ) : (
                                  <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>{point}</span>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Time Allocation & Additional Info Grid */}
            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              {/* Time Allocation */}
              <div id="time-allocation" className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t('home.framework.timeAllocation.title')}
                  </h3>
                </div>
                <div className="space-y-3">
                  {timeAllocation.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <span className="text-gray-600 dark:text-gray-300 capitalize">{t(item.phaseKey)}</span>
                      <span className="text-gray-900 dark:text-white font-medium">{item.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why This Works */}
              <div id="why-works" className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t('home.framework.whyWorks.title')}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {(t('home.framework.whyWorks.points', { returnObjects: true }) as string[]).map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TL;DR Framework */}
            <div id="tldr" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t('home.framework.tldr.title')}
                </h3>
              </div>
              <ol className="space-y-2">
                {(t('home.framework.tldr.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-sm font-medium rounded-full mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 capitalize">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t('home.categories.title')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t(category.titleKey)}
                      </h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {category.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-gray-600 dark:text-gray-300">
                          • {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">{t('home.categories.exploreTopics')}</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Start Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t('home.quickStart.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.quickStart.subtitle')}
              </p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Link 
                to="/load-balancers"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t('home.quickStart.loadBalancers.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('home.quickStart.loadBalancers.description')}
                </p>
              </Link>
              
              <Link 
                to="/databases"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t('home.quickStart.databases.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('home.quickStart.databases.description')}
                </p>
              </Link>
              
              <Link 
                to="/caching"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t('home.quickStart.caching.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('home.quickStart.caching.description')}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesignFrameworkPage;
