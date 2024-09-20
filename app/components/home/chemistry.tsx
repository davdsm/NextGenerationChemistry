export default function Chemistry() {
  return (
    <section className="h-[375px] flex container mx-auto px-10 flex-col lg:flex-row">
      <div className="w-1/2 h-full m-auto">
        <img
          src="/images/next-generation-chemistry.svg"
          alt="Next Generation Chemistry"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:w-1/2 h-full flex items-center justify-center p-8 text-center lg:text-left pt-0 lg:pt-8">
        <p className="text-main-black">
          We are redefining the future of the textile industry through the power
          of nature. Our mission is to transform the textile sector into a
          cleaner, more sustainable, and environmentally-friendly industry by
          replacing traditional chemical products with innovative bio-based
          alternatives.
        </p>
      </div>
    </section>
  );
}
