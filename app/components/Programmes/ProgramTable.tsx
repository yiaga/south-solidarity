import React from 'react';
import { DayData, ProgramItem } from './Program'; // Import types from the main file

interface ProgramTableProps {
  dayData: DayData;
}

// A helper component for rendering a person's name and affiliation
const PersonDetails: React.FC<{ people: { name: string; affiliation?: string }[] }> = ({ people }) => (
  <ul className="list-disc list-inside space-y-0.5">
    {people.map((person, i) => (
      <li key={i}>{person.name} {person.affiliation && <span className="text-xs text-gray-500">({person.affiliation})</span>}</li>
    ))}
  </ul>
);

const ProgramTable: React.FC<ProgramTableProps> = ({ dayData }) => {
  const renderSessionRow = (session: ProgramItem, isSubSession: boolean = false) => (
    <tr key={session.title} className={`${isSubSession ? 'bg-gray-50' : 'hover:bg-gray-100'}`}>
      <td className={`px-6 py-4 whitespace-nowrap align-top text-sm font-medium ${isSubSession ? 'pl-10' : ''} text-gray-900`}>
        {session.time}
      </td>
      <td className={`px-6 py-4 align-top text-sm text-gray-500 ${isSubSession ? 'pl-10' : ''}`}>
        <h3 className={`font-semibold text-gray-900 ${isSubSession ? 'pl-4' : ''}`}>{session.title}</h3>
        {session.description && <p className={`mt-1 text-sm text-gray-600 ${isSubSession ? 'pl-4' : ''}`}>{session.description}</p>}
      </td>
      <td className="px-6 py-4 align-top text-sm text-gray-500">
        {session.facilitators.length > 0 && (
          <div className="mb-2">
            <strong className="text-gray-700">Facilitators:</strong>
            <PersonDetails people={session.facilitators} />
          </div>
        )}
        {session.speakers && session.speakers.length > 0 && (
          <div>
            <strong className="text-gray-700">Speakers:</strong>
            <PersonDetails people={session.speakers} />
          </div>
        )}
      </td>
    </tr>
  );

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Time</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Activity</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Speakers & Facilitators</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dayData.sessions.map((session, index) => (
            <React.Fragment key={index}>
              {renderSessionRow(session)}
              {session.subSessions?.map((subSession, subIndex) => (
                <React.Fragment key={`${index}-${subIndex}`}>
                  {renderSessionRow(subSession, true)}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramTable;