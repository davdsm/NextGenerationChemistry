import { useState } from "react";
import { Link } from "@remix-run/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "BioShade - Next Generation Chemistry" },
    {
      name: "description",
      content: "Next Generation Chemistry BioShade page.",
    },
  ];
};

export default function BioShade() {
  const [activeColor, setActiveColor] = useState("N0004");
  const [activeTissue, setActiveTissue] = useState("polyamide");
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <section className="pb-40 pt-[72px]">
      <div id="bioshade">
        <div id="banner"></div>
        <div id="intro">
          <h1 className="mb-10" data-aos="fade-up">
            BioShade
          </h1>
          <div id="buttons" data-aos="fade-up">
            <Link id="btn-about" to="/about-us">
              Know More
            </Link>
            <Link to="/contacts" id="btn-contacts">
              Contact Us
            </Link>
          </div>
        </div>
        <div id="script" className="container mx-auto" data-aos="fade-up">
          <div id="management">
            {isMobile ? (
              <>
                <h3 className="cor">Color</h3>

                <Swiper
                  modules={[Navigation]}
                  spaceBetween={16}
                  slidesPerView={4}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  slidesPerGroup={4}
                  style={{ height: 100 }}
                >
                  {colors
                    .filter((c) => c.tissue === activeTissue)
                    .map((color) => (
                      <SwiperSlide key={color.code}>
                        <li
                          key={color.code}
                          className={`${
                            color.code === activeColor ? "active" : ""
                          } text-center `}
                        >
                          <button
                            style={{ backgroundColor: color.color }}
                            onClick={() => setActiveColor(color.code)}
                            className="p-2 rounded-[20px]"
                          >
                            {color.text}
                          </button>
                        </li>
                      </SwiperSlide>
                    ))}
                  <div
                    className="swiper-button-next bg-black rounded-lg"
                    style={{ right: 0, width: 33, height: 33, marginTop: 0 }}
                  >
                    <img src="/icons/arrow-right.svg" alt="Slide next" />
                  </div>
                  <div
                    className="swiper-button-prev bg-black rounded-lg rotate-180"
                    style={{ left: 0, width: 33, height: 33, marginTop: 0 }}
                  >
                    <img src="/icons/arrow-right.svg" alt="Slide next" />
                  </div>
                </Swiper>
              </>
            ) : (
              <div className="group colors">
                <h3>Color</h3>
                <ul id="colorsList">
                  {colors
                    .filter((c) => c.tissue === activeTissue)
                    .map((color) => (
                      <li
                        key={color.code}
                        className={color.code === activeColor ? "active" : ""}
                      >
                        <button
                          style={{ backgroundColor: color.color }}
                          onClick={() => setActiveColor(color.code)}
                        >
                          {color.text}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <div className="group tissue">
              <h3>Tissue</h3>
              <ul id="tissuesList">
                {tissues.map((tissue) => (
                  <li
                    key={tissue.code}
                    className={tissue.code === activeTissue ? "active" : ""}
                  >
                    <button onClick={() => setActiveTissue(tissue.code)}>
                      {tissue.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group footer">
              {/* <a
                href="https://ngc.bio/#anchorC"
                target="_blank"
                id="continue"
                rel="noreferrer"
              >
                Continue
              </a> */}
            </div>
          </div>
          <div id="viewer">
            <img
              id="tissueImage"
              src={`https://davdsm.pt/wp-content/uploads/RGB/${activeColor}/${activeColor}-${activeTissue}.jpg`}
              width="100%"
              height="100%"
              alt="BioShade"
            />
          </div>
        </div>

        <div id="body" className="">
          <div
            id="about"
            className="texts flex flex-col lg:flex-row items-center gap-4"
          >
            <div className="text-center" data-aos="fade-up">
              <span>Code</span>
              <p>TD-C16-i02</p>
            </div>
            <div className="text-center" data-aos="fade-up">
              <span>Notice</span>
              <p>2022-C16i02-10</p>
            </div>
          </div>
          <p data-aos="fade-up">
            The fermentation medium is essential for the productive and economic
            success of bioproduct fermentation. A proper formulation of the
            medium allows for improved yield, cost, and production time.
            Particularly, the cost of culture medium formulation often makes
            fermentation unfeasible for the production of industrial
            bioproducts. At NGC, we are optimizing the formulation of new
            culture media for the production of biological pigments from
            anthropogenic waste or residues to promote the replacement of
            traditional culture media with more efficient and cost-effective
            alternatives. In this project, we developed a new digital database
            of biopigments as a result of the optimization of various
            fermentation processes. This innovative and value-added platform
            allow potential clients of biological pigments to access the
            available colors and accelerate the transition to a more sustainable
            Textile Industry.
          </p>
          <div id="sponsors">
            <img
              src="https://davdsm.pt/wp-content/uploads/ppr.png"
              width="776px"
              height="78px"
              alt="PRR"
              className="mx-auto"
              data-aos="fade-up"
            />
          </div>
          <p id="last" data-aos="fade-up">
            Vouchers for Startups 2049: Development of a new digital database of
            biological pigments
          </p>
          <a data-aos="fade-up" className="inline-block mt-8 text-white font-semibold py-2.5 px-8 rounded bg-gradient-main" href="file.pdf" target="_blank">Construir o Futuro 2049</a>
        </div>
      </div>
    </section>
  );
}

const colors = [
  {
    text: "N0001",
    tissue: "polyamide",
    code: "N0001",
    color: "rgb(226, 212, 201)",
    image: "/RGB/N0001/N0001-polyamide.jpg",
  },
  {
    text: "N0001",
    tissue: "wool",
    code: "N0001",
    color: "rgb(203, 185, 166)",
    image: "/RGB/N0001/N0001-wool.jpg",
  },
  {
    text: "N0001",
    tissue: "linen",
    code: "N0001",
    color: "rgb(222, 211, 197)",
    image: "/RGB/N0001/N0001-linen.jpg",
  },

  {
    text: "N0002",
    tissue: "polyamide",
    code: "N0002",
    color: "rgb(212, 206, 192)",
    image: "/RGB/N0002/N0002-polyamide.jpg",
  },
  {
    text: "N0002",
    tissue: "wool",
    code: "N0002",
    color: "rgb(200, 190, 169)",
    image: "/RGB/N0002/N0002-wool.jpg",
  },
  {
    text: "N0002",
    tissue: "cotton",
    code: "N0002",
    color: "rgb(223, 216, 207)",
    image: "/RGB/N0002/N0002-cotton.jpg",
  },
  {
    text: "N0002",
    tissue: "linen",
    code: "N0002",
    color: "rgb(216, 205, 188)",
    image: "/RGB/N0002/N0002-linen.jpg",
  },

  {
    text: "N0003",
    tissue: "polyamide",
    code: "N0003",
    color: "rgb(217, 211, 198)",
    image: "/RGB/N0003/N0003-polyamide.jpg",
  },
  {
    text: "N0003",
    tissue: "wool",
    code: "N0003",
    color: "rgb(204, 192, 168)",
    image: "/RGB/N0003/N0003-wool.jpg",
  },
  {
    text: "N0003",
    tissue: "cotton",
    code: "N0003",
    color: "rgb(219, 211, 200)",
    image: "/RGB/N0003/N0003-cotton.jpg",
  },
  {
    text: "N0003",
    tissue: "linen",
    code: "N0003",
    color: "rgb(211, 201, 185)",
    image: "/RGB/N0003/N0003-linen.jpg",
  },

  {
    text: "N0004",
    tissue: "polyamide",
    code: "N0004",
    color: "rgb(203, 196, 178)",
    image: "/RGB/N0004/N0004-polyamide.jpg",
  },
  {
    text: "N0004",
    tissue: "wool",
    code: "N0004",
    color: "rgb(190, 179, 151)",
    image: "/RGB/N0004/N0004-wool.jpg",
  },
  {
    text: "N0004",
    tissue: "cotton",
    code: "N0004",
    color: "rgb(202, 193, 183)",
    image: "/RGB/N0004/N0004-cotton.jpg",
  },
  {
    text: "N0004",
    tissue: "linen",
    code: "N0004",
    color: "rgb(198, 184, 166)",
    image: "/RGB/N0004/N0004-linen.jpg",
  },

  {
    text: "N0005",
    tissue: "cotton",
    code: "N0005",
    color: "rgb(203, 192, 179)",
    image: "/RGB/N0005/N0005-cotton.jpg",
  },

  {
    text: "N0006",
    tissue: "polyamide",
    code: "N0006",
    color: "rgb(186, 182, 159)",
    image: "/RGB/N0006/N0006-polyamide.jpg",
  },
  {
    text: "N0006",
    tissue: "wool",
    code: "N0006",
    color: "rgb(176, 174, 150)",
    image: "/RGB/N0006/N0006-wool.jpg",
  },
  {
    text: "N0006",
    tissue: "cotton",
    code: "N0006",
    color: "rgb(208, 201, 190)",
    image: "/RGB/N0006/N0006-cotton.jpg",
  },
  {
    text: "N0006",
    tissue: "linen",
    code: "N0006",
    color: "rgb(203, 194, 178)",
    image: "/RGB/N0006/N0006-linen.jpg",
  },

  {
    text: "N0007",
    tissue: "polyamide",
    code: "N0007",
    color: "rgb(223, 213, 205)",
    image: "/RGB/N0007/N0007-polyamide.jpg",
  },
  {
    text: "N0007",
    tissue: "wool",
    code: "N0007",
    color: "rgb(210, 196, 181)",
    image: "/RGB/N0007/N0007-wool.jpg",
  },
  {
    text: "N0007",
    tissue: "cotton",
    code: "N0007",
    color: "rgb(226, 218, 209)",
    image: "/RGB/N0007/N0007-cotton.jpg",
  },
  {
    text: "N0007",
    tissue: "linen",
    code: "N0007",
    color: "rgb(217, 205, 190)",
    image: "/RGB/N0007/N0007-linen.jpg",
  },

  {
    text: "N0008",
    tissue: "wool",
    code: "N0008",
    color: "rgb(204, 192, 176)",
    image: "/RGB/N0008/N0008-wool.jpg",
  },
  {
    text: "N0008",
    tissue: "polyester",
    code: "N0008",
    color: "rgb(226, 220, 212)",
    image: "/RGB/N0008/N0008-polyester.jpg",
  },
  {
    text: "N0008",
    tissue: "cotton",
    code: "N0008",
    color: "rgb(220, 213, 205)",
    image: "/RGB/N0008/N0008-cotton.jpg",
  },
  {
    text: "N0008",
    tissue: "linen",
    code: "N0008",
    color: "rgb(218, 207, 192)",
    image: "/RGB/N0008/N0008-linen.jpg",
  },

  {
    text: "N0009",
    tissue: "polyamide",
    code: "N0009",
    color: "rgb(187, 173, 163)",
    image: "/RGB/N0009/N0009-polyamide.jpg",
  },
  {
    text: "N0009",
    tissue: "polyester",
    code: "N0009",
    color: "rgb(199, 192, 191)",
    image: "/RGB/N0009/N0009-polyester.jpg",
  },
  {
    text: "N0009",
    tissue: "wool",
    code: "N0009",
    color: "rgb(140, 124, 116)",
    image: "/RGB/N0009/N0009-wool.jpg",
  },
  {
    text: "N0009",
    tissue: "cotton",
    code: "N0009",
    color: "rgb(191, 186, 184)",
    image: "/RGB/N0009/N0009-cotton.jpg",
  },
  {
    text: "N0009",
    tissue: "linen",
    code: "N0009",
    color: "rgb(188, 181, 175)",
    image: "/RGB/N0009/N0009-linen.jpg",
  },

  {
    text: "N0010",
    tissue: "polyamide",
    code: "N0010",
    color: "rgb(229, 197, 193)",
    image: "/RGB/N0010/N0010-polyamide.jpg",
  },
  {
    text: "N0010",
    tissue: "polyester",
    code: "N0010",
    color: "rgb(238, 203, 205)",
    image: "/RGB/N0010/N0010-polyester.jpg",
  },
  {
    text: "N0010",
    tissue: "wool",
    code: "N0010",
    color: "rgb(211, 177, 159)",
    image: "/RGB/N0010/N0010-wool.jpg",
  },
  {
    text: "N0010",
    tissue: "cotton",
    code: "N0010",
    color: "rgb(215, 201, 194)",
    image: "/RGB/N0010/N0010-cotton.jpg",
  },
  {
    text: "N0010",
    tissue: "linen",
    code: "N0010",
    color: "rgb(208, 188, 178)",
    image: "/RGB/N0010/N0010-linen.jpg",
  },

  {
    text: "N0011",
    tissue: "wool",
    code: "N0011",
    color: "rgb(181, 177, 174)",
    image: "/RGB/N0011/N0011-wool.jpg",
  },
  {
    text: "N0011",
    tissue: "cotton",
    code: "N0011",
    color: "rgb(208, 207, 202)",
    image: "/RGB/N0011/N0011-cotton.jpg",
  },
  {
    text: "N0011",
    tissue: "linen",
    code: "N0011",
    color: "rgb(198, 196, 190)",
    image: "/RGB/N0011/N0011-linen.jpg",
  },

  {
    text: "N0012",
    tissue: "polyamide",
    code: "N0012",
    color: "rgb(225, 210, 200)",
    image: "/RGB/N0012/N0012-polyamide.jpg",
  },
  {
    text: "N0012",
    tissue: "wool",
    code: "N0012",
    color: "rgb(207, 187, 168)",
    image: "/RGB/N0012/N0012-wool.jpg",
  },
  {
    text: "N0012",
    tissue: "cotton",
    code: "N0012",
    color: "rgb(225, 216, 207)",
    image: "/RGB/N0012/N0012-cotton.jpg",
  },
  {
    text: "N0012",
    tissue: "linen",
    code: "N0012",
    color: "rgb(215, 202, 188)",
    image: "/RGB/N0012/N0012-linen.jpg",
  },

  {
    text: "N0013",
    tissue: "wool",
    code: "N0013",
    color: "rgb(197, 188, 179)",
    image: "/RGB/N0013/N0013-wool.jpg",
  },
  {
    text: "N0013",
    tissue: "cotton",
    code: "N0013",
    color: "rgb(222, 217, 212)",
    image: "/RGB/N0013/N0013-cotton.jpg",
  },
  {
    text: "N0013",
    tissue: "linen",
    code: "N0013",
    color: "rgb(210, 203, 191)",
    image: "/RGB/N0013/N0013-linen.jpg",
  },

  {
    text: "N0014",
    tissue: "polyamide",
    code: "N0014",
    color: "rgb(232, 193, 187)",
    image: "/RGB/N0014/N0014-polyamide.jpg",
  },
  {
    text: "N0014",
    tissue: "polyester",
    code: "N0014",
    color: "rgb(245, 206, 212)",
    image: "/RGB/N0014/N0014-polyester.jpg",
  },
  {
    text: "N0014",
    tissue: "wool",
    code: "N0014",
    color: "rgb(212, 181, 159)",
    image: "/RGB/N0014/N0014-wool.jpg",
  },
  {
    text: "N0014",
    tissue: "cotton",
    code: "N0014",
    color: "rgb(219, 204, 194)",
    image: "/RGB/N0014/N0014-cotton.jpg",
  },
  {
    text: "N0014",
    tissue: "linen",
    code: "N0014",
    color: "rgb(209, 188, 172)",
    image: "/RGB/N0014/N0014-linen.jpg",
  },

  {
    text: "N0015",
    tissue: "polyamide",
    code: "N0015",
    color: "rgb(219, 213, 209)",
    image: "/RGB/N0015/N0015-polyamide.jpg",
  },
  {
    text: "N0015",
    tissue: "wool",
    code: "N0015",
    color: "rgb(186, 181, 178)",
    image: "/RGB/N0015/N0015-wool.jpg",
  },
  {
    text: "N0015",
    tissue: "cotton",
    code: "N0015",
    color: "rgb(214, 211, 208)",
    image: "/RGB/N0015/N0015-cotton.jpg",
  },
  {
    text: "N0015",
    tissue: "linen",
    code: "N0015",
    color: "rgb(204, 201, 193)",
    image: "/RGB/N0015/N0015-linen.jpg",
  },

  {
    text: "N0016",
    tissue: "polyamide",
    code: "N0016",
    color: "rgb(213, 205, 197)",
    image: "/RGB/N0016/N0016-polyamide.jpg",
  },
  {
    text: "N0016",
    tissue: "wool",
    code: "N0016",
    color: "rgb(211, 199, 181)",
    image: "/RGB/N0016/N0016-wool.jpg",
  },
  {
    text: "N0016",
    tissue: "cotton",
    code: "N0016",
    color: "rgb(219, 211, 207)",
    image: "/RGB/N0016/N0016-cotton.jpg",
  },

  {
    text: "N0017",
    tissue: "polyamide",
    code: "N0017",
    color: "rgb(204, 188, 184)",
    image: "/RGB/N0017/N0017-polyamide.jpg",
  },
  {
    text: "N0017",
    tissue: "polyester",
    code: "N0017",
    color: "rgb(217, 206, 199)",
    image: "/RGB/N0017/N0017-polyester.jpg",
  },
  {
    text: "N0017",
    tissue: "wool",
    code: "N0017",
    color: "rgb(181, 158, 148)",
    image: "/RGB/N0017/N0017-wool.jpg",
  },
  {
    text: "N0017",
    tissue: "cotton",
    code: "N0017",
    color: "rgb(198, 186, 178)",
    image: "/RGB/N0017/N0017-cotton.jpg",
  },
  {
    text: "N0017",
    tissue: "linen",
    code: "N0017",
    color: "rgb(212, 197, 185)",
    image: "/RGB/N0017/N0017-linen.jpg",
  },

  {
    text: "N0018",
    tissue: "polyamide",
    code: "N0018",
    color: "rgb(192, 188, 192)",
    image: "/RGB/N0018/N0018-polyamide.jpg",
  },
  {
    text: "N0018",
    tissue: "polyester",
    code: "N0018",
    color: "rgb(201, 193, 203)",
    image: "/RGB/N0018/N0018-polyester.jpg",
  },
  {
    text: "N0018",
    tissue: "wool",
    code: "N0018",
    color: "rgb(139, 138, 145)",
    image: "/RGB/N0018/N0018-wool.jpg",
  },
  {
    text: "N0018",
    tissue: "cotton",
    code: "N0018",
    color: "rgb(175, 176, 180)",
    image: "/RGB/N0018/N0018-cotton.jpg",
  },
  {
    text: "N0018",
    tissue: "linen",
    code: "N0018",
    color: "rgb(166, 170, 174)",
    image: "/RGB/N0018/N0018-linen.jpg",
  },

  {
    text: "N0019",
    tissue: "polyamide",
    code: "N0019",
    color: "rgb(195, 188, 192)",
    image: "/RGB/N0019/N0019-polyamide.jpg",
  },
  {
    text: "N0019",
    tissue: "polyester",
    code: "N0019",
    color: "rgb(207, 199, 209)",
    image: "/RGB/N0019/N0019-polyester.jpg",
  },
  {
    text: "N0019",
    tissue: "wool",
    code: "N0019",
    color: "rgb(147, 143, 150)",
    image: "/RGB/N0019/N0019-wool.jpg",
  },
  {
    text: "N0019",
    tissue: "cotton",
    code: "N0019",
    color: "rgb(187, 186, 188)",
    image: "/RGB/N0019/N0019-cotton.jpg",
  },
  {
    text: "N0019",
    tissue: "linen",
    code: "N0019",
    color: "rgb(182, 183, 183)",
    image: "/RGB/N0019/N0019-linen.jpg",
  },

  {
    text: "N0020",
    tissue: "polyamide",
    code: "N0020",
    color: "rgb(206, 185, 189)",
    image: "/RGB/N0020/N0020-polyamide.jpg",
  },
  {
    text: "N0020",
    tissue: "wool",
    code: "N0020",
    color: "rgb(155, 146, 152)",
    image: "/RGB/N0020/N0020-wool.jpg",
  },
  {
    text: "N0020",
    tissue: "cotton",
    code: "N0020",
    color: "rgb(190, 187, 188)",
    image: "/RGB/N0020/N0020-cotton.jpg",
  },
  {
    text: "N0020",
    tissue: "linen",
    code: "N0020",
    color: "rgb(187, 185, 185)",
    image: "/RGB/N0020/N0020-linen.jpg",
  },
  {
    text: "N0020",
    tissue: "polyester",
    code: "N0020",
    color: "rgb(213, 187, 201)",
    image: "/RGB/N0020/N0020-polyester.jpg",
  },

  {
    text: "N0021",
    tissue: "polyamide",
    code: "N0021",
    color: "rgb(188, 184, 154)",
    image: "/RGB/N0021/N0021-polyamide.jpg",
  },
  {
    text: "N0021",
    tissue: "wool",
    code: "N0021",
    color: "rgb(177, 169, 138)",
    image: "/RGB/N0021/N0021-wool.jpg",
  },
  {
    text: "N0021",
    tissue: "cotton",
    code: "N0021",
    color: "rgb(199, 191, 168)",
    image: "/RGB/N0021/N0021-cotton.jpg",
  },
  {
    text: "N0021",
    tissue: "linen",
    code: "N0021",
    color: "rgb(196, 188, 163)",
    image: "/RGB/N0021/N0021-linen.jpg",
  },

  {
    text: "N0022",
    tissue: "polyamide",
    code: "N0022",
    color: "rgb(172, 167, 150)",
    image: "/RGB/N0022/N0022-polyamide.jpg",
  },
  {
    text: "N0022",
    tissue: "wool",
    code: "N0022",
    color: "rgb(168, 160, 137)",
    image: "/RGB/N0022/N0022-wool.jpg",
  },
  {
    text: "N0022",
    tissue: "cotton",
    code: "N0022",
    color: "rgb(189, 185, 169)",
    image: "/RGB/N0022/N0022-cotton.jpg",
  },
  {
    text: "N0022",
    tissue: "linen",
    code: "N0022",
    color: "rgb(178, 171, 157)",
    image: "/RGB/N0022/N0022-linen.jpg",
  },

  {
    text: "N0023",
    tissue: "polyamide",
    code: "N0023",
    color: "rgb(157, 160, 149)",
    image: "/RGB/N0023/N0023-polyamide.jpg",
  },
  {
    text: "N0023",
    tissue: "wool",
    code: "N0023",
    color: "rgb(143, 144, 129)",
    image: "/RGB/N0023/N0023-wool.jpg",
  },
  {
    text: "N0023",
    tissue: "cotton",
    code: "N0023",
    color: "rgb(174, 178, 168)",
    image: "/RGB/N0023/N0023-cotton.jpg",
  },
  {
    text: "N0023",
    tissue: "linen",
    code: "N0023",
    color: "rgb(162, 166, 154)",
    image: "/RGB/N0023/N0023-linen.jpg",
  },

  {
    text: "N0024",
    tissue: "polyamide",
    code: "N0024",
    color: "rgb(144, 143, 136)",
    image: "/RGB/N0024/N0024-polyamide.jpg",
  },
  {
    text: "N0024",
    tissue: "polyester",
    code: "N0024",
    color: "rgb(156, 155, 153)",
    image: "/RGB/N0024/N0024-polyester.jpg",
  },
  {
    text: "N0024",
    tissue: "wool",
    code: "N0024",
    color: "rgb(125, 126, 118)",
    image: "/RGB/N0024/N0024-wool.jpg",
  },
  {
    text: "N0024",
    tissue: "cotton",
    code: "N0024",
    color: "rgb(156, 156, 156)",
    image: "/RGB/N0024/N0024-cotton.jpg",
  },
  {
    text: "N0024",
    tissue: "linen",
    code: "N0024",
    color: "rgb(157, 154, 153)",
    image: "/RGB/N0024/N0024-linen.jpg",
  },

  {
    text: "N0025",
    tissue: "polyamide",
    code: "N0025",
    color: "rgb(180, 180, 175)",
    image: "/RGB/N0025/N0025-polyamide.jpg",
  },
  {
    text: "N0025",
    tissue: "polyester",
    code: "N0025",
    color: "rgb(194, 193, 190)",
    image: "/RGB/N0025/N0025-polyester.jpg",
  },
  {
    text: "N0025",
    tissue: "wool",
    code: "N0025",
    color: "rgb(169, 164, 158)",
    image: "/RGB/N0025/N0025-wool.jpg",
  },
  {
    text: "N0025",
    tissue: "cotton",
    code: "N0025",
    color: "rgb(197, 193, 190)",
    image: "/RGB/N0025/N0025-cotton.jpg",
  },
  {
    text: "N0025",
    tissue: "linen",
    code: "N0025",
    color: "rgb(196, 191, 183)",
    image: "/RGB/N0025/N0025-linen.jpg",
  },

  {
    text: "N0026",
    tissue: "polyamide",
    code: "N0026",
    color: "rgb(167, 170, 160)",
    image: "/RGB/N0026/N0026-polyamide.jpg",
  },
  {
    text: "N0026",
    tissue: "wool",
    code: "N0026",
    color: "rgb(153, 154, 139)",
    image: "/RGB/N0026/N0026-wool.jpg",
  },
  {
    text: "N0026",
    tissue: "cotton",
    code: "N0026",
    color: "rgb(181, 184, 176)",
    image: "/RGB/N0026/N0026-cotton.jpg",
  },
  {
    text: "N0026",
    tissue: "linen",
    code: "N0026",
    color: "rgb(173, 176, 164)",
    image: "/RGB/N0026/N0026-linen.jpg",
  },

  {
    text: "N0028",
    tissue: "polyamide",
    code: "N0028",
    color: "rgb(198, 193, 191)",
    image: "/RGB/N0028/N0028-polyamide.jpg",
  },
  {
    text: "N0028",
    tissue: "polyester",
    code: "N0028",
    color: "rgb(209, 206, 203)",
    image: "/RGB/N0028/N0028-polyester.jpg",
  },
  {
    text: "N0028",
    tissue: "wool",
    code: "N0028",
    color: "rgb(176, 168, 166)",
    image: "/RGB/N0028/N0028-wool.jpg",
  },
  {
    text: "N0028",
    tissue: "cotton",
    code: "N0028",
    color: "rgb(205, 201, 198)",
    image: "/RGB/N0028/N0028-cotton.jpg",
  },
  {
    text: "N0028",
    tissue: "linen",
    code: "N0028",
    color: "rgb(203, 196, 189)",
    image: "/RGB/N0028/N0028-linen.jpg",
  },

  {
    text: "N0029",
    tissue: "polyamide",
    code: "N0029",
    color: "rgb(177, 166, 162)",
    image: "/RGB/N0029/N0029-polyamide.jpg",
  },
  {
    text: "N0029",
    tissue: "polyester",
    code: "N0029",
    color: "rgb(189, 181, 181)",
    image: "/RGB/N0029/N0029-polyester.jpg",
  },
  {
    text: "N0029",
    tissue: "wool",
    code: "N0029",
    color: "rgb(150, 137, 131)",
    image: "/RGB/N0029/N0029-wool.jpg",
  },
  {
    text: "N0029",
    tissue: "cotton",
    code: "N0029",
    color: "rgb(186, 178, 176)",
    image: "/RGB/N0029/N0029-cotton.jpg",
  },
  {
    text: "N0029",
    tissue: "linen",
    code: "N0029",
    color: "rgb(184, 173, 168)",
    image: "/RGB/N0029/N0029-linen.jpg",
  },

  {
    text: "N0030",
    tissue: "polyamide",
    code: "N0030",
    color: "rgb(169, 159, 160)",
    image: "/RGB/N0030/N0030-polyamide.jpg",
  },
  {
    text: "N0030",
    tissue: "wool",
    code: "N0030",
    color: "rgb(154, 140, 142)",
    image: "/RGB/N0030/N0030-wool.jpg",
  },
  {
    text: "N0030",
    tissue: "cotton",
    code: "N0030",
    color: "rgb(173, 168, 169)",
    image: "/RGB/N0030/N0030-cotton.jpg",
  },
  {
    text: "N0030",
    tissue: "linen",
    code: "N0030",
    color: "rgb(172, 163, 162)",
    image: "/RGB/N0030/N0030-linen.jpg",
  },

  {
    text: "N0031",
    tissue: "linen",
    code: "N0030",
    color: "rgb(172, 163, 162)",
    image: "/RGB/N0030/N0030-linen.jpg",
  },

  {
    text: "N0036",
    tissue: "linen",
    code: "N0036",
    color: "rgb(171, 170, 165)",
    image: "/RGB/N0036/N0036-linen.jpg",
  },

  {
    text: "N0037",
    tissue: "polyamide",
    code: "N0037",
    color: "rgb(157, 157, 153)",
    image: "/RGB/N0037/N0037-polyamide.jpg",
  },
  {
    text: "N0037",
    tissue: "polyester",
    code: "N0037",
    color: "rgb(169, 170, 167)",
    image: "/RGB/N0037/N0037-polyester.jpg",
  },
  {
    text: "N0037",
    tissue: "wool",
    code: "N0037",
    color: "rgb(129, 129, 124)",
    image: "/RGB/N0037/N0037-wool.jpg",
  },
  {
    text: "N0037",
    tissue: "cotton",
    code: "N0037",
    color: "rgb(159, 157, 156)",
    image: "/RGB/N0037/N0037-cotton.jpg",
  },
  {
    text: "N0037",
    tissue: "linen",
    code: "N0037",
    color: "rgb(153, 151, 148)",
    image: "/RGB/N0037/N0037-linen.jpg",
  },

  {
    text: "N0038",
    tissue: "polyamide",
    code: "N0038",
    color: "rgb(130, 130, 125)",
    image: "/RGB/N0038/N0038-polyamide.jpg",
  },
  {
    text: "N0038",
    tissue: "wool",
    code: "N0038",
    color: "rgb(105, 106, 103)",
    image: "/RGB/N0038/N0038-wool.jpg",
  },
  {
    text: "N0038",
    tissue: "cotton",
    code: "N0038",
    color: "rgb(135, 137, 134)",
    image: "/RGB/N0038/N0038-cotton.jpg",
  },
  {
    text: "N0038",
    tissue: "linen",
    code: "N0038",
    color: "rgb(127, 129, 125)",
    image: "/RGB/N0038/N0038-linen.jpg",
  },

  {
    text: "N0039",
    tissue: "polyamide",
    code: "N0039",
    color: "rgb(111, 109, 106)",
    image: "/RGB/N0039/N0039-polyamide.jpg",
  },
  {
    text: "N0039",
    tissue: "wool",
    code: "N0039",
    color: "rgb(87, 86, 81)",
    image: "/RGB/N0039/N0039-wool.jpg",
  },
  {
    text: "N0039",
    tissue: "cotton",
    code: "N0039",
    color: "rgb(116, 115, 113)",
    image: "/RGB/N0039/N0039-cotton.jpg",
  },
  {
    text: "N0039",
    tissue: "linen",
    code: "N0039",
    color: "rgb(109, 107, 105)",
    image: "/RGB/N0039/N0039-linen.jpg",
  },

  {
    text: "N0040",
    tissue: "polyamide",
    code: "N0040",
    color: "rgb(134, 130, 124)",
    image: "/RGB/N0040/N0040-polyamide.jpg",
  },
  {
    text: "N0040",
    tissue: "polyester",
    code: "N0040",
    color: "rgb(141, 137, 131)",
    image: "/RGB/N0040/N0040-polyester.jpg",
  },
  {
    text: "N0040",
    tissue: "wool",
    code: "N0040",
    color: "rgb(109, 105, 96)",
    image: "/RGB/N0040/N0040-wool.jpg",
  },
  {
    text: "N0040",
    tissue: "cotton",
    code: "N0040",
    color: "rgb(137, 131, 123)",
    image: "/RGB/N0040/N0040-cotton.jpg",
  },
  {
    text: "N0040",
    tissue: "linen",
    code: "N0040",
    color: "rgb(136, 128, 121)",
    image: "/RGB/N0040/N0040-linen.jpg",
  },

  {
    text: "N0041",
    tissue: "polyamide",
    code: "N0041",
    color: "rgb(147, 142, 135)",
    image: "/RGB/N0041/N0041-polyamide.jpg",
  },
  {
    text: "N0041",
    tissue: "polyester",
    code: "N0041",
    color: "rgb(154, 147, 139)",
    image: "/RGB/N0041/N0041-polyester.jpg",
  },
  {
    text: "N0041",
    tissue: "wool",
    code: "N0041",
    color: "rgb(122, 117, 108)",
    image: "/RGB/N0041/N0041-wool.jpg",
  },
  {
    text: "N0041",
    tissue: "cotton",
    code: "N0041",
    color: "rgb(148, 140, 130)",
    image: "/RGB/N0041/N0041-cotton.jpg",
  },
  {
    text: "N0041",
    tissue: "linen",
    code: "N0041",
    color: "rgb(146, 136, 128)",
    image: "/RGB/N0041/N0041-linen.jpg",
  },

  {
    text: "N0042",
    tissue: "polyamide",
    code: "N0042",
    color: "rgb(157, 152, 143)",
    image: "/RGB/N0042/N0042-polyamide.jpg",
  },
  {
    text: "N0042",
    tissue: "wool",
    code: "N0042",
    color: "rgb(130, 124, 113)",
    image: "/RGB/N0042/N0042-wool.jpg",
  },
  {
    text: "N0042",
    tissue: "cotton",
    code: "N0042",
    color: "rgb(158, 154, 144)",
    image: "/RGB/N0042/N0042-cotton.jpg",
  },
  {
    text: "N0042",
    tissue: "linen",
    code: "N0042",
    color: "rgb(155, 149, 137)",
    image: "/RGB/N0042/N0042-linen.jpg",
  },

  {
    text: "N0043",
    tissue: "polyamide",
    code: "N0043",
    color: "rgb(183, 176, 164)",
    image: "/RGB/N0043/N0043-polyamide.jpg",
  },
  {
    text: "N0043",
    tissue: "polyester",
    code: "N0043",
    color: "rgb(195, 186, 174)",
    image: "/RGB/N0043/N0043-polyester.jpg",
  },
  {
    text: "N0043",
    tissue: "wool",
    code: "N0043",
    color: "rgb(157, 147, 132)",
    image: "/RGB/N0043/N0043-wool.jpg",
  },
  {
    text: "N0043",
    tissue: "cotton",
    code: "N0043",
    color: "rgb(187, 179, 166)",
    image: "/RGB/N0043/N0043-cotton.jpg",
  },
  {
    text: "N0043",
    tissue: "linen",
    code: "N0043",
    color: "rgb(186, 174, 161)",
    image: "/RGB/N0043/N0043-linen.jpg",
  },

  {
    text: "N0044",
    tissue: "polyamide",
    code: "N0044",
    color: "rgb(184, 172, 158)",
    image: "/RGB/N0044/N0044-polyamide.jpg",
  },
  {
    text: "N0044",
    tissue: "polyester",
    code: "N0044",
    color: "rgb(200, 189, 179)",
    image: "/RGB/N0044/N0044-polyester.jpg",
  },
  {
    text: "N0044",
    tissue: "wool",
    code: "N0044",
    color: "rgb(164, 151, 135)",
    image: "/RGB/N0044/N0044-wool.jpg",
  },
  {
    text: "N0044",
    tissue: "cotton",
    code: "N0044",
    color: "rgb(186, 176, 165)",
    image: "/RGB/N0044/N0044-cotton.jpg",
  },
  {
    text: "N0044",
    tissue: "linen",
    code: "N0044",
    color: "rgb(185, 172, 157)",
    image: "/RGB/N0044/N0044-linen.jpg",
  },

  {
    text: "N0045",
    tissue: "polyamide",
    code: "N0045",
    color: "rgb(173, 157, 138)",
    image: "/RGB/N0045/N0045-polyamide.jpg",
  },
  {
    text: "N0045",
    tissue: "polyester",
    code: "N0045",
    color: "rgb(192, 178, 163)",
    image: "/RGB/N0045/N0045-polyester.jpg",
  },
  {
    text: "N0045",
    tissue: "wool",
    code: "N0045",
    color: "rgb(157, 141, 120)",
    image: "/RGB/N0045/N0045-wool.jpg",
  },
  {
    text: "N0045",
    tissue: "cotton",
    code: "N0045",
    color: "rgb(181, 167, 155)",
    image: "/RGB/N0045/N0045-cotton.jpg",
  },
  {
    text: "N0045",
    tissue: "linen",
    code: "N0045",
    color: "rgb(179, 161, 145)",
    image: "/RGB/N0045/N0045-linen.jpg",
  },

  {
    text: "N0046",
    tissue: "polyamide",
    code: "N0046",
    color: "rgb(152, 147, 137)",
    image: "/RGB/N0046/N0046-polyamide.jpg",
  },
  {
    text: "N0046",
    tissue: "polyester",
    code: "N0046",
    color: "rgb(170, 165, 154)",
    image: "/RGB/N0046/N0046-polyester.jpg",
  },
  {
    text: "N0046",
    tissue: "wool",
    code: "N0046",
    color: "rgb(126, 119, 108)",
    image: "/RGB/N0046/N0046-wool.jpg",
  },
  {
    text: "N0046",
    tissue: "cotton",
    code: "N0046",
    color: "rgb(152, 148, 140)",
    image: "/RGB/N0046/N0046-cotton.jpg",
  },
  {
    text: "N0046",
    tissue: "linen",
    code: "N0046",
    color: "rgb(149, 144, 130)",
    image: "/RGB/N0046/N0046-linen.jpg",
  },
];

const tissues = [
  {
    text: "Cotton",
    code: "cotton",
  },
  {
    text: "Linen",
    code: "linen",
  },
  {
    text: "Polyamide",
    code: "polyamide",
  },
  {
    text: "Polyester",
    code: "polyester",
  },
  {
    text: "Wool",
    code: "wool",
  },
];
