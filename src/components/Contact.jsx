import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import * as Yup from 'yup'
import { useForm } from "react-hook-form"

const Contact = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

const onSubmit = async (data) => {
  try {
    await schema.validate(data, { abortEarly: false });

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    await emailjs.send('service_859c4a6', 'template_6166uys', templateParams, 'RBPQuZyQxdBsFIpfm');

    alert('Message sent!');
    reset(); // Resets the form after successful submission
  } catch (error) {
    console.error(error);
    alert('Error sending message');
  }
}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" 
            type="text" 
            id="name" 
            name="name" 
            placeholder="What's your name?"
            {...register('name', { required: true})} />
            {errors.name && <div>{errors.name.message}</div>}
          </label>

          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-4">
                Your Email
              </span>
            <input 
            type="email" 
            id="email" 
            name="email" 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" 
            placeholder="What's your email?"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <div>{errors.email.message}</div>}
          </label>

          <label 
          htmlFor="message"
          className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea 
            id="message" 
            name="message" 
            rows="7"
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" 
            {...register('message', { required: true})} />
            {errors.message && <div>{errors.message.message}</div>}
          </label>

          <button type="submit">Send</button>
        </form>

       
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
