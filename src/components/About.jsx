import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-xl font-bold inline border-b-4 border-gray-500">
            Habilidades
          </p>
        </div>

        <ul className="text-xl mt-5">
          <li>Pensamiento crítico.</li>
          <li>Motivación e inspiración.</li>
          <li>Resolución de problemas.</li>
        </ul>

        <br />

        <div className="pb-8 text-end">
          <p className="text-xl font-bold inline border-b-4 border-gray-500">
            Objetivos
          </p>
        </div>

        <ul className="text-xl text-end">
          <li>
            Ser referencia en el área de desarrollo de aplicaciónes web/moviles
          </li>
        </ul>

        <div className="pb-8">
          <p className="text-xl font-bold inline border-b-4 border-gray-500">
            Intereses
          </p>
        </div>

        <ul className="text-xl mt-5">
          <li>Crecimiento personal.</li>
          <li>Música.</li>
          <li>Tecnologías.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
