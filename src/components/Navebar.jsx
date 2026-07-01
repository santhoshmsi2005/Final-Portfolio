import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navebar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className='max-w-full bg-background text-white shadow-2xl shadow-black/50 sticky top-0 z-50'>
        <motion.div className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto flex items-center justify-between h-20'>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <h1 className='text-2xl font-bold font-mono'>Portfolio</h1>
          </motion.div>

          <div className='md:hidden ' onClick={() => setIsOpen(!isOpen)}>
            <FaBars className='text-2xl' />
          </div>

          {/* mobile responsive menu  */}
          {isOpen && (
            <motion.div initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.5, }}
              exit={{ opacity: 0, scaleY: 0, }}
              className='absolute top-20 left-0 right-0 bg-background w-full flex flex-col gap-4 text-center text-lg font-medium py-6 shadow-2xl shadow-black/50'
            >
              <a href="#About">Home</a>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </motion.div>
          )}

          {/* desktop  */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className='hidden md:flex gap-6 text-gray-400 text-base font-medium '>
            <a className='hover:text-primary duration-300 cursor-pointer group relative' href="#">Home
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a className='hover:text-primary duration-300 cursor-pointer group relative' href="#">About
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full'></span> </a>
            <a className='hover:text-primary duration-300 cursor-pointer group relative' href="#">Projects
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full'></span> </a>
            <a className='hover:text-primary duration-300 cursor-pointer group relative' href="#">Contact
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full'></span> </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='hidden md:flex'>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className='flex items-center justify-center gap-1 bg-gradient-to-br from-[#FA7F25] to-[#FD9426] text-white font-semibold px-5 py-2 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-primary/40 transition-shadow'> <MdOutlineFileDownload />  Resume</motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Navebar