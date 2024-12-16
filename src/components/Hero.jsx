// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import CodeSection from './CodeSection';
// import HighLight from './HighLight';

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Rajesh Jadhav</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             full stack web developer <br className='sm:block hidden' />
           
//           </p>
//         </div>
//       </div>

//       {/* <ComputersCanvas /> */}
//       <div 
    
//      className="h-64"
//     ></div>

//       <div>
//             <div>
//               <CodeSection
//                 position={"lg:flex-row"}
//                 heading={
//                   <div className="text-4xl font-semibold">
//                     Unlocking <HighLight text={" coding potential  "} />
//                     with different technology
//                   </div>
//                 }
//                 subheading={
//                   "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//                 }
//                 ctabtn1={{
//                   btnText: "try it yourself",
//                   linkto: "/signup",
//                   active: true,
//                 }}
//                 ctabtn2={{
//                   btnText: "learn more",
//                   linkto: "",
//                   active: false,
//                 }}
//                 codeblock={`#include <iostream>\n\nint main() {\nstd::cout << "Hello, World!" << std::endl;\n return 0; \n}\n `}
//                 codeColor={"text-yellow-25"}
//               />
//             </div>

           

           
//           </div>
  
   
   
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import CodeSection from './CodeSection';
import HighLight from './HighLight';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      {/* Main content container with improved padding for mobile */}
      <div className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start gap-3 sm:gap-5`}>
        {/* Vertical line decoration - adjusted for mobile */}
        <div className='flex flex-col justify-center items-center mt-3 sm:mt-5'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-32 sm:h-80 violet-gradient' />
        </div>

        {/* Text content with responsive typography */}
        <div className="w-full">
          <h1 className={`${styles.heroHeadText} text-white text-3xl sm:text-5xl lg:text-6xl`}>
            Hi, I'm <span className='text-[#915EFF]'>Rajesh Jadhav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 sm:mt-4 text-white-100 text-base sm:text-lg lg:text-xl`}>
            full stack web developer <br className='sm:block hidden' />
          </p>
        </div>
      </div>

      {/* Empty space placeholder */}
      <div className="h-72"></div>

      {/* Code section container with improved spacing */}
      <div className="px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16">
        <div>
          <CodeSection
            position={"flex-col lg:flex-row"}
            heading={
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-left">
                Unlocking <HighLight text={" coding potential  "} />
                with different technology
              </div>
            }
            subheading={
              <div className="text-sm sm:text-base lg:text-lg text-center lg:text-left">
              As a Full Stack Developer with expertise in the MERN stack and machine learning, 
              I build impactful solutions through coding and data analysis. I’m passionate about solving real-world problems
               and continuously learning in the tech space. Explore my work to see how I bring innovation to life.
                            </div>
            }
            ctabtn1={{
              btnText: "explore",
              linkto: "",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "",
              active: false,
            }}
            codeblock={`#include <iostream>\n\nint main() {\nstd::cout << "Hello, World!" << std::endl;\n return 0; \n}\n `}
            codeColor={"text-yellow-25"}
          />
        </div>
      </div>

      {/* Scroll indicator - adjusted for mobile */}
      {/* <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;