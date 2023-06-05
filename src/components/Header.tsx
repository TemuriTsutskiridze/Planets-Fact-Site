import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/data.json";

import BurgerMenu from "../assets/icon-hamburger.svg";
import Arrow from "../assets/icon-chevron.svg";
export default function Header(props: any) {
  const [hamburgerMenu, setHamgurgerMenu] = useState<boolean>(false);

  return (
    <header className=" flex gap-y-[1rem] justify-between items-center py-4 px-6 bg-transparent relative before:absolute  before:left-0 before:bottom-0 before:w-full before:h-px before:bg-white before:opacity-20 md:py-8 md:justify-center md:flex-col desktop:flex-row desktop:items-center desktop:py-[2.2rem] desktop:px-[3.2rem] desktop:justify-between">
      <h1 className=" text-white font-antionio font-normal text-[2.8rem] leading-[3.6rem] tracking-[0.1rem] cursor-pointer">
        THE PLANETS
      </h1>
      {props.isSmallScreen ? (
        <img
          src={BurgerMenu}
          alt="burger menu"
          className={`w-6 h-3.5 cursor-pointer ${
            hamburgerMenu ? "opacity-50" : "opacity-100"
          } `}
          onClick={() => {
            setHamgurgerMenu(!hamburgerMenu);
          }}
        />
      ) : null}

      {!props.isSmallScreen ? (
        <nav>
          <ul className="flex gap-x-[3.3rem] desktop:mt-[-2rem]">
            {data.map((planet) => {
              return (
                <Link to={planet.name} key={planet["planet-color"]}>
                  <li
                    className={`text-[1.5rem] leading-[2.5rem] text-white font-spartan tracking-tight uppercase pt-[2.9rem] cursor-pointer hover:border-t-4 hover:border-solid`}
                    style={{ borderColor: planet["planet-color"] }}
                  >
                    {planet.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      ) : null}

      {props.isSmallScreen ? (
        <div
          className={`flex flex-col fixed top-[9.3rem] left-0 w-full py-6 transition-transform transition-1000 ${
            hamburgerMenu ? "translate-x-[0]" : "translate-x-[-100%]"
          } md:hidden z-10`}
        >
          {data.map((planet) => {
            return (
              <Link to={planet.name} key={planet.name}>
                <div className="flex justify-between mx-6 py-5 items-center border-b border-white border-opacity-10">
                  <div className="flex gap-6 items-center">
                    <div
                      className={`w-5 h-5 rounded-full `}
                      style={{
                        backgroundColor: planet["burger-menu-icon-color"],
                      }}
                    ></div>
                    <p className="text-white font-spartan font-bold text-[1.5rem] leading-[2.5rem] tracking-[1.36364px]">
                      {planet.name}
                    </p>
                  </div>
                  <img src={Arrow} alt="arrow" />
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
