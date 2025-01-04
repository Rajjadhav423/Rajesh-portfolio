// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo,reactjs,r, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={r} alt='logo' className='w-9 h-9 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             Rajesh &nbsp;
//             <span className='sm:block hidden'> | web Developer</span>
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



















// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { r, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Google Drive link for direct download
//   const downloadResume = () => {
//     const resumeUrl = "https://drive.google.com/uc?export=download&id=FILE_ID"; // Replace with your file ID
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Rajesh_Jadhav_Resume.pdf"; // Optional: Name for the downloaded file
//     link.click();
//   };

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={r} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer flex ">
//             Rajesh &nbsp;
//             <span className="sm:block hidden"> | web Developer</span>
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         {/* Download Resume Button in Navbar */}
//         <button
//           onClick={downloadResume}
//           className="text-white font-medium text-[18px] cursor-pointer hidden sm:block"
//         >
//           Download Resume
//         </button>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain"
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//             {/* Add Download Resume button in mobile menu */}
//             <button
//               onClick={downloadResume}
//               className="text-white font-medium text-[16px] cursor-pointer mt-4"
//             >
//               Download Resume
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




//final 



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { logo,reactjs,r, menu, close } from "../assets";
// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { id: "about", title: "About" },
//     { id: "work", title: "Work" },
//     { id: "contact", title: "Contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const downloadResume = () => {
//     const resumeUrl = "https://drive.google.com/file/d/1honhwcHh_zB5B7QO43DotgGabdVewLo3/view?usp=drive_link";
//     window.open(resumeUrl, "_blank");
//   };

//   return (
//     <nav
//       className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out px-6 lg:px-8 py-4 ${
//         scrolled
//           ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <Link
//           to="/"
//           className="flex items-center gap-3"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img 
//             src={r} 
//             alt="logo" 
//             className="w-8 h-8 object-contain" 
//           />
//           <div className="flex items-center">
//             <span className="text-white text-xl font-bold">Rajesh</span>
//             <span className="hidden md:block text-gray-400 text-xl font-medium ml-2">
//               | Web Developer
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           <ul className="flex items-center gap-6">
//             {navLinks.map((link) => (
//               <li key={link.id}>
//                 <a
//                   href={`#${link.id}`}
//                   className={`text-base font-medium transition-colors duration-200 ${
//                     active === link.title
//                       ? "text-white"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                   onClick={() => setActive(link.title)}
//                 >
//                   {link.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <button
//             onClick={downloadResume}
//             className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
//           >
//             Download Resume
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setToggle(!toggle)}
//             className="text-gray-400 hover:text-white transition-colors duration-200"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {toggle ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>

//           {/* Mobile Menu */}
//           <div
//             className={`${
//               toggle ? "opacity-100 visible" : "opacity-0 invisible"
//             } absolute top-full right-0 mt-2 w-48 rounded-lg bg-slate-800 shadow-lg transition-all duration-200 ease-in-out transform origin-top-right`}
//           >
//             <div className="p-4">
//               <ul className="space-y-3">
//                 {navLinks.map((link) => (
//                   <li key={link.id}>
//                     <a
//                       href={`#${link.id}`}
//                       className={`block text-base font-medium transition-colors duration-200 ${
//                         active === link.title
//                           ? "text-white"
//                           : "text-gray-400 hover:text-white"
//                       }`}
//                       onClick={() => {
//                         setActive(link.title);
//                         setToggle(false);
//                       }}
//                     >
//                       {link.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={downloadResume}
//                 className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
//               >
//                 Download Resume
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
















import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, reactjs, r, menu, close } from "../assets";
import Rajesh_Jadhav_Resume from '../assets/resume/Rajesh_Jadhav_Resume.pdf'
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out px-6 lg:px-8 py-4 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={r} alt="logo" className="w-8 h-8 object-contain" />
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">Rajesh</span>
            <span className="hidden md:block text-gray-400 text-xl font-medium ml-2">
              | Web Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-base font-medium transition-colors duration-200 ${
                    active === link.title
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={Rajesh_Jadhav_Resume}
            download="Rajesh_Jadhav_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {toggle ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              toggle ? "opacity-100 visible" : "opacity-0 invisible"
            } absolute top-full right-0 mt-2 w-48 rounded-lg bg-slate-800 shadow-lg transition-all duration-200 ease-in-out transform origin-top-right`}
          >
            <div className="p-4">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`block text-base font-medium transition-colors duration-200 ${
                        active === link.title
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => {
                        setActive(link.title);
                        setToggle(false);
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={Rajesh_Jadhav_Resume}
                download="Rajesh_Jadhav_Resume.pdf"
                className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
