import React from 'react'
import './skills.css';
import WebDesign from '../../assets/website-design.png';
import UIDesign from '../../assets/ui-design.png';
import Backend from '../../assets/backend.png';
import DataAnalytics from '../../assets/dataAnalytics.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle' id='about'>What I do</span>
        <span className='skillDesc'>
        I'm a full stack developer skilled in both front-end and
        back-end technologies, dedicated to building robust web
        applications that seamlessly merge design and functionality.
        </span>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>
                        With a focus on aesthetics, functionality, and responsive design,
                        I create digital spaces that engage and inspire.
                    </p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>
                        With a keen eye for design and a user-first mindset,
                        I specialize in crafting intuitive interfaces that delight 
                        users and enhance brand engagement.
                    </p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={Backend} alt='Backend' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Backend Development</h2>
                    <p>
                        I'm a backend developer focused on architecting and optimizing the
                        hidden infrastructure of web applications, ensuring they run efficiently
                        and securely behind the scenes.
                    </p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={DataAnalytics} alt='Data Analytics' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Data Analytics</h2>
                    <p>
                        I am interested in the field of Data Analytics and Data Science as well.
                        Currently, I'm learning new tools that help to draw insights from loads of data.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;