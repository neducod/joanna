import React from 'react';
import ScrollAnimation from './Scrollcomics'
import { CgMenuRight } from "react-icons/cg";


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
            <section>
                <div>
                    <ScrollAnimation/>
                </div>
                <div>
                    <p>For as long as I can remember, drawing hasn't just been something I do—it’s how I make sense of the world.</p>
                    <p>When I was younger, my ideas always felt bigger than what I could put on paper. I’d spend hours sitting on the floor with whatever pens or pencils I could find, trying to capture the stories, characters, and vibrant worlds living inside my head.</p>
                    <p>As I grew into digital art, that feeling only deepened. I taught myself how to sketch, color, and render by trial and error—late nights, countles tutorials, and thousands of undrawn ideas gradually taking shape on screen. Digital art became my sanctuary, a place where imagination didn't have limits.</p>
                    <p>But art requires more than just passion; it takes the right tools to bring a vision fully to life.</p>
                    <p>Right now, I’m working with hardware that is slowly reaching its limit. Lags, software crashes, and physical glitches mean that spending hours on a single piece often turns into a race against technical roadblocks. Sometimes, the screen simply can't hold the detail I want to give you.</p>
                </div>
            </section>
            <h1>gu</h1>
        </>
    )
}

export default Home;