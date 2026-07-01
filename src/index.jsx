import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import Navebar from "./components/Navebar";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const skills = ["React", "Node", "Express", "MongoDB", "Tailwind", "Redux", "JWT", "Mongoose", "PostgreSQL", "Redis", "GitHub", "Git", "Postman", "VS Code", "Vercel", "Render", "Docker"];

const App = () => {
    return (
        <>
            <Navebar />
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    )
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<App/>)