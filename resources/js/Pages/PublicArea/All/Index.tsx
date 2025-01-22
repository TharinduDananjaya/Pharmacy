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
    services = [],
    search = "",
}: WelcomeProps & { search?: string }) {
    const [searchTerm, setSearchTerm] = useState<string>(search || "");

    const [imgFilter, setImgFilter] = useState(true);

   

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImgFilter(false);
        setSearchTerm(e.target.value);

        // if (imgFilter === false) {
        //     setImgFilter(true);
        // }
    };



  

    useEffect(() => {
        const aboutUsLink = document.querySelector('a[href="#about-us"]');
        const homeLink = document.querySelector('a[href="#home"]');

        const handleSmoothScroll = (e: Event, targetId: string) => {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        };

        if (aboutUsLink) {
            aboutUsLink.addEventListener("click", (e) =>
                handleSmoothScroll(e, "#about-us")
            );
        }

        if (homeLink) {
            homeLink.addEventListener("click", (e) =>
                handleSmoothScroll(e, "#home")
            );
        }

        return () => {
            if (aboutUsLink) {
                aboutUsLink.removeEventListener("click", (e) =>
                    handleSmoothScroll(e, "#about-us")
                );
            }
            if (homeLink) {
                homeLink.removeEventListener("click", (e) =>
                    handleSmoothScroll(e, "#home")
                );
            }
        };
    }, []);

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
                    
                    ) : (
                        <>
                            <a
                                href="#about-us"
                                className=" mr-4 font-semibold text-gray-700 hover:text-gray-950 focus:outline-none "
                            >
                                About us
                            </a>

                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-700 hover:text-gray-950 "
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-700 hover:text-gray-950  "
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <div className="mx-auto sm:px-6 lg:px-8 ">
                <div className="overflow-hidden sm:rounded-lg shadow-lg mt-5 bg-gradient-to-r from-blue-600 to-blue-300  p-5">
                    <h2 className="text-white text-2xl font-bold mb-2">
                        Hi, Have a Nice day!
                    </h2>
                    <p className="text-white text-base font-normal mb-4">
                    Order with Prescription
                    </p>

                    
                </div>
            </div>

            <div className=" overflow-hidden sm:rounded-lg shadow-lg mt-5 mx-10 bg-gradient-to-r ">
            <img src="https://wallpapers.com/images/hd/pharmacy-background-rgw2nzvgoqj34scj.jpg" alt="" />
            </div>
           

            {imgFilter && (
                <div className="flex flex-wrap items-center justify-around p-4 mt-4">
                    
                </div>
            )}

            

       

            {/* about Us */}
            <div
                id="about-us"
                className="mx-auto sm:px-6 lg:px-8 scroll-smooth"
            >
                <div className="overflow-hidden sm:rounded-lg shadow-lg mt-5 bg-white">
                    <div className="p-6 text-left text-gray-900 font-bold text-3xl bg-gradient-to-r from-blue-300 to-blue-500  rounded-t-lg">
                        About Us
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                        <div className="col-span-2 p-4">
                            <p className=" p-6 text-gray-900 capitalize text-lg leading-relaxed tracking-wide max-h-48 max-lg:overflow-y-auto">
                                <span className="font-bold">Easy Pharmacy </span>
                                 Mission
                                    The pharmacy's purpose, such as providing quality service, caring for patients' health, or distributing medication efficiently
                                    Services
                                    The services the pharmacy offers, such as prescription fulfillment, NHS services, or private services
                                    Values
                                    The pharmacy's values, such as providing safe, efficient, and economical care
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            
                        </div>
                    </div>
                </div>
            </div>

           
            
        </>
    );
}
