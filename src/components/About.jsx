import React from 'react';
import me from '../assets/user.png';

const About = () => {
  return (
    <section id='about'>
      <div className='text-center'>
        <h5 className='text-color-light'>Get To Know</h5>
        <h2 className='text-color-primary mb-12'>About Me</h2>
      </div>

      <div className='about-container grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[15%] '>
        <div className='about-me w-[65%] sm:w-1/2 mx-auto mt-8 mb-16 md:mb-0 aspect-square md:w-full rounded-[2rem] bg-gradient-to-r from-color-primary to-transparent grid place-items-center'>
          <div className='developer-image rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 duration-500'>
            <img src={me} alt='developer' />
          </div>
        </div>

        <div className='about-content w-[90%] mx-auto md:w-full flex flex-col items-center sm:items-start justify-between '>
          <p className='my-6 text-center sm:text-start'>
            I put value at the fore front of my services and as such, give me in
            my best in any project I handle. I pay attention to details and go
            the extra mile to ensure the job is thoroughly done. I am skilled in
            javascript, sass, html, css, tailwind, and react.js. I believe in
            working diligently to achieve results the smart way.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
