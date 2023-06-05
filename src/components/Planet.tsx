import { useState } from "react";
import IPlanet from "../interfaces/Planet";

import SourceIcon from "../assets/icon-source.svg";

interface IProps {
  isSmallScreen: boolean;
  planet: IPlanet;
}

export default function Planet(props: IProps) {
  const [activeState, setActiveState] = useState<number>(0);

  return (
    <>
      <div className="pt-5 flex justify-evenly text-0.9rem leading-[1rem] text-[white] tracking-[1.9px] font-semibold">
        {props.isSmallScreen
          ? ["OVERVIEW", "STRUCTURE", "SURFACE"].map((element, index) => {
              return (
                <p
                  key={element}
                  className={`${
                    activeState === index ? "border-b-4 border-solid" : ""
                  } cursor-pointer pb-[1.7rem] parent-class-prefix-surface`}
                  style={{
                    borderColor: props.planet["planet-color"],
                  }}
                  onClick={() => {
                    setActiveState(index);
                  }}
                >
                  {element}
                </p>
              );
            })
          : null}
      </div>
      <main>
        <div className="flex flex-col items-center desktop:flex-row desktop:px-[16.5rem] desktop:justify-between">
          <div className="relative mt-[9.5rem] w-fit">
            <img
              src={
                activeState === 0
                  ? props.planet.images.planet
                  : props.planet.images.internal
              }
              alt={props.planet.name}
            />
            {activeState === 2 ? (
              <img
                src={props.planet.images.geology}
                alt={`${props.planet.name} geology`}
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8rem]"
                style={{
                  width: props.planet["image-sizes"].mobile.geology.width,
                }}
              />
            ) : null}
          </div>

          <div className="mt-[9.8rem] md:flex md:justify-between md:w-full md:px-[3.9rem] md:items-end desktop:flex-col desktop:px-0 desktop:justify-between desktop:items-start desktop:w-fit">
            <div className="flex flex-col gap-4 justify-center text-center text-white md:items-start md:text-left">
              <h1 className="font-antonio text-[4rem] font-normal leading-13 uppercase md:text-[4.8rem] md:leading-[6.2rem]">
                {props.planet.name}
              </h1>
              <p className="font-spartan text-[1.1rem] leading-[2.2rem] font-normal mx-[6rem] max-w-[60rem] md:mx-0 md:max-w-[45ch] md:text-[1.5rem]">
                {activeState === 0
                  ? props.planet.overview.content
                  : activeState === 1
                  ? props.planet.structure.content
                  : props.planet.geology.content}
              </p>
              <div className="flex items-center gap-2 justify-center mt-[3.2rem]">
                <span>Source: </span>
                <a
                  href={
                    activeState === 0
                      ? props.planet.overview.source
                      : activeState === 1
                      ? props.planet.structure.source
                      : props.planet.geology.source
                  }
                  target="_blank"
                  className="flex items-center gap-2 text-white text-opacity-50 text-[1.2rem] leading-[2.5rem] underline"
                >
                  Wikipedia <img src={SourceIcon} alt="Source icon" />
                </a>
              </div>
            </div>

            {!props.isSmallScreen ? (
              <div className="flex flex-col gap-4 w-[28.1rem] text-white mb-[6rem] desktop:mt-[3.9rem] desktop:">
                {[
                  { number: "01", name: "OVERVIEW", currentNumber: 0 },
                  {
                    number: "02",
                    name: "INTERNAL STRUCTURE",
                    currentNumber: 1,
                  },
                  { number: "03", name: "SURFACE GEOLOGY", currentNumber: 2 },
                ].map((element, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setActiveState(element.currentNumber);
                      }}
                      className="flex gap-[1.6rem] py-[0.8rem] px-5 justify-start items-center text-[1.5rem] leading-[2.5rem] tracking-[1.9px] font-semiboldborder-white cursor-pointer desktop:w-[35rem] desktop:min-h-[4rem] font-spartan"
                      style={{
                        background: `${
                          element.currentNumber === activeState
                            ? props.planet["planet-color"]
                            : "none"
                        }`,
                        border: `${
                          element.currentNumber === activeState
                            ? "none"
                            : "1px solid rgba(255, 255, 255, 0.5)"
                        }`,
                      }}
                    >
                      <span>{element.number}</span>
                      <p>{element.name}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-[0.8rem] text-white mt-[2.8rem] mx-6 w-full max-w-[95%] pb-[2.7rem] px-[2rem] md:flex-row  md:max-w-[95%] md:w-screen desktop:p-0 desktop:mx-auto desktop:pb-[5.6rem] desktop:mt-[15em]">
          {[
            { name: "ROTATION TIME", info: "rotation" },
            { name: "REVOLUTION TIME", info: "revolution" },
            { name: "RADIUS", info: "radius" },
            { name: "AVERAGE TEMP", info: "temperature" },
          ].map((element: { name: string; info: string }, index) => {
            return (
              <div
                className="flex px-6 py-4 justify-between items-center w-full border border-white border-opacity-50 md:flex-col md:items-start md:gap-[0.6rem] md:py-4"
                key={index}
              >
                <p className="font-spartan text-[0.8rem] leading-[1.6rem] opacity-50 tracking-[0.7px] desktop:[1.1rem] desktop:leading-[2.5rem]">
                  {element.name}
                </p>
                <p className="font-antonio text-[2rem] leading-[2.6rem] tracking-[-0.75px] md:text-[2.4rem] md:leading-[3.1rem] desktop:text-10 desktop:leading-[5.1rem]">
                  {props.planet[element.info]}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
