import { Head } from "@inertiajs/react";
import { Suspense, lazy } from "react";
import PreserveScroll from "../Components/KeepScroll";

const Navbar = lazy(() => import("../Components/Navbar"));
const Footer = lazy(() => import("../Components/Footer"));

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="scroll-smooth w-screen bg-gray-900 text-white max-w-full overflow-hidden">
                <Suspense fallback={<div>Loading...</div>}>
                    <PreserveScroll />
                    <Navbar />
                        <main className="w-full">{children}</main>
                    <Footer />
                </Suspense>
            </div>
        </>
    );
}
