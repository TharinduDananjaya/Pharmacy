
import React, { useState } from 'react';

export default function Index({ prescriptions }: any) {
  const [statuses, setStatuses] = useState<any[]>(prescriptions);

  // Handle status change
  const handleStatusChange = (id: number, newStatus: string) => {
    // Update status locally
    setStatuses(statuses.map(prescription => 
      prescription.id === id ? { ...prescription, status: newStatus } : prescription
    ));

    // Optionally, make an API call to update the status in the database
    // fetch(`/update-status/${id}`, { method: 'POST', body: { status: newStatus } });
  };

  return (
    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Overview</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-4">Prescription ID</th>
            <th className="border border-gray-300 p-4">Status</th>
            <th className="border border-gray-300 p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((prescription: any) => (
            <tr key={prescription.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-4">{prescription.id}</td>
              <td className="border border-gray-300 p-4">
                <select
                  value={prescription.status}
                  onChange={(e) => handleStatusChange(prescription.id, e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                >
                  <option value="pending">Pending</option>
                  <option value="quoted">Quoted</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
              <td className="border border-gray-300 p-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  View Prescription
                </button>
                <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Prepare Quotation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
