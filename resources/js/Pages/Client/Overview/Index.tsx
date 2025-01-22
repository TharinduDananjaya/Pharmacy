import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

interface WelcomeProps {
    auth: {
        user: {
            role: string;
        };
    };
    services: Array<any>;
}

export default function Index({
    auth,
}: WelcomeProps & { search?: string }) {
    return (
        <>
            <Head title="Welcome" />
            <div
                id="home"
                className="flex justify-between items-center bg-white p-4 shadow-md"
            >
                <Link className="flex items-center" href="/">
                    <div className="max-sm:hidden whitespace-nowrap w-[53.02px] h-[31px] text-center text-blue-700 text-2xl font-bold font-['Poppins']">
                        Easy Pharmacy
                    </div>
                </Link>
                <div>
                    {auth.user ? (
                        <>
                            <Link
                                href={
                                    auth.user.role === "admin"
                                        ? route("admins.overview.index")
                                        : route("client.overviews.index")
                                }
                                className="font-semibold text-gray-700 hover:text-gray-950 focus:outline-none"
                            >
                                Dashboard
                            </Link>
                            {auth.user.role === "client" && (
                                <Link
                                    href={route("client.prescriptions.create")}
                                    className="ml-4 font-semibold text-gray-700 hover:text-gray-950 focus:outline-none"
                                >
                                    Create Prescription
                                </Link>
                            )}
                            {auth.user.role === "client" && (
                                <Link
                                    href={route("client.prescriptions.index")}
                                    className="ml-4 font-semibold text-gray-700 hover:text-gray-950 focus:outline-none"
                                >
                                    Prescription
                                </Link>
                            )}
                        </>
                    ) : (
                        <>
                            <a
                                href="#about-us"
                                className="mr-4 font-semibold text-gray-700 hover:text-gray-950 focus:outline-none"
                            >
                                About us
                            </a>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-700 hover:text-gray-950"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-700 hover:text-gray-950"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <div className="mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden sm:rounded-lg shadow-lg mt-5 bg-gradient-to-r from-blue-600 to-blue-300 p-5">
                    <h2 className="text-white text-2xl font-bold mb-2">
                        Hi, Have a Nice Day!
                    </h2>
                    <p className="text-white text-base font-normal mb-4">
                        Order with Prescription
                    </p>
                </div>
            </div>

            {/* About Us Section */}
            <div id="about-us" className="mx-auto sm:px-6 lg:px-8 scroll-smooth">
                <div className="overflow-hidden sm:rounded-lg shadow-lg mt-5 bg-white">
                    <div className="p-6 text-left text-gray-900 font-bold text-3xl bg-gradient-to-r from-blue-300 to-blue-500 rounded-t-lg">
                        About Us
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                        <div className="col-span-2 p-4">
                            <p className="p-6 text-gray-900 capitalize text-lg leading-relaxed tracking-wide max-h-48 max-lg:overflow-y-auto">
                                <span className="font-bold">Easy Pharmacy</span>
                                Mission: The pharmacy's purpose, such as
                                providing quality service, caring for patients'
                                health, or distributing medication efficiently.
                                Services: The services the pharmacy offers, such
                                as prescription fulfillment, NHS services, or
                                private services. Values: The pharmacy's values,
                                such as providing safe, efficient, and
                                economical care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
