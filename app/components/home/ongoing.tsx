import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    image: "EcoCleanTex.svg",
    title: "EcoCleanTex",
    description:
      "Sustainable biosurfactant-based detergents for textile applications.",
  },
  {
    image: "fermentation.jpeg",
    title: "Precise Fermentation",
    description:
      "Finding new ways to produce molecules.",
  },
  {
    image: "bio.png",
    title: "Make it bio",
    description:
      "Sustainable biosurfactant-based detergents for textile applications.",
  },
];

export default function OnGoing() {
  return (
    <section
      className="bg-cover bg-center flex items-center py-10 lg:py-32 flex-col lg:flex-row"
      style={{ backgroundImage: "url(/images/onGoing.svg)" }}
    >
      <div className="lg:w-1/2 flex justify-center">
        <div className="p-8">
          <h1 className="text-5xl font-medium text-main-black font-jakarta text-center lg:text-left">
            On Going
          </h1>
          <p className="text-main-black mt-6 font-poppins max-w-sm">
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

      <div className="lg:w-1/2 overflow-hidden max-w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.7}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
        >
          {projects.map(({ title, description, image }, key) => (
            <SwiperSlide key={key}>
              <div className="relative overflow-hidden h-[474px]">
                <img
                  src={`/images/projects/${image}`}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-lg"
                />
                <div
                  className="rounded-lg absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end text-white p-14"
                  style={{ clipPath: "inset(0 round 16px)" }}
                >
                  <div>
                    <h3 className="text-xl font-medium font-jakarta">{title}</h3>
                    <p className="mt-2 text-xs font-poppins">{description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="swiper-button-next bg-white rounded-lg"
            style={{ right: 30, width: 66, height: 66 }}
          >
            <img src="/icons/arrow-right-black.svg" alt="Slide next" />
          </div>
          <div className="swiper-button-prev" style={{ display: "none" }} />
        </Swiper>
      </div>
    </section>
  );
}
