import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-gradient-main p-10">
      <div className="container mx-auto text-white flex gap-12 flex-col font-inter">
        <div className="bg-white p-10 rounded-2xl text-black flex flex-col gap-10 lg:gap-24">
          <div className="flex justify-between text-center lg:text-left flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
            <Link to="/">
              <img src="/images/logo.svg" alt="Logo" data-aos="fade-up" />
            </Link>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
              <div className="min-w-[213px]">
                <h3
                  className="mb-6 font-jakarta font-semibold text-xs opacity-60 text-[#1B1819]"
                  data-aos="fade-up"
                >
                  Projects
                </h3>

                <ul className="font-poppins">
                  <li data-aos="fade-up">
                    <Link to={"projects/ecoCleanTex"}>EcoCleanTex</Link>
                  </li>
                  <li data-aos="fade-up">
                    <Link to={"projects/no-petrol"}>No Petrol</Link>
                  </li>
                  <li data-aos="fade-up">
                    <Link to={"projects/plantcovid"}>Plantcovid</Link>
                  </li>
                </ul>
              </div>

              <div className="min-w-[213px]">
                <h3
                  data-aos="fade-up"
                  className="mb-6 font-jakarta font-semibold text-xs opacity-60 text-[#1B1819]"
                >
                  Legal
                </h3>

                <ul className="font-poppins">
                  <li data-aos="fade-up">
                    <Link to={"privacy-policy"}>Privacy Policy</Link>
                  </li>
                  <li data-aos="fade-up">
                    <Link to={"terms-and-conditions"}>
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col lg:text-right">
              <Link
                data-aos="fade-up"
                to="/contacts"
                className="mb-4 bg-black text-white rounded-lg px-4 py-2 uppercase font-semibold text-sm"
              >
                Contacts
              </Link>
              <a
                href="tel:+351927812110"
                className="text-xs font-semibold"
                data-aos="fade-up"
              >
                +351 927 812 110
              </a>
              <a
                href="mailto:hello@ngc.bio"
                className="text-xs font-semibold"
                data-aos="fade-up"
              >
                hello@ngc.bio
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center flex-col lg:flex-row text-center sm:text-left gap-6">
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/ngc-bio"
                target="_blank"
                rel="noreferrer"
                className="bg-black block p-3 rounded-full"
                data-aos="fade-up"
              >
                <img src="/icons/linkedin.svg" alt="Linkedin" />
              </a>

              <a
                href="https://x.com/NGC_bio"
                target="_blank"
                rel="noreferrer"
                className="bg-black block p-3 rounded-full"
                data-aos="fade-up"
              >
                <img src="/icons/twitter.svg" alt="Twitter" />
              </a>
            </div>

            <p className="font-semibold text-xs" data-aos="fade-up">
              Rua do Progresso, 145 <br /> 4455-533 Perafita <br /> Portugal
            </p>

            <div>
              <img
                src="/images/footer-logos.svg"
                alt="Footer logos"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <h3
            className="uppercase text-4xl font-extrabold lg:w-1/2"
            data-aos="fade-up"
          >
            Empower <br /> chemistry by nature
          </h3>

          {/* <div>
            <p className="text-xs mb-2">
              Just send us your contact email and we will contact you.
            </p>
          </div> */}
        </div>

        <div className="flex justify-between">
          <p className="text-xs">
            @ {new Date().getFullYear()} — All rights reserved
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="/icons/arrow-up.svg" alt="Go top" />
          </button>
        </div>
      </div>
    </footer>
  );
}
