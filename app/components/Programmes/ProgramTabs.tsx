import React, { useState } from 'react';

interface ProgramData {
  [key: string]: any[];
}

interface ProgramTabsProps {
  programData: ProgramData;
  onTabChange: (tab: string) => void;
}

const programDates: { [key: string]: string } = {
  'Day 1': 'Thursday October 30th 2025',
  'Day 2': 'Friday 31st October, 2025',
  'Day 3': 'Saturday 1st November 2025',
};

const ProgramTabs: React.FC<ProgramTabsProps> = ({ programData, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(programData)[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (

    <div className="flex justify-between space-x-4 mb-8 w-full">
        {Object.keys(programData).map((day) => (
            <button
            key={day}
            onClick={() => handleTabClick(day)}
            className={`
                flex-1 py-3 px-6 rounded-lg font-bold text-lg transition-colors
                ${activeTab === day ? 'bg-[#2EA024] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
            `}
            >
            {day} {programDates[day]}
            </button>
        ))}
    </div>
  );
};

export default ProgramTabs;