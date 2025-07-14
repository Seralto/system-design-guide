import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-8 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <p>
            {t('footer.createdBy')}{' '}
            <a 
              href="https://www.sergiotoledo.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Sérgio Toledo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
