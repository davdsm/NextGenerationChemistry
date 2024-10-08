export default function Video() {
  return (
    <section className="lg:h-screen overflow-hidden relative mt-[72px] lg:mt-0">
      <video
        className="w-full h-full lg:object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="none"
      >
        <source src="/videos/slogan.mp4" type="video/mp4" />
      </video>

      <div
        className="menu-icon absolute left-1/2 bottom-6 transform -translate-x-1/2 hidden lg:block"
        data-aos="fade-up"
        data-aos-offset="0"
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          className="w-[32px] h-[32px]"
        >
          <style type="text/css">
            {`
            .st0{fill:none;stroke:#ffffff;stroke-width:2;stroke-miterlimit:10;}
            .st1{fill:none;stroke:#ffffff;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}
          `}
          </style>
          <g>
            <path
              className="st0"
              d="M25,21c0,5-4,9-9,9l0,0c-4.9,0-9-4-9-9V11c0-4.9,4.1-9,9-9l0,0c5,0,9,4.1,9,9V21z"
            />
          </g>
          <line className="st1" x1="16" y1="8" x2="16" y2="14" />
        </svg>
      </div>
    </section>
  );
}
