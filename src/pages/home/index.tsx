import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Marquee from "./Marquee"
import SkillsList from "./SkillsList";
import Project from "./Project";

const skillsList = [
  "Python",
  "Java",
  "Dart",
  "SQL",
  "HTML5",
  "CSS3",
  "SASS",
  "JavaScript",
  "TypeScript",
  "R",
  "Git",
  "Visual Studio Code",
  "Figma",
  "React",
  "Flutter",
  "MySQL",
  "Firebase",
  "Electron",
  "Tailwind"
];

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <main className='home'>
      <section className='hero'>
        <div className="spacer" />
        <h1>A frontend developer who brings ideas to life.</h1>
        
        <motion.svg 
          viewBox="0 0 120 80" 
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [-5, 5, -5], transition: { duration: 1.5, repeat: Infinity }}}
          className={"hero-arrow"}
          onClick={(_) => {
            if (aboutRef.current) {
              const top = aboutRef.current.getBoundingClientRect().top - 80 - 48;
              window.scrollTo({ top: top, behavior: 'smooth' })
            }
          }}
        >
          <path d="M104 0L60 44L16 1L0 18L60 80L120 18L104 1Z" />
        </motion.svg>
      </section>

      <section className="about" ref={aboutRef}>
        <Marquee text="HERNAN REY JUGAR - FRONTEND DEVELOPER - " />     
        <div className="section-content">
          <h2>Hi! I'm Hernan.</h2>
          <div className="about-text">
            <p>
              I’m a developer that primarily works in frontend web development and likes materializing complex design ideas. 
              If needed, I can also work for data science, backend, and mobile frontend development.
            </p>

            <p>
              Outside of academics and coding, I watch e-sports (particularly Valorant and Dota these days) and read manga in my free time. 
              I also find strolling and wandering in the city alone therapeutic.
            </p>
          </div>
        </div>
      </section>

      <section className="skills">
        <Marquee text="TECH STACK - TECH STACK - " />
        <div className="section-content">
          <div className="skills-head">
            <h2>Skillset</h2>
            <p>This is the list of languages, tools, and technologies that I've used in the past few years.</p>
          </div>

          <div className="skills-list">
            <SkillsList skills={skillsList} />
          </div>
        </div>
      </section>

      <section className="projects">
        <Marquee text="CREATIONS - WORKS - " />
        <div className="section-content">
          <div className="projects-list">
            <Project 
              cssClass="ocp"
              title="MMCM OCP Website"
              description="A website for Mapua Malayan Colleges Mindanao's Office of Corporate Partnerships (MMCM OCP). Used to list the school's partnered companies and store the office's database."
              skills={["HTML5", "CSS3", "JavaScript", "SASS"]}
              imageUrls={["/screenshots/screenshot_ocp.webp"]}
              links={{ live: "https://mmcm-ocp.com" }}
            />     

            <Project 
              cssClass="witch"
              title="Pixel Witch"
              description="A maze platform game built on top of PyGame. Created for Linear Algebra class."
              skills={["Python"]}
              imageUrls={[
                  "/screenshots/screenshot_pixel_witch_3.webp", 
                  "/screenshots/screenshot_pixel_witch_2.webp", 
                  "/screenshots/screenshot_pixel_witch_1.webp"
              ]}
              links={{ github: "https://github.com/hrjugar/Pixel-Witch" }}
            />

            <Project 
              cssClass="thesis"
              title="Colliding Vehicle Determiner"
              description="An application for determining the colliding vehicle in a traffic accident between two vehicles using hybrid machine learning algorithms. Created as a Thesis project."
              skills={["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Electron", "ZeroMQ", "SQLite", "Python"]}
              imageUrls={[
                "/screenshots/screenshot_thesis_1.webp",
              ]}
              links={{ github: "https://github.com/hrjugar/colliding-vehicle-determiner"}}
            />
          </div>
        </div>
      </section>

      <div />
    </main>
  )
}