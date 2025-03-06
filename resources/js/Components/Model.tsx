import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  prescription: any;
}

const Modal = ({ isOpen, onClose, prescription }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Prescription Details</h2>
        
        {/* Displaying Prescription Details */}
        <div className="mb-2">
          <strong>Prescription ID:</strong> {prescription.id}
        </div>
        <div className="mb-2">
          <strong>Status:</strong> {prescription.status}
        </div>
        <div className="mb-2">
          <strong>Note:</strong> {prescription.note}
        </div>
        <div className="mb-2">
          <strong>Delivery Address:</strong> {prescription.delivery_address}
        </div>
        <div className="mb-2">
          <strong>Delivery Time:</strong> {prescription.delivery_time}
        </div>
        
        {/* Displaying Images */}
        <div className="mb-4">
          <strong>Images:</strong>
          <div className="grid grid-cols-2 gap-4 mt-2">
          {prescription.image_url && prescription.image_url.map((imageUrl:any, index:any) => (
  <img key={index} src={imageUrl} alt={`Prescription Image ${index + 1}`} className="w-full h-auto rounded-md" />
))}

          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
