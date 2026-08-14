import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { fadeUp, fadeDown, container } from '../components/animations/motionVariants';
import { FOOTER_LINKS, PROFILE } from '../constants/profile';

const Footer = () => {
    return (
        <div className='max-w-full bg-background text-text pt-10 pl-8 border-t border-muted/30'>
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto '>
                <motion.div variants={fadeDown(0.5, 0.8)} className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold text-primary'>{PROFILE.firstName}</h1>
                        <p className='text-muted text-md'>{PROFILE.title} building scalable web applications that solve real problems.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold'>Links</h2>
                        <ul className='flex flex-col gap-1'>
                            {FOOTER_LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <a href={href} className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer inline-block'>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-bold mb-2'>Social Links</h2>
                        <div className='flex flex-col gap-1'>
                            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center gap-2'>
                                <FiArrowUpRight />GitHub
                            </a>
                            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center gap-2'>
                                <FiArrowUpRight />LinkedIn
                            </a>
                            <a href={`mailto:${PROFILE.email}`} className='text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center gap-2'>
                                <FiArrowUpRight />Email
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeUp(0.7, 0.9)} className='flex justify-center mt-10 pb-3'>
                    <p className='text-muted'>Copyright © 2026 {PROFILE.firstName}. All rights reserved.</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Footer
