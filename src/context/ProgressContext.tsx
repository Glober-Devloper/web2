import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  completedSections: Set<string>;
  markAsCompleted: (sectionId: string) => void;
  isCompleted: (sectionId: string) => boolean;
  getUnitProgress: (unitId: string) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem('completedSections');
    if (stored) {
      setCompletedSections(new Set(JSON.parse(stored)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('completedSections', JSON.stringify([...completedSections]));
  }, [completedSections]);

  const markAsCompleted = (sectionId: string) => {
    setCompletedSections(prev => new Set([...prev, sectionId]));
  };

  const isCompleted = (sectionId: string) => completedSections.has(sectionId);

  const getUnitProgress = (unitId: string) => {
    const unitSections = [...completedSections].filter(section => section.startsWith(unitId));
    const totalSections = unitId === 'unit1' ? 8 : unitId === 'unit2' ? 12 : 6;
    return Math.round((unitSections.length / totalSections) * 100);
  };

  return (
    <ProgressContext.Provider value={{ 
      completedSections, 
      markAsCompleted, 
      isCompleted, 
      getUnitProgress 
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};