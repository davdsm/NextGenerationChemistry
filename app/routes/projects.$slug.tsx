import { MetaFunction } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";

export const loader = ({ params: { slug } }: { params: { slug?: string } }) => {
  if (slug === "plantcovid")
    return {
      slug,
      name: "Plantcovid",
      video: "RhkkU9AitF4",
      applicationNumber: 4759,
      call: "Eurostars 3 - Call 5",
      detail: {
        imageSmall: "plantcovid-detail-1.png",
        imageBigger: "plantcovid-detail-2.png",
        descriptions: [
          "Leading a partnership in developing compounds capable of mitigating the  spread of Sars- Cov2 virus, NGC has partnered with CBQF – Centro de  Biotecnologia e Química Fina, Universidade Católica Portugues; IPB –  Instituto Politécnico de Bragança and iMM-Instituto de Medicina  Molecular.",
          "We are researching naturally occurring compounds in plants that have  capabilities in destroying the Sars-Cov2 virus. These compound are also  being studied with the intent to discover if they are capable of stoping  growth of bacteria and fungi that cause several diseases.",
          "Once this compound(s) have been verified as Anti Microbial, they will be  engineered into products for several application: disinfectants,  protecting surfaces, and textiles.In this process we what to  substitute petrochemical, synthetically created compounds for Bio Based  compounds using plants responsibly grown and transform them into  products.",
        ],
      },
    };

  if (slug === "no-petrol")
    return {
      slug,
      name: "NO PETROL®",
      video: "dC76AKDFumE",
      applicationNumber: null,
      call: null,
      detail: {
        imageSmall: "",
        imageBigger: "",
        descriptions: [],
      },
    };

  if (slug === "ecoCleanTex")
    return {
      slug,
      name: "EcoCleanTex",
      video: false, // 0EF4zVgXTzA
      applicationNumber: 14302,
      call: "MPr-2023-4",
      detail: {
        imageSmall: "ecoCleanTex-detail-1.jpg",
        imageBigger: "ecoCleanTex-detail-2.jpg",
        descriptions: [
          "EcoCleanTex uses biosurfactants to create innovative bio-detergents in the textile sector, focusing on production efficiency and enhancing the performance of these compounds.",
          "The sustainable approach aims to contribute to a more efficient and environmentally friendly textile industry, aligned with the EU decarbonization goals and the strengthening of European industrial capacity.",
          "EcoCleanTex is an international R&D project focused on developing next-generation bio-based detergents for the textile industry. By replacing conventional petrochemical surfactants with microbial biosurfactants, the project aims to reduce environmental impact while maintaining high performance in textile washing, scouring and bleaching processes.",
          "Led by NGC, the project will deliver novel formulations tailored to different textile substrates and validate them at industrial scale. EcoCleanTex represents a key step towards greener textile manufacturing and a circular bioeconomy.",
          "Operation Code: NORTE2030-FEDER-00530300",
          "Date: 2024-02-08 18:42:46",
        ],
      },
    };

  return redirect("/");
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];

  return [
    { title: `${data.name} - Next Generation Chemistry` },
    {
      name: "description",
      content: `Next Generation Chemistry ${data.name} page.`,
    },
  ];
};

