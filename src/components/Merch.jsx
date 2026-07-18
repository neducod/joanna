import React from 'react';
import { CgMenuRight } from "react-icons/cg";
// import './App.css'
import { WiShowers } from "react-icons/wi";



function Home() {
    return (
        <>
            <nav className='bg-black text-white flex justify-around md:p-10 md:gap-20'>
                <div>
                    <h1>Joella's Art</h1>
                </div>
                <div>
                    <div className='md:hidden'>
                        <CgMenuRight />
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex gap-10'>
                            {/* <FontStyle/> */}
                            <li>About</li>
                            <li>Art Journey</li>
                            <li>Support me</li>
                            <li>Work with me</li>
                            <li>Social media</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className='bg-[#cf9fff] flex justify-center items-center p-20 flex-col gap-6'>
                <h2 className='text-3xl w-3xl'>Hello, you could be part of bringing my dreams to reality</h2>
                <p className='w-5xl text-center'>I am a digital artist and i ahev limited tools and resources to work, if you could be part of my art journey into turning my dreams to realtiy where i create beautiful digital art works</p>
            </section>
            <section className='flex justify-center items-center gap-4 flex-col p-10'>
                <h2 className='text-4xl'>How you can help</h2>
                <div className='flex gap-6 justify-center items-center'>
                    <div className='flex flex-col bg-white rounded-3xl'>
                        <div className='px-6 py-8 sm:p-10 sm:pb-6'>
                            <div className='grid items-center justify-center w-full grid-cols-1 text-left'>
                                <WiShowers />
                                <h3 className='text-sm font-medium tracking-tighter text-gray-600 lg:text-lg'>Check my wishlist</h3>
                                <p className='mt-2 text-sm text-gray-500'>See what i have been dreaming of</p>
                            </div>
                        </div>
                    </div>
                    <p>See if there's any one that interest's you</p>
                    <p>Make any donations to any of my account, even as little as 1USD</p>
                </div>
            </section>
            <section>
                <h2>My digital artist wishlist</h2>
                <p>To help support my journey</p>
                <div>
                    <div>
                        <p>Tablet</p>
                    </div>
                    <div>
                        <p>Hard cover</p>
                    </div>
                    <div>
                        <p>Pencils</p>
                    </div>
                    <div>
                        <p>Headsets</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>FAQ</h2>
                <p>Have any questions about supporting me</p>
                <div>
                    <p>How can I help</p>
                    <p>What do you plan on doing</p>
                    <p>How do you plan on getting it</p>
                </div>
            </section>

        </>
    )
}

export default Home;