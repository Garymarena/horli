import React from "react";
import alpha from "../assets/portfolio/alpha.png";
import spot from "../assets/portfolio/spot.png";
import arena from "../assets/portfolio/arena.png";
import byswitch from "../assets/portfolio/byswitch.png";
import fox from "../assets/portfolio/fox.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: alpha,
    },
    {
      id: 2,
      src: spot,
    },
    {
      id: 3,
      src: arena,
    },
    {
      id: 4,
      src: byswitch,
    },
    {
      id: 5,
      src: fox,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-xl font-bold inline border-b-4 border-gray-500">
            Qué referencias puedes darme?
          </h2>
          <p className="py-6 text">
            Empresarios que deseen una aplicación para su negocio, cualquier
            persona que quiera una tienda en línea, empresas que quieran
            auomatizar procesos en su negocio, personas que necesiten una
            aplicación personal para su negocio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
