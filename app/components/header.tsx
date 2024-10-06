/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full backdrop-blur-sm bg-transparent text-white z-50 px-10">
        <div className="container mx-auto flex justify-between items-center py-6">
          <Link to="/">
            <img src="/images/logo.svg" alt="Logo" data-aos="fade-up" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-8 lg:gap-16">
              <li data-aos="fade-up">
                <Link to="/about-us" className="text-black font-medium">
                  What About Us
                </Link>
              </li>

              <li data-aos="fade-up">
                <Link to="/bioshade" className="text-gradient font-medium">
                  BioShade
                </Link>
              </li>

              {/* <li>
              <Link to="/news" className="text-black font-medium">
                News
              </Link>
            </li> */}
            </ul>
          </nav>

          <Link to="/contacts" data-aos="fade-up" className="hidden lg:block">
            <button className="text-white font-semibold py-2.5 px-8 rounded bg-gradient-main">
              Contacts
            </button>
          </Link>

          <div className="lg:hidden">
            <img
              src="/icons/burger-menu.svg"
              alt="Logo"
              data-aos="fade-up"
              width={24}
              className=" cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
        </div>
      </header>

      <div
        className={`gap-20 z-20 lg:hidden fixed inset-0 bg-[#212336] text-white flex flex-col justify-center items-center transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to="/about-us" className="text-2xl">
          What About Us
        </Link>

        <Link to="/bioshade" className="text-2xl text-gradient">
          BioShade
        </Link>

        <Link to="/contacts">
          <button className="text-white font-semibold py-2.5 px-8 rounded bg-gradient-main">
            Contacts
          </button>
        </Link>
      </div>
    </>
  );
}
