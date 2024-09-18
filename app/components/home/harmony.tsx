import { Link } from "@remix-run/react";

export default function Harmony() {
  return (
    <section className="h-[403px] relative flex items-center justify-center overflow-hidden px-10">
      <img
        src="/images/harmony.svg"
        alt="We are harmony"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="container mx-auto">
        <div className="relative text-center text-white z-10 p-8">
          <h1 className="text-5xl font-medium mb-11 uppercase text-second font-jakarta">
            We are <span className="text-gradient">harmony</span>
          </h1>
          <Link
            to="/about-us"
            className="inline-flex items-center py-2 px-4 font-semibold"
          >
            Know more
            <img
              src="/icons/arrow-right.svg"
              alt="Know more"
              className="ml-5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
