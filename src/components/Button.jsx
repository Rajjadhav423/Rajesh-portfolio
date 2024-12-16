// import React from 'react';
// import { Link } from 'react-router-dom';

// function Button({ children, active, linkto }) {
//   return (
//     <Link to={linkto}>
//       <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold ${active ? 'bg-yellow-50' : 'bg-blue-50'} hover:scale-90 transition-all duration-100`}>
//         {children}
//       </div>
//     </Link>
//   );
// }

// export default Button;
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto} className="block">
      <button 
        className={`
          px-4  py-3 rounded-lg text-base font-semibold transition-all duration-300 
          ${active 
            ? 'bg-yellow-50 text-black hover:bg-yellow-100 hover:scale-105' 
            : 'bg-richblack-800 text-white border border-richblack-700 hover:bg-richblack-700'}
          flex items-center justify-center gap-2 
          shadow-md hover:shadow-lg
        `}
      >
        {children}
      
      </button>
    </Link>
  );
};

export default Button;