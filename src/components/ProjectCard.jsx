import React from 'react'

const ProjectCard = ({
  image,
  ProjectTitle,
  ProjectDescription,
  ProjectSkills,
  github,
  LiveDemo,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className='flex flex-col border rounded-3xl overflow-hidden w-full border-muted/20 bg-surface group hover:-translate-y-3 transition-transform duration-500 hover:border-primary shadow-2xl shadow-black/50 cursor-pointer'
    >
      <div className='relative w-full h-56 group-hover:scale-105 transition-transform duration-500'>
        <img className='w-full h-full object-cover' src={image} alt="" />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-surface/70 via-surface/5 to-transparent'></div>

        <div className='absolute bottom-5 left-5 text-xs font-bold flex gap-3 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500'>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className='bg-background px-5 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform'
          >
            GitHub
          </a>

          <a
            href={LiveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className='bg-primary px-5 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform'
          >
            Live Demo
          </a>
        </div>
      </div>

      <div className='p-5 flex items-start flex-col gap-3'>
        <h1 className='text-2xl font-bold'>{ProjectTitle}</h1>

        <p className='text-muted text-sm'>
          {ProjectDescription}
        </p>

        <div className='flex flex-wrap gap-2'>
          {ProjectSkills?.map((skill) => (
            <span
              key={skill}
              className='text-xs text-gray-400 border border-gray-600 rounded-full px-2 py-0.5'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard