// import { Link } from "@inertiajs/react";

// export default function PublicLayout({ children, auth }: any) {
//     return (
//         <div className="min-h-screen flex flex-col">
//             {/* Header */}
//             <header className="bg-white p-4 shadow-md flex justify-between items-center">
//                 <Link href="/" className="max-sm:hidden whitespace-nowrap w-[53.02px] h-[31px] text-center text-blue-700 text-2xl font-bold font-['Poppins']">
//                     Easy Pharmacy
//                 </Link>
//                 <nav>
//                     {auth?.user ? (
//                         <>
//                             <Link href="/" className="mr-4 font-semibold text-gray-700 hover:text-gray-950 focus:outline-none">
//                                 Dashboard
//                             </Link>
//                             {auth.user.role === "client" && (
//                                 <>
//                                     <Link href={route("client.prescriptions.create")} className=" mr-4 font-semibold text-gray-700 hover:text-gray-950 focus:outline-none ">
//                                         Create Prescription
//                                     </Link>
//                                     <Link href={route("client.prescriptions.index")} className=" mr-4 font-semibold text-gray-700 hover:text-gray-950 focus:outline-none ">
//                                     Prescription</Link>
//                                 </>
//                             )}
//                         </>
//                     ) : (
//                         <>
//                             <Link href={route("login")} className="mr-4">
//                                 Log in
//                             </Link>
//                             <Link href={route("register")}>Register</Link>
//                         </>
//                     )}
//                 </nav>
//             </header>
            

//             {/* Page-specific content */}
//             <main className="flex-grow">{children}</main>

            

//             {/* Footer */}
//             <footer className="bg-blue-500 text-white text-center p-4 mt-8">
//                 © 2025 Easy Pharmacy. All Rights Reserved.
//             </footer>
//         </div>
//     );
// }



import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function PublicLayout({ children }: any) {
    const { auth } = usePage().props;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white p-4 shadow-md flex justify-between items-center">
                <Link
                    href="/"
                    className="max-sm:hidden whitespace-nowrap w-[53.02px] h-[31px] text-center text-blue-700 text-2xl font-bold font-['Poppins']"
                >
                    Easy Pharmacy
                </Link>

                <nav className="flex items-center space-x-4">
                    {auth?.user ? (
                        <>
                            <Link
                               href="/"
                                className="font-semibold text-gray-700 hover:text-gray-950"
                            >
                                Dashboard
                            </Link>

                            {auth.user.role === "client" && (
                                <>
                                    <Link
                                        href={route("client.prescriptions.create")}
                                        className="font-semibold text-gray-700 hover:text-gray-950"
                                    >
                                        Create Prescription
                                    </Link>
                                    <Link
                                        href={route("client.prescriptions.index")}
                                        className="font-semibold text-gray-700 hover:text-gray-950"
                                    >
                                        Prescription
                                    </Link>
                                </>
                            )}

                            {/* Profile Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="inline-flex items-center font-semibold text-gray-700 hover:text-gray-950 focus:outline-none"
                                >
                                    {auth.user.name}
                                    <svg
                                        className="ml-2 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden">
                                        <Link
                                            href={route('profile.edit')}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Log Out
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href={route("login")} className="font-semibold text-gray-700 hover:text-gray-950">
                                Log in
                            </Link>
                            <Link href={route("register")} className="font-semibold text-gray-700 hover:text-gray-950">
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>

            {/* Page-specific content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-blue-500 text-white text-center p-4 mt-8">
                © 2025 Easy Pharmacy. All Rights Reserved.
            </footer>
        </div>
    );
}
