import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Link } from "@remix-run/react";

const projects = [
  {
    image: "EcoCleanTex.svg",
    title: "EcoCleanTex",
    description:
      "Sustainable biosurfactant-based detergents for textile applications.",
    slug: "ecoCleanTex",
  },
  {
    image: "bio.png",
    title: "Make it bio",
    description:
      "Sustainable biosurfactant-based detergents for textile applications.",
    slug: "make-it-bio",
  },
  {
    image: "EcoCleanTex.svg",
    title: "EcoCleanTex",
    description:
      "Sustainable biosurfactant-based detergents for textile applications.",
    slug: "ecoCleanTex",
  },
  {
    image: "bio.png",
    title: "Make it bio",
    description:
      "Sustainable biosurfactant-based detergents for textile applications.",
    slug: "make-it-bio",
  },
];

export default function OnGoing() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const BUTTON_SIZE = isMobile ? 33 : 66;

  return (
    <section
      className="bg-cover bg-center flex items-center py-10 lg:py-32 flex-col lg:flex-row animated-bg-section"
      style={{ backgroundImage: "url(/images/onGoingBackground.svg)" }}
    >
      <div className="lg:w-1/2 flex justify-center">
        <div className="p-8">
          <img
            src="/images/ongoing.png"
            alt="On Going"
            className="max-w-[230px] lg:-ml-[5px] mx-auto"
            data-aos="fade-up"
          />
          <p
            className="text-main-black mt-6 font-poppins max-w-sm text-center lg:text-left"
            data-aos="fade-up"
          >
            Our journey is one of transformation—turning what was once
            destructive into something beautifully sustainable. With the wisdom
            of nature as our guide, we craft solutions that honor the earth and
            inspire a cleaner, greener world. At NGC, we believe in more than
            just making products; we believe in making a difference, creating a
            legacy of sustainability that will weave through generations to
            come. Join us as we turn the tides of the textile industry, leading
            it into a future where beauty and sustainability are forever
            intertwined.
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 overflow-hidden max-w-full" data-aos="fade-up">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={isMobile ? 1.3 : 1.7}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
        >
          {projects.map(({ title, description, image, slug }, key) => (
            <SwiperSlide key={key}>
              <Link to={"/projects/" + slug}>
                <div className="relative overflow-hidden h-[474px]">
                  <img
                    src={`/images/projects/${image}`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-lg"
                    loading="lazy"
                  />
                  <div
                    className="rounded-lg absolute inset-0 bg-black bg-opacity-50 lg:opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end text-white p-14"
                    style={{ clipPath: "inset(0 round 10px)" }}
                  >
                    <div>
                      <h3 className="text-xl font-medium font-jakarta">
                        {title}
                      </h3>
                      <p className="mt-2 text-xs font-poppins">{description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div
            className="swiper-button-next bg-white rounded-lg buttonHoverIconAnimation"
            style={{ right: 30, width: BUTTON_SIZE, height: BUTTON_SIZE }}
          >
            <img src="/icons/arrow-right-black.svg" alt="Slide next" />
          </div>
          <div className="swiper-button-prev" style={{ display: "none" }} />
        </Swiper>
      </div>
    </section>
  );
}
