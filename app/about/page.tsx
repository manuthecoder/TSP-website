"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const staff = [
  {
    name: "Audrey Chen",
    head: "board",
    role: "Vice President",
  },
  {
    name: "Arjun Zaveri",
    head: "board",
    role: "Secretary",
  },
  {
    name: "Rachel Tran",
    head: "board",
    role: "Treasurer",
  },
  {
    name: "Andrew Ro",
    head: "board",
    role: "Publicist",
  },
  {
    name: "Adah Wang",
    head: "department",
    role: "Science",
  },
  {
    name: "Joshua Kim",
    head: "department",
    role: "Technology",
  },
  {
    name: "Shivani Joshi",
    head: "department",
    role: "Engineering",
  },
  {
    name: "Catherine Li",
    head: "department",
    role: "Art",
  },
  {
    name: "Lucy Zhao",
    head: "department",
    role: "Math",
  },
];

export default function Page() {
  const [activeMember, setActiveMember] = useState(staff[0]);

  return (
    <div className="container">
      {/* Our mission */}
      <h1 className="font-heading text-4xl heading uppercase text-center mb-4 font-[100]">
        About us
      </h1>
      <div className="box p-0 overflow-hidden">
        <Image
          src="/activity.png"
          width={1043}
          height={817}
          className="w-full rounded-xl"
          style={{
            maxHeight: "450px",
            objectFit: "cover",
          }}
          alt="Activity"
        />
      </div>

      {/* About us */}
      <div className="flex mt-5 gap-3 flex-col-reverse sm:flex-row">
        <div className="w-full flex flex-col py-7">
          <div className="p-5">
            <h1 className="font-heading text-5xl heading">blank title</h1>
          </div>
          <div className="px-5 grow flex items-center justify-center">
            The Steamology Project is an organization dedicated to giving
            students the experience and exposure to STEAM-based subjects through
            means such as research, mentoring, and volunteering. Our members
            serve as ambassadors for education by fundraising, aiming to
            cultivate the next generation of STEAM leaders.
          </div>
        </div>
        <div className="box max-w-sm"></div>
      </div>

      {/* How we work section */}
      <div className="mt-5">
        <h1 className="font-heading text-5xl heading text-center">
          how we work
        </h1>

        {/* 3 column grid */}
        <div className="flex items-center gap-4 my-4 flex-col-reverse sm:flex-row">
          <div className="howWeWork-grid">
            <Image alt="icon" src="/about/01.svg" width={400} height={400} />
            <h3 className="text-xl">
              We publish articles for all-around STEM exposure
            </h3>
            <Link href="/blog" className="text-red">
              READ NOW
            </Link>
          </div>
          <div className="howWeWork-grid">
            <Image alt="icon" src="/about/02.svg" width={400} height={400} />
            <h3 className="text-xl">
              We fundraise towards making STEAM accessible to all
            </h3>
            <Link href="/blog" className="text-red">
              START A CHAPTER
            </Link>
          </div>
          <div className="howWeWork-grid">
            <Image alt="icon" src="/about/03.svg" width={400} height={400} />
            <h3 className="text-xl">
              We host STEAM events all accross Orange County
            </h3>
            <Link href="/blog" className="text-red">
              RECENT ACTIVITIES
            </Link>
          </div>
        </div>
      </div>

      {/* Staff */}
      <div className="my-4">
        <h1 className="font-heading text-5xl heading text-center">our team</h1>
        <div className="flex gap-4 mt-3 flex-col sm:flex-row">
          {[
            { name: "Jalyn Huang", role: "co-founder, co-president" },
            { name: "Ashley Liau", role: "co-founder, co-president" },
          ].map((member: any) => (
            <div className="w-full" key={member.name}>
              <div className="box h-96"></div>
              <p className="mt-2">{member.role}</p>
              <h4 className="text-3xl heading font-heading mb-2">
                {member.name}
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          ))}
        </div>

        {/* other members */}
        <div className="grid grid-cols-1 sm:grid-cols-3 my-4 sm:gap-10">
          <div className="flex gap-4">
            {["department", "divider", "board"].map((head) =>
              head == "divider" ? (
                <div
                  key={head}
                  style={{ border: "2px solid var(--colors-red)" }}
                  className="h-full"
                />
              ) : (
                <div key={head} className="w-full">
                  <h1 className="font-heading text-lg heading">{head} heads</h1>
                  <div className="flex flex-col gap-2">
                    {staff
                      .filter((member) => member.head === head)
                      .map((member) => (
                        <div
                          className="flex gap-2"
                          key={member.name}
                          onClick={() => setActiveMember(member)}
                        >
                          <div className="flex flex-col hover:bg-gray-100 rounded-xl px-3 cursor-pointer -ml-3 w-full select-none">
                            <h4 className="text-lg font-heading ellipsis overflow-hidden">
                              {member.name}
                            </h4>
                            <p>{member.role}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
          {/* Selected member view */}
          <div className="mt-5 col-span-2">
            <div className="flex items-center gap-4">
              <div className="w-36 h-36 border border-gray-700 rounded-full "></div>
              <div>
                <h5>{activeMember.role}</h5>
                <h3 className="heading font-heading text-3xl">
                  {activeMember.name}
                </h3>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
