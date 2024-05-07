import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDegign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id ='skills'>
       <span className='skillTitle'>What I do </span>
       <span className='skillDesc'>As a multifaceted designer, I specialize in crafting captivating digital experiences across UI/UX, website, and app design. With a blend of creativity and functionality, I shape seamless interfaces that resonate with users and elevate interactions.</span>
       <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX design</h2>
                <p>Crafting captivating digital experiences with intuitive designs, I specialize in UI/UX to elevate user interactions.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Website Design</h2>
                <p>With a passion for pixel-perfect design, I specialize in crafting visually stunning and user-friendly websites that leave a lasting impact.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={AppDegign} alt='AppDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>With a passion for innovation, I design mobile apps that marry aesthetic appeal with user-centric functionality, ensuring every touchpoint delights and engages.</p>
            </div>
          </div>
       </div>
    </section>
  )
}

export default skills
