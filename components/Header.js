/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <div className="grotesk mb-16 flex items-center justify-between py-0 sm:mx-0 sm:mb-20 sm:px-0 md:px-6 z-20 fixed w-full
      backdrop-filter backdrop-blur-sm border-b border-gray-600
      ">
        <div className="flex justify-items-center items-center py-4 pl-8">
          <a href="/" className="align-middle text-3xl font-bold text-black">
            <img
              src="/images/logo.png"
              alt="Segment"
              className="h-10 md:h-12"
            />
          </a>
          <div className={`
          pl-5 align-middle xl:inline-block text-gray-400
          flex
          flex-col
          text-right
          absolute
          right-0
          top-0
          pt-28
          gap-8
          bg-black
          h-screen
          bg-opacity-90
          z-5
          xl:h-fit
          xl:relative
          xl:pt-0
          xl:bg-transparent
          xl:ml-3
          ${!menu && "hidden"}
          `}
          >
            <Link activeClass="text-white" className="pr-5 md:pr-12 text-xl hover:text-white cursor-pointer"
              to="inicio"
              spy={true} smooth duration={500}
              spyThrottle={500}>
              Inicio
            </Link>
            <Link activeClass="text-white" className="pr-5 md:pr-12 text-xl hover:text-white cursor-pointer"
              to="patrocinadores"
              spy smooth duration={500}
              offset={-50}>
              Patrocinadores
            </Link>
            <Link activeClass="text-white" className="pr-5 md:pr-12 text-xl hover:text-white" to="invitados"
              spy smooth duration={500}
            >
              Invitados
            </Link>
            <Link activeClass="text-white" className="pr-5 md:pr-12 text-xl hover:text-white cursor-pointer"
              to="detalles"
              spy smooth duration={500} >
              Detalles
            </Link>

            <Link activeClass="text-white" className="pr-5 md:pr-12 text-xl hover:text-white cursor-pointer"
              to="actividades"
              spy smooth duration={500} >
              Actividades
            </Link>
            <Link activeClass="text-white" className="pr-5 md:pr-12 text-xl hover:text-white cursor-pointer"
              to="ubicacion"
              spy={true} smooth={true} duration={500} >
              Ubicacion
            </Link>

          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden py-1 text-right xl:inline-block">
            <a
              className="bg-pink-600 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              Pre-registrarse
            </a>
          </div>
          <button className="pr-12 pl-4" onClick={handleMenu}>
            <svg
              fill="#ffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              width="30px" height="30px" viewBox="0 0 24.75 24.75"
              className="mr-auto inline-block text-white xl:hidden z-50 absolute
              top-5 right-10"
            >
              <g>
                {
                  menu ? <>
                    <path d="M3 21.32L21 3.32001" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 3.32001L21 21.32" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </>
                    :
                    <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
		c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
		c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"/>
                }


              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
