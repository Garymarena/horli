// import main image
import hero2 from "./assets/hero.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Gary",
    LastName: "ARELLANO",
    btnText: "Hire Me",
    image: hero2,
    hero_content: [
      {
        count: "5+",
        text: "Años en experiencia de desarrollo web",
      },
      {
        count: "20+",
        text: "Projectos trabajados en mi carrera",
      },
    ],
  },
  skills: {
    title: "HORLI",
    skills_content: [
      {
        name: "Habilidades",
      },
      {
        name: "Objetivos",
      },
      {
        name: "Redes",
      },
      {
        name: "Logros",
      },
      {
        name: "Intereses",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "CONECTOR PERFECTO",
    service_content: [
      {
        title: "Empresarios",
        para: "Buscamos a todo aquel empresario que deseé implementar una aplicación para automatizar sus servicos.",
      },
      {
        title: "Agencias",
        para: "Todo tipo de agencías que quieran un sistema personalizado para manejo de ventas, control de sus usuarios, campañas de mail y marketing en un mismo lugar.",
      },
      {
        title: "Startups",
        para: "Qué requieran de un equipó de desarrollo para crear su aplicación y llevarla a todos sus usuarios.",
      },
    ],
  },
  /*   Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  }, */
  /*   Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  }, */
  /*   Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  }, */
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
