import React from 'react';

export interface ProgramItem {
  time: string;
  activity: string;
  facilitator?: string;
}

interface ProgramTableProps {
  data: ProgramItem[];
}

const ProgramTable: React.FC<ProgramTableProps> = ({ data }) => {
  const renderContent = (content: string | undefined, isActivity: boolean = false) => {
    if (!content) return null;
    const lines = content.split('\n');

    return (
      <React.Fragment>
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {isActivity && i === 0 ? (
              <span className="font-semibold">{line}</span>
            ) : (
              line
            )}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full mt-8 border-collapse">
        <thead>
          <tr className="bg-[#2EA024] text-white text-left sticky top-0 z-10">
            <th className="p-4 rounded-tl-lg sticky left-0 bg-[#2EA024]">Time</th>
            <th className="p-4">Activity</th>
            <th className="p-4 rounded-tr-lg">Speaker/Facilitator</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0">
              <td className="p-4 sticky left-0 bg-white">
                {renderContent(item.time)}
              </td>
              <td className="p-4">
                {renderContent(item.activity, true)}
              </td>
              <td className="p-4">
                {renderContent(item.facilitator)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramTable;