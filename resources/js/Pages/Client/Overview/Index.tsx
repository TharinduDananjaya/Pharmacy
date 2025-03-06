import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";


interface WelcomeProps {
    auth: {
        user: {
            role: string;
        };
    };
}

export default function Index({ auth }: WelcomeProps) {
    return (
        <PublicLayout auth={auth}>
            <Head title="Welcome" />

            <section className="mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden sm:rounded-lg shadow-lg mt-5 bg-gradient-to-r from-blue-600 to-blue-300 p-5">
                    <h2 className="text-white text-2xl font-bold mb-2">Hi, Have a Nice Day!</h2>
                    <p className="text-white text-base font-normal mb-4">Order with Prescription</p>
                </div>
            </section>

            <section id="about-us" className="mx-auto sm:px-6 lg:px-8 scroll-smooth">
                <div className="overflow-hidden sm:rounded-lg shadow-lg mt-5 bg-white">
                    <div className="p-6 text-left text-gray-900 font-bold text-3xl bg-gradient-to-r from-blue-300 to-blue-500 rounded-t-lg">
                        About Us
                    </div>
                    <div className="p-6">
                        <p className="text-gray-900 capitalize text-lg leading-relaxed">
                            <span className="font-bold">Easy Pharmacy</span> Mission: The pharmacy's purpose, such as providing quality service, caring for patients' health, or distributing medication efficiently. Services: The services the pharmacy offers, such as prescription fulfillment, NHS services, or private services. Values: The pharmacy's values, such as providing safe, efficient, and economical care.
                        </p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
