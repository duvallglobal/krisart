'use client'

import { useState } from 'react'

export default function AdminCustomRequests() {
  const [requests, setRequests] = useState([
    { id: 1, client: 'Alice Brown', project: 'Custom Mural', status: 'New' },
    { id: 2, client: 'Charlie Davis', project: 'Portrait Commission', status: 'In Progress' },
    { id: 3, client: 'Eva Green', project: 'Sculpture Design', status: 'Completed' },
  ])

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Custom Requests</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">{request.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.client}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.project}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">View Details</button>
                  <button className="text-green-600 hover:text-green-900">Update Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

