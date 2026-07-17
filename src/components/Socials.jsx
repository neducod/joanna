import React from 'react';
// import SocialMediaHero from 'joan-portfolio/src/assets/socialmedia.jpeg'
import SocialHero from '../assets/socialmedia.jpeg'

import { CgMenuRight } from "react-icons/cg";

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
        <h1>hi</h1>
        </>
    )
}

export default Home;