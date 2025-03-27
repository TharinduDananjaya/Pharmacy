import Model from '@/Components/Model';
import AdminSideBar from '@/Components/shared/AdminSidebar/AdminSideBar';
import Sidebar from '@/Components/shared/AdminSidebar/AdminSideBar';
import { router, useForm, usePage } from '@inertiajs/react';
import React, { useState } from 'react';


export default function Index({ prescriptions }: any) {
  const [statuses, setStatuses] = useState<any[]>(prescriptions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);

  const { post } = useForm();

  const handleStatusChange = (id: number, newStatus: string) => {
    router.post(route('update.status', { id }), { status: newStatus });
};


  // Handle modal open
  const handleOpenModal = (prescription: any) => {
    setSelectedPrescription(prescription);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPrescription(null);
  };
  const pageProps = usePage().props;
  const { user }: any = pageProps.auth;
  return (
   
    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 py-12">
      {/* <AdminSideBar user={user} /> */}
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
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => handleOpenModal(prescription)}
                >
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

      {/* Modal to display prescription details */}
      <Model
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        prescription={selectedPrescription}
      />
    </div>
  );
}
