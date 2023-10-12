"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const staff = [
  {
    image: "/people/audrey.png",
    name: "Audrey Chen",
    head: "board",
    role: "Vice President",
    bio: "Audrey is an incoming sophomore at IHS with a passion for STEAM. She has received Irvine High Heritage Awards in the fields of both Biology and English. Audrey is also a talented violinist in Irvine High's Philharmonic Orchestra. She has been figure skating for 7+ years, giving her a hands-on experience of many scientific principles. She is excited to share her love of STEAM and help students find and develop their own passion for STEAM as the Steamology Project's Vice President this coming year.",
  },
  {
    image: "/people/arjun.png",
    name: "Arjun Zaveri",
    head: "board",
    role: "Secretary",
    bio: "As a senior attending Irvine High School, Arjun enjoys playing sports and has a large interest in medicine. Throughout high school, he has been involved in numerous clubs, and he is a member of the football and track teams at Irvine High. In his junior year, he founded his own club designed to help student-athletes. Arjun hopes to one day combine his love for sports, science, and medicine to become an orthopedic surgeon for athletes.",
  },
  {
    image: "/people/rachel.png",
    name: "Rachel Tran",
    head: "board",
    role: "Treasurer",
    bio: "Rachel is a junior at Irvine High School and is a member of her school’s mock trial team and school newspaper. Additionally, she has a passion for marketing and business management, serving as a secretary for the Junior Class Council and as a publicist for a variety of clubs and groups, including the nonprofit organization Orphan Assistance Fund. Rachel's also a violinist for her school's orchestra and has received awards for her playing.",
  },
  {
    image: "/people/andrew.png?purge=dev",
    name: "Andrew Ro",
    head: "board",
    role: "Publicist",
    bio: "Andrew is a rising sophomore at Irvine High School and has a passion for graphic design, digital art, and marketing. Along with being a cellist for his school orchestra and a beginner saxophonist for his school marching band, Andrew currently serves as the publicist of the Steamology Project and continues to spread information about STEAM",
  },
  {
    image: "/people/adah.png",
    name: "Adah Wang",
    head: "department",
    role: "Science",
    bio: "Adah Wang, the Department Head of Science, has a passion for science and hopes to pursue a career in medicine. As an upcoming sophomore, they are focused on creating interesting and fun ways to explore scientific concepts to encourage others. Through TSP they hope to spark inspiration and spread the love of science.",
  },
  {
    image: "/people/joshua.png?purge=dev",
    name: "Joshua Kim",
    head: "department",
    role: "Technology",
    bio: "It's the man, the myth, the legend himself, Joshua Kim! As an aspiring computer science student and rising sophomore, he is determined to incite passion for coding and technical skills in others. While doing so, he aims to create revolutionary and one-of-a-kind projects that'll eventually seep through the entire roots of the internet. For now, he is his family's IT guy.",
  },
  {
    image: "/people/shivani.png",
    name: "Shivani Joshi",
    head: "department",
    role: "Engineering",
    bio: "Shivani Joshi currently works as the Department Head of Engineering of The Steamology Project (TSP). Going into her sophomore year, she enjoys constructing creative solutions to problems that challenge her. Having published a novel at fifteen, she is also passionate about writing and hopes to continue to inspire those in her community to achieve their goals.",
  },
  {
    image: "/people/catherine.png",
    name: "Catherine Li",
    head: "department",
    role: "Art",
    bio: "As an aspiring artist and storyteller, sophomore student Catherine Li hopes to take her love of art and creativity to a new stage. Combining long-term passions with new inspiring projects, she looks to share her passion for art with TSP and the world around her.",
  },
  {
    image: "/people/lucy.png",
    name: "Lucy Zhao",
    head: "department",
    role: "Math",
    bio: "Lucy Zhao is a student at University High School, and serves as the Math Department Head of the Steamology Project (TSP). With her years of experience and achievements in competition math, including the AMCs, EGMO, and MathCounts, Lucy hopes to help younger kids explore the different possibilities of every concept - both in problem solving and real world application.",
  },
];

