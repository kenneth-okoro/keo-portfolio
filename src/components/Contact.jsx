import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hlryk93',
        'template_gvit51s',
        form.current,
        'TjF74n70Si5kErB7t'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          toast.error('Something Went Wrong');
        }
      );
    e.target.reset();
    toast.success('Mail sent');
  };

  let socials = [
    {
      icon: AiOutlineMail,
      name: 'Email',
      msg: 'Get In Touch',
      link: 'mailto:devthekeo@gmail.com',
    },
    {
      icon: FaFacebookMessenger,
      name: 'Facebook',
      msg: 'Kenneth',
      link: 'https://m.me/kennyg4real',
    },
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      msg: 'devKeo',
      link: 'https://wa.me/2349038677459',
    },
  ];

  return (
    <section id='contact'>
      <div className='text-center'>
        <h5 className='text-color-light'>Get In Touch</h5>
        <h2 className='text-color-primary mb-12'>Contact Me</h2>
      </div>

      <div className='contact-container w-[90%] sm:w-[58%] mx-auto grid gap-[2rem] grid-cols-1 lg:gap-[12%] lg:grid-cols-[30%_58%]'>
        <div className='contact-options flex flex-col gap-5'>
          {socials.map((social, index) => (
            <article
              key={index}
              className='contact-option flex flex-col items-center bg-color-bg-variant p-5 rounded-3xl border border-transparent transition-all duration-[400] ease-in hover:bg-transparent hover:border-color-primary-variant'
            >
              {<social.icon className='links text-[1.5rem] mb-[0.5rem]' />}
              <h4>{social.name}</h4>
              <h5 className='text-color-light'>{social.msg}</h5>
              <a
                href={social.link}
                className='links mt-[0.7rem] inline-block text-[0.8rem]'
                target='_blank'
                rel='noreferrer'
              >
                Send a message
              </a>
            </article>
          ))}
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col gap-[1.2rem]'
        >
          <input
            className='custom-input'
            type='text'
            name='name'
            placeholder='Enter Your Name'
          />
          <input
            className='custom-input'
            type='text'
            name='subject'
            placeholder='Subject of Mail'
          />
          <input
            className='custom-input'
            type='email'
            name='email'
            placeholder='Enter Your Email'
          />
          <textarea className='custom-input' name='message' rows='7'></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
