/* eslint-disable react/no-unescaped-entities */
export default function AboutUs() {
  return (
    <>
      <section className="pt-24 container mx-auto px-6">
        <div className="flex gap-20 pt-8 lg:pt-20 items-center mb-6 lg:mb-0">
          <h2 className="font-inter text-[160px] opacity-10 font-medium min-w-80 hidden sm:block">
            01
          </h2>

          <h1 className="font-jakarta text-5xl font-semibold text-center lg:text-left">
            What About Us?
          </h1>
        </div>

        <div className="flex gap-20 items-center">
          <div className="min-w-80 hidden sm:block" />

          <div>
            <p>
              At NGC, we believe in "<b>Empower Chemistry by Nature</b>,"
              leveraging cutting-edge biotechnology to develop eco-friendly
              solutions that reduce environmental impact while maintaining high
              performance and quality. By driving the transition from
              conventional chemicals to
              <b> sustainable biochemicals</b>, we are paving the way for a
              greener, more responsible textile industry that aligns with the
              principles of a circular economy. Join us in our journey to
              empower chemistry with nature and create a brighter future for our
              planet.
            </p>

            <p className="mt-6">
              We are the alchemists of tomorrow, weaving the wisdom of nature
              into the very fabric of industry. Our vision is bold yet simple:
              to transform the textile world into a realm where{" "}
              <b>sustainability and beauty walk hand in hand</b>. We are driven
              by the belief that true innovation comes from embracing the
              earth’s own chemistry—replacing harsh, traditional chemicals with
              the gentle yet powerful touch of biochemicals.
            </p>
          </div>
        </div>

        <div className="flex py-20 gap-10 lg:gap-20 items-center justify-between flex-col lg:flex-row">
          <h2 className="font-jakarta text-5xl font-semibold min-w-80 text-center lg:text-left">
            Future is <br /> now!
          </h2>

          <img src="/images/future.svg" alt="Future" />

          <p className="max-w-96">
            Imagine a future where every thread tells a story of harmony with
            the environment, where every color is born from renewable resources,
            and where the art of making is also the art of preserving. At NGC,
            "Empower Chemistry by Nature" is not just a motto; it is our promise
            to the world. We are here to craft a greener, more vibrant
            future—one that thrives on the essence of life itself. Join us as we
            reimagine the textile industry, turning it into a beacon of
            sustainability and a tribute to the endless possibilities of
            nature’s own design.
          </p>
        </div>

        <div className="pb-20 lg:py-20">
          <h2 className="mb-10 lg:mb-20 font-jakarta text-5xl font-semibold text-center">
            People Around Us
          </h2>

          <div className="flex justify-center gap-12 flex-col lg:flex-row">
            <img
              src="/images/devan.svg"
              alt="Devan"
              className="w-1/2 mx-auto  lg:m-0 lg:w-auto"
            />

            <img
              src="/images/eurodye.svg"
              alt="Eurodye"
              className="w-1/2 mx-auto lg:m-0 lg:w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
