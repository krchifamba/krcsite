import { Head } from '@inertiajs/react';
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

export default function Layout({ children } : {children:any}) {

    useEffect(() => {
        document.body.classList.add("bg-gray-900", "p-4");
    
        return () => {
          document.body.classList.remove("bg-gray-900", "p-4");
        };
      }, []);
    
    return (<> 
            <Head>
                <meta 
                    charSet="UTF-8"
                    name="viewport" 
                    content="width=device-width, initial-scale=1.0, ie=edge"
                    http-equiv="X-UA-Compatible"
                />
            </Head>
            <div className='bg-gray-900 min-h-lvh container mx-auto flex flex-col items-center text-white'>  
                    <main className=''>
                        <BrowserRouter>
                            <Navbar />
                        </BrowserRouter> 
                        {children}
                    </main>
            </div>
            <Footer />
        </>
    );
}