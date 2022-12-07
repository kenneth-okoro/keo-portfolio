import React from 'react'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from 'react-icons/ai';

const Nav = () => {
  let navs = [
    { name: AiOutlineHome, link: '/#' },
    { name: AiOutlineUser, link: '#about' },
    { name: AiOutlineBook, link: '#experience' },
    { name: AiOutlineMessage, link: '#contact' },
  ];

  return (
    <nav className='bg-slate-900 w-max block py-3 px-7 z-20 fixed left-1/2 -translate-x-1/2 bottom-8 flex gap-3 rounded-[3rem]'>
      {navs.map((nav, index) => (
        <a key={index} className='links inline-block' href={nav.link}>
          {<nav.name />}
        </a>
      ))}      
    </nav>
  );
}

export default Nav