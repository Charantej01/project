import React, { useState } from 'react';

interface Evidence {
  id: number;
  name: string;
  description: string;
  timestamp: string;
  status: string;
}

const EvidenceProtectionSystem = () => {
  const [evidence, setEvidence] = useState<Evidence[]>([
    { id: 1, name: 'Evidence 1', description: 'This is evidence 1', timestamp: '2022-01-01 12:00:00', status: 'Pending' },
    { id: 2, name: 'Evidence 2', description: 'This is evidence 2', timestamp: '2022-01-02 12:00:00', status: 'Verified' },
    { id: 3, name: 'Evidence 3', description: 'This is evidence 3', timestamp: '2022-01-03 12:00:00', status: 'Pending' },
  ]);

  const [newEvidence, setNewEvidence] = useState<Evidence>({ id: 0, name: '', description: '', timestamp: '', status: 'Pending' });

  const addEvidence = () => {
    setEvidence([...evidence, { ...newEvidence, id: evidence.length + 1 }]);
    setNewEvidence({ id: 0, name: '', description: '', timestamp: '', status: 'Pending' });
  };

  const updateEvidence = (id: number, status: string) => {
    setEvidence(evidence.map((e) => (e.id === id ? { ...e, status } : e)));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900">Evidence Protection System Using Blockchain Technology</h1>
      <div className="flex flex-col mt-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {evidence.map((e) => (
                    <tr key={e.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{e.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{e.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{e.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{e.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{e.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {e.status === 'Pending' ? (
                          <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => updateEvidence(e.id, 'Verified')}
                          >
                            Verify
                          </button>
                        ) : (
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => updateEvidence(e.id, 'Pending')}
                          >
                            Unverify
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-xl font-bold text-gray-900">Add New Evidence</h2>
        <div className="flex flex-col mt-4">
          <label className="text-sm text-gray-500">Name</label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={newEvidence.name}
            onChange={(e) => setNewEvidence({ ...newEvidence, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm text-gray-500">Description</label>
          <textarea
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={newEvidence.description}
            onChange={(e) => setNewEvidence({ ...newEvidence, description: e.target.value })}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm text-gray-500">Timestamp</label>
          <input
            type="datetime-local"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={newEvidence.timestamp}
            onChange={(e) => setNewEvidence({ ...newEvidence, timestamp: e.target.value })}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={addEvidence}
        >
          Add Evidence
        </button>
      </div>
    </div>
  );
};

export default EvidenceProtectionSystem;