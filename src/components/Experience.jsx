import React from 'react';
import { images } from '../constants';

const Experience = () => {
  const skills = [
    { name: images.bootstrap, id: 1 },
    { name: images.css, id: 2 },    
    { name: images.git, id: 3 },
    { name: images.graphql, id: 4 },
    { name: images.javascript, id: 5 },
    { name: images.mu5, id: 6 },
    { name: images.react, id: 7 },
    { name: images.sass, id: 8 },
    { name: images.tailwind, id: 9 },
  ];
  return (
    <section id='experience'>
      <div className='text-center'>
        <h5 className='text-color-light'>My Skills</h5>
        <h2 className='text-color-primary mb-12'>Tech Stack</h2>
      </div>

      <div className='experience'>
        <div className='experience-skills'>
          <div className='skills  py-[2.4rem] px-[5rem] rounded-[2rem] border border-solid border-transparent grid gap-12 sm:w-full md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {skills.map((skill, id) => (
              <div
                key={id}
                className='p-4 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] mx-auto bg-color-bg-variant hover:-translate-y-6 duration-500 rounded-xl flex items-center justify-center'
              >
                <img
                  className='cursor-pointer'
                  key={skill.id}
                  src={skill.name}
                  alt={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
