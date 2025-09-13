import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Code, 
  Palette, 
  FileText, 
  Brain, 
  Clock,
  BookOpen,
  Target,
  Award
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

const HomePage: React.FC = () => {
  const { getUnitProgress } = useProgress();

  const units = [
    {
      id: 'unit1',
      title: 'Unit I: Introduction to Web Technology',
      description: 'Learn about Internet, WWW, protocols, web browsers, servers, and hosting fundamentals.',
      icon: Globe,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      hours: '15 Hours',
      topics: ['Internet Basics', 'Web Protocols', 'Browsers & Servers', 'DNS & Hosting'],
      progress: getUnitProgress('unit1')
    },
    {
      id: 'unit2',
      title: 'Unit II: Introduction to Markup Languages',
      description: 'Master HTML fundamentals, tables, frames, forms, and various markup languages.',
      icon: Code,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      hours: '20 Hours',
      topics: ['HTML Basics', 'Tables & Forms', 'Frames', 'Markup Languages'],
      progress: getUnitProgress('unit2')
    },
    {
      id: 'unit3',
      title: 'Unit III: Cascading Style Sheets',
      description: 'Design beautiful web pages with CSS properties, selectors, and styling techniques.',
      icon: Palette,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      hours: '10 Hours',
      topics: ['CSS Syntax', 'Selectors', 'Properties', 'Styling Techniques'],
      progress: getUnitProgress('unit3')
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Notes',
      description: 'Detailed explanations with real-world examples and code snippets for better understanding.'
    },
    {
      icon: Target,
      title: 'Practice Tests',
      description: '100+ carefully crafted questions with detailed solutions to test your knowledge.'
    },
    {
      icon: Brain,
      title: 'Interactive MCQs',
      description: 'Multiple choice questions with instant feedback and progress tracking.'
    },
    {
      icon: Award,
      title: 'Progress Tracking',
      description: 'Track your learning progress and see your completion status for each unit.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Complete Web Technology
          <span className="block text-blue-600">Learning Guide</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Master web technologies with comprehensive notes, practical examples, and extensive practice materials. 
          From Internet basics to advanced CSS styling.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/unit1"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Learning
          </Link>
          <Link
            to="/practice-test"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Take Practice Test
          </Link>
        </div>
      </div>

      {/* Units Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {units.map((unit) => (
          <Link
            key={unit.id}
            to={`/${unit.id}`}
            className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className={`${unit.color} p-6 text-white relative overflow-hidden`}>
              <div className="absolute -top-4 -right-4 opacity-20">
                <unit.icon className="w-20 h-20" />
              </div>
              <unit.icon className="w-8 h-8 mb-3" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium opacity-90">{unit.hours}</span>
                <span className="text-sm font-medium opacity-90">{unit.progress}%</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mb-3">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${unit.progress}%` }}
                />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                {unit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {unit.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {unit.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Why Choose Our Learning Platform?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/practice-test"
          className="group bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8" />
            <span className="text-2xl font-bold opacity-20">100+</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Practice Tests</h3>
          <p className="opacity-90 text-sm">
            Test your knowledge with detailed questions and comprehensive solutions.
          </p>
        </Link>

        <Link
          to="/mcq-test"
          className="group bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-bold opacity-20">MCQ</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">MCQ Tests</h3>
          <p className="opacity-90 text-sm">
            Quick assessments with instant feedback and score tracking.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;