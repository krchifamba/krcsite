import { Head } from "@inertiajs/react";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../Components/new navbar"));
const Footer = lazy(() => import("../Components/Footer"));

export default function Layout({ children }: { children: any }) {
    return (
        <html className="scroll-smooth">
            <Head>
                <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, ie=edge" http-equiv="X-UA-Compatible" />
            </Head>
            <body className="w-screen bg-gray-900 text-white max-w-full overflow-x-hidden">
                <Suspense fallback={<div>Loading...</div>}>
                    <main className="w-full">
                        <Navbar />
                        {children}
                    </main>
                    <Footer />
                </Suspense>
            </body>
        </html>
    );
}
