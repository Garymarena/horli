import React from "react";
import HeroImage from "../assets/heroimage.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Tengo 5 años de experiencia como desarrollador web, enfocado en
            desarrollo front end con Reactjs. Actualmente trabajo en Foxlabs
            developer, como programador web y jefe de producto. Mis actividades
            son atender a nuestros clientes, ayudarlos a aterrizar su idea,
            cotizar y llevar todo el proceso de desarollo, a la par de programar
            componentes.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
