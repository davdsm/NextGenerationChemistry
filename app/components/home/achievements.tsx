import { Link } from "@remix-run/react";


export default function Achievements() {
  return (
    <section className="container mx-auto px-10 py-20">
      <h2
        className="text-gradient-second font-jakarta text-4xl lg:text-5xl font-medium mb-4 text-center"
        data-aos="fade-up"
      >
        Achievements
      </h2>
      <p
        className="text-poppins max-w-2xl mx-auto mb-24 text-center"
        data-aos="fade-up"
      >
        Our journey is one of transformation turning what was once destructive
        into something beautifully sustainable With the wisdom of nature as our
        guide.
      </p>

      <Link to="/projects/plantcovid">
        <div className="relative overflow-hidden w-[290px] h-[448px] mx-auto">
          <img
            src={`/images/projects/plantcovid.svg`}
            alt="Plantcovid"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-lg"
            data-aos="fade-up"
            loading="lazy"
          />
          <div
            className="rounded-lg absolute inset-0 bg-black bg-opacity-50 lg:opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end text-white p-14"
            style={{ clipPath: "inset(0 round 16px)" }}
          >
            <div>
              <h3 className="text-xl font-medium font-jakarta uppercase">
                Plantcovid
              </h3>
              <p className="mt-2 text-xs font-poppins uppercase">
                Product research and application of naturally occurring
                anti-microbial compounds.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
