import React from 'react';
// import HeroImage from '../assets/heroImage.jpeg'
import { Link } from 'react-router-dom'


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

  

export default function Home() {
    const items = [
        {
          id: 'comics',
          label: 'ART JOURNEY',
          route: 'comics',
          positionClass: 'top-4 md:top-8 left-1/2 -translate-x-1/2',
          delay: 'delay-0',
          // Grid of multi-colored panels with a face
          icon: (
            <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md" viewBox="0 0 100 100">
              <rect x="10" y="10" width="80" height="80" rx="8" fill="#e97451" stroke="#000" strokeWidth="4" />
              <rect x="16" y="16" width="30" height="30" rx="4" fill="#fbc3bc" stroke="#000" strokeWidth="3" />
              <rect x="54" y="16" width="30" height="30" rx="4" fill="#a8dadc" stroke="#000" strokeWidth="3" />
              <rect x="16" y="54" width="30" height="30" rx="4" fill="#f4a261" stroke="#000" strokeWidth="3" />
              <rect x="54" y="54" width="30" height="30" rx="4" fill="#e9c46a" stroke="#000" strokeWidth="3" />
              {/* Small cute eyes/mouth in top right block */}
              <circle cx="64" cy="28" r="2.5" fill="#000" />
              <circle cx="74" cy="28" r="2.5" fill="#000" />
              <path d="M 67 33 Q 69 35 71 33" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          )
        },
        {
            id: 'merchandise',
            label: 'SUPPORT ME',
            route: 'merch',
            positionClass: 'top-20 md:top-28 right-4 md:right-20 lg:right-32',
            delay: 'delay-75',
            // Cute pink t-shirt with a face
            icon: (
              <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md" viewBox="0 0 100 100">
                <path d="M 20 30 L 35 20 L 42 27 L 50 22 L 58 27 L 65 20 L 80 30 L 73 45 L 68 43 L 68 80 L 32 80 L 32 43 L 27 45 Z" fill="#fbc3bc" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
                <circle cx="45" cy="48" r="2" fill="#000" />
                <circle cx="55" cy="48" r="2" fill="#000" />
                <path d="M 48 53 Q 50 55 52 53" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            )
        },
        {
            id: 'social-media',
            label: 'SOCIAL MEDIA',
            route: 'socials',
            positionClass: 'bottom-20 md:bottom-28 right-4 md:right-20 lg:right-32',
            delay: 'delay-150',
            // Cute smiling heart
            icon: (
              <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md" viewBox="0 0 100 100">
                <path d="M 50 82 C 15 55 15 30 32 20 C 45 12 50 25 50 25 C 50 25 55 12 68 20 C 85 30 85 55 50 82 Z" fill="#ff8da1" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
                <circle cx="40" cy="42" r="2.5" fill="#000" />
                <circle cx="60" cy="42" r="2.5" fill="#000" />
                <path d="M 46 50 Q 50 54 54 50" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Blush cheeks */}
                <ellipse cx="36" cy="47" rx="4" ry="2" fill="#ff5a79" />
                <ellipse cx="64" cy="47" rx="4" ry="2" fill="#ff5a79" />
              </svg>
            )
        },
        {
            id: 'shop',
            label: 'SHOP',
            route: 'shop',
            positionClass: 'bottom-4 md:bottom-8 left-1/2 -translate-x-1/2',
            delay: 'delay-200',
            // Blue bag with slightly sad/cute face
            icon: (
              <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md" viewBox="0 0 100 100">
                <path d="M 30 40 L 30 25 Q 30 15 40 15 L 60 15 Q 70 15 70 25 L 70 40 L 78 85 L 22 85 Z" fill="#c1f0f6" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
                <circle cx="44" cy="55" r="2.5" fill="#000" />
                <circle cx="56" cy="55" r="2.5" fill="#000" />
                <path d="M 48 64 Q 50 61 52 64" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            )
        },
        {
            id: 'about-contact',
            label: 'ABOUT/CONTACT',
            route: 'about',
            positionClass: 'bottom-20 md:bottom-28 left-4 md:left-20 lg:left-32',
            delay: 'delay-300',
            // Cute sleeping bread/stack
            icon: (
              <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md" viewBox="0 0 100 100">
                <path d="M 25 35 Q 25 22 38 22 L 62 22 Q 75 22 75 35 L 75 70 Q 75 78 62 78 L 38 78 Q 25 78 25 70 Z" fill="#e9c46a" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
                {/* Bread layers details */}
                <path d="M 25 45 L 75 45" stroke="#000" strokeWidth="4" />
                <path d="M 25 60 L 75 60" stroke="#000" strokeWidth="4" />
                {/* Sleeping face */}
                <path d="M 41 33 Q 45 36 45 33" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 55 33 Q 55 36 59 33" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
          
            )
        },
        {
            id: 'illustration',
            label: 'GALLERY',
            route: 'illustration',
            positionClass: 'top-20 md:top-28 left-4 md:left-20 lg:left-32',
            delay: 'delay-500',
            // Cute pencil pointing down
            icon: (
              <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md" viewBox="0 0 100 100">
                <path d="M 35 25 Q 35 15 50 15 Q 65 15 65 25 L 65 65 L 50 85 L 35 65 Z" fill="#8ecae6" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
                {/* Eraser band */}
                <path d="M 35 32 L 65 32" stroke="#000" strokeWidth="4" />
                <path d="M 35 22 L 65 22" stroke="#000" strokeWidth="2" fill="none" />
                {/* Pencil Tip */}
                <path d="M 39 70 L 61 70" stroke="#000" strokeWidth="4" />
                <path d="M 45 77 L 55 77 L 50 85 Z" fill="#000" />
                {/* Face */}
                <circle cx="44" cy="45" r="2" fill="#000" />
                <circle cx="56" cy="45" r="2" fill="#000" />
                <path d="M 48 51 Q 50 53 52 51" stroke="#000" strokeWidth="2" fill="none" />
              </svg>
            )
          }
        ];
    return (
        <>
            <FontStyle />
            <div className="relative w-full min-h-screen bg-[rgb(0,0,0)] flex items-center flex-col justify-center overflow-hidden font-handdrawn selection:bg-yellow-200">
                {/* Central Core: Name + Rayburst Graphic */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 "></div>
                {/* Handdrawn Rayburst Background */}
                <div className="absolute w-[290px] h-[290px] md:w-[380px] md:h-[380px] pointer-events-none opacity-90">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
                    {/* Top and Bottom rays */}
                    <line x1="100" y1="25" x2="100" y2="10" stroke="#e76f51" strokeWidth="3" strokeLinecap="round" />
                    <line x1="100" y1="175" x2="100" y2="190" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Left and Right rays */}
                    <line x1="25" y1="100" x2="10" y2="100" stroke="#e9c46a" strokeWidth="3" strokeLinecap="round" />
                    <line x1="175" y1="100" x2="190" y2="100" stroke="#f4a261" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Diagonal and Accent rays to match the original style */}
                            
                    {/* Diagonal and Accent rays to match the original style */}
                    <line x1="45" y1="45" x2="35" y2="35" stroke="#e76f51" strokeWidth="3" strokeLinecap="round" />
                    <line x1="155" y1="155" x2="165" y2="165" stroke="#a8dadc" strokeWidth="3" strokeLinecap="round" />
                    <line x1="155" y1="45" x2="165" y2="35" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" />
                    <line x1="45" y1="155" x2="35" y2="165" stroke="#e9c46a" strokeWidth="3" strokeLinecap="round" />

                    <line x1="70" y1="20" x2="73" y2="32" stroke="#a8dadc" strokeWidth="3" strokeLinecap="round" />
                    <line x1="130" y1="20" x2="127" y2="32" stroke="#e76f51" strokeWidth="3" strokeLinecap="round" />
                    <line x1="70" y1="180" x2="73" y2="168" stroke="#fbc3bc" strokeWidth="3" strokeLinecap="round" />
                    <line x1="130" y1="180" x2="127" y2="168" stroke="#ff8da1" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
            
                {/* <img src={HeroImage} alt="hero-image" className='w-53' />. She said she doesn;'t like the image */}
                <h1 className='text-2xl md:text-4xl font-bold text-white'>Joella's Art</h1>
            </div>

            {/* Circular Menu Navigation Items */}
            <div className="absolute inset-0 max-w-6xl mx-auto pointer-events-none"></div>
                {items.map((item) => (
                <Link
                    key={item.id}
                    to={item.route}
                    className={`absolute ${item.positionClass} pointer-events-auto group flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 active:scale-95`}>
                    {/* Icon Container with Playful Floating Animation & Hover Wobble */}
                    <div className={`transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 animate-float ${item.delay}`}>
                        {item.icon}
                    </div>

                    {/* Label */}
                    <span className="mt-2 text-sm md:text-base font-bold tracking-widest text-white select-none transition-colors duration-200 group-hover:text-[#cf9fff]">
                        {item.label}
                    </span>
                </Link>
            ))}
            </>
    );
}