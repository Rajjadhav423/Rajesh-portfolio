// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           {/* <BallCanvas icon={technology.icon} /> */}
//           <BallCanvas icon={technology.icon}  />
//           <div className="text-blue-400 mt-2 text-center">{technology.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");


import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';

// const Tech = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {technologies.map((technology) => (
//         <div className="w-28 h-28 flex flex-col items-center" key={technology.name}>
//           {/* SVG or Image Canvas */}
//           <div className="w-full h-full flex justify-center items-center">
//             <img
//               src={technology.icon}
//               alt={technology.name}
//               className="w-16 h-16 object-contain hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div className="text-blue-400 mt-2 text-center">{technology.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };


// import React from 'react';
// import { motion } from 'framer-motion';

const TechBadge = ({ icon, name }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center p-4 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img 
            src={icon} 
            alt={name}
            className="w-16 h-16 object-contain filter group-hover:brightness-110 transition-all"
          />
        </div>
      </div>
      <span className="mt-3 text-sm text-blue-400 font-medium">{name}</span>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TechBadge icon={technology.icon} name={technology.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Assuming your technologies array looks something like this:


export default Tech;


