"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="container">
        {/* Banner */}
        <div className="banner box overflow-hidden h-auto px-5 mb-10 to-gray-100 from-gray-100 relative h-[300px]">
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
              <p className="font-body text-lg">
                A community of students and educators who are passionate about
                STEAM.
              </p>
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
          className="flex mt-3 gap-2 flex-col sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="box">(placeholder image)</div>
          <div className="box">
            <h1 className="font-heading text-2xl mb-1">Our vision</h1>
            <p>
              The Steamology Project is dedicated to ignite curiosity and foster
              innovation in the next generation of creative STEAM problem
              solvers, critical thinkers, and leaders who will shape our future.
            </p>
          </div>
        </motion.div>
        {/*  */}
      </div>
    </>
  );
}
