import React, { useState } from 'react'
import Title from '../components/Title'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from 'framer-motion';
import { fadeUp, fadeRight, fadeLeft, container } from '../components/animations/motionVariants';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'

const Contact = () => {
    const schema = z.object({
        name: z.string().min(1, { message: 'Required' }),
        email: z.email({ message: 'Invalid email address' }),
        message: z.string().min(1, { message: 'Required' }),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

    const [result, setResult] = useState("")

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     formData.append("access_key", "1f5868ce-fe82-4da4-be6f-1c357c8bbe87");

    //     const response = await fetch("https://api.web3forms.com/submit", {
    //         method: "POST",
    //         body: formData
    //     });

    //     const data = await response.json();
    //     setResult(data.success ? "Success!" : "Error");
    // };

    const HandleSubmitData = async (data) => {
        setResult("Sending...");

        const formData = new FormData();

        formData.append("access_key", "1f5868ce-fe82-4da4-be6f-1c357c8bbe87");
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        setResult(result.success ? "Message sent successfully!" : result.message);
        reset();
    };

    return (
        <div>
            <div className='max-w-full bg-background text-text py-20'>
                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto min-h-screen'>

                    {/* Heading */}
                    <motion.div variants={fadeUp()} className='flex flex-col items-center justify-center gap-5 mb-20'>
                        <Title num={"05"} title={"Contact"} />
                        <h1 className='text-5xl font-bold'>Get In Touch</h1>
                        <p className='text-md text-muted'>Have a project in mind, or just want to chat? My inbox is open.</p>
                    </motion.div>

                    {/* Form */}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        {/* Left Side */}
                        <motion.div variants={fadeLeft(0.5, 0.7)} className='flex flex-col gap-10 border rounded-xl border-muted/50 md:border-none p-10'>
                            <h1 className='text-4xl font-bold'>
                                Let's build something together
                            </h1>
                            <p className='text-md text-muted'>
                                Available for freelance projects and full-time opportunities. If you have a MERN stack project or want a reliable developer on your team, let's talk.
                            </p>

                            <div>
                                <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='flex flex-col gap-3'>
                                    <motion.div variants={fadeLeft(0.7, 0.9)} className='flex items-center gap-4 border border-muted/50 p-4 rounded-xl bg-surface hover:bg-primary/5 cursor-pointer transition-all duration-300 hover:border-primary'>
                                        <div className='border p-2 rounded-lg bg-primary/20 text-primary border-primary'>
                                            <MdOutlineEmail />
                                        </div>
                                        <div>
                                            <p className='text-muted'>Email</p>
                                            <p className='font-bold'>santhoshmsi2005@gmail.com</p>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={fadeLeft(0.9, 1.1)} className='flex items-center gap-4 border border-muted/50 p-4 rounded-xl bg-surface hover:bg-primary/5 cursor-pointer transition-all duration-300 hover:border-primary'>
                                        <div className='border p-2 rounded-lg bg-primary/20 text-primary border-primary'>
                                            <FaPhone />
                                        </div>
                                        <div>
                                            <p className='text-muted'>Phone</p>
                                            <p className='font-bold'>+91 9876543210</p>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={fadeLeft(1.1, 1.3)} className='flex items-center gap-4 border border-muted/50 p-4 rounded-xl bg-surface hover:bg-primary/5 cursor-pointer transition-all duration-300 hover:border-primary'>
                                        <div className='border p-2 rounded-lg bg-primary/20 text-primary border-primary'>
                                            <MdLocationOn />
                                        </div>
                                        <div>
                                            <p className='text-muted'>Location</p>
                                            <p className='font-bold'>Trichy, Tamil Nadu, India</p>
                                        </div>
                                    </motion.div>

                                </motion.div>
                            </div>

                            <div className='flex gap-5'>
                                <motion.div variants={fadeLeft(1.3, 1.5)} className='border text-muted hover:text-primary border-muted/50 p-4 rounded-xl bg-surface hover:bg-primary/5 cursor-pointer transition-all duration-300 hover:border-primary text-xl'>
                                    <FaGithub />
                                </motion.div>
                                <motion.div variants={fadeLeft(1.5, 1.7)} className='border text-muted hover:text-primary border-muted/50 p-4 rounded-xl bg-surface hover:bg-primary/5 cursor-pointer transition-all duration-300 hover:border-primary text-xl'>
                                    <FaLinkedin />
                                </motion.div>
                                <motion.div variants={fadeLeft(1.7, 1.9)} className='border text-muted hover:text-primary border-muted/50 p-4 rounded-xl bg-surface hover:bg-primary/5 cursor-pointer transition-all duration-300 hover:border-primary text-xl'>
                                    <MdOutlineEmail />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Side */}
                        <motion.form variants={fadeRight(0.5, 0.7)} onSubmit={handleSubmit(HandleSubmitData)} className='flex flex-col p-10 justify-center w-full' >
                            <div className='border border-muted/50 p-10 rounded-2xl w-full h-full bg-surface/50 flex flex-col gap-4 shadow-[0_0_30px_8px_rgba(0,0,0,1)]'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-sm text-muted font-medium'>Full Name</h1>
                                    <input {...register("name")} type="text" name='name' placeholder='Your Name' className='border border-muted/50 w-full px-3 py-3 rounded-lg bg-background focus:outline-none focus:border-primary' />
                                    {errors.name?.message && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-sm text-muted font-medium'>Email Address</h1>
                                    <input {...register("email")} type="email" name='email' placeholder='Your Email Address' className='border border-muted/50 w-full px-3 py-3 rounded-lg bg-background focus:outline-none focus:border-primary' />
                                    {errors.email?.message && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-sm text-muted font-medium'>Message</h1>
                                    <textarea {...register("message")} name='message' placeholder='Hi Santhosh, I have a project...' className='border border-muted/50 w-full px-2 py-2 rounded-lg bg-background h-56 focus:outline-none focus:border-primary' />
                                    {errors.message?.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                                </div>

                                <button type='submit' className='flex items-center justify-center gap-4 border text-primary border-primary p-3 rounded-xl bg-primary/10 cursor-pointer transition-all duration-300 hover:bg-primary hover:text-background hover:shadow-[0_0_7px_5px_var(--primary)/30]'>
                                    <FiSend className='text-xl' />
                                    <span className='text-lg font-bold'>Send Message</span>
                                </button>
                            </div>
                            <p className='text-center text-lg font-bold text-primary'>
                                {result}
                            </p>
                        </motion.form>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact;