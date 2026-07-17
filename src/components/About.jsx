//import React from 'react';

//function Home() {
//    return (
//           <>
//        <h1>hi</h1>
//        </>
//    )
//}
//
//export default Home;




import React from 'react';

// For this example, replace these with your actual image paths or URLs.
const assets = {
  profile: 'path/to/your/photo.jpg', // The central photo
  flower_top: 'path/to/hibiscus.png',
  sunflower: 'path/to/sunflower.png',
  lightbulb: 'path/to/lightbulb.png',
  paw_print: 'path/to/paw.png',
  camera_vintage: 'path/to/vintage_camera.png',
  paper_airplane: 'path/to/airplane.png',
  microphone: 'path/to/microphone.png',
  french_fries: 'path/to/fries.png',
  pushpin: 'path/to/pin.png',
  // Special torn paper background image for that specific text block
  paper_background: 'path/to/torn_paper_bg.png', 
};

// Custom handwriting font name as defined in your setup. I'll use 'Kalam' here.
const handFont = "font-kalam"; 

const AestheticProfilePage = () => {
  return (
    // Main Container: Lined paper background with a border/rounded corners
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div 
        className={`w-full max-w-4xl min-h-[95vh] bg-[#fdfaf5] rounded-3xl border-2 border-[#e6b4cd] shadow-2xl relative p-12 overflow-hidden ${handFont} text-gray-800`}
        // This simulates a lined paper background. You could also use an actual tiled image.
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 31px, #e9e9e9 32px)',
          backgroundSize: '100% 32px'
        }}
      >
        
        {/* --- Top Left Hibiscus and "made with love" --- */}
        {/* <img src={assets.flower_top} alt="hibiscus" className="absolute top-4 left-4 w-20" /> */}
        <p className='absolute top-4 left-4w-20'>⋆.˚🦋༘⋆</p>

        {/* --- Header: "about Kimaya" --- */}
        <div className="w-full text-center mt-12 mb-8">
          <p className="text-2xl">about</p>
          <div className="relative inline-block mt-[-10px]">
            {/* The main title */}
            <h1 className="text-9xl font-bold text-pink-500 drop-shadow-lg tracking-tighter">Joanna</h1>
            {/* Red accent line/stars around the name */}
            <div className="absolute -top-1 -right-8 text-6xl text-red-600 rotate-[15deg]">🌟</div>
            <div className="absolute -bottom-1 -left-8 text-6xl text-red-600 -rotate-[15deg]">🌟</div>
          </div>
        </div>

        {/* --- Central Section --- */}
        <div className="relative w-full flex items-center justify-center">
          
          {/* Left Text Items */}
          <div className="flex-1 space-y-6 text-2xl pr-10 text-right">
            <div className="relative inline-block">
              <span className="absolute -left-6 top-1 text-red-600 text-3xl">*</span>
              {/* <p>Lifestyle content creator</p> */}
            </div>
            <p className="flex items-center justify-end gap-2 flex-col">
              <p className='w-8'>💡</p>
              <span className="underline decoration-red-600 decoration-2">Business Admin</span> Student
            </p>
            <p className="flex items-center justify-start gap-2">
              <p className='w-8'>⋆˚🐾˖°</p>
              Loves dogs
            </p>
            <p>Passionate <span className="underline decoration-red-600 decoration-2">about</span> music</p>
            <p className="relative">
              Camera is her <span className="underline decoration-red-600 decoration-2">Bestfriend</span>
              <p className='absolute -bottom-16 right-0 w-24 z-10'></p>
            </p>
            <p className="flex items-center justify-end gap-2 mt-20">
              {/* <img src={assets.paper_airplane} alt="paper airplane" className="w-8" /> */}
              Dreaming of travelling the world
            </p>
          </div>

          {/* Central Photo with Outline */}
          <div className="w-[300px] h-[300px] relative z-20 flex-shrink-0">
            {/* Red Outline Offset */}
            <img 
              src={assets.profile} 
              alt="Kimaya Profile" 
              className="absolute inset-0 w-full h-full object-cover rounded-full filter grayscale(20%) z-0 opacity-80"
              style={{ transform: 'translate(-5px, -5px)', WebkitFilter: 'brightness(90%)'}}
            />
            {/* Main Photo with Thick Red Border */}
            <img 
              src={assets.profile} 
              alt="Kimaya Profile" 
              className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-red-600 z-10"
            />
          </div>

          {/* Right Text Items */}
          <div className="flex-1 space-y-6 text-2xl pl-10 text-left">
            <p className="border-4 border-red-600 rounded-3xl p-3 inline-block">
              YouTube is her <span className="font-sans">happy place</span>
            </p>
            <p className="relative">
              22years <span className="relative inline-block">* <span className="absolute left-6 top-0 underline decoration-red-600 decoration-2">young</span></span>
            </p>
            <p className="relative inline-block">
              <span className="underline decoration-red-600 decoration-2">Sunflower</span> Energy
              {/* <img src={assets.sunflower} alt="sunflower" className="absolute -right-16 top-1/2 -translate-y-1/2 w-12" /> */}
            </p>
            <p className="relative">
              <span className="absolute -right-8 bottom-0 text-3xl text-red-600 rotate-[10deg]">✨</span>
              Believes in Manifestation
              <span className="absolute -right-4 top-0 text-3xl text-red-600">✨</span>
            </p>
            <p className="relative">
              Introvert but <span className="underline decoration-red-600 decoration-2">yaps</span> non-stop if you know her
              <span className="absolute right-0 bottom-[-15px] text-red-600 text-3xl">➡️</span>
            </p>
            <p>Momos and Peri Peri Fries</p>
          </div>
        </div>

        {/* --- Bottom Row Elements --- */}
        <div className="absolute bottom-8 left-12 right-12 flex items-end justify-between text-2xl">
          
          {/* Microphone Icon */}
          {/* <img src={assets.microphone} alt="microphone" className="w-20" /> */}

          {/* Special Torn Paper Quote */}
          {/* <div 
            className="w-[400px] h-[150px] relative p-6 -mb-6 flex items-center justify-center text-center text-3xl font-medium"
            style={{
              backgroundImage: `url(${assets.paper_background})`,
              backgroundSize: '100% 100%',
            }}
          >
            <p>She writes what she feels and lets AI fix the commas</p>
          </div> */}

          {/* French Fries, Reads... and Pinterest Always */}
          <div className="flex items-end gap-6 text-right">
            {/* <img src={assets.french_fries} alt="french fries" className="w-16" /> */}
            <div className="relative">
              <p className="flex items-center gap-2">Reads sometimes, 
              {/* <img src={assets.french_fries} alt="fries icon" className="w-5" /> */}
              </p>
              <p>Pinterest always <span className="relative inline-block">
                {/* <img src={assets.pushpin} alt="pushpin" className="absolute -bottom-2 -left-10 w-10 rotate-[-45deg]" /> */}
                </span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AestheticProfilePage;