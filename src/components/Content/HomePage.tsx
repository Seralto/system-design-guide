import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  HelpCircle,
  List,
  Server,
  Database,
  FileText,
  Clipboard,
  BarChart2,
  AlertTriangle,
  RefreshCw,
  CheckCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-12 p-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6 text-center">
          {t('homePage.title')}
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-8">
          {t('homePage.subtitle')}
        </p>

        {/* What is System Design Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <HelpCircle className="mr-2 text-blue-500 dark:text-blue-400" size={24} />
            {t('homePage.whatIsSystemDesign.title')}
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              {t('homePage.whatIsSystemDesign.paragraph1')}
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              {t('homePage.whatIsSystemDesign.paragraph2')}
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              {t('homePage.whatIsSystemDesign.paragraph3')}
            </p>
          </div>
        </section>

        {/* 10 Key Questions Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <List className="mr-2 text-green-500 dark:text-green-400" size={24} />
            {t('homePage.keyQuestions.title')}
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-8 text-gray-800 dark:text-gray-200">
            {t('homePage.keyQuestions.intro')}
            </p>

            <div className="space-y-6">
              {/* Questions 1-10 */}
              {Array.from({ length: 10 }).map((_, i) => {
                const title = t(`homePage.keyQuestions.questions.${i}.title`);
                const question = t(`homePage.keyQuestions.questions.${i}.question`);
                return (
                  <div key={i} className="relative bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-800 shadow-sm">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">{i + 1}</div>
                    <div className="ml-4">
                      <strong className="text-gray-900 dark:text-white text-lg">
                        {title || `Question ${i+1}`}
                      </strong>
                      <p className="italic text-gray-700 dark:text-gray-300 mt-3">
                        {question || `Description for question ${i+1}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Components Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <Server className="mr-2 text-purple-500 dark:text-purple-400" size={24} />
            {t('homePage.keyComponents.title')}
          </h2>
          <h3 className="text-xl font-semibold text-purple-500 dark:text-purple-400 mb-4">
            {t('homePage.keyComponents.subtitle')}
          </h3>
          <p className="mb-6 text-gray-800 dark:text-gray-200">
            {t('homePage.keyComponents.intro')}
          </p>

          {/* Client/Frontend */}
          <div className="mb-6 border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm font-bold">1</span>
              {t('homePage.keyComponents.client.title')}
            </h4>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              {t('homePage.keyComponents.client.description')}
            </p>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.client.responsibilities')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.client.responsibilitiesList', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
          </div>

          {/* Server/Backend */}
          <div className="mb-6 border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm font-bold">2</span>
              {t('homePage.keyComponents.server.title')}
            </h4>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              {t('homePage.keyComponents.server.description')}
            </p>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.server.responsibilities')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.server.responsibilitiesList', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.server.patterns')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.server.patternsList', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
          </div>

          {/* Database/Storage */}
          <div className="mb-6 border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm font-bold">3</span>
              {t('homePage.keyComponents.database.title')}
            </h4>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              {t('homePage.keyComponents.database.description')}
              <br />
              {t('homePage.keyComponents.database.intro')}
            </p>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.database.types.sql.title')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.database.types.sql.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.database.types.nosql.title')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.database.types.nosql.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.database.types.inmemory.title')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.database.types.inmemory.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.database.types.objectStorage.title')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.database.types.objectStorage.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
          </div>

          {/* Networking & Infrastructure */}
          <div className="mb-6 border-l-4 border-orange-500 pl-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm font-bold">4</span>
              {t('homePage.keyComponents.networking.title')}
            </h4>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              {t('homePage.keyComponents.networking.description')}
            </p>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.networking.types.loadBalancers.title')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.networking.types.loadBalancers.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.networking.types.apiGateways.title')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.networking.types.apiGateways.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.networking.types.cdns.title')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.networking.types.cdns.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.networking.types.serviceMesh.title')}
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.networking.types.serviceMesh.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-6 border-l-4 border-yellow-500 pl-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm font-bold">5</span>
              {t('homePage.keyComponents.thirdParty.title')}
            </h4>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              {t('homePage.keyComponents.thirdParty.description')}
            </p>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.thirdParty.types.authentication.title')}
              </h5>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                {t('homePage.keyComponents.thirdParty.types.authentication.description')}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.thirdParty.types.authentication.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.thirdParty.types.payments.title')}
              </h5>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                {t('homePage.keyComponents.thirdParty.types.payments.description')}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.thirdParty.types.payments.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.thirdParty.types.notifications.title')}
              </h5>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                {t('homePage.keyComponents.thirdParty.types.notifications.description')}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.thirdParty.types.notifications.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.thirdParty.types.monitoring.title')}
              </h5>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                {t('homePage.keyComponents.thirdParty.types.monitoring.description')}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.thirdParty.types.monitoring.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {t('homePage.keyComponents.thirdParty.types.ai.title')}
              </h5>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                {t('homePage.keyComponents.thirdParty.types.ai.description')}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                {(() => {
                  const items = t('homePage.keyComponents.thirdParty.types.ai.examples', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, index) => (
                    <li key={index}>{item}</li>
                  )) : <li>{String(items)}</li>;
                })()}
              </ul>
            </div>
          </div>
        </section>

        {/* System Design Process Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <FileText className="mr-2 text-orange-500 dark:text-orange-400" size={24} />
            {t('homePage.designProcess.title')}
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
              {t('homePage.designProcess.subtitle')}
            </h3>
            <p className="mb-6 text-gray-800 dark:text-gray-200">
              {t('homePage.designProcess.intro')}
            </p>

            {/* 1. Requirements Gathering */}
            <div className="mb-6 border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Clipboard className="mr-2" size={20} />
                {t('homePage.designProcess.steps.requirements.title')}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                {t('homePage.designProcess.steps.requirements.description')}
              </p>
              <ul className="mt-2 space-y-1">
                {(() => {
                  const items = t('homePage.designProcess.steps.requirements.items', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
            </div>

            {/* 2. Back-of-the-Envelope Estimations */}
            <div className="mb-6 border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <BarChart2 className="mr-2" size={20} />
                {t('homePage.designProcess.steps.estimations.title')}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                {t('homePage.designProcess.steps.estimations.description')}
              </p>
              <ul className="mt-2 space-y-1">
                {(() => {
                  const items = t('homePage.designProcess.steps.estimations.items', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
              <p className="mt-2 text-blue-600 dark:text-yellow-400">
                💡 <em>{t('homePage.designProcess.steps.estimations.tip')}</em>
              </p>
            </div>

            {/* 3. High-Level Design */}
            <div className="mb-6 border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Server className="mr-2" size={20} />
                {t('homePage.designProcess.steps.hld.title')}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                {t('homePage.designProcess.steps.hld.description')}
              </p>
              <ul className="mt-2 space-y-1">
                {(() => {
                  const items = t('homePage.designProcess.steps.hld.items', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
            </div>

            {/* 4. Data Modeling & API Design */}
            <div className="mb-6 border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <Database className="mr-2" size={20} />
                {t('homePage.designProcess.steps.dataModeling.title')}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                {t('homePage.designProcess.steps.dataModeling.description')}
              </p>
              <ul className="mt-2 space-y-1">
                {(() => {
                  const items = t('homePage.designProcess.steps.dataModeling.items', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
              <ul className="mt-2 space-y-1">
                {(() => {
                  const items = t('homePage.designProcess.steps.dataModeling.examples', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
            </div>

            {/* 5. Detailed Design */}
            <div className="mb-6 border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <AlertTriangle className="mr-2" size={20} />
                {t('homePage.designProcess.steps.detailedDesign.title')}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                {t('homePage.designProcess.steps.detailedDesign.description')}
              </p>
              <ul className="mt-2 space-y-1">
                {(() => {
                  const items = t('homePage.designProcess.steps.detailedDesign.items', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
            </div>

            {/* 6. Bottlenecks */}
            <div className="mb-6 border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <AlertTriangle className="mr-2" size={20} />
                {t('homePage.designProcess.steps.bottlenecks.title')}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                {t('homePage.designProcess.steps.bottlenecks.description')}
              </p>
              <ul className="mt-2 space-y-1">
                {(() => {
                  const items = t('homePage.designProcess.steps.bottlenecks.items', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
              <ul className="mt-2 space-y-1">
              <strong className="text-gray-800 dark:text-gray-200"> {t('homePage.designProcess.steps.bottlenecks.tradeoffs.title')}</strong>
                {(() => {
                  const items = t('homePage.designProcess.steps.bottlenecks.tradeoffs.items', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
              <p className="mt-2 text-red-600 dark:text-red-400">⚠️ <em>{t('homePage.designProcess.steps.bottlenecks.warning')}</em></p>
            </div>

            {/* 7. Review */}
            <div className="mb-6 border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800 dark:text-gray-200">
                <RefreshCw className="mr-2" size={20} />
                {t('homePage.designProcess.steps.review.title')}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                {t('homePage.designProcess.steps.review.description')}
              </p>
              <ul className="mt-2 space-y-1">
                {(() => {
                  const items = t('homePage.designProcess.steps.review.items', { returnObjects: true });
                  return Array.isArray(items) && items.map((item, index) => (
                    <li key={index} className="text-gray-800 dark:text-gray-200">• {item}</li>
                  ));
                })()}
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4 flex items-center border-b pb-2 border-gray-200 dark:border-gray-700">
            <CheckCircle className="mr-2 text-teal-500 dark:text-teal-400" size={24} />
            {t('homePage.conclusion.title')}
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              {t('homePage.conclusion.paragraph1')}
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              {t('homePage.conclusion.paragraph2')}
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              {t('homePage.conclusion.paragraph3')}
            </p>
            <blockquote className="border-l-4 border-teal-500 pl-4 italic bg-teal-50 dark:bg-teal-900/20 p-4 rounded-r-lg">
              <strong className="text-gray-900 dark:text-white">{t('homePage.conclusion.quote')}</strong>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
