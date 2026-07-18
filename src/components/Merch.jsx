import React from 'react';
import { CgMenuRight } from "react-icons/cg";
// import './App.css'
import { WiShowers } from "react-icons/wi";
import { LuSearchCheck } from "react-icons/lu";
import { PiMoneyDuotone } from "react-icons/pi";

import Headset from "../assets/headset.jpeg";
import Books from "../assets/book.jpeg";
import Pencils from "../assets/pencils.jpeg";
import Tab from "../assets/tablet.jpeg"


import Faq from "./Merchfaq";
import Footer from "./Footer"


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
            <section className='flex justify-center items-center gap-4 flex-col p-20'>
                <h2 className='text-4xl text-center mb-10'>How you can help</h2>
                <div className='flex gap-6 justify-center items-center'>
                    <div className='flex flex-col bg-white rounded-3xl'>
                        <div className='px-6 py-8 sm:p-10 sm:pb-6'>
                            <div className='grid items-center justify-center w-full grid-cols-1 text-left'>
                                <WiShowers />
                                <h3 className='text-sm font-medium tracking-tighter text-gray-600 lg:text-lg'>Check my wishlist</h3>
                                <p className='mt-2 text-sm text-gray-500 w-80'>See what I have been dreaming of to fully focus on my career as a digital artist</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white rounded-3xl'>
                        <div className='px-6 py-8 sm:p-10 sm:pb-6'>
                            <div className='grid items-center justify-center w-full grid-cols-1 text-left'>
                                <LuSearchCheck />
                                <h3 className='text-sm font-medium tracking-tighter text-gray-600 lg:text-lg'>See if there's any one that interest's you</h3>
                                <p className='mt-2 text-sm text-gray-500 w-80'>After checking out my wishlist you can see if there's any that yoou'd like to support me with</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white rounded-3xl'>
                        <div className='px-6 py-8 sm:p-10 sm:pb-6'>
                            <div className='grid items-center justify-center w-full grid-cols-1 text-left'>
                                <PiMoneyDuotone />
                                <h3 className='text-sm font-medium tracking-tighter text-gray-600 lg:text-lg'>Make any donation </h3>
                                <p className='mt-2 text-sm text-gray-500'>You can make donations to any of my account, even as little as 1USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center gap-4 flex-col p-10'>
                <div className='mb-16 flex flex-col justify-center items-center gap-4'>
                    <h2 className='text-4xl'>My digital artist wishlist</h2>
                    <p>To help support my digital art journey</p>
                </div>
                <div className='flex flex-row gap-8'>
                    <div className='w-[300px] h-[250px] -translate-x-1.5 -translate-y-1.5 bg-[#ff66a3] border-3 border-black shadow-[12px_12px_0_#000000] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-x-1.5 hover:translate-y-0'>
                        <div class="text-sm font-black w-full h-8 bg-white px-3 py-1.25 text-black border-b-3 border-black">
                            <p>Tablet</p>
                        </div>
                        <div class="p-1.5 px-3 text-sm font-semibold">
                            <img src={Tab} alt="" className='w-36'/>
                            <br />
                            <button class="px-2.5 py-1.25 mt-0.5 border-3 border-black shadow-[3px_3px_0_#000000] font-[750] bg-[#4ade80] cursor-pointer transition-all duration-300 ease-in-out hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#000000] hover:bg-[#1ac2ff] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
                            Donate to buy
                            </button>
                        </div>
                    </div>
                    <div className='w-[300px] h-[250px] -translate-x-1.5 -translate-y-1.5 bg-[#ff66a3] border-3 border-black shadow-[12px_12px_0_#000000] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-x-1.5 hover:translate-y-0'>
                        <div class="text-sm font-black w-full h-8 bg-white px-3 py-1.25 text-black border-b-3 border-black">
                            <p>Sketch Pads</p>
                        </div>
                        <div class="p-1.5 px-3 text-sm font-semibold">
                            <img src={Books} alt="" className='w-36' />
                            <br />
                            <button class="px-2.5 py-1.25 mt-0.5 border-3 border-black shadow-[3px_3px_0_#000000] font-[750] bg-[#4ade80] cursor-pointer transition-all duration-300 ease-in-out hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#000000] hover:bg-[#1ac2ff] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
                            Donate to buy
                            </button>
                        </div>
                    </div>
                    <div className='w-[300px] h-[250px] -translate-x-1.5 -translate-y-1.5 bg-[#ff66a3] border-3 border-black shadow-[12px_12px_0_#000000] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-x-1.5 hover:translate-y-0'>
                        <div class="text-sm font-black w-full h-8 bg-white px-3 py-1.25 text-black border-b-3 border-black">
                            <p>Pencils</p>
                        </div>
                        <div class="p-1.5 px-3 text-sm font-semibold">
                            <img src={Pencils} alt="" className='w-20' />
                            <br />
                            <button class="px-2.5 py-1.25 mt-0.5 border-3 border-black shadow-[3px_3px_0_#000000] font-[750] bg-[#4ade80] cursor-pointer transition-all duration-300 ease-in-out hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#000000] hover:bg-[#1ac2ff] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
                            Donate to buy
                            </button>
                        </div>
                    </div>
                    <div className='w-[300px] h-[250px] -translate-x-1.5 -translate-y-1.5 bg-[#ff66a3] border-3 border-black shadow-[12px_12px_0_#000000] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-x-1.5 hover:translate-y-0'>
                        <div class="text-sm font-black w-full h-8 bg-white px-3 py-1.25 text-black border-b-3 border-black">
                            <p>Headsets</p>
                        </div>
                        <div class="p-1.5 px-3 text-sm font-semibold">
                            <img src={Headset} alt="" className='w-29' />
                            <button class="px-2.5 py-1.25 mt-2 border-3 border-black shadow-[3px_3px_0_#000000] font-[750] bg-[#4ade80] cursor-pointer transition-all duration-300 ease-in-out hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0_#000000] hover:bg-[#1ac2ff] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
                            Donate to buy
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Faq/>
            </section>
            <section>
                <Footer/>
            </section>

        </>
    )
}

export default Home;