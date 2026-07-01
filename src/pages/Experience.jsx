import React from 'react'
import Title from '../components/Title'

const Experience = () => {

  const experience = [
    {
      title: "Full Stack Developer Intern",
      company: "CloudSpark Technologies",
      type: "Internship",
      date: "Jan 2024 - Jun 2024",
      color: "orange",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Freelance MERN Stack Developer",
      company: "Self Employed",
      type: "Freelance",
      date: "Jul 2024 - Present",
      color: "blue",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Software Engineer",
      company: "Tech Corp",
      type: "Full Time",
      date: "2025 - Present",
      color: "green",
      skills: ["React", "Next.js", "AWS"]
    }
  ]

  return (
    <div>
      <div className='max-w-full bg-background text-text pt-10 pb-10'>
        <div className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto'>

          <div className='flex flex-col items-center justify-center gap-3'>
            <Title num={"04"} title={"where i've worked"} />
            <h1 className='text-5xl font-bold '>My Experience</h1>
            <p className='text-muted text-md '>Where I've built things and what I learned doing it.</p>
          </div>

          <section className='relative max-w-6xl mx-auto py-20'>

            {/* Vertical Line */}
            <div className='absolute left-8 md:left-1/2 h-full'></div>

            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative flex gap-10 mb-16"
              >

                {/* Circle */}
                <div className='relative x-10'>
                  <div className={`w-8 h-8 rounded-full border-4 ${exp.color === "orange"
                    ? "border-orange-500"
                    : "border-blue-500"
                    } bg-background`}>

                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-3xl border border-slate-700 p-8 bg-slate-900">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-bold">{exp.title}</h2>
                      <p className="text-gray-400 mt-1">{exp.company}</p>
                    </div>

                    <span className={`px-4 py-2 rounded-full ${exp.color === "orange"
                        ? "text-orange-500 bg-orange-500/10"
                        : "text-blue-500 bg-blue-500/10"
                      }`}>
                      {exp.type}
                    </span>
                  </div>

                      <p className="text-gray-500 mt-6">
              {exp.date}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-slate-800"
                >
                  {skill}
                </span>
              ))}
            </div>

                </div>

              </div>
            ))}

          </section>

        </div>
      </div>
    </div>
  )
}

export default Experience