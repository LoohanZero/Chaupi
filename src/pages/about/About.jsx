import React from 'react'
// import manualidades from '../../assets/img/pexels-manualidades.jpg';
// import tijeras from '../../assets/img/pexels-tijeras.jpg';

import { aboutbg } from '../../assets/img';
import '../about/About.css';

// const About = () => {
//   return (
//     <div className="about-container">
//       <div className="about-main">
//         <img className="about-img-container" src={manualidades} alt='Manualidades con cartulinas' />
//         <div>
//           <p className='about-text-container'>
//           Lorem ipsum dolor sit amet consectetur adipiscing elit arcu leo nascetur 
//           nam dui, magna dignissim vivamus velit lobortis porta ridiculus porttitor 
//           ornare condimentum rhoncus praesent, aptent cubilia quam taciti lacus 
//           facilisi hendrerit parturient fringilla sodales placerat.
//           </p>
//         </div>
//         <div>
//           <img className="about-img-container" src={tijeras} alt='Manualidades con tijeras' />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About;

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <img className="about-img-container" src={aboutbg} alt='background About' />
      </div>
    </div>
  )
}

export default About;