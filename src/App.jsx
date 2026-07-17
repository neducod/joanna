// import { useState } from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
//       <section>
//         <div></div>
//         <div></div>
//       </section>
//     </>
//   )
// }

// export default App



import {Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Comics from './components/Comics'
import Illustration from './components/Illustration'
import Merch from './components/Merch'
import Shop from './components/Shop'
import Socials from './components/Socials'

function App(){
  return(
    <>
      <Routes>
        {
          <Route path='/' element={<Home/>} />
        }

        <Route path="/illustration" element={<Illustration />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </>
  )
}

export default App;