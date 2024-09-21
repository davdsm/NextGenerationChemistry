export default function Chemistry() {
  return (
    <section className="lg:h-[375px] flex container mx-auto p-10 flex-col lg:flex-row gap-6">
      <div className="lg:w-1/2 h-full m-auto flex items-center">
        <img
          src="/images/next-generation-chemistry.png"
          alt="Next Generation Chemistry"
        />
      </div>

      <div className="lg:w-1/2 h-full flex items-center justify-center lg:p-8 text-center lg:text-left pt-0 lg:pt-8">
        <p className="text-main-black m-0">
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
