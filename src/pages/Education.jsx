import React from 'react'
import Title from '../components/Title'
import EducationCard from '../components/EducationCard'
import { container, fadeUp, fadeDown, fadeLeft, fadeRight } from '../components/animations/motionVariants'
import { motion } from 'framer-motion'

const Education = () => {

    const colors = {
        primary: {
            badge: "bg-primary/10 text-primary border-primary",
            card: "hover:border-primary",
        },
        secondary: {
            badge: "bg-secondary/10 text-secondary border-secondary",
            card: "hover:border-secondary",
        },
        green: {
            badge: "bg-green-500/10 text-green-500 border-green-500",
            card: "hover:border-green-500",
        },
    };

    return (
        <div className="max-w-full bg-background text-text py-20">
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="w-[95%] md:w-[96%] lg:w-[95%] mx-auto min-h-screen">

                {/* Heading */}
                <motion.div variants={fadeUp()} className="flex flex-col items-center justify-center gap-5 mb-20">
                    <Title num={"04"} title={"Work History"} />
                    <h1 className="text-5xl font-bold">Experience</h1>
                    <p className="text-muted text-md">
                        Where I've built things and what I learned doing it.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 -translate-x-1/2 h-full w-1 rounded-full bg-gradient-to-b from-primary via-secondary to-green-500"></div>

                    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.1}} className="flex flex-col gap-14">

                        {/* Timeline Item 1 */}
                        <motion.div variants={fadeLeft(0.5,0.7)} className="relative flex items-start">

                            {/* Dot */}
                            <div className="absolute left-6 top-12 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 outline outline-primary"></div>

                            {/* Connector */}
                            {/* <div className="absolute left-6 top-[53px] w-12 h-[3px] bg-primary"></div> */}

                            {/* Card */}
                            <div className="ml-24 w-full">
                                <EducationCard Title={"Full Stack Developer Intern"} company={"CloudSpark Technologies"} type={"Internship"} duration={"Jan 2025 - Jun 2025"} badgeColor={colors.primary.badge} cardColor={colors.primary.card} />
                            </div>

                        </motion.div>

                        {/* Timeline Item 2 */}
                        <motion.div variants={fadeLeft(0.7,0.9)} className="relative flex items-start">

                            <div className="absolute left-6 top-12 -translate-x-1/2 w-5 h-5 rounded-full bg-secondary border-4 border-background z-10 outline outline-secondary"></div>

                            {/* <div className="absolute left-6 top-[53px] w-12 h-[3px] bg-secondary"></div> */}

                            <div className="ml-24 w-full">
                                <EducationCard Title={"Freelance MERN Stack Developer"} company={"Self-employed"} type={"Freelance"} duration={"Jan 2025 - Jun 2025"} badgeColor={colors.secondary.badge} cardColor={colors.secondary.card} />
                            </div>

                        </motion.div>

                        {/* Timeline Item 3 */}
                        <motion.div variants={fadeLeft(0.9,1.1)} className="relative flex items-start">

                            <div className="absolute left-6 top-12 -translate-x-1/2 w-5 h-5 rounded-full bg-green-500 border-4 border-background z-10 outline outline-green-500"></div>

                            {/* <div className="absolute left-6 top-[53px] w-12 h-[3px] bg-green-500"></div> */}

                            <div className="ml-24 w-full">
                                <EducationCard Title={"Bachelor of Computer Science"} company={"GitHub - Various Projects"} type={"Open Source"} duration={"2023 - 2026"} badgeColor={colors.green.badge} cardColor={colors.green.card} />
                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </motion.div>
        </div>
    )
}

export default Education