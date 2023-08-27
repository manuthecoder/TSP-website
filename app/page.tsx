"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="container">
        {/* Banner */}
        <div
          className="banner box border-none h-auto px-2 mb-10"
          style={{ background: "transparent" }}
        >
          <div className="banner__content">
            <h1 className="font-heading text-4xl">The Steamology Project</h1>
            <p className="font-body text-lg">
              A community of students and educators who are passionate about
              STEAM.
            </p>
          </div>
        </div>
        {/*  */}

        {/* Grid */}
        <div className="flex mt-3 gap-2 ">
          <div className="box"></div>
          <div className="box">
            <h1 className="font-heading text-2xl mb-1">Our vision</h1>
            <p>
              The Steamology Project is dedicated to ignite curiosity and foster
              innovation in the next generation of creative STEAM problem
              solvers, critical thinkers, and leaders who will shape our future.
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
