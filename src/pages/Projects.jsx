import React, { useState } from 'react'
import Title from '../components/Title'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { container, fadeUp } from '../components/animations/motionVariants'
import Thumnail from "../assets/Thumnail.png";
import ImgToPDF from "../assets/ImgToPDF.png";

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const E_CommersSkills = [
        "React", "Node.js", "MongoDB", "Express", "Prisma", "Tailwind Css", "JWT Auth", "REST API"
    ]

    const projects = [
        {
            image: Thumnail,
            title: "E-Commerce Platform",
            description:
                "Full-stack shopping experience with authentication, cart management, product catalog and Stripe payment integration.",
            skills: E_CommersSkills,
            github: "https://github.com/santhoshmsi2005/E-commerce-Fullstack",
            LiveDemo: "https://e-commerce-fullstack-irsf.vercel.app",
        }, {
            image: ImgToPDF,
            title: "Img to PDF",
            description:
                "Img to PDF converter is a web application that allows you to convert images to PDF.",
            skills: ["HTML", "CSS", "JavaScript", "React", "jspdf", "react-dropzone", "react-hot-toast", "tailwindcss"],
            github: "https://github.com/santhoshmsi2005/Image-To-PDF",
            LiveDemo: "https://image-to-pdf-zeta-one.vercel.app/",
        }
    ]

    return (
        <div>
            <div className='max-w-full bg-background text-text pt-10 pb-10'>
                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto min-h-screen flex flex-col gap-14'>
                    <motion.div variants={fadeUp()} className='flex flex-col items-center justify-center gap-5'>
                        <Title num={"03"} title={"featured work"} />
                        <h1 className='text-5xl font-bold '>Projects</h1>
                        <p className='text-muted text-md '>A selection of full-stack applications I designed, built, and shipped.</p>
                    </motion.div>

                    <motion.div variants={fadeUp(0.5, 0.8)} className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 '>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                image={project.image}
                                ProjectTitle={project.title}
                                ProjectDescription={project.description}
                                ProjectSkills={project.skills}
                                github={project.github}
                                LiveDemo={project.LiveDemo}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </motion.div>

                    {/* PopUp */}
                    {selectedProject && (
                        <div
                            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
                            onClick={() => setSelectedProject(null)}
                        >
                            <div
                                className='bg-surface rounded-3xl p-6 max-w-lg w-[90%]'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedProject.image}
                                    alt=""
                                    className='w-full h-60 object-cover rounded-2xl'
                                />

                                <h2 className='text-2xl font-bold mt-4'>
                                    {selectedProject.title}
                                </h2>

                                <p className='text-muted mt-3'>
                                    {selectedProject.description}
                                </p>

                                <div className='flex flex-wrap gap-2 mt-4'>
                                    {selectedProject.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className='px-3 py-1 rounded-full bg-orange-500/20 text-orange-400'
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex gap-2'>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className='mt-6 px-5 py-2 bg-orange-500 rounded-full hover:scale-105 transition-transform duration-500 active:scale-95'
                                    >
                                        Close
                                    </button>
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='mt-6 px-5 py-2 bg-orange-500 rounded-full hover:scale-105 transition-transform duration-500 active:scale-95'
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={selectedProject.LiveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='mt-6 px-5 py-2 bg-orange-500 rounded-full hover:scale-105 transition-transform duration-500 active:scale-95'
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                </motion.div>
            </div>
        </div>
    )
}

export default Projects