import React from "react";
import { usePage } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

const PrescriptionList = () => {
    const { prescriptions, auth }: any = usePage().props;  // Get prescriptions and auth from the page props

    return (
        <PublicLayout auth={auth}>
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 py-12">
            <div className="bg-white shadow-md sm:rounded-lg p-6">
                <h1 className="text-xl font-bold text-gray-900 text-center">
                    Your Prescriptions
                </h1>
                <table className="min-w-full mt-6">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">ID</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prescriptions.map((prescription:any) => (
                            <tr key={prescription.id}>
                                <td className="px-6 py-3 text-sm text-gray-900">{prescription.id}</td>
                                <td className="px-6 py-3 text-sm text-gray-900">{prescription.status}</td>
                                <td className="px-6 py-3 text-sm text-gray-900">
                                    <button
                                        onClick={() => alert(`Edit prescription with ID: ${prescription.id}`)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => alert(`Delete prescription with ID: ${prescription.id}`)}
                                        className="ml-2 text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </PublicLayout>
    );
};

export default PrescriptionList;
