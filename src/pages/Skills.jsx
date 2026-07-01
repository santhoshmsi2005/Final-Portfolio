import React from 'react'
import Title from '../components/Title'
import { SkillsDesign, TopSkillsDesign } from '../components/SkillsDesign'
import { motion } from 'framer-motion'

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.50, //Delay between children
        }
    }
}

const item = {
    hidden: {
        y: 40,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        }
    }
}

const Skills = () => {
    return (
        <div>
            <div className='max-w-full bg-background text-text pt-14 pb-10'>
                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once:true, amount: 0.3}} className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto gap-16 '>

                    <motion.div variants={item} className='flex flex-col items-center justify-center gap-5'>
                        <motion.div>
                            <Title num={"02"} title={"tech stack"} />
                        </motion.div>
                        <motion.h1 className='text-5xl font-bold '>Skills & Technologies</motion.h1>
                        <motion.p className='text-muted text-md '>Tools and technologies I reach for when building full-stack applications.</motion.p>
                    </motion.div>

                    <motion.div variants={item} className='flex flex-col gap-4 mt-10'>
                        <TopSkillsDesign toplanguage={"FRONTEND"} />
                        <div className='flex flex-wrap gap-5'>
                            <SkillsDesign language={"HTML5"} bgColor={"orange"} />
                            <SkillsDesign language={"CSS3"} bgColor={"blue"} />
                            <SkillsDesign language={"JavaScript"} bgColor={"yellow"} />
                            <SkillsDesign language={"React.js"} bgColor={"blue"} />
                            <SkillsDesign language={"TypeScript"} bgColor={"purple"} />
                            <SkillsDesign language={"Tailwind CSS"} bgColor={"black"} />
                            <SkillsDesign language={"Redux Toolkit"} bgColor={"blue"} />
                        </div>
                    </motion.div>

                    <motion.div variants={item} className='flex flex-col gap-4 mt-10'>
                        <TopSkillsDesign toplanguage={"BACKEND"} />
                        <div className='flex flex-wrap gap-5'>
                            <SkillsDesign language={"Node.js"} bgColor={"green"} />
                            <SkillsDesign language={"Express.js"} bgColor={"gray"} />
                            <SkillsDesign language={"REST APIs"} bgColor={"blue"} />
                            <SkillsDesign language={"JWT AUTH"} bgColor={"purple"} />
                        </div>
                    </motion.div>

                    <motion.div variants={item} className='flex flex-col gap-4 mt-10'>
                        <TopSkillsDesign toplanguage={"DATABASE"} />
                        <div className='flex flex-wrap gap-5'>
                            <SkillsDesign language={"MongoDB"} bgColor={"green"} />
                            <SkillsDesign language={"MySQL"} bgColor={"blue"} />
                            <SkillsDesign language={"PostgreSQL"} bgColor={"blue"} />
                            <SkillsDesign language={"Redis"} bgColor={"orange"} />
                        </div>
                    </motion.div>

                    <motion.div variants={item} className='flex flex-col gap-4 mt-10'>
                        <TopSkillsDesign toplanguage={"DEVTOOLS & CLOUD"} />
                        <div className='flex flex-wrap gap-5'>
                            <SkillsDesign language={"Git"} bgColor={"black"} />
                            <SkillsDesign language={"GitHub"} bgColor={"black"} />
                            <SkillsDesign language={"Postman"} bgColor={"black"} />
                            <SkillsDesign language={"VS Code"} bgColor={"black"} />
                            <SkillsDesign language={"Vercel"} bgColor={"black"} />
                            <SkillsDesign language={"Render"} bgColor={"black"} />
                            <SkillsDesign language={"Docker"} bgColor={"black"} />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

export default Skills