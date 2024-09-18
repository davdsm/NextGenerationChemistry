export default function Video() {
  return (
    <section className="w-screen h-screen overflow-hidden relative">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/videos/slogan.mp4" type="video/mp4" />
      </video>

      <img
        src="/icons/scroll.svg"
        alt="scroll"
        className="absolute left-1/2 bottom-6 transform -translate-x-1/2"
      />
    </section>
  );
}
