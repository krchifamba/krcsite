import { Link } from '@inertiajs/react';

export default function Layout({ children }) {
    return (<> 
            <head>
                <meta 
                    charset="UTF-8"
                    name="viewport" 
                    content="width=device-width, initial-scale=1.0, ie=edge"
                    http-equiv="X-UA-Compatible"
                />
            </head>
            <body className='bg-gray-900 flex justify-self-center flex-col min-h-screen mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white'>
                    <div className=''>
                        <div className='px-4 py-4 flex justify-between '>
                            <div> <Link className='' href='/'>Home</Link></div>
                            <div className='w-1/4 flex justify-around'>
                                <Link href="/about">About</Link>
                                <Link href="/portfolio">Portfolio</Link>
                                <Link href="/contact">Contact Me</Link>
                                <Link href='/learn'>Learn</Link>
                            </div>
                        </div>    
                    </div>
                    <main className='items-center flex flex-col justify-center'>
                        {children}
                    </main>
                    <footer>
                        <ul className='py-4 flex justify-around'>
                            <li>Horley, Surrey </li>
                            <li>07530258756</li>
                            <li>kchifamba9@outlook.com</li>
                            <li>GitHub</li>
                            <li>LinkedIn</li>
                        </ul>
                    </footer>
            </body>
        </>
    );
}