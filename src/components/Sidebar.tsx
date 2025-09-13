import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Globe, 
  Code, 
  Palette, 
  FileText, 
  Brain,
  CheckCircle,
  X
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { getUnitProgress } = useProgress();

  const menuItems = [
    { path: '/', icon: Home, label: 'Home', color: 'text-blue-600' },
    { 
      path: '/unit1', 
      icon: Globe, 
      label: 'Unit I: Web Technology', 
      color: 'text-green-600',
      progress: getUnitProgress('unit1')
    },
    { 
      path: '/unit2', 
      icon: Code, 
      label: 'Unit II: Markup Languages', 
      color: 'text-purple-600',
      progress: getUnitProgress('unit2')
    },
    { 
      path: '/unit3', 
      icon: Palette, 
      label: 'Unit III: CSS', 
      color: 'text-orange-600',
      progress: getUnitProgress('unit3')
    },
    { path: '/practice-test', icon: FileText, label: 'Practice Tests', color: 'text-red-600' },
    { path: '/mcq-test', icon: Brain, label: 'MCQ Tests', color: 'text-indigo-600' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Navigation
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.innerWidth < 1024 && onClose()}
                className={`
                  flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors group
                  ${isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : item.color}`} />
                <div className="flex-1">
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.progress !== undefined && (
                    <div className="mt-1">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1">
                        <div 
                          className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.progress}% Complete
                      </span>
                    </div>
                  )}
                </div>
                {item.progress === 100 && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;