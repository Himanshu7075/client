import React from 'react'
import { assets } from '../assets/assets'
import {ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()


  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20' />

      <h1 className='text-5xl md:text-[70px] md:leading-18 
      font-semibold max-w-110'>Guardians <br /> of the Galaxy</h1>

      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Advanture | Sci-Fi</span>
        <div className='flex items-center gap-1'>
            <CalendarIcon className='w-4.5 h-4.5'/> 2018
        </div>
        <div className='flex items-center gap-1'>
            <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
        </div>
      </div>
      <p className='max-w-md text-gray-300'>In a post-apocalyptic world where cities ride on wheels and consume each other to servive, two people meet in london and try to stop a conspiracy</p>
      <button onClick={() => navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore more
        <ArrowRight className='w-5 h-5' />
      </button>
    </div>
  )
}

export default HeroSection






















// import React, { useMemo } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { assets } from "../assets/assets";
// import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const navigate = useNavigate();

//   // Scroll-based Parallax
//   const { scrollY } = useScroll();
//   const titleY = useTransform(scrollY, [0, 250], [0, -60]);
//   const subY = useTransform(scrollY, [0, 250], [0, -30]);
//   const fadeOut = useTransform(scrollY, [0, 200], [1, 0]);
//   const bgScale = useTransform(scrollY, [0, 200], [1, 1.15]);

//   // SUPER LIGHT-WEIGHT PARTICLES
//   const particles = useMemo(() =>
//     [...Array(18)].map(() => ({
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       delay: Math.random() * 5,
//       size: Math.random() * 2 + 1,
//       duration: 6 + Math.random() * 4,
//       opacity: Math.random() * 0.7 + 0.3,
//     })), []
//   );

//   return (
//     <div className="relative h-screen overflow-hidden bg-black text-white">

//       {/* ULTRA FAST PARTICLES */}
//       <div className="absolute inset-0 pointer-events-none">
//         {particles.map((p, i) => (
//           <motion.span
//             key={i}
//             className="absolute rounded-full bg-white/40"
//             style={{
//               width: p.size,
//               height: p.size,
//               top: `${p.y}%`,
//               left: `${p.x}%`,
//             }}
//             animate={{ y: ["0%", "120%"], opacity: [0.3, p.opacity, 0.1] }}
//             transition={{
//               duration: p.duration,
//               delay: p.delay,
//               repeat: Infinity,
//               ease: "easeOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* FAST BACKGROUND PARALLAX */}
//       <motion.div
//         style={{ scale: bgScale, opacity: fadeOut }}
//         className='absolute inset-0 bg-[url("/backgroundImage.png")] bg-cover bg-center will-change-transform'
//       />

//       {/* CONTENT */}
//       <div className="relative z-10 px-6 md:px-16 lg:px-36 h-full flex flex-col justify-center">

//         {/* MARVEL LOGO */}
//         <motion.img
//           src={assets.marvelLogo}
//           className="w-40 mb-4 select-none"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         />

//         {/* TITLE */}
//         <motion.h1
//           style={{ y: titleY }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-5xl md:text-[70px] md:leading-[70px] font-bold drop-shadow-xl"
//         >
//           Guardians <br /> of the Galaxy
//         </motion.h1>

//         {/* SUB-INFO */}
//         <motion.div
//           style={{ y: subY, opacity: fadeOut }}
//           className="flex items-center gap-4 text-gray-300 mt-4"
//         >
//           <span>Action | Adventure | Sci-Fi</span>
//           <div className="flex items-center gap-1">
//             <CalendarIcon className="w-4 h-4" /> 2018
//           </div>
//           <div className="flex items-center gap-1">
//             <ClockIcon className="w-4 h-4" /> 2h 8m
//           </div>
//         </motion.div>

//         {/* OVERVIEW */}
//         <motion.p
//           style={{ opacity: fadeOut }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="max-w-md text-gray-200 mt-4"
//         >
//           In a post-apocalyptic future where cities ride on wheels, two heroes rise
//           to uncover a dark conspiracy.
//         </motion.p>

//         {/* BUTTON */}
//         <motion.button
//           onClick={() => navigate("/movies")}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           whileHover={{ scale: 1.07 }}
//           whileTap={{ scale: 0.92 }}
//           transition={{ duration: 0.4, delay: 0.3 }}
//           className="flex items-center gap-2 mt-6 px-6 py-3 bg-primary hover:bg-primary-dull 
//           rounded-full text-sm font-medium shadow-lg cursor-pointer"
//         >
//           Explore more
//           <ArrowRight className="w-5 h-5" />
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
