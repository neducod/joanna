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
            <nav className='bg-black text-white flex justify-around md:p-10'>
                <div>
                    <h1>Joella's Art</h1>
                </div>
                <div>
                    <div className='md:hidden'>
                        <CgMenuRight />
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex gap-8'>
                            <FontStyle/>
                            <li>Comics</li>
                            <li>Merchandise</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Social media</li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className='bg-black text-white'>
                <h2>LET'S CONNECT</h2>
                <img src={SocialHero} alt="" className='w-40' />
                <p>Joella's Art</p>
            </section>

            <section className='bg-black'>
                <FaInstagram />
                <IoLogoTiktok />
                <FaWhatsapp />
            </section>

            <section className='flex bg-black text-white'>
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