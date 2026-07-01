import React from "react";
import { motion } from "framer-motion";

const DeveloperCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Floating Tech Badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 right-6 px-3 py-1 text-sm rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-sm"
      >
        React.js
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 -right-4 px-3 py-1 text-sm rounded-full border border-green-500/30 bg-green-500/10 text-green-400 backdrop-blur-sm"
      >
        MongoDB
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute -bottom-3 left-2 px-3 py-1 text-sm rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 backdrop-blur-sm"
      >
        Node.js
      </motion.div>

      {/* Code Editor */}
      <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.08)]">

        {/* Header */}
        <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-900 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

          <p className="ml-4 text-sm text-slate-400 font-mono">
            ~/developer.js
          </p>
        </div>

        {/* Code Body */}
        <div className="p-5 font-mono">
          <p className="mb-4 text-slate-500 text-sm">
            // santhosh's profile
          </p>

          <div className="space-y-2 text-sm md:text-base">

            <p>
              <span className="text-blue-400">const</span>{" "}
              <span className="text-white font-semibold">developer</span>{" "}
              <span className="text-white">= {"{"}</span>
            </p>

            <p className="ml-5">
              <span className="text-orange-400">name</span>
              <span className="text-white">:</span>{" "}
              <span className="text-emerald-400">"Santhosh"</span>,
            </p>

            <p className="ml-5">
              <span className="text-orange-400">role</span>
              <span className="text-white">:</span>{" "}
              <span className="text-emerald-400">
                "MERN Stack Developer"
              </span>,
            </p>

            <p className="ml-5">
              <span className="text-orange-400">stack</span>
              <span className="text-white">: [</span>
            </p>

            <p className="ml-10 text-emerald-400">"React",</p>
            <p className="ml-10 text-emerald-400">"Node.js",</p>
            <p className="ml-10 text-emerald-400">"Express",</p>
            <p className="ml-10 text-emerald-400">"MongoDB"</p>

            <p className="ml-5 text-white">],</p>

            <p className="ml-5">
              <span className="text-orange-400">available</span>
              <span className="text-white">:</span>{" "}
              <span className="text-blue-400">true</span>,
            </p>

            <p className="text-white">{"};"}</p>

            {/* Blinking Cursor */}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="mt-4 h-5 w-2 rounded-full bg-primary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperCard;