import { useContext } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { Abril_Fatface } from "next/font/google";

import { GlobalContext } from "@/context/globalContext";

import Bars from "@/components/Other/Bars";
import AnimatedCharactersNumber from "@/components/Animations/AnimatedTextNumber";
import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";
import AnimatedTextButton from "@/components/Animations/AnimatedTextButton";

import { TemplateSlideVerticalProps } from "@/interfaces/TemplateSlideVerticalProps/TemplateSlideVerticalProps";

const abril = Abril_Fatface({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const TemplateSlideVertical = ({
  title,
  details,
  textButton,
  number,
  link,
  email,
  github,
  linkedin,
  instagram,
  img,
  home,
  cursor,
  section,
}: TemplateSlideVerticalProps) => {
  const { isMobile, router } = useContext(GlobalContext);

  return (
    <section
      className={`${
        home ? "justify-center" : "justify-start sm:justify-center"
      } relative flex h-dvh w-screen flex-col items-end justify-start overflow-hidden sm:justify-center`}
    >
      <motion.div
        className="mx-auto my-0 flex h-full w-full justify-end sm:mx-0 sm:justify-center"
        initial={{ width: "100%", height: "100%" }}
        whileInView={{
          width: home ? "100%" : isMobile ? "100%" : "75%",
          height: home ? "100%" : isMobile ? "100%" : "75%",
        }}
        transition={{
          duration: home ? 1.3 : 1,
          type: home ? "none" : "spring",
          damping: home ? 0 : 15,
        }}
      >
        {home && (
          <>
            <div
              className={`absolute left-5 top-[60%] z-20 flex flex-col justify-center sm:bottom-0 sm:left-20 sm:top-[6%] lg:left-44`}
            >
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-80 text-4xl font-medium leading-none tracking-widest text-brand8 sm:text-6xl lg:w-5/6 lg:text-8xl">
                  {" "}
                  {title}{" "}
                </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
              <AnimatedCharactersDetailsLeft duration={1.1}>
                <h3 className="whitespace-normal text-sm font-light leading-normal tracking-widest text-brand4 sm:text-xl lg:text-3xl">
                  {" "}
                  {details}{" "}
                </h3>
              </AnimatedCharactersDetailsLeft>
            </div>
            <div className="relative flex h-full w-full items-start justify-center sm:mt-0 sm:w-3/4 sm:items-center sm:justify-end">
              <motion.div
                className="clip-custom relative left-0 z-10 h-3/4 w-full bg-cover bg-center bg-no-repeat sm:left-36 sm:h-full"
                style={{ backgroundImage: `url(${img})` }}
                initial={{ scaleY: 1, scaleX: 1 }}
                whileInView={{
                  scaleX: isMobile ? 0.9 : home ? 0.9 : 0.78,
                  scaleY: isMobile ? 0.85 : home ? 0.9 : 0.75,
                }}
                transition={{
                  duration: home ? 1.3 : 1,
                  type: home ? "none" : "spring",
                  damping: home ? 0 : 15,
                }}
              />
            </div>
          </>
        )}
        {link && (
          <>
            <div
              className={`absolute left-5 top-[58%] z-20 flex flex-col justify-center sm:left-20 sm:top-1/2 sm:-translate-y-2/4 lg:left-44`}
            >
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-5/6 text-4xl font-medium leading-none tracking-widest text-brand8 sm:text-6xl lg:text-8xl">
                  {" "}
                  {title}{" "}
                </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
              {email && (
                <AnimatedCharactersDetailsLeft duration={1.3}>
                  <Link
                    aria-label={email}
                    className="mb-6 text-sm leading-6 tracking-widest text-brand4 no-underline duration-300 hover:text-brand9 sm:mb-4 sm:text-3xl sm:leading-normal"
                    href={`mailto:${email}`}
                    target="_blank"
                  >
                    {email}
                  </Link>
                </AnimatedCharactersDetailsLeft>
              )}
              {github && (
                <AnimatedCharactersDetailsLeft duration={1.4}>
                  <Link
                    aria-label={github}
                    className="mb-6 text-sm leading-6 tracking-widest text-brand4 no-underline duration-300 hover:text-brand9 sm:mb-4 sm:text-3xl sm:leading-normal"
                    href={`${github}`}
                    target="_blank"
                  >
                    {" "}
                    GitHub{" "}
                  </Link>
                </AnimatedCharactersDetailsLeft>
              )}
              <AnimatedCharactersDetailsLeft duration={1.5}>
                <div className="flex gap-3 sm:gap-4 lg:gap-7">
                  {linkedin && (
                    <Link
                      className="text-start align-top text-sm leading-normal text-brand4 no-underline duration-300 hover:text-brand9 sm:text-xl lg:text-3xl"
                      href={`${linkedin}`}
                      target="_blank"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </Link>
                  )}
                  {instagram && (
                    <Link
                      className="text-start align-top text-sm leading-normal text-brand4 no-underline duration-300 hover:text-brand9 sm:text-xl lg:text-3xl"
                      href={`${instagram}`}
                      target="_blank"
                      aria-label="instagram"
                    >
                      <FaInstagram />
                    </Link>
                  )}
                </div>
              </AnimatedCharactersDetailsLeft>
            </div>
            <motion.div
              className="static mx-auto mb-auto mt-16 flex h-1/2 sm:relative sm:mx-0 sm:mb-0 sm:mt-0 sm:h-full"
              initial={{
                scale: isMobile ? 1 : 0.7,
                width: isMobile ? "80%" : "67%",
                right: isMobile ? "0" : "-6%",
              }}
              whileInView={{
                scale: 1,
                right: isMobile ? "0" : "-6%",
                width: isMobile ? "80%" : "67%",
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                damping: 35,
                stiffness: 200,
              }}
            >
              <Link
                aria-label={section}
                href={`${section}`}
                className={`${
                  cursor ? `cursor-pointer` : `cursor-default`
                } relative left-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${img})` }}
              >
                <motion.div
                  className="absolute right-0 bg-brand1"
                  initial={{ height: "100%", width: "100%" }}
                  whileInView={{ height: "100%", width: "0vw" }}
                  transition={{ ease: "anticipate", duration: 0.9, delay: 0.2 }}
                />
                <motion.div
                  className="absolute right-0 bg-brand3"
                  initial={{ height: "100%", width: "100%" }}
                  whileInView={{ height: "100%", width: "0vw" }}
                  transition={{ ease: "anticipate", duration: 0.9, delay: 0.1 }}
                />
              </Link>
              <AnimatedCharactersNumber>
                <Link
                  aria-label={section}
                  href={`${section}`}
                  className={`${cursor ? `cursor-pointer` : `cursor-default`} ${
                    abril.className
                  } hidden h-fit whitespace-normal leading-tight sm:block sm:text-7xl lg:text-9xl`}
                >
                  {number}
                </Link>
              </AnimatedCharactersNumber>
            </motion.div>
          </>
        )}
        {details && !home && (
          <>
            <div
              className={`absolute left-5 top-[58%] z-20 flex flex-col justify-center sm:left-20 sm:top-1/2 sm:-translate-y-2/4 lg:left-44`}
            >
              <AnimatedCharactersDetailsLeft duration={1}>
                <h2 className="w-80 text-4xl font-medium leading-none tracking-widest text-brand8 sm:text-6xl lg:w-5/6 lg:text-8xl">
                  {" "}
                  {title}
                </h2>
              </AnimatedCharactersDetailsLeft>
              <Bars />
              <AnimatedCharactersDetailsLeft duration={1.1}>
                <div className="mb-3 h-min w-full max-w-72 pr-24 sm:mb-2 sm:h-20 sm:w-1/2 sm:pr-0 lg:mb-8 lg:h-min lg:w-3/5 lg:max-w-md lg:pr-0">
                  <h3 className="whitespace-normal text-sm font-light leading-normal tracking-widest text-brand4 sm:text-xl lg:text-3xl">
                    {" "}
                    {details}{" "}
                  </h3>
                </div>
              </AnimatedCharactersDetailsLeft>

              <AnimatedTextButton duration={1.2} width="calc(100vw - 1.25rem)">
                <Link
                  aria-label={textButton}
                  href={`${section}`}
                  className="relative left-2/4 top-1/2 mb-0 flex h-11 w-40 -translate-x-1/2 cursor-pointer items-center justify-center whitespace-nowrap border-2 border-solid border-brand1 bg-transparent px-8 py-4 text-center text-xs font-extrabold leading-3 text-brand4 no-underline transition-all duration-300 ease-linear hover:border-2 hover:border-solid hover:border-brand1 hover:bg-brand1 hover:text-white sm:left-auto sm:top-auto sm:h-12 sm:w-40 sm:translate-x-0 sm:text-sm lg:h-12 lg:w-44 lg:text-base"
                >
                  {textButton}
                </Link>
              </AnimatedTextButton>
            </div>
            <motion.div
              className="static mx-auto mb-auto mt-16 flex h-1/2 sm:relative sm:mx-0 sm:mb-0 sm:mt-0 sm:h-full"
              initial={{
                scale: isMobile ? 1 : 0.7,
                width: isMobile ? "80%" : "67%",
                right: isMobile ? "0" : "-6%",
              }}
              whileInView={{
                scale: 1,
                right: isMobile ? "0" : "-6%",
                width: isMobile ? "80%" : "67%",
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                damping: 35,
                stiffness: 200,
              }}
            >
              <Link
                aria-label={section}
                href={`${section}`}
                className={`${
                  cursor ? `cursor-pointer` : `cursor-default`
                } relative left-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${img})` }}
              >
                <motion.div
                  className="absolute right-0 bg-brand1"
                  initial={{ height: "100%", width: "100%" }}
                  whileInView={{ height: "100%", width: "0vw" }}
                  transition={{ ease: "anticipate", duration: 0.9, delay: 0.2 }}
                />
                <motion.div
                  className="absolute right-0 bg-brand3"
                  initial={{ height: "100%", width: "100%" }}
                  whileInView={{ height: "100%", width: "0vw" }}
                  transition={{ ease: "anticipate", duration: 0.9, delay: 0.1 }}
                />
              </Link>
              <AnimatedCharactersNumber>
                <Link
                  aria-label={section}
                  href={`${section}`}
                  className={`${cursor ? `cursor-pointer` : `cursor-default`} ${
                    abril.className
                  } hidden h-fit whitespace-normal leading-tight sm:block sm:text-7xl lg:text-9xl`}
                >
                  {number}
                </Link>
              </AnimatedCharactersNumber>
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default TemplateSlideVertical;
