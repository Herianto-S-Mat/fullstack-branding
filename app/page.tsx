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
          level: 3,
        },
        {
          name: "CSS",
          link: "programming-languages/css",
          level: 4,
        },
        {
          name: "Typescript",
          link: "programming-languages/typescript",
          level: 3,
        },
        {
          name: "Javascript",
          link: "programming-languages/javascript",
          level: 3,
        },
        {
          name: "Python",
          link: "programming-languages/python",
          level: 3,
        },
        {
          name: "PHP",
          link: "programming-languages/php",
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
          level: 3,
        }
      ]
    },
    {
      text_about: "Experiance for development areas:",
      list: [
        {
          name: "MVC",
          link: "development-area/mvc",
          level: 3,
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
          name:"Mobile",
          link: "development-area/mobile",
          level: 3,
        },
        {
          name:"Automated Web Testing",
          link: "development-area/automated-testing",
          level: 3,
        },
      ]
    },
    {
      text_about : "Database Option :",
      list : [
        {
          name: "MySQL",
          link: "/mysql",
          level: 3,
        },
        {
          name: "PostgreSQL",
          link: "/postgresql",
          level: 3,
        },
        {
          name: "MongoDB",
          link: "/mongodb",
          level: 3,
        },
        {
          name: "Redis",
          link: "/redis",
          level: 3,
        },
        {
          name: "SQLite",
          link: "/sqlite",
          level: 3,
        },
        {
          name: "GraphQL",
          link: "/graphql",
        }
      ]
    },
    {
      text_about : "Operating System :",
      list : [
        {
          name: "Windows",
          link: "/windows",
          level: 3,
        },
        {
          name: "WSL : Windows Subsystem for Linux",
          link: "/wsl",
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
          link: "/vscode",
          level: 3,
        },
        // {
        //   name: "Visual Studio",
        //   link: "/visual-studio",
        // },
        {
          name: "Sublime Text", 
          link: "/sublime-text",
          level: 3,
        },
        {
          name: "Notepad++",
          link: "/notepad",
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
          link: "/git",
          level: 3,
        },
        {
          name: "Cloud Hosting: Vercel",
          link: "/vercel",
          level: 3,
        },
        {
          name: "Cloud Hosting: Firebase",
          link: "/firebase",
          level: 3,
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
        <h1 id="fixed-title" className="fixed text-2xl z-10 md:text-4xl font-[family-name:var(--font-geist-mono)] w-full max-w-5xl top-0 bg-yellow-100 dark:bg-yellow-950 sm:text-base  rounded-b-lg border-b border-solid border-[#fff] hidden-title p-4">Freelancer Fullstack</h1>
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
        <div className="flex flex-col gap-4 items-center sm:flex-row justify-between w-full align-center border-b border-black dark:border-white">
          <Image 
            className="rounded-full sm:rounded-0 sm:order-1"
            src="/profile.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="flex flex-col gap-4">
            <h1 id="title" className="text-2xl md:text-4xl font-[family-name:var(--font-geist-mono)] font-bold">Freelancer Fullstack</h1>
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
                  <td className="font-[family-name:var(--font-geist-mono)]">Made-By-Heri</td>
                </tr>
                <tr>
                  <td className="font-[family-name:var(--font-geist-mono)]">LinkedIn</td>
                  <td> : </td>
                  <td className="font-[family-name:var(--font-geist-mono)]">heriantosdfsldk</td>
                </tr>
                <tr>
                  <td className="font-[family-name:var(--font-geist-mono)]">Domisili</td>
                  <td> : </td>
                  <td className="font-[family-name:var(--font-geist-mono)]">Sulawesi Selatan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
                      className={"rounded-full border border-solid transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-8 sm:h-12 px-2 hover:scale-105 sm:px-4 " + (skill.level === 3 ? "opacity-75" : " opacity-50") }
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
              </span>
            </div>
          ))
        }
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
          My writing / My note
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
