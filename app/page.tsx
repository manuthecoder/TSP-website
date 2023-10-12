"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container pb-6 flex min-h-[100dvh] flex-col items-center justify-center">
        <div>
          {/* Banner */}
          <div className="banner box mt-4 mb-2 sm:mb-0 overflow-hidden h-auto px-5 to-gray-100 from-gray-100 relative h-[300px]">
            <div className="banner__content sm:pt-20">
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                className="sticky z-10"
              >
                <h1 className="font-heading text-4xl font-[700]">
                  The Steamology Project
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="sticky z-10"
              >
                <p className="font-body text-lg mt-2">
                  A community of students and educators who are passionate about
                  STEAM.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  onClick={() =>
                    window.open(
                      `https://docs.google.com/spreadsheets/d/1SJ8kill2svrpVPj_T17qBBxE4W3LhPNm8atORVHLMGQ/edit#gid=0`
                    )
                  }
                  className="active:shadow-xl px-5 py-2 mt-2 rounded-full text-white hover:shadow-lg bg-[#aa6f73] flex items-center gap-2"
                >
                  Find a chapter
                  <span className="material-symbols-outlined">north_east</span>
                </button>
              </motion.div>

              <Image
                src="/logo.svg"
                width={300}
                height={300}
                className="absolute bottom-0 right-0 mr-5 w-40 sm:w-60 sm:h-60 h-40 -mb-16 sm:-mb-20 animate-spin opacity-60"
                style={{
                  animationDuration: "60s",
                }}
                alt="Logo"
              />
            </div>
          </div>
          {/*  */}

          {/* Grid */}
          <motion.div
            className="flex sm:mb-0 sm:mt-3 gap-2 flex-col sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="box sm:max-w-xs relative overflow-hidden sm:min-h-[287px] min-h-[400px] sm:min-h-auto">
              <Image
                src="/home.jpeg"
                width={700}
                height={700}
                alt="Photo"
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
            </div>
            <div className="box sm:min-h-[287px] flex flex-col">
              <h1 className="font-heading text-3xl mb-1 mt-auto">Our vision</h1>
              <p>
                The Steamology Project is dedicated to ignite curiosity and
                foster innovation in the next generation of creative STEAM
                problem solvers, critical thinkers, and leaders who will shape
                our future.
              </p>
            </div>
          </motion.div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
