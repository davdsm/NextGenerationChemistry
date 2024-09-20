import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm bg-transparent text-white z-50 px-10">
      <div className="container mx-auto flex justify-between items-center py-6">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>

        <nav>
          <ul className="flex gap-16">
            <li>
              <Link to="/about-us" className="text-black font-medium">
                What About Us
              </Link>
            </li>

            <li>
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

        {/* <Link to="/contacts">
          <button className="text-white font-semibold py-2.5 px-8 rounded bg-gradient-main">
            Contacts
          </button>
        </Link> */}
      </div>
    </header>
  );
}
