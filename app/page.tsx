"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="container">
        {/* Banner */}
        <div className="banner box">
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
            <h1 className="font-heading text-2xl mb-10">Our vision</h1>
          </div>
        </div>

        {/* Hear more from our founders */}
        <div
          className="flex my-5 p-3 gap-5 items-center cursor-pointer rounded-full box hover:bg-gray-100"
          onClick={() => router.push("/about")}
        >
          <div className="shrink-0 h-20 w-20 bg-gray-300 rounded-full"></div>
          <div>
            <h1 className="text-uppercase">Hear more from our founders</h1>
            <h1 className="font-heading text-2xl">
              Jalyn Huang &amp; Ashley Liau
            </h1>
          </div>
        </div>
        <div className="box mt-3 h-96 mb-10"></div>
        {/*  */}
      </div>
    </>
  );
}
