import { useState, useEffect, Suspense } from "react";
import {
  BoltIcon,
  PlayCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DefaultLoadingManager } from "three";

import Typewriter from "typewriter-effect";

import "./heroSection.css";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/car.glb");

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={2}
        position={[0, -1, 0]}
        rotation={[0, 0.2, 0]}
      />
    </>
  );
};

const Loading = () => {
  const [finished, setFinished] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    DefaultLoadingManager.onLoad = () => setFinished(true);
    DefaultLoadingManager.onProgress = (itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200);
  }, []);

  return (
    !finished && (
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[200px] mx-auto mt-0 justify-center px-6 py-2 bg-white text-teal-400 border-2 border-teal-400 font-bold text-md leading-tight rounded-lg shadow-md">
          <p className="inline-block px-2 py-1">Generating </p>
          <BoltIcon className="h-6 w-6 inline-block" />
        </div>
      </div>
    )
  );
};

export default function HeroSection() {
  return (
    <div id="hero" className="hero isolate bg-gray-900">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5eead4" />
              <stop offset={1} stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div className="relative p-8 lg:px-8 lg:py-2">
          <div className="mx-auto max-w-6xl py-2">
            <div>
              <div className="pointer-card absolute right-0 top-0 hidden lg:inline">
                <div className="content"></div>
              </div>

              <div className="flex items-center flex-col">
                <div className="px-6">
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1">
                      <span className="text-slate-300">
                        Can't I just use ChatGPT?
                        <a
                          href="/why-though"
                          className="font-semibold text-teal-400 hover:text-teal-500"
                        >
                          <span className="ml-2" aria-hidden="true" />
                          Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                      </span>
                    </div>
                  </div>
                  <h1
                    className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl h-[70px]"
                    style={{
                      background: "linear-gradient(to right, #ff00d4, #00ddff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Crafting Code with a Wave of Magic
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-center">
                    Turn text into Tailwind components in an instant with
                    TailMagic. No need to worry about complex codes and
                    intricate details. Your text prompt is all you need to craft
                    stunning, high-performance components.
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                      href="/playground"
                      className="inline-block rounded-lg bg-teal-400 px-4 py-1.5 text-base font-semibold leading-7 text-slate-300 shadow-md ring-1 ring-teal-400 hover:bg-teal-500 hover:ring-teal-500"
                    >
                      Get started
                      <span
                        className="text-slate-300 px-1 font-bold"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </a>
                    <a
                      href="#"
                      className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-slate-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20 border"
                    >
                      Watch video demo
                      <span
                        className="text-slate-300 font-bold px-1"
                        aria-hidden="true"
                      >
                        <PlayCircleIcon className="h-5 w-5 inline-block text-slate-300 text-bold" />
                      </span>
                    </a>
                  </div>
                  <div className="pointer-cta hidden">
                    <div className="content">
                      <div className="arrow">
                        <div className="curve"></div>
                        <div className="point"></div>
                      </div>
                      <div className="content-text">
                        <h1>Psst.. All you need is an OpenAI API key !</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row gap-[10px] justify-center items-center">
                  <div className="gradientCard text-slate-300 py-6 px-8 w-[250px] h-[170px] drop-shadow-lg mt-4 hidden lg:block rounded-lg">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            "Create a Tailwind card for a Chevrolet C2 Ivory with title, body and button"
                          )
                          .pauseFor(1000)
                          .deleteAll()
                          .start();
                      }}
                      options={{
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    <div className="inline-block w-[150px] absolute inset-x-0 bottom-4 mx-auto justify-center px-6 py-2.5 bg-black text-slate-300 font-medium text-sm leading-tight rounded-lg shadow-sm transition duration-150 ease-in-out">
                      Generate <span className="px-1">✓</span>
                    </div>
                  </div>
                  <div className="w-1/4 rotate-6 pb-[200px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev/svgjs"
                      viewBox="0 0 800 800"
                    >
                      <g
                        stroke-width="10"
                        stroke="hsl(227, 71%, 57%)"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        transform="rotate(290, 400, 400)"
                      >
                        <path
                          d="M236 236Q476 363 564 564 "
                          marker-end="url(#SvgjsMarker1652)"
                        ></path>
                      </g>
                      <defs>
                        <marker
                          markerWidth="8.5"
                          markerHeight="8.5"
                          refX="4.25"
                          refY="4.25"
                          viewBox="0 0 8.5 8.5"
                          orient="auto"
                          id="SvgjsMarker1652"
                        >
                          <polygon
                            points="0,8.5 2.8333333333333335,4.25 0,0 8.5,4.25"
                            fill="hsl(227, 71%, 57%)"
                          ></polygon>
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  <div className="gradientCard mt-8 flex flex-col justify-center hidden md:flex">
                    <div className="flex justify-center shadow-lg rounded-lg m-auto">
                      <div className="w-[500px]">
                        <div className="h-[400px]">
                          <Loading />
                          <Canvas>
                            <ambientLight intensity={0.7} />
                            <spotLight
                              intensity={0.5}
                              angle={0.1}
                              penumbra={1}
                              position={[10, 15, 10]}
                              castShadow
                            />
                            <Suspense fallback={null}>
                              {/* <PlaneModel scale={4} position={[0,-0.9,0]}  rotation-y={-0.2} rotation-x={-0.3}/> */}
                              <Model />
                              <OrbitControls
                                autoRotate
                                enablePan={false}
                                enableZoom={false}
                                enableDamping
                                dampingFactor={0.5}
                                rotateSpeed={1}
                              />
                            </Suspense>
                          </Canvas>
                        </div>
                        <div className="pt-2 px-6">
                          <h5 className="text-slate-300 text-xl font-semibold mb-2">
                            Chevrolet C2 Ivory
                          </h5>
                          <p className="text-slate-300 text-base mb-4">
                            The Chevrolet Corvette (C2) is the second generation
                            of the Corvette sports car, produced by the
                            Chevrolet division of General Motors (GM) for the
                            1963 through 1967 model years
                          </p>
                        </div>
                        <button
                          type="button"
                          className="w-auto inline-block px-6 py-2 w-full bg-black text-slate-300 font-medium text-sm leading-tight rounded-b-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out mb-[10px] rounded-lg "
                        >
                          Join the Waitlist →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
