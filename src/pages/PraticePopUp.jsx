import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { div } from 'framer-motion/client'

const PraticePopUp = () => {

    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
            ProjectTitle: "E-Commerce Platform",
            ProjectDescription: "Full-stack shopping experience with authentication, cart management, product catalog and Stripe payment integration.",
            ProjectSkills: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
            github:"https://github.com/santhoshmsi2005/E-commerce-Fullstack",
            LiveDemo:"https://e-commerce-fullstack-irsf.vercel.app",
        }
    ]

    return (
        <div className='grid grid-cols-2 gap-5 bg-background text-text pt-10 pb-10'>
            {projects.map((project, index) => {
                return (
                    <ProjectCard
                        key={index} 
                        image={project.image}
                        ProjectTitle={project.ProjectTitle}
                        ProjectDescription={project.ProjectDescription}
                        ProjectSkills={project.ProjectSkills}
                        github={project.github}
                        LiveDemo={project.LiveDemo}
                        onClick={() => setSelectedProject(project)}
                    />
                )
            })}

            {/* PopUp */}
            {selectedProject && (
                <div>
                    <h1>{selectedProject.ProjectTitle}</h1>
                    <p>{selectedProject.ProjectDescription}</p>
                    <button className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold' onClick={() => setSelectedProject(null)}>Close</button>
                </div>
            )}
            
        </div>
    )
}

export default PraticePopUp