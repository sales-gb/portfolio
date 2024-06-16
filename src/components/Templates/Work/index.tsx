import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";

import TemplateRoute from "@/components/Templates/TemplateRoute";
import Works from "@/components/Other/Work";

const Work = () => {
  const { isMobile, isTablet } = useContext(GlobalContext);

  return (
    <section className="w-screen h-full bg-gradient2">
      <TemplateRoute
        image={"/work.webp"}
        title={"Meus Trabalhos"}
        details={
          "Lista de alguns dos meus projetos. Além de um pouco da minha experiência profissional"
        }
        textButton={"Todos os trabalhos"}
        link={"https://github.com/sales-gb?tab=repositories"}
        email={"gabriel.sales.developer@gmail.com"}
        github={"https://github.com/sales-gb"}
      >
        <Works />
      </TemplateRoute>
    </section>
  );
};

export default Work;
