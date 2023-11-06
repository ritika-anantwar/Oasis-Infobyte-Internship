import React from 'react';
import './works.css';
import HTML from '../../assets/html-5.png';
import CSS from '../../assets/css-3.png';
import JavaScript from '../../assets/js.png';
import Canva from '../../assets/Canva.png';
import Figma from '../../assets/figma.png';
import C from '../../assets/C.png';
import Java from '../../assets/Java.png';
import R from '../../assets/R.png';
import Python from '../../assets/python.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Tech Stack</h2>
        <span className='worksDesc'>These are the technologies I have worked on!</span>
        <div className='worksImgs'>
            <img src={HTML} alt='HTML' className='worksImg'/>
            <img src={CSS} alt='CSS' className='worksImg'/>
            <img src={JavaScript} alt='JS' className='worksImg'/>
            <img src={Canva} alt='Canva' className='worksImg'/>
            <img src={Figma} alt='Figma' className='worksImg'/>
            <img src={C} alt='C' className='worksImg'/>
            <img src={Java} alt='Java' className='worksImg'/>
            <img src={R} alt='R' className='worksImg'/>
            <img src={Python} alt='Python' className='worksImg'/>
        </div>
    </section>
  );
}

export default Works;