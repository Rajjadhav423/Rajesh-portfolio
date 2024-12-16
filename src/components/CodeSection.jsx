
// // export default CodeSection;
// import React from 'react';
// import Button from './Button';
// import HighLight from './HighLight';
// import { FaArrowRight } from 'react-icons/fa6';
// import { TypeAnimation } from 'react-type-animation';

// const CodeSection = ({
//   position, heading, subheading, ctabtn1, ctabtn2, codeblock, codeColor
// }) => {
//   return (
//     <div className={`flex ${position} my-20 justify-between gap-10`}>
      
//       {/* Section 1 */}
//       <div className='w-[50%] flex text-white flex-col gap-8'>
//         {" "}
//         {heading}
//         <div className='text-richblack-300 font-bold '>

//           {  subheading}
//         </div>

//         <div className='flex gap-7 mt-7'>
//           <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
//             <div className='flex gap-2 items-center text-black'>
//               {ctabtn1.btnText}
//               <FaArrowRight/>
//             </div>
//           </Button>

//           <Button active={ctabtn2.active} linkto={ctabtn2.linkto}>  
//            <div className='text-black'>
//            {ctabtn2.btnText}
//            </div>
//           </Button>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className='relative h-fit flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px]'>
//         {/* Rotating Gradient Background */}
//         <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500 to-transparent opacity-40 animate-spin-slow z-0"></div>

//         {/* Line Numbers */}
//         <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold z-10'>
//           <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p>
//         </div>

//         {/* Code Block with Typing Animation */}
//         <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 z-10`}>
//           <TypeAnimation
//             sequence={[codeblock, 2000, ""]}
//             repeat={Infinity}
//             cursor={true}
//             style={{
//               whiteSpace: "pre-line",
//               display: "block",
//             }}
//             omitDeletionAnimation={true}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeSection;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { TypeAnimation } from 'react-type-animation';
// import { ArrowRight, Code } from 'lucide-react';

// const CodeSection = ({
//   position, 
//   heading, 
//   subheading, 
//   ctabtn1, 
//   ctabtn2, 
//   codeblock, 
//   codeColor
// }) => {
//   return (
//     <div 
//       className={`
//         flex ${position} 
//         items-center 
//         justify-between 
        
//         py-16 
//         px-4 
//         mx-auto 
//         max-w-6xl 
//         space-x-8
//         relative
//       `}
//     >
//       {/* Content Section */}
//       <motion.div 
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="w-1/2 space-y-6"
//       >
//         <div className="text-4xl font-bold text-white leading-tight">
//           {heading}
//         </div>
        
//         <p className="text-lg text-gray-300 font-medium">
//           {subheading}
//         </p>
        
//         <div className="flex gap-4 mt-6">
//           <button 
//             onClick={() => window.location.href = ctabtn1.linkto}
//             className={`
//               flex items-center gap-2 
//               px-6 py-3 
//               rounded-lg 
//               transition-all 
//               duration-300 
//               ${ctabtn1.active 
//                 ? 'bg-blue-600 text-white hover:bg-blue-700' 
//                 : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}
//             `}
//           >
//             {ctabtn1.btnText}
//             <ArrowRight className="w-5 h-5" />
//           </button>
          
//           <button 
//             onClick={() => window.location.href = ctabtn2.linkto}
//             className={`
//               flex items-center gap-2 
//               px-6 py-3 
//               rounded-lg 
//               transition-all 
//               duration-300 
//               ${ctabtn2.active 
//                 ? 'bg-blue-600 text-white hover:bg-blue-700' 
//                 : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}
//             `}
//           >
//             {ctabtn2.btnText}
//             <Code className="w-5 h-5" />
//           </button>
//         </div>
//       </motion.div>

//       {/* Code Block Section */}
//       <motion.div 
//         initial={{ opacity: 0, x: 100 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="w-1/2 relative"
//       >
//         {/* Animated Gradient Background */}
//         <div 
//           className="
//             absolute 
//             -inset-2 
//             rounded-2xl 
//             bg-gradient-to-r 
//             from-blue-500/30 
//             via-purple-500/30 
//             to-pink-500/30 
//             opacity-75 
//             blur-xl 
//             animate-pulse
//           "
//         />

