import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";

import ScrollSnap from "@/components/Other/ScrollSnap";
import TemplateSlide from "@/components/Templates/TemplateSlideVertical/PresetScroll";

const Home = () => {
  const { isMobile, isTablet } = useContext(GlobalContext);

  const spacemente = () => {
    return <br />;
  };

  return (
    <section className="bg-gradient2 overflow-hidden">
      <ScrollSnap
        main={
          <TemplateSlide
            title={"GABRIEL SALES"}
            details={"Desenvolvedor Front-End."}
            section={"/main"}
            number={""}
            img={
              "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            home
            cursor={false}
          />
        }
        work={
          <TemplateSlide
            title={`Meus \n Trabalhos`}
            details={"Lista de todos os trabalhos e projetos feitos por mim."}
            textButton={"Mostre-me mais"}
            section={"/work"}
            number={"01"}
            img={"/work.webp"}
            cursor={true}
          />
        }
        about={
          <TemplateSlide
            title={"Sobre Mim"}
            details={"Eu amo servir, desenvolver, criar e aprender."}
            textButton={"Mostre-me mais"}
            section={"/about"}
            number={"02"}
            img={"/about.webp"}
            cursor={true}
          />
        }
        contact={
          <TemplateSlide
            title={"Entre em Contato"}
            section={"/contact"}
            number={"03"}
            link
            email={"gabriel.sales.developer@gmail.com"}
            github={"https://github.com/sales-gb"}
            linkedin={"https://www.linkedin.com/in/gabriel-sales-bezerra/"}
            img={"/contact.webp"}
            cursor={false}
          />
        }
      />
    </section>
  );
};

export default Home;
