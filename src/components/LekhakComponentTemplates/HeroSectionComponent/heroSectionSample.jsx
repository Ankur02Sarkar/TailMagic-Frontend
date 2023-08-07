import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AltNavBar from '../../WebsiteComponents/NavBar/altNavBar'

const data = {"theme": "travel", "colorScheme": "teal", "component": {"type": "HeroSectionComponent", "image": "true", "content": [{"title": "Discover the world with us", "body":  "Embark on a journey filled with unforgettable experiences and make memories that will last a lifetime. Our team of travel experts is here to guide you every step of the way.", "topTag": "Your Adventure Awaits", "nav": ["Book a Trip", "Top Destinations", "Explore Offers", "About Us"], "callsToAction": ["Get Started", "Know More"]}]}}

const navigation = [
  { name: 'Book a Trip', href: '' },
  { name: 'Top Destinations', href: '' },
  { name: 'Explore Offers', href: '' },
  { name: 'About Us', href: '' },
]

const imageUrls = '';

export default function HeroSectionSample() {
  
  return (
    <>
    <AltNavBar />
    <div className="px-6">
    <div className="mt-2 p-6 grid grid-cols-1 lg:grid-cols-4 gap-x-6 bg-gray-800 rounded-md">
    <div className="bg-gray-800 col-span-1 align-middle flex w-full h-full max-w-lg p-6 text-center">
        <div className="m-auto -translate-y-12">
            <p className="mx-auto w-fit bg-gray-900 text-slate-300 rounded-2xl py-1.5 px-4 text-sm font-semibold">Prompt Example</p>
            <h1
            className="px-2 pt-3 pb-6 uppercase font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400"
            >
            Hero Section
            </h1>
            <div
            className="shadow-sm px-4 py-3 bg-gray-800"
            >
                <article className="prose lg:prose-md prose-invert">
                    <div className="">
                    <blockquote>
                        <p>Hero section for a travel agency, teal colour, with images</p>
                    </blockquote>
                    </div>
                    
                </article>
            </div>
            <a href='/playground'>
            <button
            type="button"
            className="my-4 mx-auto rounded-lg px-3 py-2 text-sm font-semibold leading-6 bg-white shadow-md"
            >
                Try your own prompt &rarr;
            </button>
            </a>
        </div>
    </div>
    <>
    <div className="col-span-3 mx-auto p-6 flex justify-center items-center bg-gradient-to-r from-emerald-200 to-teal-400">
    <div className="relative bg-white overflow-hidden rounded-lg shadow-lg p-4">
      <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-slate-300" fill="currentColor" />
            </pattern>
          </defs>
          <rect y={72} width={640} height={640} className="text-slate-300" fill="currentColor" />
          <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>

      <div className="relative pt-6 pb-16">
        <Popover>
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-300 hover:text-slate-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400">
                    <span className="sr-only">Open main menu</span>
                    <Bars2Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {data?.component?.content[0]?.nav &&
              <div className="hidden md:block md:ml-10 md:space-x-10">
                {data.component.content[0].nav.map((item) => (
                  <a key={item} href='#' className="font-medium text-slate-300 hover:text-slate-300">
                    {item}
                  </a>
                ))}
              </div>
              }
            </div>
            <div className="hidden md:block text-right">
              <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-teal-500 bg-white hover:bg-gray-50"
                >
                  Log in
                </a>
              </span>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-300 hover:text-slate-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400">
                      <span className="sr-only">Close main menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {data?.component?.content[0]?.nav &&
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {data.component.content[0].nav.map((item) => (
                    <a
                      key={item}
                      href='#'
                      className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-slate-300 hover:bg-gray-50"
                    >
                      {item}
                    </a>
                  ))}
                </div>
                }
                <a
                  href=""
                  className="block w-full px-5 py-3 text-center font-medium text-teal-500 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-8 mx-auto max-w-7xl sm:mt-24 lg:mt-24">
          <div className="px-16 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-xl md:mx-auto lg:col-span-6 lg:text-left lg:py-16">
              <h1>
              {data?.component?.content[0]?.topTag &&
              <span className="block text-sm font-semibold uppercase tracking-widest text-teal-500">
                {data.component.content[0].topTag}
              </span>
              }
              {data?.component?.content[0]?.title &&
                <span className="mt-1 block text-6xl tracking-tight font-extrabold lg:text-7xl">
                  <span className="block text-slate-300">{data.component.content[0].title}</span>
                </span>
              }
              </h1>
              {data?.component?.content[0]?.body &&
              <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {data.component.content[0].body}
              </p>
              }
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              {data?.component?.content?.[0]?.callsToAction?.[0] &&
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-300 bg-teal-500 hover:bg-teal-600 md:py-2 md:px-6"
                >
                  {data.component.content[0].callsToAction[0]}
                </a>
              </div>
              }
              {data?.component?.content?.[0]?.callsToAction?.[1] &&
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-500 bg-white hover:bg-gray-50 md:py-2 md:px-6"
                >
                {data.component.content[0].callsToAction[1]}
                </a>
              </div>
              }
            </div>
            </div>
            <div className="h-96 mt-16 relative sm:mx-auto lg:mt-0 lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:h-full">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-slate-300" fill="currentColor" />
                  </pattern>
                </defs>
                <rect y={72} width={640} height={640} className="text-slate-300" fill="currentColor" />
                <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
              </svg>
          
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="-translate-y-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    
                      <div className="h-64 w-44 shadow-lg overflow-hidden rounded-lg">
                        {imageUrls?.images?.[0]?.urls?.raw 
                          ? <img
                              src={imageUrls.images[0].urls.raw}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          : <img
                              src="https://images.unsplash.com/photo-1659523052948-4c82b042a7a6"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                        }
                      </div>
                      <div className="h-64 w-44 shadow-lg overflow-hidden rounded-lg">
                        {imageUrls.images?.[1]?.urls?.raw 
                          ? <img
                              src={imageUrls.images[1].urls.raw}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          : <img
                              src="https://images.unsplash.com/photo-1674988332888-ddd1d96bc737"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                        }
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-52 shadow-lg overflow-hidden rounded-lg">
                        {imageUrls.images?.[2]?.urls?.raw 
                          ? <img
                              src={imageUrls.images[2].urls.raw}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          : <img
                              src="https://images.unsplash.com/photo-1675085573909-d4a4fa65664f"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                        }
                      </div>
                      <div className="h-64 w-52 shadow-lg overflow-hidden rounded-lg">
                      {imageUrls.images?.[3]?.urls?.raw 
                        ? <img
                            src={imageUrls.images?.images[3].urls.raw}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        : <img
                          src="https://images.unsplash.com/photo-1622810821786-646c6a7b4447"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      }
                      </div>
                      <div className="h-64 w-52 shadow-lg overflow-hidden rounded-lg">
                      {imageUrls.images?.[4]?.urls?.raw 
                        ? <img
                            src={imageUrls.images?.images[4].urls.raw}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        : <img
                          src="https://images.unsplash.com/photo-1674859470199-9d1a6fb97e59"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      }
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 shadow-lg overflow-hidden rounded-lg">
                      {imageUrls.images?.[5]?.urls?.raw 
                        ? <img
                            src={imageUrls.images[5].urls.raw}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        : <img
                          src="https://images.unsplash.com/photo-1675124516483-b7d21f60e6d9"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      }
                      </div>
                      <div className="h-64 w-44 shadow-lg overflow-hidden rounded-lg">
                      {imageUrls.images?.[6]?.urls?.raw 
                        ? <img
                            src={imageUrls.images[6].urls.raw}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        : <img
                          src="https://images.unsplash.com/photo-1632678997726-cbad802f76e7"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      }
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>  
    </div>
    </div>
    
    </>
    </div>
    </div>
    </>
  )
}