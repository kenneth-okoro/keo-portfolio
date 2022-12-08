import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';


const Footer = () => {
  const links = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#about' },
    { name: 'Experience', link: '#experience' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Contact', link: '#contact' },    
  ];

  const socials = [
    { name: FaFacebook, link: 'https://www.facebook.com/kennyg4real' },
    { name: FaTwitter, link: 'https://twitter.com/_iamkeo' },
    { name: FaGithub, link: 'https://github.com/kenneth-okoro' },
  ];
  return (
    <footer className='bg-color-primary py-[3rem] text-center text-[0.9rem] mt-[7rem]'>
      <a
        className='text-color-bg text-[2rem] font-[500] mb-[2rem] inline-block'
        href='#'
      >
        devKeo
      </a>

      <ul className='permalinks flex flex-col gap-[1.5rem] sm:flex-row flex-wrap justify-center sm:gap-[2rem] mx-auto mb-[3rem]'>
        {links.map((link, index) => (
          <li key={index}>
            <a className='text-color-bg hover:text-white' href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className='footer-socials flex justify-center gap-[1rem] mb-[2.6rem] sm:mb-[4rem]'>
        {socials.map((social, index) => (
          <a key={index} href={social.link} className='bg-color-bg text-white p-[0.8rem] rounded-[0.7rem] flex border border-transparent hover:bg-transparent hover:text-color-bg hover:border-color-bg'>
            {<social.name />}
          </a>
        ))}
      </div>

      <div className='copyright mb-[4rem] text-color-bg'>
        <small>&copy; Kenneth Okoro | All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer