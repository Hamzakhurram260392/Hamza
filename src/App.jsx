// import { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './App.css';


// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       if (window.innerWidth > 768) setMenuOpen(false); // Auto-close menu on resize
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false // Disable arrows
//   };

//   return (
//     <div className="w-screen min-h-screen flex flex-col relative overflow-hidden">
//       {/* Video Background */}
//       <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
//         <source src="/vid1.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

//       {/* Navbar */}
//       <nav className="flex justify-between px-6 py-4 items-center z-20 relative">
//         {/* Logo on the Left for Desktop */}
//         <div className="h-12 w-12 md:h-16 md:w-16">
//           <img src="dull.png" alt="Logo" className="w-full" />
//         </div>

//         {/* Hamburger Menu (Visible on all devices) */}
//         <button className="text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
//           <FaBars />
//         </button>

//         {/* Navbar Links (Hamburger Menu for Mobile & Full Screen for Desktop) */}
//         <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-30 flex flex-col items-center justify-center gap-6 font-serif text-lg md:text-2xl text-white font-bold transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'}`}>
//           {['Home', 'About Us', 'Our Solutions', 'Features', 'Resources', 'Reach Out'].map((item) => (
//             <a key={item} href="/" className="hover:text-green-400">{item}</a>
//           ))}
//           {/* Close Button for Mobile Menu */}
//           <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setMenuOpen(false)}>
//             X
//           </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className={`flex-grow flex flex-col justify-center items-center text-center px-6 md:px-20 z-20 relative ${menuOpen ? 'hidden' : ''}`}>
//         <h1 className="text-3xl md:text-5xl font-bold text-green-500 font-serif">Beyond Human Connection, Empowering Every Individual</h1>
//         <p className="mt-4 text-gray-200 text-base md:text-lg font-serif max-w-xl">
//           Lorem Ipsum is simply dummy text of the printing and type setting industry.
//         </p>
//         <button className='mt-6 py-3 px-5 text-lg md:text-xl text-white font-serif font-bold bg-green-500 rounded-lg'>
//           Welcome to ANAMCARA
//         </button>
//       </main>

//       {/* Footer */}
//       <footer className="mt-auto px-6 md:px-20 py-4 text-white z-20 relative">
//         {isMobile ? (
//           <Slider {...sliderSettings}>
//             {["AI Cognitive Evolution", "Metaverse Immersive Realities"].map((title) => (
//               <div key={title} className="p-4 bg-green-600 text-center rounded-lg">
//                 <p>{title}</p>
//                 <img className="h-12 w-12 mx-auto mt-2" src="dull.png" alt="AI Logo" />
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {["AI Cognitive Evolution", "Metaverse Immersive Realities", "Robotics Revolutionary Automation", "Quantum Infinite Possibilities"].map((title) => (
//               <div key={title} className="p-4 bg-green-600 font-serif font-bold text-lg text-center rounded-lg flex flex-col items-center">
//                 <p>{title}</p>
//                 <img className="h-12 w-12 mx-auto" src="dull.png" alt="AI Logo" />
//               </div>
//             ))}
//           </div>
//         )}
//       </footer>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home/home";
import About from "./Components/aboutus/aboutus";
import Features from "./Components/features/features";
import Oursolutions from "./Components/oursolutions/oursolutions";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} /> {/* Home Page */}
                <Route path="/about us" element={<About/>} /> {/* About Page */}
                <Route path="/features" element={<Features/>} /> {/* Contact Page */}
                <Route path="/oursolutions" element={<Oursolutions />} /> {/* Services Page */}
            </Routes>
        </Router>
    );
}

export default App;

