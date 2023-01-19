import React from 'react';
import Head from 'next/head';
import Navbar from '../molecules/navbar';


interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>My App</title>
            </Head>
            <div>
                <main className='px-[82px]'>
                    {children}
                </main>
            </div>

        </>
    );
};

export default Layout;