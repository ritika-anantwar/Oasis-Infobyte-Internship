import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
       <div className='introContent'>
            <span className='hello'>Hey peeps!</span>
            <span className='introText'>I'm
                <span className='introName'> Ritika</span>
                <br/>
                Full-Stack Developer
            </span>
            
            <p className='introPara'>
              I thrive on creating seamless digital experiences that
              <br/>combine functionality with aesthetics. <br/>
              When I'm not coding, you can find me exploring new tech stacks and
              <br/>enjoying the thrill of problem-solving! 
            </p>

            <Link><button className='btn'>
          <img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>

        <img src={bg} alt="Profile" className='bg'/>
    </section>
  );
}

export default Intro;