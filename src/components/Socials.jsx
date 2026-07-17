import React from 'react';
import SocialHero from '../assets/socialmedia.jpeg'
import SocialsTwo from '../assets/socialsTwo.jpeg'
import SocialsThree from '../assets/SocialsThree.jpeg'
import SocialsFour from '../assets/socialsFour.jpeg'
import { FaInstagram } from "react-icons/fa";

import { CgMenuRight } from "react-icons/cg";
import { IoLogoTiktok } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
    return (
        <>
            <nav>
                <div>
                    <h1>Joella's Art</h1>
                </div>
                <div>
                    <div>
                        <CgMenuRight />
                    </div>
                    <div>
                        {/* on desktop */}
                        <ul>
                            <li>Comics</li>
                            <li>Merchandise</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Social media</li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section>
                {/* THIS WOULD BE MY HERO SECTION */}
                <h2>LET'S CONNECT</h2>
                <img src={SocialHero} alt="" />
                <p>Joella's Art</p>
            </section>

            <section>
                <FaInstagram />
                <IoLogoTiktok />
                <FaWhatsapp />
            </section>

            <section className='flex'>
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