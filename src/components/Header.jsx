import React from 'react';
import CV from '../assets/cv.pdf';
import user from '../assets/main.png';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Header = () => {
  let links = [
    { name: BsLinkedin, link: 'https://www.linkedin.com/in/kenneth-okoro/' },
    { name: BsGithub, link: 'https://github.com/kenneth-okoro' },
    { name: BsTwitter, link: 'https://twitter.com/_iamkeo' },
  ];
  
  return (
    <header className='h-screen md:h-[68vw] lg:h-screen pt-28 overflow-hidden '>
      <div className='text-center h-full sm:h-[68vw] md:h-full relative'>
        <h5>Hello I'm</h5>
        <h1>Kenneth Okoro</h1>
        <h5 className='text-color-light'>Frontend Developer</h5>

        <div className='CTA flex justify-center gap-5 mt-10'>
          <a href={CV} download className='btn btn-main'>
            Download CV
          </a>
          <a href='#contact' className='btn btn-primary'>
            Let's talk
          </a>
        </div>

        <div className='socials hidden md:flex flex-col items-center gap-3 absolute left-0 bottom-12 '>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className='links'
              rel='noreferrer'
              target='_blank'
            >
              {<link.name />}
            </a>
          ))}
          <div className='border-r-2 border-color-primary h-8'></div>
        </div>

        <div className='user bg-color-primary w-[-22rem] absolute left-1/2 -translate-x-1/2 mt-16 rounded-l-[-12rem] rounded-t-[12rem] bg-gradient-to-r from-color-primary to-transparent overflow-hidden pt-8 px-6'>
          <img src={user} alt='avatar' />
        </div>

        <a
          href='#contact'
          className='links hidden md:block absolute -right-9 bottom-20 rotate-90 text-sm font-light'
        >
          Scroll to Bottom
        </a>
      </div>
    </header>
  );
};

export default Header;
