import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./index.css";
import Navebar from "./components/Navebar";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5,
        });

        let rafId;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                const id = anchor.getAttribute('href');
                if (id && id.length > 1) {
                    const targetEl = document.querySelector(id);
                    if (targetEl) {
                        e.preventDefault();
                        lenis.scrollTo(targetEl, { offset: -20, duration: 1.2 });
                    }
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="overflow-x-hidden w-full max-w-[100vw]">
            <Navebar />
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
};

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<App />);