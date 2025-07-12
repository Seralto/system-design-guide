import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <Link 
        to="/" 
        className="flex items-center space-x-4 hover:opacity-80 transition-opacity group"
        title="Go to home page"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
          <span className="text-white font-bold text-sm">SD</span>
        </div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {t('nav.title')}
        </h1>
      </Link>
      
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <SearchBar />
        
        {/* Language Selector */}
        <div className="relative group">
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
            </span>
          </button>
          
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`
                  w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors flex items-center justify-between
                  ${i18n.language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'}
                `}
              >
                <div>
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </div>
                {i18n.language === lang.code && (
                  <span className="text-xs opacity-75">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Theme Toggle */}
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;