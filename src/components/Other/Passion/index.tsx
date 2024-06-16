import Image from "next/image";

const Passion = () => {
  return (
    <div className="w-full h-min flex justify-center items-center flex-col px-5 py-20 sm:px-10">
      <div className="w-full flex-col lg:flex-row gap-8 sm:gap-4 lg:gap-10 flex items-center justify-center h-full">
        <div className="w-full h-full flex items-center justify-start flex-col gap-6 lg:gap-6">
          <Image
            width={500}
            height={500}
            alt="Computer"
            src="/computer.svg"
            className="relative w-20 lg:w-40"
          />
          <h2 className="text-sm sm:text-base lg:text-3xl text-center break-all leading-tight tracking-down">
            PROGRAMAÇÃO
          </h2>
          <p className="leading-tight text-start tracking-widest text-xs lg:text-base">
            Em 2022, a paixão pela tecnologia me impulsionou para o universo do
            desenvolvimento front-end. Desde então, tenho me dedicado a
            transformar ideias em websites de alto impacto, com interfaces
            intuitivas e visualmente atraentes.
            <br />
            Em 2023 na Izifinance, tive a minha primeira oportunidade como
            desenvolvedor Front End e tive a oportunidade de participar desde o
            início do projeto, atuei na criação da interface de um projeto novo
            e desafiador. Essa experiência me permitiu aprimorar minhas
            habilidades em UI/UX Design e cresci muito em minha carreira pois
            tive a honra de trabalhar com pessoas mais experientes e incríveis
            que me ajudaram demais a evoluir.
            <br />
            Atualmente, atuo como desenvolvedor Front End na Obra Fácil, onde
            faço a criação e implementação dos novos projetos da empresa, tendo
            uma voz ativa na empresa onde sou o responsável por essas criações,
            alinhando sempre com o time de desenvolvimento e o cliente.
          </p>
        </div>
        {/* <div className="w-full h-full flex items-center justify-start flex-col gap-6 lg:gap-6">
          <Image
            width={500}
            height={500}
            alt="Chip"
            src="/chip.svg"
            className="relative w-20 lg:w-40"
          />
          <h2 className="text-sm sm:text-base lg:text-3xl text-center break-all leading-tight tracking-down">
            TECNOLOGIA
          </h2>
          <p className="break-all leading-tight text-start tracking-widest text-xs lg:text-base">
            A tecnologia tem o poder de mudar o mundo e a vida das pessoas, como
            diz o ditado: Qualquer tecnologia suficientemente avançada é
            indistinguível de magia. Como desenvolvedor de software, sempre me
            esforço para me manter atualizado com as últimas tecnologias e me
            adaptar às mudanças. Acredito que difundir a inovação é uma missão
            compartilhada por todos os envolvidos na criação de tecnologia,
            desde programadores e designers até engenheiros. Juntos, podemos
            desenvolver soluções criativas e funcionais que melhorem a vida das
            pessoas e impulsionem a sociedade para frente.
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-start flex-col gap-6 lg:gap-6">
          <Image
            width={500}
            height={500}
            alt="Book"
            src="/book.svg"
            className="relative w-20 lg:w-40"
          />
          <h2 className="text-sm sm:text-base lg:text-3xl text-center break-all leading-tight tracking-down">
            HISTÓRIA
          </h2>
          <p className="break-all leading-tight text-start tracking-widest text-xs lg:text-base">
            Acredito que a leitura pode ter um grande impacto na vida das
            pessoas, pois as histórias têm o poder de chamar a atenção e tornar
            as coisas mais fáceis de entender e lembrar. Quando lemos, somos
            transportados para outros mundos e realidades, aprendemos novas
            perspectivas e nos tornamos mais empáticos e compreensivos. Acredito
            que a literatura é uma ferramenta poderosa para mudar vidas e moldar
            o pensamento humano. Por isso, procuro sempre estudar diferentes
            padrões narrativos e aplicá-los em minha própria produção, para
            contar histórias com significado e impacto.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Passion;
