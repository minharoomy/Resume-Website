import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import  {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id ="intro">
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'> I'm <span className='introName'>Minha</span><br/> Frontend Developer</span>
            <p className='introPara'> Designing the web's next masterpiece, tailored just for you.</p>
            <Link><button className='btn'><img src ={btnImg} alt ="Hire me" className='btnImg'/> Hire me</button>  </Link>

        </div>
        <img src={bg} className='bg' />
    </section>
  )
}

export default Intro
