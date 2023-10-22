// import React, { Component } from 'react';
// export default  class Resume extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
//     return (
//       <section id="resume">

//          <div className="row education">

//             <div className="three columns header-col">
//                <h1><span>Education</span></h1>
//             </div>

//             <div className="nine columns main-col">
//               {
//                 resumeData.education && resumeData.education.map((item)=>{
//                   return(
//                     <div className="row item">
//                        <div className="twelve columns">
//                           <h3>{item.UniversityName}</h3>
//                           <p className="info">
//                           {item.specialization}
//                           <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
//                           <p>
//                           {/* {item.Achievements} */}
//                           </p>
//                        </div>
//                     </div>
//                   )
//                 })
//               }
//             </div>
//          </div>
//         {/* <div className="row work">
//             <div className="three columns header-col">
//                <h1><span>Work</span></h1>
//             </div>

//             <div className="nine columns main-col">
//               {
//                 resumeData.work && resumeData.work.map((item) => {
//                   return(
//                     <div className="row item">
//                        <div className="twelve columns">
//                           <h3>{item.CompanyName}</h3>
//                           <p className="info">
//                           {item.specialization}
//                           <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
//                           <p>
//                           {item.Achievements}
//                           </p>
//                        </div>

//                     </div>

//                   )
//                 })
//               }
//             </div> 
//          </div> */}


//          <div className="row skill">

//             <div className="three columns header-col">
//                <h1><span>Skills</span></h1>
//             </div>

//             <div className="nine columns main-col">

//                <p>
//                {resumeData.skillsDescription}
//                </p>

//    				<div className="bars">

//    				   <ul className="skills">
//                 {
//                   resumeData.skills && resumeData.skills.map((item) => {
//                     return(
//                       <li>
//                       <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
//                       </span><em>{item.skillname}</em>
//                       </li>
//                     )
//                   })
//                 }

//    					</ul>

//    				</div>

//    			</div>

//          </div>

//       </section>
//     );
//   }
// }

import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const barStyles = {
      display: 'block',
      height: '14px',
      backgroundColor: '#007acc', // Default color
      transition: 'width 1.5s ease',
    };

    const highProficiencyStyles = {
      width: '100%', // Full width for high proficiency
    };

    const lowProficiencyStyles = {
      width: '30%', // Adjust width as needed for low proficiency
    };

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    const proficiencyStyles =
                      item.proficiency === 'high'
                        ? highProficiencyStyles
                        : lowProficiencyStyles;
                    return (
                      <li key={item.skillname}>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                          style={{ ...barStyles, ...proficiencyStyles }}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