export default function Page() {
  const [activeMember, setActiveMember] = useState(staff[0]);
  const [activeTab, setActiveTab] = useState("board");

  return (
    <div className="container my-10">
      {/* Our mission */}
      <div className="box p-0 overflow-hidden h-[80vh] relative">
        <Image
          src="/activity.jpeg"
          width={1043}
          height={817}
          className="w-full rounded-xl absolute top-0 left-0 h-full"
          style={{
            maxHeight: "100%",
            objectFit: "cover",
          }}
          alt="Activity"
        />
        <div className="absolute flex justify-center items-center flex-col p-5 bg-[rgba(0,0,0,0.2)] text-white bottom-0 left-0 top-0 w-full h-full">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="font-heading text-5xl mb-1 sm:text-6xl font-[700]">
              About Us
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl opacity-90">
              For your peers, by your peers
            </h3>
          </motion.div>
        </div>
      </div>

      {/* About us */}
      <div className="flex mt-5 gap-3 flex-col sm:flex-row">
        <div className="w-full flex flex-col py-7">
          <div className="p-5">
            <h1 className="font-heading text-5xl heading sm:text-left text-center">
              our mission
            </h1>
          </div>
          <div className="px-5 grow flex items-center justify-center sm:text-left text-center">
            The Steamology Project is an organization dedicated to giving
            students the experience and exposure to STEAM-based subjects through
            means such as research, mentoring, and volunteering. Our members
            serve as ambassadors for education by fundraising, aiming to
            cultivate the next generation of STEAM leaders.
          </div>
        </div>
        <div className="box text-center sm:max-w-sm relative overflow-hidden min-h-[300px]">
          <Image
            src="/photos/2.png"
            width={287}
            height={383.5}
            alt="Photo"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
        </div>
      </div>

      {/* How we work section */}
      <div className="mt-16">
        <h1 className="font-heading text-5xl heading text-center">
          how we work
        </h1>

        {/* 3 column grid */}
        <div className="flex items-center sm:gap-4 my-4 flex-col-reverse sm:flex-row">
          <div className="howWeWork-grid">
            <Image alt="icon" src="/about/01.svg" width={400} height={400} />
            <div>
              <h3 className="text-xl">
                We publish articles for all-around STEM exposure
              </h3>
              <Link href="/blog" className="link text-red">
                READ NOW{" "}
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </Link>
            </div>
          </div>
          <div className="howWeWork-grid">
            <Image alt="icon" src="/about/02.svg" width={400} height={400} />
            <div>
              <h3 className="text-xl">
                We fundraise towards making STEAM accessible to all
              </h3>
              <Link
                href="https://forms.gle/CyhVa3TCHqi3aBTu8"
                className="text-red link"
              >
                START A CHAPTER
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </Link>
            </div>
          </div>
          <div className="howWeWork-grid">
            <Image alt="icon" src="/about/03.svg" width={400} height={400} />
            <div>
              <h3 className="text-xl">
                We host STEAM events all accross Orange County
              </h3>
              <Link href="/blog" className="text-red link">
                RECENT ACTIVITIES
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Staff */}
      <div className="my-6 mt-10">
        <h1 className="font-heading text-5xl heading text-center mb-10">
          our staff
        </h1>
        <div className="flex gap-4 mt-3 flex-col sm:flex-row">
          {[
            {
              image: "/people/jalyn.png",
              name: "Jalyn Huang",
              role: "co-founder, co-president",
              bio: "Meet Jalyn Huang, a current student at Irvine High School. As the co-founder and co-president of The Steamology Project, Jalyn empowers fellow students to embrace STEAM fields and explore the wonders of science and technology. She excels in math and science with plans to pursue a career in emergency medicine. Alongside her academic endeavors, Jalyn also serves as a math tutor, concertmaster, and an esteemed member of her high school's drumline.",
            },
            {
              image: "/people/ashley.png",
              name: "Ashley Liau",
              role: "co-founder, co-president",
              bio: "As the co-founder and co-president of The Steamology Project organization, high school student Ashley Liau strives to make STEAM opportunities accessible to all. Her passions include biology, journalism, music, and research, and she serves as a writer for her school newspaper. She also plays the viola and piano, performing the latter at New York's Carnegie Hall in December 2023.",
            },
          ].map((member: any) => (
            <div className="w-full" key={member.name}>
              <div className="box h-[500px] p-0 overflow-hidden relative">
                <Image
                  src={member.image}
                  width={1241 / 2}
                  className="absolute top-0 left-0 w-full h-full"
                  height={1443 / 2}
                  style={{
                    objectFit: "cover",
                    objectPosition:
                      member.name === "Ashley Liau" ? "center" : "bottom",
                  }}
                  alt={member.name}
                />
              </div>
              <div className="px-2">
                <p className="mt-2">{member.role}</p>
                <h4 className="text-3xl heading font-heading mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-900">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* other members */}
        <div className="my-4 mt-10 sm:gap-10">
          <div className="flex gap-2 mb-2 justify-center">
            {["Department heads", "Board heads"].map((head) => (
              <button
                key={head}
                onClick={() => {
                  setActiveTab(head.split(" ")[0].toLowerCase());
                  setActiveMember(
                    staff.find((s) =>
                      head.toLowerCase().includes(s.head.toLowerCase())
                    ) as any
                  );
                }}
                className={`px-3 hover:bg-gray-100 py-2 rounded-t-lg font-heading border-b-2 ${
                  head.toLowerCase().includes(activeTab.toLowerCase()) &&
                  "border-red bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {head}
              </button>
            ))}
          </div>
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                className="w-full"
                initial={{
                  scale: 0.9,
                  y: activeTab === "department" ? -10 : 10,
                }}
                animate={{ scale: 1, y: 0 }}
                key={activeTab}
              >
                <div className="flex gap-2 sm:justify-center overflow-scroll max-w-[100vw]">
                  {staff
                    .filter((member) => member.head === activeTab)
                    .map((member) => (
                      <div
                        className="flex gap-2"
                        key={member.name}
                        onClick={() => setActiveMember(member)}
                      >
                        <div
                          className={`tab text-gray-900 min-w-[200px] sm:min-w-[10px] ${
                            activeMember.name === member.name && "active"
                          }`}
                        >
                          <h4 className="ellipsis overflow-hidden">
                            {member.name}
                          </h4>
                          <p className="text-gray-600 text-md">{member.role}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Selected member view */}
          <AnimatePresence mode="wait">
            <motion.div
              className="mt-5 max-w-2xl mx-auto"
              key={activeMember.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center sm:gap-10 gap-4 flex-col sm:flex-row">
                <div className="h-full shrink-0">
                  <div className="w-36 h-36 rounded-full overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      src={activeMember.image}
                      alt={activeMember.name}
                    />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h5 className="-ml-1 inline-flex bg-gray-200 rounded-full p-1 px-3 text-sm">
                    {activeMember.role}
                  </h5>
                  <h3 className="heading font-heading text-3xl">
                    {activeMember.name}
                  </h3>
                  <p className="mt-3">{activeMember.bio}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
