export default function Future() {
  return (
    <section className="px-10 py-20 lg:p-20 bg-[#212336] text-white">
      <div className="lg:h-[497px] container flex items-center mx-auto flex-col-reverse lg:flex-row gap-10 lg:gap-6">
        <div className="lg:w-3/5 h-full m-auto flex gap-8 items-center container lg:py-10 flex-col lg:flex-row">
          <div className="w-full h-full">
            <img
              src={`/images/future-1.jpg`}
              alt="Future is Coming"
              className="w-full h-full object-cover rounded-lg"
              data-aos="fade-up"
              loading="lazy"
            />
          </div>

          <div className="w-full h-full">
            <img
              src={`/images/future-2.jpg`}
              alt="Future is Coming"
              className="w-full h-full object-cover rounded-lg"
              data-aos="fade-up"
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative lg:w-2/5 h-full lg:p-8 pt-0 lg:pt-8 flex justify-center flex-col text-center lg:text-left">
          <img
            src={`/images/formula.png`}
            alt="Future is Coming"
            className="w-[170px] h-[181px] absolute top-0 right-0 hidden lg:block formula"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <h2
            className="font-medium font-jakarta text-5xl mb-6"
            data-aos="fade-up"
          >
            Future is <br /> Coming
          </h2>
          <p className="m-0 font-poppins max-w-[388px]" data-aos="fade-up">
            Let’s embody your beautiful ideas together, simplify the way you
            visualize your next big things.
          </p>

          <a
            href="https://kod.bio"
            target="_blank"
            rel="noreferrer"
            className="bg-[#1C1D2E] gap-10 py-3 px-7 w-fit mt-5 flex mx-auto lg:mx-0 buttonHoverIconAnimation"
            data-aos="fade-up"
          >
            <img src={`/images/kod.svg`} alt="KOD bio" />

            <img src={`/icons/small-arrow-right.svg`} alt="KOD bio" />
          </a>
        </div>
      </div>
    </section>
  );
}
