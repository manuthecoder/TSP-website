"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="container">
        {/* Banner */}
        <div className="banner box overflow-hidden h-auto px-5 mb-10 to-gray-100 from-gray-100 relative h-[300px]">
          <div className="banner__content">
            <h1 className="font-heading text-4xl font-[700]">
              The Steamology Project
            </h1>
            <p className="font-body text-lg">
              A community of students and educators who are passionate about
              STEAM.
            </p>
            <Image
              src="/logo.svg"
              width={300}
              height={300}
              className="absolute bottom-0 right-0 mr-5 animate-spin opacity-60"
              style={{ marginBottom: "-120px", animationDuration: "60s" }}
              alt="Logo"
            />
          </div>
        </div>
        {/*  */}

        {/* Grid */}
        <div className="flex mt-3 gap-2 flex-col sm:flex-row">
          <div className="box">(placeholder image)</div>
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
