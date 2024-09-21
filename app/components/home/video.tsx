export default function Video() {
  return (
    <section className="w-screen lg:h-screen overflow-hidden relative mt-[72px] lg:mt-0">
      <video
        className="w-full h-full lg:object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src="/videos/slogan.mp4" type="video/mp4" />
      </video>

      <img
        src="/icons/scroll.svg"
        alt="scroll"
        className="absolute left-1/2 bottom-6 transform -translate-x-1/2 hidden lg:block"
      />
    </section>
  );
}
