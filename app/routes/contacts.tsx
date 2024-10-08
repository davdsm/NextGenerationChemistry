import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contacts - Next Generation Chemistry" },
    {
      name: "description",
      content: "Next Generation Chemistry contacts page.",
    },
  ];
};

/* eslint-disable react/no-unescaped-entities */
export default function Contacts() {
  const [message, setMessage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("https://api.davdsm.pt/sendMail", {
      method: "POST",
      body: JSON.stringify({
        sender: "🧪 Next Generation Chemistry",
        receiver: {
          email: "hello@ngc.bio",
          name: "Administrador",
        },
        subject: "🔔 Email do website!",
        message: `<h3>Olá!</h3><br><p>Foi enviada uma nova mensagem:</p><p><b>Name: </b>${event.target[0].value}</p><p><b>Email: </b>${event.target[1].value}</p><p><b>Phone Number: </b>${event.target[2].value}</p><p><b>Message: </b>${event.target[3].value}</p>`,
      }),
      headers: {
        "Content-type": "application/json",
        davdsmKey: "d41d8cd98f00b204e9800998ecf8427e",
      },
    });

    if (response.status === 200) {
      setMessage("Your message has been sent!");
      event.target.reset();
    } else {
      setMessage("Something went wrong! Please try again in a few minutes.");
    }
  };

  return (
    <section className="py-32 lg:py-44 container mx-auto px-6">
      <div className="mb-20 lg:mb-32 flex lg:items-center justify-between flex-col lg:flex-row gap-8">
        <div>
          <h2 className="text-5xl font-bold font-jakarta" data-aos="fade-up">
            Get in touch with us.
            <br />
            We're here to assist you.
          </h2>
        </div>

        <div className="flex lg:flex-col gap-2">
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
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1" data-aos="fade-up">
            <label className="block text-lg font-inter" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-b border-[#CACACA] focus:border-gray-500 outline-none py-1"
              required
            />
          </div>

          <div className="flex-1" data-aos="fade-up">
            <label className="block text-lg font-inter" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-[#CACACA] focus:border-gray-500 outline-none py-1"
              required
            />
          </div>

          <div className="flex-1" data-aos="fade-up">
            <label className="block text-lg font-inter" htmlFor="phone">
              Phone Number (optional)
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border-b border-[#CACACA] focus:border-gray-500 outline-none py-1"
            />
          </div>
        </div>

        <div className="space-y-2" data-aos="fade-up">
          <label className="block text-lg font-inter" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border-b border-[#CACACA] focus:border-gray-500 outline-none py-1"
            rows={4}
            required
          ></textarea>
        </div>

        <div className="text-center" data-aos="fade-up">
          <button
            type="submit"
            className="mx-auto lg:mx-0 bg-gradient-main buttonHoverIconAnimation  text-white px-[32px] py-[25px] rounded-full flex items-center justify-center"
          >
            Leave us a Message
            <img
              src="/icons/small-arrow-right.svg"
              alt="Know more"
              className="ml-5 font-inter font-semibold text-xl"
            />
          </button>
        </div>

        {message && (
          <h3 className="mt-6 font-bold" data-aos="fade-up">
            {message}
          </h3>
        )}
      </form>
    </section>
  );
}
