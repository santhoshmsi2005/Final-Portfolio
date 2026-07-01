import { delay } from "framer-motion";

export const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 1, //Delay between children
        }
    }
}

export const fadeUp = (delay = 0, duration = 0.5) => ({
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration,
            ease: "easeOut",
        }
    },
});

export const fadeLeft = (delay = 0, duration = 0.5) => ({
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay,
            duration,
            ease: "easeOut",
        }
    },
});

export const fadeRight = (delay = 0, duration = 0.5) => ({
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay,
            duration,
            ease: "easeOut",
        }
    },
});

export const fadeDown = (delay = 0, duration = 0.5) => ({
    hidden: {
        opacity: 0,
        y: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration,
            ease: "easeOut",
        }
    },
});