export default function Project() {
  const project = useLoaderData<typeof loader>();

  return (
    <>
      <section
        className="mt-24 container mx-auto  flex flex-col items-center justify-center min-h-[80vh] rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: "url(/images/project-background.svg)" }}
        data-aos="fade-up"
      >
        <h1
          className="text-5xl font-bold mb-10 text-white font-jakarta"
          data-aos="fade-up"
        >
          {project.slug === "no-petrol" ? (
            <img className="w-1/3 mx-auto object-contain rounded-lg" src="/images/no-petrol-logo.png" alt="NO PETROL" />
          ) : (
            project.name
          )}
        </h1>

        <div
          className="relative rounded-lg overflow-hidden w-10/12 h-full"
          data-aos="fade-up"
        >
          {project.video && (
            <iframe
              className="rounded-lg w-full h-[398px] lg:w-[945px] lg:h-[498px] mx-auto"
              src={`https://www.youtube.com/embed/${project.video}?controls=0&showinfo=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${project.video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </section>

      {project.applicationNumber && project.call && (
        <section className="container mx-auto flex flex-col lg:flex-row justify-center px-5 mt-14 lg:mt-20 text-center lg:text-left gap-4 lg:gap-0">
          <div className="lg:min-w-[300px]">
            <h3
              className="font-semibold text-lg font-jakarta"
              data-aos="fade-up"
            >
              Application Number
            </h3>
            <p
              className="font-extralight text-2xl font-poppins"
              data-aos="fade-up"
            >
              {project.applicationNumber}
            </p>
          </div>
          <div className="lg:min-w-[300px]">
            <h3
              className="font-semibold text-lg font-jakarta"
              data-aos="fade-up"
            >
              Call
            </h3>
            <p
              className="font-extralight text-2xl font-poppins"
              data-aos="fade-up"
            >
              {project.call}
            </p>
          </div>
        </section>
      )}
      {project.detail.imageSmall &&
        project.detail.imageBigger &&
        project.detail.descriptions && (
          <section className="my-10 lg:my-20 container mx-auto flex items-center gap-4 lg:gap-20 flex-col lg:flex-row px-6">
            {project.detail.imageSmall && project.detail.imageBigger && (
              <div className="lg:w-1/2 flex items-center justify-center relative h-[515px] lg:h-[581px]">
                <img
                  src={`/images/projects/${project.detail.imageSmall}`}
                  alt={project.name}
                  className="w-[282px] h-[383px] object-cover rounded-lg z-10 mr-[40px] lg:mr-0"
                  data-aos="fade-up"
                />
                <img
                  src={`/images/projects/${project.detail.imageBigger}`}
                  alt={project.name}
                  className="w-[407px] h-[474px] object-cover rounded-lg right-0 absolute top-[20px] left-[20px] lg:left-[unset]"
                  data-aos="fade-up"
                />
              </div>
            )}

            {project.detail.descriptions && (
              <div className="lg:w-1/2">
                {project.detail.descriptions.map((description, index) => (
                  <p
                    key={index}
                    className="font-poppins text-main-black"
                    data-aos="fade-up"
                  >
                    {description}
                  </p>
                ))}
              </div>
            )}
          </section>
        )}

      {project.slug === "no-petrol" && (
        <section className="mb-40">
          <p className="text-center text-xl w-1/2 mx-auto py-40">
            NO PETROL® is a biotechnology-driven brand transforming the textile
            industry with sustainable solutions. By replacing
            petrochemical-based processes with innovations from biology, we
            deliver performance, responsibility, and a reduced environmental
            footprint.
          </p>
          <div className="flex flex-wrap px-8 text-white flex-col md:flex-row">
            <div className="mb-8 relative bg-[url('/images/projects/no-petrol-detail-3.png')] bg-no-repeat bg-cover w-full md:w-[30%] mx-auto px-8 pt-60 pb-4 rounded-md before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:content-[''] before:absolute before:top-0 before:left-0  before:w-full before:h-full z-01 before:rounded-md">
              <h3 className="font-bold text-2xl z-02 relative">
                <b>Biodetergents</b> ‐ Power of the Ocean
              </h3>
              <p className="z-02 relative">
                Engineered from marine microorganisms and optimized through
                synthetic biology. Fermented at scale to produce natural
                biosurfactants that replace harsh chemicals with biodegradable,
                safe, and high-performance cleaning power.
              </p>
            </div>
            <div className="mb-8 relative bg-[url('/images/projects/no-petrol-detail-2.png')] bg-no-repeat bg-cover w-full md:w-[30%] mx-auto px-8 pt-60 pb-4 rounded-md before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:content-[''] before:absolute before:top-0 before:left-0  before:w-full before:h-full z-01 before:rounded-md">
              <h3 className="font-bold text-2xl z-02 relative">
                <b>Biopigments</b> – Vibrant Colors
              </h3>
              <p className="z-02 relative">
                Sourced from regenerative agriculture, in harmony with soil and
                ecosystem health. Natural pigments deliver vibrant, durable, and
                safe coloration, replacing synthetic dyes with biodegradable and
                eco-responsible alternatives.
              </p>
            </div>
            <div className="mb-8 relative bg-[url('/images/projects/no-petrol-detail-1.png')] bg-no-repeat bg-cover w-full md:w-[30%] mx-auto px-8 pt-60 pb-4 rounded-md before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:content-[''] before:absolute before:top-0 before:left-0  before:w-full before:h-full z-01 before:rounded-md">
              <h3 className="font-bold text-2xl z-02 relative">
                <b>Biosofteners</b> – A Touch of Excellence
              </h3>
              <p className="z-02 relative">
                Derived from microalgae, sustainably extracted and purified.
                Natural bioactive compounds deliver softness and performance to
                textiles, replacing synthetics with a biodegradable, safe, and
                eco-responsible finish.
              </p>
            </div>
          </div>
        </section>
      )}

      {project.slug === "ecoCleanTex" && (
        <div className="flex justify-center flex-col items-center w-full">
          <a target="_blank" href="/ecocleantext.pdf" rel="noreferrer">
            <img
              className="w-full mx-auto px-20 md:px-0 md:w-1/3 pb-20"
              src="/images/projects/norte2030.png"
              alt="Eco Clean Tex"
            />
          </a>
          <img
            className="w-full md:w-1/5 px-20 md:px-0 pb-40"
            src="/images/eureka.jpeg"
            alt="Eureka"
          />
        </div>
      )}
    </>
  );
}
