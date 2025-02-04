"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  
  const skills = [
    {
      text_about: "Experience in programming languages :",
      list: [
        {
          name: "HTML",
          link: "programming-languages/html",
          level: 4,
        },
        {
          name: "CSS",
          link: "programming-languages/css",
          level: 4,
        },
        {
          name: "Javascript",
          link: "programming-languages/javascript",
          level: 4,
        },
        {
          name: "PHP",
          link: "programming-languages/php",
          level: 3,
        },
        {
          name: "Typescript",
          link: "programming-languages/typescript",
          level: 3,
        },
        {
          name: "Python",
          link: "programming-languages/python",
          level: 3,
        },
        {
          name: "SQL",
          link: "programming-languages/sql",
          level: 3,
        },
        {
          name: "R",
          link: "programming-languages/r",
          level: 2,
        }
      ]
    },
    {
      text_about: "Experiance for development areas:",
      list: [
        {
          name: "MVC",
          link: "development-area/mvc",
          level: 1,
        },
        {
          name: "Front End",
          link: "development-area/front-end",
          level: 3,
        },
        {
          name:"Back End",
          link: "development-area/back-end",
          level: 3,
        },
        {
          name:"Database",
          link: "development-area/database",
          level: 3,
        },
        {
          name:"Automated Web Testing",
          link: "development-area/automated-testing",
          level: 2,
        },
      ]
    },
    {
      text_about : "Database Option :",
      list : [
        {
          name: "MySQL",
          link: "database/mysql",
          level: 3,
        },
        {
          name: "PostgreSQL",
          link: "database/postgresql",
          level: 3,
        },
        {
          name: "MongoDB",
          link: "database/mongodb",
          level: 1,
        },
        {
          name: "Redis",
          link: "database/redis",
          level: 1,
        },
        {
          name: "SQLite",
          link: "database/sqlite",
          level: 2,
        },
      ]
    },
    {
      text_about : "Operating System :",
      list : [
        {
          name: "Windows",
          link: "OS/windows",
          level: 3,
        },
        {
          name: "WSL : Windows Subsystem for Linux",
          link: "OS/wsl",
          level: 3,
        },
        // {
        //   name: "Linux",
        //   link: "/linux",
        // },
        // {
        //   name: "Mac",
        //   link: "/mac",
        // },
      ]
    },
    {
      text_about : "IDE :",
      list : [
        {
          name: "VSCode",
          link: "IDE/vscode",
          level: 4,
        },
        // {
        //   name: "Visual Studio",
        //   link: "/visual-studio",
        // },
        {
          name: "Sublime Text", 
          link: "IDE/sublime-text",
          level: 1,
        },
        {
          name: "Notepad++",
          link: "IDE/notepad",
          level: 1,
        }
        // {
        //   name: "Atom",
        //   link: "/atom",
        // },
      ]
    },
    {
      text_about : "DevOps Knowledge :",
      list : [
        {
          name: "Version Control: Git (GitHub, GitLab)",
          link: "dev-ops/git",
          level: 3,
        },
        {
          name: "Cloud Hosting: Vercel",
          link: "dev-ops/vercel",
          level: 3,
        },
        {
          name: "Cloud Hosting: Firebase",
          link: "dev-ops/firebase",
          level: 1,
        },
        // {
        //   name: "Docker",
        //   link: "/docker",
        // },
        // {
        //   name: "Kubernetes",
        //   link: "/kubernetes",
        // },

      ]
    }
  ]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
        <h1 id="fixed-title" className="fixed text-2xl z-10 md:text-4xl font-[family-name:var(--font-geist-mono)] w-full max-w-5xl top-0 bg-yellow-100 dark:bg-yellow-950 sm:text-base  rounded-b-lg border-b border-solid border-[#fff] hidden-title p-4">Fullstack Developer</h1>
        <style jsx>{`
          .hidden-title {
            opacity: 0;
            transform: translateY(-20px);
            pointer-events: none;
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .show-title {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        `}</style>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center sm:flex-row justify-between w-full align-center">
          <Image 
            className="rounded-full sm:rounded-0 sm:order-1"
            src="/profile.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="flex flex-col gap-4">
            <h1 id="title" className="text-2xl md:text-4xl font-[family-name:var(--font-geist-mono)] font-bold">Fullstack Developer</h1>
            <Script id="tittle-backup-script">
              {`
                const title = document.getElementById("title");
                const fixedTitle = document.getElementById("fixed-title");

                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      fixedTitle.classList.remove("show-title");
                    } else {
                      fixedTitle.classList.add("show-title");
                    }
                  },
                  { threshold: 0 }
                );

                if (title) {
                  observer.observe(title);
                }
              `}
            </Script>
            <table className="text-opacity-85">
              <tbody>
                <tr>
                  <td className="font-[family-name:var(--font-geist-mono)] text-opacity-20">Name</td>
                  <td> : </td>
                  <td className="font-[family-name:var(--font-geist-mono)]">Herianto</td>
                </tr>
                <tr>
                  <td className="font-[family-name:var(--font-geist-mono)]">Email</td>
                  <td> : </td>
                  <td className="font-[family-name:var(--font-geist-mono)]">herianto@gmail.com</td>
                </tr>
                <tr>
                  <td >GitHub</td>
                  <td> : </td>
                  <td className="font-[family-name:var(--font-geist-mono)]">Herianto-S-Mat</td>
                </tr>
                <tr>
                  <td className="font-[family-name:var(--font-geist-mono)]">GitLab</td>
                  <td> : </td>
                  <td className="font-[family-name:var(--font-geist-mono)]">Herianto-S-Mat</td>
                </tr>
                <tr>
                  <td className="font-[family-name:var(--font-geist-mono)]">Domisili</td>
                  <td> : </td>
                  <td className="font-[family-name:var(--font-geist-mono)]">Bandung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full max-w-5xl border-b border-black dark:border-white"/>
        <h3 className="text-xl md:text-2xl font-[family-name:var(--font-geist-mono)] font-bold">Introduce</h3>
        <p className="max-w-5xl text-justify indent-8 px-4">
          I am a programmer with good problem solving skills and always enthusiastic to learn and explore new technologies. Currently, I am able to use several programming languages ​​including PHP, JavaScript, TypeScript, and Python. I first got to know programming algorithms with C++ but now I have started to forget. PHP is the second language that I learned seriously and used to work on my thesis. Lately JavaScript is the language that I actively use.
        </p>
        <div className="w-full max-w-5xl border-b border-black dark:border-white px-4"/>
        <h3 className="text-xl md:text-2xl font-[family-name:var(--font-geist-mono)] font-bold">Portofolio</h3>
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          <div className="flex flex-col gap-4 border border-black dark:border-white p-4">
            <h1 className="text-lg md:text-xl font-[family-name:var(--font-geist-mono)] border-b border-black dark:border-white pb-2 flex justify-between">
              This Site
            </h1>
            <p className="text-justify indent-4">
              project studi kasus untuk mempelajari framework Next.Js
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-black dark:border-white p-4">
            <h1 className="text-lg md:text-xl font-[family-name:var(--font-geist-mono)] border-b border-black dark:border-white pb-2 flex justify-between">
              Pokemon 
              <a target="_blank" href="https://pokemon-learning-vite-heriantos-projects.vercel.app/" className="font-[family-name:var(--font-geist-mono)]">
              <Image
                aria-hidden
                src="/external-link.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              </a>
            </h1>
            <p className="text-justify indent-4">
              project studi kasus untuk mempelajari framework React.Js
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-black dark:border-white p-4">
            <h1 className="text-lg md:text-xl font-[family-name:var(--font-geist-mono)] border-b border-black dark:border-white pb-2 flex justify-between">
              API Clove Comodity 
              <a target="_blank" href="https://api-clove.vercel.app/" className="font-[family-name:var(--font-geist-mono)]">
              <Image
                aria-hidden
                src="/external-link.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              </a>
            </h1>
            <p className="text-justify indent-4">
              Project Api for Dicoding Challange
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-black dark:border-white p-4">
            <h1 className="text-lg md:text-xl font-[family-name:var(--font-geist-mono)] border-b border-black dark:border-white pb-2 flex justify-between">
              Pilot Bandung 
              <a target="_blank" href="https://pilotbandung.com/" className="font-[family-name:var(--font-geist-mono)]">
              <Image
                aria-hidden
                src="/external-link.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              </a>
            </h1>
            <p className="text-justify indent-4">
              Web project for usaha Jasa Supir dan Rental Mobil
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-black dark:border-white p-4">
            <h1 className="text-lg md:text-xl font-[family-name:var(--font-geist-mono)] border-b border-black dark:border-white pb-2 flex justify-between">
              Project Learning
              <a target="_blank" href="https://portofilio-tailwind-github-io-heriantos-projects.vercel.app/" className="font-[family-name:var(--font-geist-mono)]">
              <Image
                aria-hidden
                src="/external-link.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              </a>
            </h1>
            <p className="text-justify indent-4">
              Project Pertama kali belajar Tailwind dan Script.js
            </p>
          </div>
        </div>
        <div className="w-full max-w-5xl border-b border-black dark:border-white"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl">
        {
          skills.map((skill, index) => (

            <div key={index} className="bg-gradient-to-br rounded p-4 flex flex-col gap-4 w-full">
              <h1 className="text-1xl md:text-2xl font-[family-name:var(--font-geist-mono)] border-b border-black dark:border-white pb-2">{skill.text_about}</h1>
              <div className="flex gap-2 sm:gap-4 items-center flex-row flex-wrap justify-center mb-2">
                {
                  skill.list.map((skill, index) => (
                    <Link
                      key={index}
                      href={skill.link}
                      className={"rounded-full border border-solid transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-8 sm:h-12 px-2 hover:scale-105 sm:px-4 opacity-" + (skill.level*25) }
                      rel="noopener noreferrer"
                      translate="no"
                    >
                      {skill.name}
                    </Link>
                  ))
                }
              </div>
              <span className="flex gap-3 items-end flex-wrap justify-end mt-auto border-t border-black dark:border-white">
                <div className="flex items-center gap-0.5">
                  skilled 
                  <div className="bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] w-4 h-4"/> 
                </div>
                <div className="flex items-center gap-0.5">
                  proficient 
                  <div className="bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] w-4 h-4 opacity-75"/> 
                </div>
                <div className="flex items-center gap-0.5">
                  basic 
                  <div className="bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] w-4 h-4 opacity-50"/>
                </div>
                <div className="flex items-center gap-0.5">
                  basic but not sure 
                  <div className="bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] w-4 h-4 opacity-20"/>
                </div>
              </span>
            </div>
          ))
        }
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/latter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          My write / My note
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Dashboard
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
