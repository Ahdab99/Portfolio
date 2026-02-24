"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroFloating from "./components/HeroFloating";

const skills = [
  { name: "C++", icon: "/images/cplusplus.jpg" },
  { name: "CSS", icon: "/images/css.jpg" },
  { name: "HTML", icon: "/images/html.jpg" },
  { name: "Java", icon: "/images/javaa.jpg" },
  { name: "JavaScript", icon: "/images/js.jpg" },
  { name: "Kotlin", icon: "/images/kotlin.jpg" },
  { name: "ROS2", icon: "/images/ros2.jpg" },
  { name: "SQL", icon: "/images/sql.jpg" },
];

// --- Icons (SVG) ---
function GitHubIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.113.793-.261.793-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.761-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.382 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.839 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.476 5.921.43.372.823 1.103.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5 text-[#FF0000]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export default function Home() {
  const [active, setActive] = useState("home");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = {
      firstName: (form[0] as HTMLInputElement).value,
      lastName: (form[1] as HTMLInputElement).value,
      email: (form[2] as HTMLInputElement).value,
      phone: (form[3] as HTMLInputElement).value,
      message: (form[4] as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset(); // optional
    } else {
      alert("Something went wrong.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "projects", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Autonomous Navigation Project (AuNa)",
      image: "/images/car.png",
      description:
        "A robotics software project developed using ROS2, Docker, and Ansible. The system implements wall-following and autonomous driving algorithms for racing scenarios, including configurable parameters, RViz simulation support, and a modular architecture for scalable robot control and deployment.",
      github: "https://github.com/Ahdab99/Autonomous-Navigation-Project-AuNa-",
      videos: [
        { label: "Watch Video 1", url: "https://youtube.com/shorts/3vGnjubPB-0?si=tnbS-CR7m8HA1tw4" },
        { label: "Watch Video 2", url: "https://youtu.be/4uUuK5aJY_8?si=10L_8ZAwS_HPzB72" },
      ],
    },
    {
      title: "Faraway Game",
      image: "/images/faraway.png",
      description:
        "Developed in a team using Kotlin with a clear OOP-based architecture. I was responsible for the frontend implementation and UI logic, contributing to a clean structure, maintainability, and a smooth user experience.",
      github: "https://github.com/Ahdab99/Faraway-Game",
      videos: [{ label: "Watch Video", url: "https://youtu.be/_IEPj3pEpjA?si=_tgmxdCiQOIinV2L" }],
    },
    {
      title: "Staircase Card Game",
      image: "/images/stair.png",
      description:
        "A complete card game implemented in Kotlin. Focused on clean, maintainable code, clear game logic, and structured design following object-oriented principles.",
      github: "https://github.com/Ahdab99/Staircase-Card-Game",
      videos: [{ label: "Watch Video", url: "https://youtu.be/nn0ZqjFtACE?si=EDIVvcyrGL-AbshH" }],
    },
  ];

    return (
    <>
{/* NAVBAR */}
<header className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4 sm:py-6 border-b bg-white sticky top-0 z-50">
  
  {/* LEFT – Logo */}
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center text-black font-bold">
      {"</>"}
    </div>
    <span className="font-semibold tracking-wide text-black">
      Ahmad Al Ahdab
    </span>
  </div>

  {/* CENTER – Navigation */}
 <nav className="hidden md:flex gap-6 lg:gap-10 text-gray-700">
  <a href="#home" className={active === "home" ? "text-black font-semibold border-b-2 border-black" : "hover:text-black transition"}>
    Home
  </a>
  <a href="#about" className={active === "about" ? "text-black font-semibold border-b-2 border-black" : "hover:text-black transition"}>
    About
  </a>
  <a href="#education" className={active === "education" ? "text-black font-semibold border-b-2 border-black" : "hover:text-black transition"}>
    Education
  </a>
  <a href="#projects" className={active === "projects" ? "text-black font-semibold border-b-2 border-black" : "hover:text-black transition"}>
    Projects
  </a>
  <a href="#contact" className={active === "contact" ? "text-black font-semibold border-b-2 border-black" : "hover:text-black transition"}>
    Contact
  </a>
</nav>

  {/* RIGHT – Social + Contact */}
  <div className="flex items-center gap-6">

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/ahmad-alahdab"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        className="w-6 h-6"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.268 2.372 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM6.78 20.452H3.894V9H6.78v11.452z"/>
      </svg>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/Ahdab99"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        className="w-6 h-6"
      >
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.113.793-.261.793-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.761-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.382 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.839 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.476 5.921.43.372.823 1.103.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>

    {/* Contact Button */}
    <a
  href="#contact"
  className="hidden sm:inline-flex px-4 sm:px-6 py-2 border rounded-lg hover:bg-black hover:text-white transition duration-300 text-black font-bold"
>
  Contact me
</a>

  </div>
</header>

      {/* HOME SECTION */}
<main
  id="home"
  className="relative min-h-screen bg-[#EDEDED] text-black flex flex-col pt-24 px-4 sm:px-8 lg:px-12"
>
  
  {/* TOP CONTENT */}
<div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-10">

  {/* LEFT SIDE */}
  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
    <Image
      src="/images/profile.jpg"
      alt="Ahmad"
      width={200}
      height={200}
      className="rounded-full mb-8"
    />

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
      Ahmad Al Ahdab
    </h1>

    <p className="text-base sm:text-lg text-gray-600 max-w-md">
      Computer Science Student passionate about Software Engineering,
      Cybersecurity and Intelligent Systems.
    </p>
  </div>

  {/* CENTER ANIMATED TEXT (nicht mehr absolute auf Mobile) */}
  <div className="w-full lg:absolute lg:left-1/2 lg:-top-12 lg:-translate-x-1/2 text-center z-20 order-first lg:order-none">
    <p className="text-sm sm:text-lg tracking-widest text-black/60 mb-2">
      Welcome to my
    </p>

    <div className="relative inline-block leading-none select-none">
      <span className="portfolio-outline text-4xl sm:text-6xl font-extrabold">
        PORTFOLIO
      </span>

      <span className="portfolio-fill text-4xl sm:text-6xl font-extrabold absolute left-0 top-0">
        PORTFOLIO
      </span>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full lg:w-1/2">
    <HeroFloating />
  </div>
</div>

  {/* BOTTOM MOVING LOGOS */}
  <div className="mt-auto pb-10">
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <div key={skill.name + i} className="flex items-center justify-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={70}
              height={70}
              className="object-contain opacity-70 hover:opacity-100 transition w-12 h-12 sm:w-16 sm:h-16 lg:w-[90px] lg:h-[90px]"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</main>

      {/* ABOUT SECTION */}
{/* ABOUT SECTION */}
<section id="about" className="min-h-screen bg-white flex items-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24">

  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT – Image */}
    <div className="flex justify-center md:justify-start">
      <Image
        src="/images/Ahmad.png" 
        alt="About Ahmad"
        width={500}
        height={500}
        className="object-contain"
      />
    </div>

    {/* RIGHT – Text */}
    <div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-8 sm:mb-10">
        About Me
      </h2>

    <p className="text-xl text-gray-800 leading-relaxed mb-8">
    I am a dedicated Computer Science student in my 6th semester at TU Dortmund,
    equipped with a strong theoretical foundation and practical experience gained
    through academic and personal projects.
    </p>

    <p className="text-xl text-gray-800 leading-relaxed mb-8">
    I am passionate about software engineering, cybersecurity, networking,
    and intelligent systems. I constantly seek new challenges that allow me
    to apply my knowledge in real-world environments and grow both technically
    and professionally.
    </p>

   <p className="text-xl text-gray-800 leading-relaxed">
    My focus lies in writing clean, maintainable, and efficient code while
    building scalable and secure solutions that create real impact.
   </p>
  </div>

  </div>
</section>

{/* EDUCATION + EXPERIENCE (LIGHT) */}
<section id="education" className="min-h-screen bg-[#EDEDED] text-black px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-8 sm:mb-10">
      Education & <span className="text-black">Experience</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* EDUCATION */}
      <div>
        <h3 className="text-3xl font-bold mb-8">Education</h3>

        <div className="space-y-6">
          {/* Card */}
          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">2009 – 2021</div>
            <div className="text-xl font-bold">General Higher Education — Lebanon</div>
            <div className="text-gray-600 mt-1">Azm School, Lebanon</div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Graduation: 2021 — Advanced courses: Mathematics, Physics, Biology, Computer Science.
            </p>
          </div>

          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">2021 – 2022</div>
            <div className="text-xl font-bold">German Courses (A1–B1) — Lebanon</div>
            <div className="text-gray-600 mt-1">Al Afak Language School, Tripoli, Lebanon</div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Completed German language courses from A1 to B1 before moving to Germany.
            </p>
          </div>

          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">2022 – 2023</div>
            <div className="text-xl font-bold">German Courses (B2–C1) — Germany</div>
            <div className="text-gray-600 mt-1">Language Academy “Lang Island”, Bochum, Germany</div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Attended B2 and C1 courses and successfully passed the telc C1 exam.
            </p>
          </div>

          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">2023 – Present</div>
            <div className="text-xl font-bold">B.Sc. Computer Science — TU Dortmund</div>
            <div className="text-gray-600 mt-1">6th Semester</div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Bachelor student (B.Sc.) in Computer Science at TU Dortmund University.
            </p>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">Experience</h3>

        <div className="space-y-6">
          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">Oct 2021 – Oct 2022</div>
            <div className="text-xl font-bold">Web Developer (Part-Time / Entry Level)</div>
            <div className="text-gray-600 mt-1">Tripnologies — Remote & Dortmund</div>
            <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Developed and maintained dynamic browser-based applications.</li>
              <li>Built responsive UI with JavaScript, HTML, CSS, and React.</li>
              <li>Collaborated with a small team and improved UX/performance.</li>
            </ul>
          </div>

          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">2022 – 2023</div>
            <div className="text-xl font-bold">Programming Lab — TU Dortmund</div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Focus on C/C++ and applying data structures and algorithms to solve practical programming tasks.
            </p>
          </div>

          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">2024</div>
            <div className="text-xl font-bold">Hardware Lab — TU Dortmund</div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Digital design with VHDL: adders, memory, finite state machines, processor design,
              and practical work with GHDL and GTKWave.
            </p>
          </div>

          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">Software Project - 2025</div>
            <div className="text-xl font-bold">Kotlin Game Development — TU Dortmund</div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Built two complete games — one collaboratively in a team and one independently (Staircase Card Game & Faraway) using Kotlin.
              Contributed to design, implementation, OOP architecture, Git version control, testing,
              and documentation/code quality.
            </p>
          </div>

          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">ROS2 Project - 2025</div>
            <div className="text-xl font-bold">Autonomous Navigation (AuNa) — TU Dortmund</div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Built a ROS2-based autonomous navigation system. Containerized with Docker and automated via Ansible.
              Implemented wall-following and autonomous racing behaviors with RViz visualization and modular design.
            </p>
          </div>

          <div className="edu-card bg-white rounded-2xl p-6 shadow-sm border border-black/10 transition-all duration-300">
            <div className="text-sm text-gray-500 mb-2">Sep 2024 – Present</div>
            <div className="text-xl font-bold">Back Office Support (Policy & Compliance)</div>
            <div className="text-gray-600 mt-1">Telus Digital (Meta) — Essen, Germany</div>
            <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-2 leading-relaxed">
              <li>Analyzed large datasets and user-generated content for policy compliance.</li>
              <li>Applied structured decision-making in complex and unclear cases.</li>
              <li>Worked with multicultural teams; strengthened communication and problem-solving.</li>
              <li>Built expertise in risk assessment and maintaining safe digital environments.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* PROJECTS SECTION */}
  <section id="projects" className="scroll-mt-28 bg-white px-4 sm:px-8 lg:px-12 py-16 sm:py-24">

  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">My Projects</h2>
      </div>

      {/* Optional GitHub Profile Button */}
      <a
        href="https://github.com/Ahdab99"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-semibold border-2 border-black hover:bg-black hover:text-white transtion-all duration-300"
      >
        <GitHubIcon className="w-5 h-5" />
        Visit my GitHub
      </a>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((p) => (
        <div
          key={p.title}
          className="project-card bg-white rounded-2xl border border-black/10 shadow-sm overflow-hidden transition-all duration-300"
        >
          {/* Image */}
          <div className="w-full h-56 bg-[#F5F5F5] flex items-center justify-center">
            <Image
              src={p.image}
              alt={p.title}
              width={900}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-black mb-2">{p.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{p.description}</p>

            {/* Links */}
            <div className="flex flex-col gap-3">
              {/* GitHub */}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black font-semibold hover:underline"
              >
                <GitHubIcon className="w-5 h-5" />
                View on GitHub <span className="ml-1">↗</span>
              </a>

              {/* Videos */}
              {p.videos.map((v) => (
                <a
                  key={v.url}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FF0000] font-semibold hover:underline hover:text-red-700 transition"
                >
                  <YouTubeIcon className="w-5 h-5" />
                  {v.label} <span className="ml-1">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="contact" className="min-h-screen bg-[#EDEDED] px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black"> Contact me</h2>
      <p className="text-gray-600 mt-4 text-lg">
        Write me a message and I will get back to you as soon as possible.
      </p>
      <p className="text-gray-700 mt-2">
        Or email me directly:{" "}
        <a
          href="mailto:ahmadahdabjob@gmail.com"
          className="text-black font-semibold underline underline-offset-4"
        >
          ahmadahdabjob@gmail.com
        </a>
      </p>
    </div>

    {/* Card */}
    <div className="bg-white rounded-3xl border border-black/10 shadow-sm p-8 md:p-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-black">First name</label>
          <input
            type="text"
            placeholder="John"
            className="contact-input h-12 rounded-xl border border-black/15 px-4 outline-none text-black transition-all duration-300"
          />
        </div>

        {/* Last name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-black">Last name</label>
          <input
            type="text"
            placeholder="Doe"
            className="contact-input h-12 rounded-xl border border-black/15 px-4 outline-none text-black transition-all duration-300"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-black">Email</label>
          <input
            type="email"
            placeholder="john@email.com"
            className="contact-input h-12 rounded-xl border border-black/15 px-4 outline-none text-black transition-all duration-300"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-black">Phone (optional)</label>
          <input
            type="tel"
            placeholder="+49 ..."
            className="contact-input h-12 rounded-xl border border-black/15 px-4 outline-none text-black transition-all duration-300"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm font-semibold text-black">Message</label>
          <textarea
            rows={6}
            placeholder="Write your message here..."
            className="contact-input rounded-xl border border-black/15 px-4 py-3 outline-none text-black resize-none transition-all duration-300"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-500">
            By sending this form you agree to be contacted back.
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-black font-semibold border-2 border-black hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
            >
            Send message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
    </>
  );
}