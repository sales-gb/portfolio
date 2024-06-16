import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";

import TemplateRoute from "@/components/Templates/TemplateRoute";
import TemplateSlide from "@/components/Templates/TemplateSlideVertical/FreeScroll";
import WhoAmI from "@/components/Other/WhoAmI";
import Passion from "@/components/Other/Passion";
import SkillSet from "@/components/Other/SkillSet";

const About = () => {
  const { isMobile, isTablet } = useContext(GlobalContext);

  return (
    <section className="w-screen h-full bg-gradient2">
      <TemplateRoute
        image={"/about.webp"}
        title={"Sobre Mim"}
        details={"Eu amo servir, desenvolver, criar e aprender."}
        textButton={"Mais sobre mim"}
        link={"https://www.linkedin.com/in/gabriel-sales-bezerra/"}
        email={"gabriel.sales.developer@gmail.com"}
        github={"https://github.com/sales-gb"}
      >
        <TemplateSlide number={1}>
          <WhoAmI />
        </TemplateSlide>
        <TemplateSlide number={2}>
          <Passion />
        </TemplateSlide>
        <TemplateSlide number={3}>
          <SkillSet />
        </TemplateSlide>
      </TemplateRoute>
    </section>
  );
};

export default About;
