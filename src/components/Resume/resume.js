import React from 'react';
import './resume.css';


const Resume = () => {
  return (
    <section id='resume'>
      <h2 className='resumeTitle'>My Resume</h2>

      <div className='subheading'>Objective</div>
      <div className='objective'>  
        <p>To succeed in an environment of growth and excellence
         that provides satisfaction and self-development to help achieve personal
         as well as career goals.</p>
      </div>

      <div className='subheading'>Academic Credentials</div>
      <div className='education'>
          <ul>
            <li>
                Pursuing Bachelor of Technology in the branch of Computer Science and Engineering
                <br/> from Yeshwantrao Chavan College of Engineering, Nagpur<br/>
                Current CGPA - 9.02
            </li>
            <br/>
            <li>
                Completed Higher Secondary Certificate (12th) from Yashoda Public School and Junior College,
                <br/> Maharashtra State Board of Secondary and Higher Secondary Education, Nagpur in the 
                <br/>academic year 2020-2021<br/>
                Percentage - 92.33%
            </li>
            <br/>
            <li>
                Completed All India Secondary School Examination (10th) from Narayana Vidyalayam, Central Board
                <br/> of Secondary Education, Nagpur in the academic year 2018-2019 <br/>
                Percentage - 96.8%
            </li>
          </ul>
      </div>
      
      <div className='subheading'>Extra-Curricular Activities</div>
      <div className='activities'>
        <ul>
          <li>ACM Design Master 2023-24, ACM-YCCE Chapter</li>
          <li>Actively participated in Upsurge 2k23, TechFest of CSE Department, YCCE</li>
          <li>Designing head in Semicore Committee 2023 of IQ BOTS, the Robotics club, YCCE</li>
          <li>Member of the YCCE Eagles Club</li>
          <li>Member of Taaransh, the Astronomy Club, YCCE</li>
          <li>Member of Kalasparsh, the Art Club, YCCE</li>
          <li>Won Gold Medal, securing 35th rank in Maharashtra State Level Grand Finale of Wiz National Spell Bee competition in 2017- 2018.</li>
        </ul>
      </div>

      <div className='subheading'>Favorite Pastime</div>
      <div className='pastimes'>
        <ul>
          <li>Reading novels</li>
          <li>Astronomy</li>
          <li>Sketching and Painting</li>
          <li>Dancing</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;