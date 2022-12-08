import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
import projects from '../data';

const Portfolio = () => {
  const [data, setData] = useState(projects);

  const filterResult = (output) => {
    const result = projects.filter((curData) => {
      return curData.categories === output;
    });
    setData(result);
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section id='portfolio'>
      <div className='text-center'>
        <h5 className='text-color-light'>My Portfolio</h5>
        <h2 className='text-color-primary mb-12'>Projects</h2>
      </div>

      <div className='leading-[30px] lg:leading-[20px] flex  justify-center mx-auto items-center w-fit space-x-6 px-4 py-0.5 mt-8  bg-white rounded-lg text-black  '>
        <button
          className='active:underline active:text-color-primary hover:text-color-primary'
          onClick={() => setData(projects)}
        >
          All
        </button>

        <button
          className='active:underline active:text-color-primary hover:text-color-primary'
          onClick={() => filterResult('webapp')}
        >
          Web Apps
        </button>

        <button
          className='active:underline active:text-color-primary hover:text-color-primary'
          onClick={() => filterResult('website')}
        >
          Websites
        </button>
      </div>

      <div className='pt-4 sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 2xl:grid-cols-4  max-w-[23rem] sm:max-w-fit mx-auto '>
        {data.map((item) => {
          const { id, name, img, desc, lang, link, github } =
            item;

          return (
            <div
              key={id}
              className='mt-8 mx-auto sm:w-[300px] max-h-max w-full bg-color-bg-variant rounded-lg shadow-2xl hover:bg-color-bg hover:-translate-y-2 duration-300 hover:ease-in transition hover:shadow-2xl hover:border-b-color-primary hover:cursor-pointer hover:border-b-2'
            >
              <div data-aos='fade-down'>
                <a href={link}>
                  <img
                    className='w-full h-[180px] sm:h-[180px] lg:h-[150px] rounded-t-lg'
                    src={img}
                    alt=''
                  />
                </a>

                <div>
                  <h2 className='text-color-primary text-left pt-1 sm:pt-4 mx-2 font-Ubuntu font-semibold sm:text-[18px] lg:text-[15px] lg:mx-3 text-[18px]'>
                    {name}
                  </h2>
                </div>

                <p className='text-light mt-3 mx-2 lg:mx-3 font-mono text-[14px] lg:text-[12px] lg:mt-1  sm:h-[90px] lg:h-[70px]'>
                  {desc}
                </p>
                <p className='mt-2 mx-2 lg:mx-3 text-gray-300 text-[14px] lg:text-[11px]'>
                  {lang}
                </p>
              </div>

              <div
                data-aos='fade-up'
                className='flex flex-row justify-between mx-2 pt-6 lg:pt-4 pb-4 lg:mx-3'
              >
                <a href={link}>
                  <button className='flex mx-auto px-2 lg:px-3 py-1 lg:py-1 text-[12px] lg:text-[11px] bg-color-primary border-color-bg-variant hover:bg-color-primary-variant hover:text-white rounded-lg text-black font-Ubuntu font-bold'>
                    Live Demo
                    <span className='ml-2 text-[20px] lg:text-[12px] lg:mt-[2px]'>
                      <AiFillEye />
                    </span>
                  </button>
                </a>

                <a
                  className='text-[30px] md:text-[25px] text-gray-400  hover:text-white'
                  href={github}
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
