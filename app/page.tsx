"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { list } from "postcss";
import { text } from "stream/consumers";

export default function Home() {
  const active_route = usePathname();
  const menu = [
    {
      name: "MVC",
      link: "/mvc",
    },
    {
      name: "Front End",
      link: "/front-end",
    },
    {
      name:"Back End",
      link: "/back-end",
    },
    {
      name:"Database",
      link: "/database",
    },
    {
      name:"Mobile",
      link: "/Mobile",
    },
    {
      name:"Automated Web Testing",
      link: "/api",
    },
  ]

  const skills = [
    {
      text_about: "Experience in programming languages :",
      list: [
        {
          name: "HTML",
          link: "programming-languages/html",
        },
        {
          name: "CSS",
          link: "programming-languages/css",
        },
        {
          name: "Typescript",
          link: "programming-languages/typescript",
        },
        {
          name: "Javascript",
          link: "programming-languages/javascript",
        },
        {
          name: "Python",
          link: "programming-languages/python",
        },
        {
          name: "PHP",
          link: "programming-languages/php",
        },
        {
          name: "SQL",
          link: "programming-languages/sql",
        },
        {
          name: "R",
          link: "programming-languages/r",
        }
      ]
    },
    {
      text_about: "Experiance for development areas:",
      list: [
        {
          name: "MVC",
          link: "development-area/mvc",
        },
        {
          name: "Front End",
          link: "development-area/front-end",
        },
        {
          name:"Back End",
          link: "development-area/back-end",
        },
        {
          name:"Database",
          link: "development-area/database",
        },
        {
          name:"Mobile",
          link: "development-area/mobile",
        },
        {
          name:"Automated Web Testing",
          link: "development-area/automated-testing",
        },
      ]
    },
    {
      text_about : "Database Option :",
      list : [
        {
          name: "MySQL",
          link: "/mysql",
        },
        {
          name: "PostgreSQL",
          link: "/postgresql",
        },
        {
          name: "MongoDB",
          link: "/mongodb",
        },
        {
          name: "Redis",
          link: "/redis",
        },
        {
          name: "SQLite",
          link: "/sqlite",
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
        },
        {
          name: "WSL : Windows Subsystem for Linux",
          link: "/wsl",
        }
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
        },
        // {
        //   name: "Visual Studio",
        //   link: "/visual-studio",
        // },
        {
          name: "Sublime Text", 
          link: "/sublime-text",
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
        },
        {
          name: "Cloud Hosting: Vercel",
          link: "/vercel",
        },
        {
          name: "Cloud Hosting: Firebase",
          link: "/firebase",
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 id="fixed-title" className="fixed text-2xl z-10 md:text-4xl font-[family-name:var(--font-geist-mono)] w-full max-w-5xl top-0 bg-white sm:bg-black sm:text-base  rounded-b-lg border-b border-solid border-[#fff] hidden-title p-4">Freelancer Fullstack</h1>
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
        <div className="flex flex-col gap-4 items-center sm:flex-row justify-between w-full align-center border-b border-black sm:border-white">
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
            <Script>
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
                  <td className="font-[family-name:var(--font-geist-mono)]">GitHub</td>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
        {
          skills.map((skill, index) => (

            <div key={index} className="bg-gradient-to-br rounded p-4 flex flex-col gap-4 w-full border border-black sm:border-white">
              <h1 className="text-1xl md:text-2xl font-[family-name:var(--font-geist-mono)] border-b border-black sm:border-white pb-2">{skill.text_about}</h1>
              <div className="flex gap-2 sm:gap-4 items-center flex-row flex-wrap justify-center mb-2">
                {
                  skill.list.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className={"rounded-full border border-solid transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-8 sm:h-12 px-2 sm:px-4  dark:bg-opacity-50" + (index % 2 === 0 ? "" : " opacity-50") }
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </Link>
                  ))
                }
              </div>
              <span className="flex gap-3 items-end flex-wrap justify-end mt-auto">
                <div className="flex items-center gap-0.5">
                  medium <div className="bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] w-4 h-4 tex"/> 
                </div>
                <div className="flex items-center gap-0.5">
                  low <div className="bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] w-4 h-4 opacity-50"/>
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
