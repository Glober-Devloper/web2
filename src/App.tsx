import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Unit1Page from './pages/Unit1Page';
import Unit2Page from './pages/Unit2Page';
import Unit3Page from './pages/Unit3Page';
import PracticeTestPage from './pages/PracticeTestPage';
import MCQTestPage from './pages/MCQTestPage';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header 
              onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
              sidebarOpen={sidebarOpen}
            />
            <div className="flex">
              <Sidebar 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)} 
              />
              <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
                <div className="p-6 pt-20">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/unit1/*" element={<Unit1Page />} />
                    <Route path="/unit2/*" element={<Unit2Page />} />
                    <Route path="/unit3/*" element={<Unit3Page />} />
                    <Route path="/practice-test" element={<PracticeTestPage />} />
                    <Route path="/mcq-test" element={<MCQTestPage />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;