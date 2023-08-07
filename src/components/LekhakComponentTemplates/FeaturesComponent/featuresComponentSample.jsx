
import { useState, useEffect } from 'react';
import { DocumentCheckIcon, GlobeAltIcon, ChartPieIcon, BoltIcon, CubeIcon, FlagIcon } from '@heroicons/react/24/outline';
import AltNavBar from '../../WebsiteComponents/NavBar/altNavBar'

const data = {"theme": "Startup VC Company", "colorScheme": "red", "component": {"type": "FeaturesSectionComponent", "image": true, "content":[{"header": "Unlock the potential of your startup", "subHeader": "Our VC company is dedicated to helping startups succeed. With our expertise and resources, you can build the future of your dreams. Get started with us today.", "featureBlocks": [{"title" : "Expert Advice", "titleDesc": "Receive expert advice from our experienced team on topics like market research, customer acquisition, and product development.","subPoints": [{"id": 0, "point": "Strategic Planning", "pointDesc": "Develop a comprehensive strategy to make the most of your resources and reach your goals."},{"id": 1, "point": "Financial Modeling", "pointDesc": "Navigate the complexities of financial modeling and optimize your budget."},{"id": 2, "point": "Partnership Opportunities", "pointDesc": "Find the right partners to help you grow and succeed."}] },{"title" : "Dedicated Resources", "titleDesc": "Take advantage of our dedicated resources to support your startup.","subPoints": [{"id": 0, "point": "Funding", "pointDesc": "Access our network of investors and secure the funding you need to get off the ground."},{"id": 1, "point": "Mentorship", "pointDesc": "Get advice from experienced entrepreneurs and learn from their successes and failures."},{"id": 2, "point": "Networking", "pointDesc": "Expand your network and make valuable business connections."}]}]}]}}


const FeatureBlockOneIcons = [{icon: <GlobeAltIcon className="h-6 w-6" aria-hidden="true"/>}, {icon: <ChartPieIcon className="h-6 w-6" aria-hidden="true"/>}, {icon: <BoltIcon className="h-6 w-6" aria-hidden="true"/>}]
const FeatureBlockTwoIcons = [{icon: <FlagIcon className="h-6 w-6" aria-hidden="true"/>}, {icon: <CubeIcon className="h-6 w-6" aria-hidden="true"/>}, {icon: <DocumentCheckIcon className="h-6 w-6" aria-hidden="true"/>}]

function FeaturesTemplate() {
  const [validImgUrl1, setValidImgUrl1] = useState("");
  const [validImgUrl2, setValidImgUrl2] = useState("");

  useEffect(()=>{
    setValidImgUrl1('https://illustrations.popsy.co/' + data.colorScheme + '/man-riding-a-rocket.svg');
    setValidImgUrl2('https://illustrations.popsy.co/' + data.colorScheme + '/falling.svg');
    console.log('Image URL 1 sourced from:' + validImgUrl1);
    console.log('Image URL 2 sourced from:' + validImgUrl2);
    }, [])



  return (
    <div className="py-16 px-6 bg-gray-50 overflow-hidden">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-slate-300" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          {data?.component?.content?.[0]?.header
            ? (
                <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-slate-300 lg:text-5xl">
                {data.component.content[0].header}
                </h2>
              )
            : (
                <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-slate-300 lg:text-5xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h2>
              )
          }
          
         {data?.component?.content?.[0]?.subHeader
          ? (
              <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-slate-300">
              {data.component.content[0].subHeader}
              </p>
            )
          : (
              <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in,
              accusamus quisquam.
              </p>
            )
          }
        </div>
        {data?.component?.content?.[0]?.featureBlocks[0] &&
        ( <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            {data?.component?.content?.[0]?.featureBlocks?.[0]?.title
              ? (
                  <h3 className="text-xl font-extrabold text-slate-300 tracking-tight lg:text-2xl">
                    {data.component.content[0].featureBlocks[0].title}
                  </h3>
                )
              : (
                <h3 className="text-xl font-extrabold text-slate-300 tracking-tight lg:text-2xl">
                  Lorem ipsum
                </h3>
              )
            }
            
            {data?.component?.content?.[0]?.featureBlocks?.[0]?.titleDesc
              ? (
                  <p className="mt-3 text-md text-slate-300">
                  {data.component.content[0].featureBlocks[0].titleDesc}
                  </p>
                )
              : (
                <p className="mt-3 text-md text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                  officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                  Totam, velit.
                </p>
              )
            }
            
            {data?.component?.content?.[0]?.featureBlocks?.[0]?.subPoints &&
            ( <dl className="mt-10 space-y-10">
              {data.component.content[0].featureBlocks[0].subPoints.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-slate-300">
                    {FeatureBlockOneIcons[item.id].icon}
                  </div>
                    <p className="ml-16 text-md font-semibold tracking-tight leading-6 text-slate-300">{item.point}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-slate-300">{item.pointDesc}</dd>
                </div>
              ))}
            </dl> )
              }
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-slate-300" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto"
              width={450}
              src={validImgUrl1}
              alt=""
            />
          </div>
        </div>
        )}
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-slate-300" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>
        {data?.component?.content?.[0]?.featureBlocks?.[1] &&
        ( <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
            {data?.component?.content?.[0]?.featureBlocks?.[1]?.title
              ? <h3 className="text-xl font-extrabold text-slate-300 tracking-tight lg:text-2xl">{data.component.content[0].featureBlocks[1].title}</h3>
              : <h3 className="text-xl font-extrabold text-slate-300 tracking-tight lg:text-2xl">Lorem Ipsum</h3>
            }
              
            {data?.component?.content?.[0]?.featureBlocks?.[1]?.titleDesc
              ? (
                <p className="mt-3 text-md text-slate-300">
                  {data.component.content[0].featureBlocks[1].titleDesc}
                </p>
                )
              : (
                  <p className="mt-3 text-md text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
                  cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
                  </p>
                )
              }
              
            {data?.component?.content?.[0]?.featureBlocks?.[1]?.subPoints &&
              ( <dl className="mt-10 space-y-10">
                {data.component.content[0].featureBlocks[1].subPoints.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-slate-300">
                        {FeatureBlockTwoIcons[item.id].icon}
                      </div>
                      <p className="ml-16 text-md leading-6 font-semibold text-slate-300">{item.point}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-slate-300">{item.pointDesc}</dd>
                  </div>
                ))}
              </dl> )
            }
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-slate-300" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto"
                width={380}
                src={validImgUrl2}
                alt=""
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default function FeaturesComponentSample() {
  
  return (
    <>
    <AltNavBar />
    <div className="px-6">
    <div className="mt-2 p-6 grid grid-cols-1 lg:grid-cols-4 gap-x-6 bg-gray-800 rounded-md">
    <>
    <div className="col-span-3 mx-auto p-6 flex justify-center items-center bg-gradient-to-r from-emerald-200 to-teal-400">
      <FeaturesTemplate />
    </div>
    </>
    <div className="bg-gray-800 col-span-1 align-middle flex w-full h-full max-w-lg text-center">
        <div className="mt-24 py-24">
            <p className="mx-auto w-fit bg-gray-900 text-slate-300 rounded-2xl py-1.5 px-4 text-sm font-semibold">Prompt Example</p>
            <h1
            className="px-2 pt-3 pb-6 uppercase font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400"
            >
            Features Section
            </h1>
            <div
            className="shadow-sm px-4 py-3 bg-gray-800"
            >
                <article className="prose lg:prose-md prose-invert">
                    <div className="">
                    <blockquote>
                        <p>Create a features section for a startup vc company, red</p>
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
    </div>
    </div>
    </>
  )
}