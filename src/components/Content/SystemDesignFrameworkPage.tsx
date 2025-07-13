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
      topicsKey: 'home.categories.topics.architecture',
      path: '/architecture'
    },
    {
      icon: BarChart3,
      titleKey: 'nav.scalability',
      color: 'bg-green-500',
      topicsKey: 'home.categories.topics.scalability',
      path: '/scalability'
    },
    {
      icon: Globe,
      titleKey: 'nav.communication',
      color: 'bg-purple-500',
      topicsKey: 'home.categories.topics.communication',
      path: '/communication'
    },
    {
      icon: Zap,
      titleKey: 'nav.async',
      color: 'bg-yellow-500',
      topicsKey: 'home.categories.topics.async',
      path: '/async'
    },
    {
      icon: Database,
      titleKey: 'nav.performance',
      color: 'bg-red-500',
      topicsKey: 'home.categories.topics.performance',
      path: '/performance'
    },
    {
      icon: Shield,
      titleKey: 'nav.security',
      color: 'bg-indigo-500',
      topicsKey: 'home.categories.topics.security',
      path: '/security'
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
    { phaseKey: 'home.framework.timeAllocation.phases.clarify', duration: t('home.framework.timeAllocation.phases.clarify.duration') },
    { phaseKey: 'home.framework.timeAllocation.phases.highlevel', duration: t('home.framework.timeAllocation.phases.highlevel.duration') },
    { phaseKey: 'home.framework.timeAllocation.phases.deepdive', duration: t('home.framework.timeAllocation.phases.deepdive.duration') },
    { phaseKey: 'home.framework.timeAllocation.phases.iterate', duration: t('home.framework.timeAllocation.phases.iterate.duration') },
    { phaseKey: 'home.framework.timeAllocation.phases.wrapup', duration: t('home.framework.timeAllocation.phases.wrapup.duration') }
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
              {t('home.framework.step1.functionalRequirements.title')}
            </h4>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">{t('home.framework.step1.functionalRequirements.userActions.title')}</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• {t('home.framework.step1.functionalRequirements.userActions.items.posting')}</li>
                <li>• {t('home.framework.step1.functionalRequirements.userActions.items.upload')}</li>
                <li>• {t('home.framework.step1.functionalRequirements.userActions.items.registration')}</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">{t('home.framework.step1.functionalRequirements.systemBehaviors.title')}</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• {t('home.framework.step1.functionalRequirements.systemBehaviors.items.notifications')}</li>
                <li>• {t('home.framework.step1.functionalRequirements.systemBehaviors.items.processing')}</li>
                <li>• {t('home.framework.step1.functionalRequirements.systemBehaviors.items.moderation')}</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>{t('home.framework.example')}:</strong> {t('home.framework.step1.functionalRequirements.example')}
            </p>
          </div>
        </div>

        {/* Non-Functional Requirements */}
        <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center mb-4">
            <Activity className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">
              {t('home.framework.step1.nonFunctionalRequirements.title')}
            </h4>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">{t('home.framework.step1.nonFunctionalRequirements.scale.title')}</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                {t('home.framework.step1.nonFunctionalRequirements.scale.description')}
              </p>
            </div>
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">{t('home.framework.step1.nonFunctionalRequirements.performance.title')}</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                {t('home.framework.step1.nonFunctionalRequirements.performance.description')}
              </p>
            </div>
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">{t('home.framework.step1.nonFunctionalRequirements.availability.title')}</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                {t('home.framework.step1.nonFunctionalRequirements.availability.description')}
              </p>
            </div>
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">{t('home.framework.step1.nonFunctionalRequirements.consistency.title')}</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                {t('home.framework.step1.nonFunctionalRequirements.consistency.description')}
              </p>
            </div>
            <div>
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">{t('home.framework.step1.nonFunctionalRequirements.security.title')}</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                {t('home.framework.step1.nonFunctionalRequirements.security.description')}
              </p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 rounded border-l-4 border-green-500">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>{t('home.framework.example')}:</strong> {t('home.framework.step1.nonFunctionalRequirements.example')}
            </p>
          </div>
        </div>

        {/* Edge Cases & Constraints */}
        <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center mb-4">
            <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
            <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
              {t('home.framework.step1.edgeCases.title')}
            </h4>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-1">{t('home.framework.step1.edgeCases.geographic.title')}</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">{t('home.framework.step1.edgeCases.geographic.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-1">{t('home.framework.step1.edgeCases.platform.title')}</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">{t('home.framework.step1.edgeCases.platform.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-1">{t('home.framework.step1.edgeCases.budget.title')}</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">{t('home.framework.step1.edgeCases.budget.description')}</p>
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
                      <span className="text-gray-600 dark:text-gray-300">{t(`${item.phaseKey}.title`)}</span>
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
                    <span className="text-gray-600 dark:text-gray-300">{step}</span>
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
                  <Link
                    to={category.path}
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 block"
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
                      {(t(category.topicsKey, { returnObjects: true }) as string[]).map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-gray-600 dark:text-gray-300">
                          • {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">{t('home.categories.exploreTopics')}</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
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
                to="/architecture/load-balancers"
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
                to="/architecture/databases"
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
                to="/architecture/caching"
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