//         {/* Code Container */}
//         <div 
//           className="
//             relative 
//             bg-gray-900/80 
//             backdrop-blur-sm 
//             rounded-2xl 
//             border 
//             border-white/10 
//             shadow-2xl 
//             overflow-hidden
//           "
//         >
//           {/* Line Numbers */}
//           <div 
//             className="
//               absolute 
//               left-0 
//               top-0 
//               bottom-0 
//               w-12 
//               bg-gray-800/50 
//               border-r 
//               border-white/10 
//               flex 
//               flex-col 
//               items-center 
//               pt-4 
//               text-gray-500
//             "
//           >
//             {[...Array(12)].map((_, i) => (
//               <div key={i} className="text-sm">{i + 1}</div>
//             ))}
//           </div>

//           {/* Code Block with Typing Animation */}
//           <div 
//             className={`
//               p-6 
//               pl-16 
//               min-h-[300px] 
//               font-mono 
//               text-sm 
//               ${codeColor}
//             `}
//           >
//             <TypeAnimation
//               sequence={[codeblock, 2000, ""]}
//               repeat={Infinity}
//               cursor={true}
//               style={{
//                 whiteSpace: "pre-line",
//                 display: "block",
//                 fontFamily: "monospace"
//               }}
//               omitDeletionAnimation={true}
//             />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CodeSection;




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Code } from 'lucide-react';
import Button from './Button';

const CodeSection = ({
  position, 
  heading, 
  subheading, 
  ctabtn1, 
  ctabtn2, 
  codeblock, 
  codeColor
}) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGradientPosition({ x, y });
  };

  return (
    <div 
      className={`
        flex ${position} 
        items-center 
        justify-between 
        py-16 
        px-4 
        mx-auto 
        max-w-6xl 
        space-x-8 
        relative 
        gap-12
      `}
    >
      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-1/2 space-y-6"
      >
        <div className="text-4xl font-bold text-white leading-tight">
          {heading}
        </div>
        
        <p className="text-lg text-gray-300 font-medium">
          {subheading}
        </p>
        
        <div className="flex gap-4 mt-6">
          {/* <button 
            onClick={() => window.location.href = ctabtn1.linkto}
            className={`
              flex items-center gap-2 
              px-6 py-3 
              rounded-lg 
              transition-all 
              duration-300 
              ${ctabtn1.active 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}
            `}
          >
            {ctabtn1.btnText}
            <ArrowRight className="w-5 h-5" />
          </button> */}
           <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className='flex gap-2 items-center text-black'>
              {ctabtn1.btnText}
              <ArrowRight/>
            </div>
          </Button>
          
          {/* <button 
            onClick={() => window.location.href = ctabtn2.linkto}
            className={`
              flex items-center gap-2 
              px-6 py-3 
              rounded-lg 
              transition-all 
              duration-300 
              ${ctabtn2.active 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}
            `}
          >
            {ctabtn2.btnText}
            <Code className="w-5 h-5" />
          </button> */}

         <Button active={ctabtn2.active} linkto={ctabtn2.linkto}>  
           <div className='text-black'>
           {ctabtn2.btnText}
           </div>
           <Code className="text-pure-greys-400 w-5 h-5" />
          </Button>

        </div>

      </motion.div>

      {/* Code Block Section */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-1/2 relative"
        onMouseMove={handleMouseMove}
      >
        {/* Animated Gradient Background */}
        {/* <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(85, 150, 246, 0.6), rgba(120, 210, 120, 0.3), rgba(100, 50, 210, 0.2))`,
            transition: "background 0.1s",
          }}
        /> */}
  <div 
  className="absolute inset-0 rounded-2xl"
  style={{
    background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(255, 255, 255, 0.7), rgba(70, 130, 180, 0.5), rgba(30, 30, 60, 0.4))`,
    transition: "background 0.1s",
  }}
>

</div>

        {/* Code Container */}
        <div 
          className="
            relative 
            bg-gray-900/80 
            backdrop-blur-sm 
            rounded-2xl 
            border 
            border-white/10 
            shadow-2xl 
            overflow-hidden
          "
        >
          {/* Line Numbers */}
          <div 
            className="
              absolute 
              left-0 
              top-0 
              bottom-0 
              w-12 
              bg-gray-800/50 
              border-r 
              border-white/10 
              flex 
              flex-col 
              items-center 
              pt-4 
              text-gray-500
            "
          >
            {[...Array(12)].map((_, i) => (
              <div key={i} className="text-sm">{i + 1}</div>
            ))}
          </div>

          {/* Code Block with Typing Animation */}
          <div 
            className={`
              p-6 
              pl-16 
              min-h-[300px] 
              font-mono 
              text-sm 
              ${codeColor}
            `}
          >
            <TypeAnimation
              sequence={[codeblock, 2000, ""]}
              repeat={Infinity}
              cursor={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
                fontFamily: "monospace"
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodeSection;
