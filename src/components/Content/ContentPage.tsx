import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CheckCircle, Info, Lightbulb, Share2, Check, ArrowLeft, ArrowRight } from 'lucide-react';

interface ContentPageProps {
  topicKey: string;
}

// Define the page navigation structure
const pageNavigation: Record<string, { prev?: { key: string; path: string }, next?: { key: string; path: string } }> = {
  // Architecture category
  loadBalancers: { next: { key: 'appServers', path: '/architecture/app-servers' } },
  appServers: { prev: { key: 'loadBalancers', path: '/architecture/load-balancers' }, next: { key: 'caching', path: '/architecture/caching' } },
  caching: { prev: { key: 'appServers', path: '/architecture/app-servers' }, next: { key: 'databases', path: '/architecture/databases' } },
  databases: { prev: { key: 'caching', path: '/architecture/caching' }, next: { key: 'storage', path: '/architecture/storage' } },
  storage: { prev: { key: 'databases', path: '/architecture/databases' } },
  
  // Scalability category
  replication: { next: { key: 'sharding', path: '/scalability/sharding' } },
  sharding: { prev: { key: 'replication', path: '/scalability/replication' }, next: { key: 'cdn', path: '/scalability/cdn' } },
  cdn: { prev: { key: 'sharding', path: '/scalability/sharding' }, next: { key: 'scalingTypes', path: '/scalability/scaling-types' } },
  scalingTypes: { prev: { key: 'cdn', path: '/scalability/cdn' }, next: { key: 'capTheorem', path: '/scalability/cap-theorem' } },
  capTheorem: { prev: { key: 'scalingTypes', path: '/scalability/scaling-types' } },
  
  // Communication category
  httpGrpc: { next: { key: 'restGraphql', path: '/communication/rest-graphql' } },
  restGraphql: { prev: { key: 'httpGrpc', path: '/communication/http-grpc' }, next: { key: 'websockets', path: '/communication/websockets' } },
  websockets: { prev: { key: 'restGraphql', path: '/communication/rest-graphql' }, next: { key: 'apiGateway', path: '/communication/api-gateway' } },
  apiGateway: { prev: { key: 'websockets', path: '/communication/websockets' }, next: { key: 'serviceMesh', path: '/communication/service-mesh' } },
  serviceMesh: { prev: { key: 'apiGateway', path: '/communication/api-gateway' } },
  
  // Async patterns category
  messageQueues: { next: { key: 'eventualConsistency', path: '/async/eventual-consistency' } },
  eventualConsistency: { prev: { key: 'messageQueues', path: '/async/message-queues' }, next: { key: 'eventSourcing', path: '/async/event-sourcing' } },
  eventSourcing: { prev: { key: 'eventualConsistency', path: '/async/eventual-consistency' }, next: { key: 'cqrs', path: '/async/cqrs' } },
  cqrs: { prev: { key: 'eventSourcing', path: '/async/event-sourcing' } },
  
  // Performance category
  cachingPatterns: { next: { key: 'circuitBreaker', path: '/performance/circuit-breaker' } },
  circuitBreaker: { prev: { key: 'cachingPatterns', path: '/performance/caching-patterns' }, next: { key: 'retryTimeout', path: '/performance/retry-timeout' } },
  retryTimeout: { prev: { key: 'circuitBreaker', path: '/performance/circuit-breaker' }, next: { key: 'observability', path: '/performance/observability' } },
  observability: { prev: { key: 'retryTimeout', path: '/performance/retry-timeout' } },
  
  // Security category
  jwt: { next: { key: 'rateLimiting', path: '/security/rate-limiting' } },
  rateLimiting: { prev: { key: 'jwt', path: '/security/jwt' }, next: { key: 'tls', path: '/security/tls' } },
  tls: { prev: { key: 'rateLimiting', path: '/security/rate-limiting' }, next: { key: 'featureFlags', path: '/security/feature-flags' } },
  featureFlags: { prev: { key: 'tls', path: '/security/tls' }, next: { key: 'deployment', path: '/security/deployment' } },
  deployment: { prev: { key: 'featureFlags', path: '/security/feature-flags' } }
};

