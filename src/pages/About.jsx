import React from 'react'
import Title from '../components/Title'
import { MdLocationPin } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { MdMenuBook } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { motion } from 'framer-motion'

const About = () => {
  return (

    <div className='max-w-full bg-background text-white pt-10'>
      <div className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto min-h-screen'>
        <div className='flex flex-col items-center gap-5 '>
          <Title num={"01"} title={"who I am"} />
          <h1 className='text-5xl font-bold '>About Me</h1>
          <p className='text-muted'>A passionate full-stack developer who turns ideas into production-ready applications.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20'>

          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className='border flex flex-col space-y-6 px-8 py-8 rounded-xl border-white/20 bg-surface shadow-2xl shadow-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-b-4 hover:border-primary'>

            <div className='flex gap-14 items-center'>
              <div className='w-20 h-20 font-mono'>
                <h1 className='text-4xl rounded-xl px-5 py-5 bg-gradient-to-br from-primary to-yellow-300 text-white font-bold flex items-center justify-center'>S</h1>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-semibold font-mono'>Santhosh</h1>
                <p className='text-gray-300'>MERN Stack Developer</p>
                <p className='text-sm text-muted flex items-center gap-1'> <TiLocation className='text-lg text-primary' /> Trichy, Tamil Nadu</p>
              </div>
            </div>

            <div className='text-gray-300 text-sm leading-relaxed'>
              I'm a full-stack developer specializing in the MERN ecosystem. I care deeply about developer experience, API design, and writing code that future me won't hate. I've shipped production apps used by real users and I'm always learning.
            </div>

            <div className='flex flex-col gap-5'>
              <h1 className='text-xl font-semibold'>EDUCATION</h1>

              <div className='border rounded-2xl border-white/10 flex gap-4 bg-background/95 px-4 py-4'>
                <div className='flex p-4 '>
                  <MdMenuBook className='text-secondary text-2xl' />
                </div>
                <div className='font-semibold flex flex-col gap-1'>
                  <h1 className='font-semibold text-lg'>B.Sc., Computer Science</h1>
                  <p className='text-gray-300 text-sm'>Bharathidasan University</p>
                  <p className='text-muted text-xs'>2023 - 2026 CGPA: 8.4/10</p>
                </div>
              </div>

            </div>
          </motion.div>

          <div className='flex flex-col gap-5'>
            <motion.div initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className='border border-primary/50 bg-primary/5 px-5 py-5 rounded-2xl flex flex-col gap-1'>
              <h1 className='font-semibold text-lg text-primary '>Career Objective</h1>
              <p className='text-gray-300 text-md leading-relaxed'>To join a fast-moving team where I can apply my full-stack expertise to build impactful products. Particularly interested in roles involving complex backend architecture, real-time systems, or scaling Node.js applications.</p>
            </motion.div>

            <div className='grid grid-cols-2 gap-5 '>
              <motion.div initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: "0.5"
                }}
                viewport={{ once: true }}
                className='flex flex-col items-start justify-center gap-1 border rounded-2xl px-3 py-3 border-white/30 bg-surface'>
                <p className='text-muted text-xs'>Experience</p>
                <p className='text-gray-300 font-bold'>1+ Year</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: "0.6"
                }}
                viewport={{ once: true }}
                className='flex flex-col items-start justify-center gap-1 border rounded-2xl px-3 py-3 border-white/30 bg-surface'>
                <p className='text-muted text-xs'>Project Shipped</p>
                <p className='text-gray-300 font-bold'>5+</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: "0.7"
                }}
                viewport={{ once: true }}
                className='flex flex-col items-start justify-center gap-1 border rounded-2xl px-3 py-3 border-white/30 bg-surface'>
                <p className='text-muted text-xs'>Specialization</p>
                <p className='text-gray-300 font-bold'>MERN Stack and Full Stack </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className='flex flex-col items-start justify-center gap-1 border rounded-2xl px-3 py-3 border-white/30 bg-surface'>
                <p className='text-muted text-xs'>Work Mode</p>
                <p className='text-gray-300 font-bold'>Remote Ready</p>
              </motion.div>
            </div>

            <div className='text-muted text-sm flex flex-col gap-2'>
              <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1, ease: "easeOut" }} className='flex items-center gap-2'><TiTick className='text-green-500 rounded-full border-green-500 border-2' />Design and implement RESTful APIs with Node.js + Express</motion.p>
              <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }} className='flex items-center gap-2'><TiTick className='text-green-500 rounded-full border-green-500 border-2' />Build dynamic React UIs with Redux state management</motion.p>
              <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }} className='flex items-center gap-2'><TiTick className='text-green-500 rounded-full border-green-500 border-2' />Model and query MongoDB databases with Mongoose</motion.p>
              <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }} className='flex items-center gap-2'><TiTick className='text-green-500 rounded-full border-green-500 border-2' />Deploy full-stack apps to Vercel, Render, and AWS</motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About