import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { fadeUp, fadeDown, fadeRight, fadeLeft, container } from '../components/animations/motionVariants';

const Footer = () => {
    return (
        <div className='max-w-full bg-background text-text pt-10 pl-8 border-t border-muted/30'>
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto '>
                <motion.div variants={fadeDown(0.5,0.8)} className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold text-primary'>Santhosh</h1>
                        <p className='text-muted text-md'>MERN Stack Developer building scalable web applications that solve real problems.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold'>Links</h2>
                        <ul className='flex flex-col gap-1'>
                            <li className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer inline-block'>Home</li>
                            <li className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer inline-block'>About</li>
                            <li className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer inline-block'>Projects</li>
                            <li className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer inline-block'>Experience</li>
                            <li className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer inline-block'>Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold mb-2'>Social Links</h2>
                        <div className='flex flex-col gap-1'>
                            <p className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center gap-2 '><FiArrowUpRight />GitHub</p>
                            <p className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center gap-2'><FiArrowUpRight />LinkedIn</p>
                            <p className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center gap-2'><FiArrowUpRight />Email</p>
                            <p className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center gap-2'><FiArrowUpRight />Instagram</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeUp(0.7,0.9)} className='flex justify-center mt-10 pb-3'>
                    <p className='text-muted'>Copyright © 2026 Santhosh. All rights reserved.</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Footer