import React from 'react'
import Title from '../components/Title'
import { MdLocationPin } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { MdMenuBook } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { motion } from 'framer-motion'
import MagneticGrid from '../components/MagneticGrid';
import profileImg from '../assets/profile.jpg';
import { PROFILE } from '../constants/profile';

const About = () => {
  return (

    <div id="about" className='max-w-full bg-background text-white pt-10 overflow-x-hidden'>
      <div className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto min-h-screen'>
        <div className='flex flex-col items-center gap-5 '>
          <Title num={"01"} title={"who I am"} />
          <h1 className='text-5xl font-bold '>About Me</h1>
          <p className='text-muted'>A passionate full-stack developer who turns ideas into production-ready applications.</p>
        </div>
        {/* Centered profile image */}
        <div className='flex justify-center mt-20 mb-12'>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-xl overflow-hidden border border-white/10 group shadow-inner"
          >
            <MagneticGrid
              image={profileImg}
              dots={28}
              gap={4}
              intensity={10}
              radius={160}
              background="#0b0f19"
              className="w-full h-full cursor-pointer"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-xs text-primary border border-primary/30 pointer-events-none font-mono">
              ✨ Hover to reveal
            </div>
          </motion.div>
        </div>

        {/* Both cards at the same level */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start overflow-x-hidden'>

          <motion.div className='w-full border flex flex-col space-y-6 px-8 py-8 rounded-xl border-white/20 bg-surface shadow-2xl shadow-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-b-4 hover:border-primary'>

            <div className='flex gap-6 items-center'>
              <div className='w-14 h-14 font-mono flex-shrink-0'>
                <h1 className='text-3xl rounded-xl px-4 py-3 bg-gradient-to-br from-primary to-yellow-300 text-white font-bold flex items-center justify-center'>S</h1>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-3xl font-semibold font-mono'>Santhosh</h1>
                <p className='text-gray-300'>{PROFILE.title}</p>
                <p className='text-sm text-muted flex items-center gap-1'> <TiLocation className='text-lg text-primary' /> {PROFILE.location}</p>
              </div>
            </div>

            <div className='text-gray-300 text-sm leading-relaxed'>
              Full Stack Developer with hands-on experience building and deploying complete web applications using React.js, Next.js, Node.js, Express.js, and MongoDB/PostgreSQL/MySQL. Skilled in REST API design, authentication (JWT, OAuth), and responsive UI development with Tailwind CSS.
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
                  <p className='text-muted text-xs'>2023 - 2026 | CGPA: 8.52/10</p>
                </div>
              </div>

            </div>
          </motion.div>

          <div className='flex flex-col gap-5 overflow-x-hidden'>
            <motion.div initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className='border border-primary/50 bg-primary/5 px-5 py-5 rounded-2xl flex flex-col gap-1'>
              <h1 className='font-semibold text-lg text-primary '>Career Objective</h1>
              <p className='text-gray-300 text-md leading-relaxed'>Seeking an entry-level Full Stack Developer role to apply technical skills and deliver reliable, user-focused software. Interested in complex backend architecture, real-time systems, and scaling Node.js applications.</p>
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
                <p className='text-gray-300 font-bold'>2+</p>
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