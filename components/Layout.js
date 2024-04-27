/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import Countdown from "react-countdown";
import Image from 'next/image'
import { Element } from "react-scroll";
import patrocinadores from "../utils/patrocinadores";

export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <div className="w-full text-black">
        <section className="z-10 absolute left-0 flex w-full flex-col items-center h-[calc(100%_+_3rem)] justify-center top-9 md:top-0">
          <article className="relative">
            <div className="w-80 md:w-96 h-11 bg-yellow-400 -skew-x-12"></div>
            <p
              className="absolute top-1/2 left-1/2 text-sm md:text-lg -translate-x-1/2 -translate-y-1/2 text-black font-bold w-full text-center"
            >7 Y 8 DE MAYO, 2024 <span className="border border-black border-solid mx-3"></span> PRESENCIAL</p>
          </article>
          <article className="text-white 
          text-3xl md:text-6xl px-10 md:px-0 mx-auto w-full my-10 md:my-14 font-bold Poppins 
          flex flex-col md:flex-row items-center justify-center">
            <div className="h-32 w-32 mb-4 md:h-32 md:w-32 lg:h-44 lg:w-44 relative">
              <Image
                src={"/images/logo.png"}
                alt="Logo Simposio"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full" // just an example
              />
            </div>
            <h1 className="lg:w-3/4 xl:w-1/2 md:text-3xl lg:text-6xl text-center md:text-left md:w-1/2 md:ml-5">XIII Simposio de Ingeniería en Sistemas Computacionales</h1>
          </article>

          <Countdown
            date={"2024-05-08T09:00:00"}
            renderer={props => (
              <article className="flex flex-wrap justify-center gap-3 md:gap-8 w-full md:w-3/4 mx-auto ">
                <div className="bg-black bg-opacity-30 w-20 h-20 md:w-32 md:h-28 flex flex-col justify-center items-center text-lg text-cyan-300">
                  <span className="text-3xl md:text-5xl font-bold">{props.days}</span>
                  <p className="text-xs">DIAS</p>
                </div>
                <div className="bg-black bg-opacity-30   w-20 h-20 md:w-32 md:h-28 flex flex-col justify-center items-center text-lg text-cyan-300">
                  <span className="text-3xl md:text-5xl font-bold">{props.hours}</span>
                  <p className="text-xs">HORAS</p>
                </div>
                <div className="bg-black bg-opacity-30   w-20 h-20 md:w-32 md:h-28 flex flex-col justify-center items-center text-lg text-cyan-300">
                  <span className="text-3xl md:text-5xl font-bold">{props.minutes}</span>
                  <p className="text-xs">MINUTOS</p>
                </div>
                <div className="bg-black bg-opacity-30   w-20 h-20 md:w-32 md:h-28 flex flex-col justify-center items-center text-lg text-cyan-300">
                  <span className="text-3xl md:text-5xl font-bold">{props.seconds}</span>
                  <p className="text-xs">SEGUNDOS</p>
                </div>
              </article>

            )}
          />

          <div className="flex gap-6 md:gap-10 mt-6 md:mt-24 flex-col md:flex-row">
            <button className="registerBtn bg-pink-600 rounded-lg h-12 md:h-16 px-8 text-white font-bold cursor-pointer text-lg">
              <p>REGISTRARSE AHORA</p>
            </button>

            <button className="sponsorBtn inline-flex h-12 md:h-16 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <p className="px-10 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full h-full flex justify-center items-center">SER PATROCINADOR</p>
            </button>
          </div>

        </section>

        <Element name="inicio">
          <section className="flex justify-center h-screen">
          </section>
        </Element>

        <div>
          <Element name="patrocinadores">
            <div className="mx-auto">
              <div className="mx-auto px-5 py-24 lg:px-24">
                <div className="flex w-full flex-col text-center">
                  <h2 className="mb-5 text-2xl font-bold text-white lg:text-3xl">
                    Nuestros patrocinadores oficiales
                  </h2>
                </div>
                <div
                  className="
                grid grid-cols-2
                gap-16
                text-center
                lg:grid-cols-6"
                >
                  {
                    patrocinadores.map(item => (

                      <div className="items-center justify-center" key={item.nombre}>
                        <a href={item.link} target="_blank">
                          <img
                            src={item.logo}
                            alt="Segment"
                            className="block h-24 object-contain"
                          />
                        </a>

                      </div>

                    ))
                  }

                </div>
              </div>
            </div>
          </Element>

          <Element name="invitados">
            <div className="text-white">
              <div
                className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
              pt-24
            "
              >
                <div className="mr-0 mb-6 w-full py-4 text-center">
                  <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                    Invitados
                  </h2>
                  <p className="mb-4 text-lg leading-relaxed">
                    Conoce a nuestros invitados confirmados
                  </p>

                  <div
                    className="
                grid grid-cols-1
                gap-16
                text-center
                md:grid-cols-2
                lg:grid-cols-3"
                  >
                    <div className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
                      <img
                        className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[0px_0px_0_0_rgba(0,0,0,1)]
                   shadow-indigo-600/100 bg-indigo-50 text-indigo-600 !h-48 !w-48"
                        src="/images/invitados/merari.jpg"
                        alt="" />
                      <h2 className="text-2xl text-gray-200 font-bold mt-2">
                        Merari May Sosa
                      </h2>
                      <h2 className="text-base md:text-xl text-gray-400 font-bold">
                        Ing. Sistemas Computacionales @
                        <a href="https://beacons.ai/merrm.s" target="_blank"
                          className="text-indigo-400 hover:text-indigo-200 font-bold border-b-0
                        hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2" rel="noreferrer">
                          merrm.s
                        </a>
                      </h2>
                      <ul className="flex flex-row mt-2">
                        <li className="mx-2">
                          <a href="https://www.instagram.com/merrm.s" target="_blank" aria-label="Instagram">
                            <svg className="h-8 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <title>Instagram</title>
                              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                            </svg> </a>
                        </li>
                        <li className="mx-2">
                          <a href="https://www.tiktok.com/@merrm.s" target="_blank" aria-label="TikTok">
                            <svg className="h-8 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 50 50"
                              xmlns="http://www.w3.org/2000/svg">
                              <title>Tiktok</title>
                              <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                            </svg> </a>
                        </li>

                        <li className="mx-2">
                          <a href="https://www.youtube.com/@merrm.s" target="_blank" aria-label="Youtube">
                            <svg className="h-8 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 30 30"
                              xmlns="http://www.w3.org/2000/svg">
                              <title>Youtube</title>
                              <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                            </svg> </a>
                        </li>

                      </ul>
                    </div>

                    <div className="px-2 py-4 mt-10 flex flex-col justify-center items-center text-center">
                      <img
                        className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[0px_0px_0_0_rgba(0,0,0,1)]
                   shadow-indigo-600/100 bg-indigo-50 text-indigo-600 !h-48 !w-48"
                        src="/images/invitados/elisa.jpg"
                        alt="" />
                      <h2 className="text-2xl text-gray-200 font-bold mt-2">
                        Elisa Yanneth Rentería Elías
                      </h2>
                      <h2 className="text-base md:text-xl text-gray-400 font-bold">
                        Estudiante Ingenieria en Computación @
                        <a href="https://beacons.ai/elisaelias" target="_blank"
                          className="text-indigo-400 hover:text-indigo-200 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2" rel="noreferrer">
                          elisaelias
                        </a>
                      </h2>
                      <ul className="flex flex-row mt-2">
                        <li className="mx-2">
                          <a href="https://instagram.com/elisa_elias__" target="_blank" aria-label="Instagram">
                            <svg className="h-8 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <title>Instagram</title>
                              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                            </svg> </a>
                        </li>
                        <li className="mx-2">
                          <a href="https://www.tiktok.com/@elisa_elias_" target="_blank" aria-label="Tiktok">
                            <svg className="h-8 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 50 50"
                              xmlns="http://www.w3.org/2000/svg">
                              <title>Tiktok</title>
                              <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                            </svg> </a>
                        </li>


                        <li className="mx-2">
                          <a href="https://www.linkedin.com/in/elisa-elias-0a7829268/" target="_blank" aria-label="LinkedIn">
                            <svg className="h-8 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <title>LinkedIn</title>
                              <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                              </path>
                            </svg> </a>
                        </li>

                      </ul>
                    </div>

                    <div className="px-2 py-4 mt-10 flex flex-col justify-center items-center text-center">
                      <img
                        className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[0px_0px_0_0_rgba(0,0,0,1)]
                   shadow-indigo-600/100 bg-indigo-50 text-indigo-600 !h-48 !w-48"
                        src="/images/invitados/cheang.jpg"
                        alt="" />
                      <h2 className="text-2xl text-gray-200 font-bold mt-2">
                        Dr. Guillermo Cheang León
                      </h2>
                      <h2 className="text-base md:text-xl text-gray-400 font-bold">
                        Profesor @
                        <a href="https://www.linkedin.com/in/gcheang/" target="_blank"
                          className="text-indigo-400 hover:text-indigo-200 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2" rel="noreferrer">
                          gcheang
                        </a>
                      </h2>
                      <ul className="flex flex-row mt-2">

                        <li className="mx-2">
                          <a href="https://www.linkedin.com/in/guillermo-cheang-84a3639" target="_blank" aria-label="LinkedIn">
                            <svg className="h-8 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <title>LinkedIn</title>
                              <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                              </path>
                            </svg> </a>
                        </li>

                      </ul>
                    </div>

                  </div>

                </div>
                <img
                  className="
                lg:w-5/7
                my-24
                wfull
                rounded object-cover
                object-center
                lg:inline-block 
                lg:w-4/6
              "
                  src="/images/flayer.png"
                  alt="img"
                />
              </div>
            </div>
          </Element>

        </div>

        <Element name="detalles" className="text-white">
          <div className="mx-auto px-5 pt-10 pb-12 lg:px-24">

            <div className="my-3 flex w-full flex-col text-left lg:text-center">
              <h2 className="bold mb-8 text-4xl font-bold leading-tight text-white lg:text-6xl">
                ¿Por qué asistir?
              </h2>
            </div>
            <div className="flex w-full flex-col text-left lg:text-center">
              <h3 className="text-2xl text-white">
                El simposio de sistemas se enfoca en presentar conferencias de importantes e interesantes temas respecto a la inteligencia artificial, teniendo así la posibilidad de sumergirte en las 4 conferencias que tendremos con una perspectiva diferente de la inteligencia artificial y sus aplicaciones en diversos campos.
              </h3>
            </div>
          </div>
          <div className="mx-auto flex max-w-6xl p-3 lg:visible lg:px-2">
            <img src="/images/imagen1.jpg" alt="img" />
          </div>
          <div className="mx-auto flex flex-col items-center px-5 pt-56 lg:flex-row">
            <div className="mb-5 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                Actividad de Drones
              </h2>
              <p className="font-3xl mb-8 font-semibold leading-relaxed">
                Los asistentes tendrán la oportunidad de aprender sobre Drones en vivo por el taller impartado por el COESICYDET (Consejo Estatal de Ciencia y Tecnología), presenciando una breve explicación de estos mismos y demostraciones de vuelo en diferentes escenarios. Además de tener la posibilidad de volar un dron con guía de expertos en el campo del Tecnológico, dando una experiencia única para los asistentes del simposio.
              </p>
            </div>
            <div className="lg:w-full lg:max-w-2xl">
              <img src="/images/drones.jfif" alt="img" />
            </div>
          </div>
          <div className="mt-32">
            <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
              <div className="mb-8 md:mb-0 lg:w-full lg:max-w-xl">
                <img src="/images/patrocinadas.png" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                  Dinámicas patrocinadas
                </h2>
                <p className="mb-8 font-semibold leading-relaxed text-white">
                  Habrán una serie de dinámicas sorpresas en donde podrán ganar diversos premios otorgados por nuestros patrocinadores, siendo este un momento divertido y retador para poder adquirir uno de estos premios.
                </p>
              </div>
            </div>
          </div>
        </Element>

        <Element name="actividades" className="text-white">
          <div className="p-4 pt-24">
            <h2 className="text-3xl text-white font-bold mb-12">Actividades</h2>
            <p className="text-xl font-bold text-left md:text-center">Martes, 7 de mayo 2024</p>
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
              <div className="flex md:contents flex-row-reverse">
                <div
                  className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Registro</h3>
                  <p className="mt-2 leading-6">Registro y escaneo de los asistentes</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">8:00 a.m a 9:50 a.m</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Inauguración</h3>
                  <p className="mt-2 leading-6">Inauguración en el auditorio del ITESCHAM</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">9:50 a.m a 10:30 a.m</span>
                </div>
              </div>

              <div className="flex md:contents flex-row-reverse">
                <div
                  className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Conferencia Dr. Cheang</h3>
                  <p className="mt-2 leading-6">"IA aplicada a la educación"</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">10:30 a.m a 11:30 a.m</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Coffee Break</h3>
                  <p className="mt-2 leading-6">Descanso con comida incluida</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">11:30 a.m a 12:00 p.m</span>
                </div>
              </div>

              <div className="flex md:contents flex-row-reverse">
                <div
                  className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Dinámicas patrocinadas</h3>
                  <p className="mt-2 leading-6">Serie de actividades y dinámicas con premios patrocinados</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">12:00 p.m a 12:30 p.m</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Conferencia 2</h3>
                  <p className="mt-2 leading-6">Tema de la conferencia</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">12:30 p.m a 1:30 pm</span>
                </div>
              </div>
            </div>

            <p className="text-xl font-bold text-left md:text-center mt-10">Miércoles, 8 de mayo 2024</p>
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
              <div className="flex md:contents flex-row-reverse">
                <div
                  className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Coferencia Merari May Sosa</h3>
                  <p className="mt-2 leading-6">"¿Cómo es que la IA nos entiende Un vistazo al procesamiento natural del lenguaje (NLP)"</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">9:00 a.m a 10:00 a.m</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Coffee Break</h3>
                  <p className="mt-2 leading-6">Descanso con comida incluida</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">10:00 a.m a 10:30 a.m</span>
                </div>
              </div>

              <div className="flex md:contents flex-row-reverse">
                <div
                  className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Actividad recreativa o taller</h3>
                  <p className="mt-2 leading-6">Drones</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">10:30 a.m a 11:30 a.m</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Conferencia Elisa Elías</h3>
                  <p className="mt-2 leading-6">"Uso de la IA en Ciberseguridad"</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">11:30 a.m a 12:30 p.m</span>
                </div>
              </div>

              <div className="flex md:contents flex-row-reverse">
                <div
                  className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Clausura</h3>
                  <p className="mt-2 leading-6">Cierre y entrega de constancias del simposio</p>
                  <span className="absolute text-indigo-100 -top-7 left-2 whitespace-nowrap">12:30 p.m a 1 p.m</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>

            </div>
          </div>
        </Element>
        <div className=" text-white">

          <Element name="ubicacion">
            <div className="mx-auto">
              <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
                <div className="my-6 flex w-full flex-col text-left lg:text-center">
                  <h3 className="mb-8 text-5xl font-bold text-white">
                    Ubicación del evento
                  </h3>
                  <h3 className="mb-12 px-0 text-lg font-semibold text-gray-300 lg:px-52">
                    Instituto Tecnológico Superior de Champotón, Carretera Champotón Isla Aguada km 2 Col. Arenal
                  </h3>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15059.624534799197!2d-90.74567365223224!3d19.32987903707706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f7705ed8caaa91%3A0x172484b17c9319ae!2sInstituto%20Tecnol%C3%B3gico%20Superior%20de%20Champot%C3%B3n%20(ITESCHAM)!5e0!3m2!1ses-419!2smx!4v1713927247508!5m2!1ses-419!2smx"
                  width="600" height="650"
                  loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>
              </div>
            </div>
            <div className="text-black">
              <div className="max-w-8xl mx-auto flex flex-col px-5 py-12 lg:py-0 text-white lg:flex-row">
                <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                  <img
                    className="rounded object-cover object-center"
                    alt="image"
                    src="/images/itescham.jpg"
                  />
                </div>
                <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:text-left">
                  <h2 className="mb-2 text-3xl font-bold leading-tight ">
                    Nuestro equipo de trabajo
                  </h2>
                  <h2 className="mb-6 text-lg text-gray-300 sm:text-lg">
                    Sistemas Octavo Semestre (Generación 2020-2024)
                  </h2>
                  <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                    Levinux es poder, es amor.
                  </h2>
                </div>
              </div>
            </div>
          </Element>


        </div>
      </div>
    </div>
  );
}
