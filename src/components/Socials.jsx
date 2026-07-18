import React from 'react';
import SocialHero from '../assets/socialmedia.jpeg'
import SocialsTwo from '../assets/socialsTwo.jpeg'
import SocialsThree from '../assets/SocialsThree.jpeg'
import SocialsFour from '../assets/socialsFour.jpeg'
import { FaInstagram } from "react-icons/fa";

import { CgMenuRight } from "react-icons/cg";
import { IoLogoTiktok } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";



const FontStyle = () => (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap');
      .font-handdrawn {
        font-family: 'Gaegu', cursive, sans-serif;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
    `}</style>
);


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
                            <FontStyle/>
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

            <section className='bg-black text-white flex justify-center flex-col items-center p-20'>
                <h2 className='text-4xl italic'>LET'S CONNECT</h2>
                <img src={SocialHero} alt="" className='w-40' />
                <p>Joella's Art ᥫ᭡️</p>
            </section>

            <section className='bg-black flex gap-4 p-10 justify-end'>
                <FaInstagram className='text-pink-400' size={27}/>
                <IoLogoTiktok className='text-pink-400' size={27}/>
                <FaWhatsapp className='text-pink-400' size={27}/>
            </section>

            <section className='bg-black text-white flex gap-6 justify-center'>
                <div>
                    <a href="https://www.instagram.com/joellarts._/">
                        <img src={SocialsTwo} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/jerome_chigozie/">
                        <img src={SocialsThree} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.tiktok.com/@j0an25">
                        <img src={SocialsFour} alt="" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Home;