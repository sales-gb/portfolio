import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

import AnimatedTextSidebar from "@/components/Animations/AnimatedTextSidebar";

import { SidebarProps } from "@/interfaces/SidebarProps/SidebarProps";

const Sidebar = ({ linkedin, github, instagram }: SidebarProps) => {
  const { setIsSideBarVisible, isSideBarVisible, router, isMobile } =
    useContext(GlobalContext);

  return (
    <motion.div
      className="fixed z-40 flex h-dvh w-screen flex-col items-center justify-center overflow-hidden bg-gradient1 transition-all duration-500 ease-in-out"
      initial={{ width: "100%", height: "0%" }}
      animate={{ width: "100%", height: isSideBarVisible ? "100%" : "0%" }}
      transition={{ ease: "anticipate", delay: -5 }}
    >
      <motion.ul className="absolute flex h-fit w-fit list-none flex-col items-center justify-between gap-11">
        <li>
          <AnimatedTextSidebar>
            <Link
              aria-label="Página inicial"
              className="before:bg- relative block whitespace-nowrap text-4xl font-normal uppercase leading-none tracking-widest text-white no-underline before:absolute before:left-0 before:top-1/2 before:m-auto before:h-1 before:w-0 before:duration-300 before:ease-linear before:content-[''] hover:before:w-full sm:text-5xl lg:text-7xl lg:before:h-2"
              href={"/#main"}
              onClick={() =>
                setTimeout(() => {
                  setIsSideBarVisible(false);
                }, 700)
              }
            >
              Página inicial
            </Link>
          </AnimatedTextSidebar>
        </li>
        <li>
          <AnimatedTextSidebar>
            <Link
              aria-label="Trabalhos"
              className="before:bg- relative block whitespace-nowrap text-4xl font-normal uppercase leading-none tracking-widest text-white no-underline before:absolute before:left-0 before:top-1/2 before:m-auto before:h-1 before:w-0 before:duration-300 before:ease-linear before:content-[''] hover:before:w-full sm:text-5xl lg:text-7xl lg:before:h-2"
              href={"/work"}
              onClick={() => {
                setIsSideBarVisible(false);
              }}
            >
              Trabalhos
            </Link>
          </AnimatedTextSidebar>
        </li>
        <li>
          <AnimatedTextSidebar>
            <Link
              aria-label="Sobre mim"
              className="before:bg- relative block whitespace-nowrap text-4xl font-normal uppercase leading-none tracking-widest text-white no-underline before:absolute before:left-0 before:top-1/2 before:m-auto before:h-1 before:w-0 before:duration-300 before:ease-linear before:content-[''] hover:before:w-full sm:text-5xl lg:text-7xl lg:before:h-2"
              href={"/about"}
              onClick={() => {
                setIsSideBarVisible(false);
              }}
            >
              Sobre mim
            </Link>
          </AnimatedTextSidebar>
        </li>
        <li>
          <AnimatedTextSidebar>
            <Link
              aria-label="Contato"
              className="before:bg- relative block whitespace-nowrap text-4xl font-normal uppercase leading-none tracking-widest text-white no-underline before:absolute before:left-0 before:top-1/2 before:m-auto before:h-1 before:w-0 before:duration-300 before:ease-linear before:content-[''] hover:before:w-full sm:text-5xl lg:text-7xl lg:before:h-2"
              href={"/#contact"}
              onClick={() =>
                setTimeout(() => {
                  setIsSideBarVisible(false);
                }, 500)
              }
            >
              Contato
            </Link>
          </AnimatedTextSidebar>
        </li>
        {isMobile && (
          <li>
            <AnimatedTextSidebar>
              <div className="flex gap-6">
                <Link
                  className="m-auto flex items-start text-start align-top text-2xl leading-10 text-white no-underline duration-300 sm:text-3xl"
                  href={`${linkedin}`}
                  target="_blank"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </Link>
                {/* <Link className="flex items-start text-white text-start m-auto duration-300 no-underline align-top text-2xl sm:text-3xl leading-10" href={`${instagram}`} target="_blank" aria-label="instagram">
                                    <FaInstagram />
                                </Link> */}
                <Link
                  className="m-auto flex items-start text-start align-top text-2xl leading-10 text-white no-underline duration-300 sm:text-3xl"
                  href={`${github}`}
                  target="_blank"
                  aria-label="gitbub"
                >
                  <FaGithub />
                </Link>
              </div>
            </AnimatedTextSidebar>
          </li>
        )}
      </motion.ul>
    </motion.div>
  );
};

export default Sidebar;
