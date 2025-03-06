import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import Dropzone from "react-dropzone";
import InputLabel from "@/Components/InputLabel";
import PublicLayout from "@/Layouts/PublicLayout";

const CreatePrescription = () => {
    const { auth } = usePage().props;
    const { data, setData, post, errors } = useForm({
        images: [] as File[],
        note: "",
        delivery_address: "",
        delivery_time: "",
    });


    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    
        const formData = new FormData();
        data.images.forEach((image) => {
            formData.append('images[]', image);
        });
        formData.append('note', data.note);
        formData.append('delivery_address', data.delivery_address);
        formData.append('delivery_time', data.delivery_time);
    
        post(route('client.prescriptions.store'), {
            preserveScroll: true,
        });
    };
    


    return (
        <PublicLayout auth={auth}>
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 py-12">
            <div className="bg-white shadow-md sm:rounded-lg p-6">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-8">
                        <div className="pb-8">
                            <h1 className="text-xl font-bold text-gray-900 text-center">
                                Upload Prescription
                            </h1>
                            <p className="mt-2 text-sm text-gray-600 text-center">
                                Fill in the details below to upload your prescription.
                            </p>
                            <div className="mt-6">
                                <div>
                                    <InputLabel value="Prescription Images (Max 5)" htmlFor="images" />
                                    <Dropzone
                                        onDrop={(acceptedFiles) => {
                                            setData("images", [...data.images, ...acceptedFiles].slice(0, 5));
                                        }}
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <div
                                                {...getRootProps()}
                                                className="border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer"
                                            >
                                                <input {...getInputProps()} />
                                                {data.images.length > 0 ? (
                                                    <div className="flex flex-wrap gap-4">
                                                        {data.images.map((file, index) => (
                                                            <img
                                                                key={index}
                                                                src={URL.createObjectURL(file)}
                                                                alt={`preview-${index}`}
                                                                className="h-20 w-20 object-cover rounded-md"
                                                            />
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-gray-500">
                                                        Drag and drop files here, or click to select files.
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </Dropzone>
                                    {errors.images && (
                                        <p className="text-red-500 text-sm mt-1">{errors.images}</p>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel value="Note" htmlFor="note" />
                                    <textarea
                                        id="note"
                                        value={data.note}
                                        onChange={(e) => setData("note", e.target.value)}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        rows={4}
                                        placeholder="Add any additional notes"
                                    ></textarea>
                                    {errors.note && <p className="text-red-500 text-sm mt-1">{errors.note}</p>}
                                </div>
                                <div className="mt-4">
                                    <InputLabel value="Delivery Address" htmlFor="delivery_address" />
                                    <input
                                        id="delivery_address"
                                        type="text"
                                        value={data.delivery_address}
                                        onChange={(e) => setData("delivery_address", e.target.value)}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Enter delivery address"
                                    />
                                    {errors.delivery_address && (
                                        <p className="text-red-500 text-sm mt-1">{errors.delivery_address}</p>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel value="Delivery Time" htmlFor="delivery_time" />
                                    <select
                                        id="delivery_time"
                                        value={data.delivery_time}
                                        onChange={(e) => setData("delivery_time", e.target.value)}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    >
                                        <option value="">Select a delivery time</option>
                                        <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                                        <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                                        <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                                    </select>
                                    {errors.delivery_time && (
                                        <p className="text-red-500 text-sm mt-1">{errors.delivery_time}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </PublicLayout>
    );
};

export default CreatePrescription;
