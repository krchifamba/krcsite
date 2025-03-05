import { Head } from '@inertiajs/react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Components/new navbar'
import Footer from '../Components/Footer';

export default function Layout({ children } : {children:any}) {

    return (
        <html className='scroll-smooth'>
            <Head>
                <meta 
                    charSet="UTF-8"
                    name="viewport" 
                    content="width=device-width, initial-scale=1.0, ie=edge"
                    http-equiv="X-UA-Compatible"
                />
            </Head>
            <body className='w-screen bg-gray-900 text-white max-w-full overflow-x-hidden'>  
                <main className='w-full'>
                    <BrowserRouter>
                        <Navbar />
                    </BrowserRouter> 
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}