import React, { useState } from 'react';
import { ProgramData } from './Program';

interface ProgramTabsProps {
  programData: ProgramData;
  onTabChange: (tab: string) => void;
}

const ProgramTabs: React.FC<ProgramTabsProps> = ({ programData, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(programData)[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-8 w-full">
      {Object.keys(programData).map((day) => (
        <button
          key={day}
          onClick={() => handleTabClick(day)}
          className={`
            flex-1 py-3 px-6 rounded-lg font-bold text-lg transition-colors
            ${activeTab === day ? 'bg-[#2EA024] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
          `}
        >
          {day} <span className="hidden md:inline">{programData[day].date}</span>
        </button>
      ))}
    </div>
  );
};

export default ProgramTabs;