const ContentPage: React.FC<ContentPageProps> = ({ topicKey }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Get content from translations
  const content = t(`content.${topicKey}`, { returnObjects: true }) as any;

  // Fallback content if translation doesn't exist
  const fallbackContent = {
    title: t(`topics.${topicKey}`),
    description: `Learn about ${t(`topics.${topicKey}`)} in system design.`,
    keyPoints: [
      'Important concept in system design',
      'Critical for scalability',
      'Affects system performance',
      'Requires careful consideration'
    ],
    types: [
      'Different approaches available',
      'Various implementation strategies',
      'Trade-offs to consider'
    ]
  };

  const displayContent = content?.title ? content : fallbackContent;

  const handleShare = async () => {
    const currentUrl = window.location.href;
    
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
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

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {displayContent.title}
          </h1>
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            title={t('categoryPage.shareTitle')}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm">{t('categoryPage.copied')}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span className="hidden md:inline text-sm">{t('categoryPage.share')}</span>
              </>
            )}
          </button>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {displayContent.description}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {/* Key Points */}
        {displayContent.keyPoints && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('sectionHeaders.keyPoints')}
              </h2>
            </div>
            <ul className="space-y-3">
              {displayContent.keyPoints.map((point: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Types/Considerations */}
        {(displayContent.types || displayContent.considerations || displayContent.sqlDatabases || displayContent.memoryStorage || displayContent.strategies || displayContent.verticalScaling || displayContent.consistency || displayContent.httpCharacteristics || displayContent.restCharacteristics || displayContent.websockets || displayContent.coreFeatures || displayContent.architecture) && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Info className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {displayContent.types ? t('sectionHeaders.types') : 
                 displayContent.sqlDatabases ? t('contentSections.sqlDatabases') : 
                 displayContent.memoryStorage ? t('contentSections.memoryStorage') :
                 displayContent.strategies ? t('contentSections.strategies') :
                 displayContent.verticalScaling ? t('contentSections.verticalScaling') :
                 displayContent.consistency ? t('contentSections.consistency') :
                  displayContent.httpCharacteristics ? t('contentSections.httpCharacteristics') :
                  displayContent.restCharacteristics ? t('contentSections.restCharacteristics') :
                  displayContent.websockets ? t('contentSections.websockets') :
                  displayContent.coreFeatures ? t('contentSections.coreFeatures') :
                  t('contentSections.architecture')}
              </h2>
            </div>
            <ul className="space-y-3">
              {(displayContent.types || displayContent.considerations || displayContent.sqlDatabases || displayContent.memoryStorage || displayContent.strategies || displayContent.verticalScaling || displayContent.consistency || displayContent.httpCharacteristics || displayContent.restCharacteristics || displayContent.websockets || displayContent.coreFeatures || displayContent.architecture)?.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Additional Content Sections for specific topics */}
      {(displayContent.patterns || displayContent.nosqlTypes || displayContent.diskStorage || displayContent.challenges || displayContent.cachingStrategies || displayContent.horizontalScaling || displayContent.availability || displayContent.grpcCharacteristics || displayContent.graphqlCharacteristics || displayContent.pollingTypes || displayContent.securityFeatures || displayContent.trafficManagement) && (
        <div className="mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {/* Patterns or NoSQL Types */}
          {(displayContent.patterns || displayContent.nosqlTypes || displayContent.cachingStrategies || displayContent.horizontalScaling || displayContent.grpcCharacteristics || displayContent.graphqlCharacteristics || displayContent.pollingTypes || displayContent.securityFeatures) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-purple-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {displayContent.patterns ? t('sectionHeaders.patterns') : 
                   displayContent.nosqlTypes ? t('contentSections.nosqlTypes') :
                   displayContent.cachingStrategies ? t('contentSections.cachingStrategies') :
                   displayContent.horizontalScaling ? t('contentSections.horizontalScaling') :
                   displayContent.grpcCharacteristics ? t('contentSections.grpcCharacteristics') :
                   displayContent.graphqlCharacteristics ? t('contentSections.graphqlCharacteristics') :
                   displayContent.pollingTypes ? t('contentSections.pollingTypes') :
                   t('contentSections.securityFeatures')}
                </h2>
              </div>
              <ul className="space-y-3">
                {(displayContent.patterns || displayContent.nosqlTypes || displayContent.cachingStrategies || displayContent.horizontalScaling || displayContent.grpcCharacteristics || displayContent.graphqlCharacteristics || displayContent.pollingTypes || displayContent.securityFeatures)?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Considerations or When to Use or Disk Storage */}
          {(displayContent.considerations || displayContent.whenToUse || displayContent.diskStorage || displayContent.challenges || displayContent.benefits || displayContent.availability || displayContent.httpUseCases || displayContent.restAdvantages || displayContent.serverSentEvents || displayContent.operationalFeatures || displayContent.trafficManagement) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-orange-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {displayContent.considerations ? t('sectionHeaders.considerations') : 
                   displayContent.whenToUse ? t('sectionHeaders.whenToUse') : 
                   displayContent.diskStorage ? t('contentSections.diskStorage') :
                   displayContent.challenges ? t('sectionHeaders.challenges') :
                   displayContent.benefits ? t('sectionHeaders.benefits') :
                   displayContent.availability ? t('contentSections.availability') :
                   displayContent.httpUseCases ? t('contentSections.httpUseCases') :
                   displayContent.restAdvantages ? t('contentSections.restAdvantages') :
                   displayContent.serverSentEvents ? t('contentSections.serverSentEvents') :
                   displayContent.operationalFeatures ? t('contentSections.operationalFeatures') :
                   t('contentSections.trafficManagement')}
                </h2>
              </div>
              <ul className="space-y-3">
                {(displayContent.considerations || displayContent.whenToUse || displayContent.diskStorage || displayContent.challenges || displayContent.benefits || displayContent.availability || displayContent.httpUseCases || displayContent.restAdvantages || displayContent.serverSentEvents || displayContent.operationalFeatures || displayContent.trafficManagement)?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Third row for storage patterns and blob storage */}
      {(displayContent.blobStorage || displayContent.storagePatterns || displayContent.bestPractices || displayContent.hybridApproaches || displayContent.partitionTolerance || displayContent.grpcUseCases || displayContent.graphqlAdvantages || displayContent.streamingPatterns || displayContent.implementationPatterns || displayContent.observabilityFeatures) && (
        <div className="mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {(displayContent.blobStorage || displayContent.bestPractices || displayContent.hybridApproaches || displayContent.grpcUseCases || displayContent.graphqlAdvantages || displayContent.streamingPatterns) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-indigo-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {displayContent.blobStorage ? t('sectionHeaders.blobStorage') :
                   displayContent.bestPractices ? t('sectionHeaders.bestPractices') :
                   displayContent.hybridApproaches ? t('contentSections.hybridApproaches') :
                   displayContent.grpcUseCases ? t('contentSections.grpcUseCases') :
                   displayContent.graphqlAdvantages ? t('contentSections.graphqlAdvantages') :
                   t('contentSections.streamingPatterns')}
                </h2>
              </div>
              <ul className="space-y-3">
                {(displayContent.blobStorage || displayContent.bestPractices || displayContent.hybridApproaches || displayContent.grpcUseCases || displayContent.graphqlAdvantages || displayContent.streamingPatterns)?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(displayContent.storagePatterns || displayContent.decisionFactors || displayContent.partitionTolerance || displayContent.performanceComparison || displayContent.restChallenges || displayContent.implementationConsiderations || displayContent.implementationPatterns || displayContent.observabilityFeatures) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-teal-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {displayContent.storagePatterns ? t('sectionHeaders.storagePatterns') :
                   displayContent.decisionFactors ? t('contentSections.decisionFactors') :
                   displayContent.partitionTolerance ? t('contentSections.partitionTolerance') :
                   displayContent.performanceComparison ? t('contentSections.performanceComparison') :
                   displayContent.restChallenges ? t('contentSections.restChallenges') :
                   displayContent.implementationConsiderations ? t('contentSections.implementationConsiderations') :
                   displayContent.implementationPatterns ? t('contentSections.implementationPatterns') :
                   t('contentSections.observabilityFeatures')}
                </h2>
              </div>
              <ul className="space-y-3">
                {(displayContent.storagePatterns || displayContent.decisionFactors || displayContent.partitionTolerance || displayContent.performanceComparison || displayContent.restChallenges || displayContent.implementationConsiderations || displayContent.implementationPatterns || displayContent.observabilityFeatures)?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Fourth row for system types */}
      {(displayContent.systemTypes || displayContent.tradeOffs || displayContent.graphqlChallenges || displayContent.popularSolutions || displayContent.adoptionStrategy) && (
        <div className="mt-8">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {(displayContent.systemTypes || displayContent.tradeOffs || displayContent.graphqlChallenges) && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Info className="w-5 h-5 text-pink-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {displayContent.systemTypes ? t('sectionHeaders.systemTypes') :
                     displayContent.tradeOffs ? t('contentSections.tradeOffs') :
                     t('contentSections.graphqlChallenges')}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {(displayContent.systemTypes || displayContent.tradeOffs || displayContent.graphqlChallenges)?.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {(displayContent.popularSolutions || displayContent.adoptionStrategy) && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Info className="w-5 h-5 text-emerald-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {displayContent.popularSolutions ? t('contentSections.popularSolutions') : t('contentSections.adoptionStrategy')}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {(displayContent.popularSolutions || displayContent.adoptionStrategy)?.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Fifth row for when to use sections */}
      {(displayContent.whenToUseRest || displayContent.whenToUseGraphql) && (
        <div className="mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {displayContent.whenToUseRest && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t('contentSections.whenToUseRest')}
                </h2>
              </div>
              <ul className="space-y-3">
                {displayContent.whenToUseRest?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {displayContent.whenToUseGraphql && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-purple-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t('contentSections.whenToUseGraphql')}
                </h2>
              </div>
              <ul className="space-y-3">
                {displayContent.whenToUseGraphql?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Additional Information */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {t('sectionHeaders.learningTip')}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {displayContent.learningTip || `When studying ${displayContent.title.toLowerCase()}, focus on understanding the trade-offs and when to apply different approaches. Practice with real-world scenarios to solidify your knowledge.`}
        </p>
      </div>

      {/* Previous/Next Page Navigation */}
      <div className="mt-12 grid grid-cols-2 gap-6">
        {pageNavigation[topicKey]?.prev && (
          <Link 
            to={pageNavigation[topicKey].prev!.path}
            className="flex items-center justify-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
          >
            <div className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-3 text-blue-500 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('navigation.previous')}</p>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {t(`topics.${pageNavigation[topicKey].prev!.key}`)}
                </h3>
              </div>
            </div>
          </Link>
        )}
        
        {!pageNavigation[topicKey]?.prev && <div></div>}
        
        {pageNavigation[topicKey]?.next && (
          <Link 
            to={pageNavigation[topicKey].next!.path}
            className="flex items-center justify-end p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
          >
            <div className="flex items-center">
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('navigation.next')}</p>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {t(`topics.${pageNavigation[topicKey].next!.key}`)}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 ml-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContentPage;