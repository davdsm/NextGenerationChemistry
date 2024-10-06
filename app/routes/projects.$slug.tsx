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

  if (slug === "make-it-bio")
    return {
      slug,
      name: "Make it bio",
      video: "Gef-igXEy9w",
      applicationNumber: null,
      call: null,
      detail: {
        imageSmall: "make-it-bio-detail-2.jpg",
        imageBigger: "make-it-bio-detail-1.jpg",
        descriptions: [
          "Make it Bio was born out of the recognition that only a complete action can Change The Impact And Sustainability of the Textile Preparation, Dyeing And Finishing Processes.",
          "In an unprecedented vision of the process, NGC, formulated and developed products and combinations of active substances to achieve key KPI markers to Reduce H2O, Energy, CO2 Emissions, Discharge of Harmful Waste and the use of Petrochemical originated compounds.",
        ],
      },
    };

  if (slug === "ecoCleanTex")
    return {
      slug,
      name: "EcoCleanTex",
      video: "0EF4zVgXTzA",
      applicationNumber: null,
      call: null,
      detail: {
        imageSmall: "ecoCleanTex-detail-1.jpg",
        imageBigger: "ecoCleanTex-detail-2.jpg",
        descriptions: [
          "NGC is also in the hunt for a substitution product that will be able to comply with the strictest industry requirements and be able to replace the current market offer.",
          "This is still very hush hush, if you want to know more drop us a line at hello@ngc.bio and maybe we can talk some more about this.",
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
          {project.name}
        </h1>

        <div
          className="relative rounded-lg overflow-hidden w-10/12 h-full"
          data-aos="fade-up"
        >
          <iframe
            className="rounded-lg w-full h-[398px] lg:w-[945px] lg:h-[498px] mx-auto"
            src={`https://www.youtube.com/embed/${project.video}?controls=0&showinfo=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${project.video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

      <section className="my-10 lg:my-20 container mx-auto flex items-center gap-4 lg:gap-20 flex-col lg:flex-row px-6">
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
      </section>
    </>
  );
}
