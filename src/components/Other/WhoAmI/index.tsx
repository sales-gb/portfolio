import Image from "next/image";

const WhoAmI = () => {
  return (
    <div className="w-full h-fit px-5 py-20 sm:px-10 flex items-center justify-center flex-col">
      <div className="w-full gap-8 sm:gap-10 h-3/4 flex items-center justify-end">
        <div className="flex items-center justify-center flex-col lg:flex-row w-full lg:w-1/2 min-h-full gap-8 lg:gap-7">
          <div className="w-full h-full flex items-start justify-between flex-col gap-8 sm:gap-5 lg:gap-8">
            <h2 className="text-sm sm:text-2xl lg:text-3xl text-center leading-tight tracking-down break-all uppercase">
              Gabriel Sales
            </h2>
            <p className="text-start tracking-widest leading-tight text-xs sm:text-sm lg:text-base">
              Sou apaixonado por criar interfaces atraentes, intuitivas e
              modernas e que transformam ideias em sites de alto impacto, sou um
              desenvolvedor front-end com cerca de 3 anos de experiência.
              <br />
              Com um olhar voltado para o UI/UX Design, busco sempre garantir
              que meus websites não sejam apenas visualmente atraentes, mas
              também fáceis de usar e acessíveis para todos.
            </p>
            {/* <Image
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-auto"
              src={"/gabriel-sales-image.webp"}
              alt="Gabriel Sales"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
