import Planet from "./Planet";
import { Routes, Route, Link } from "react-router-dom";
import { ReactComponentElement, useState } from "react";
import { useEffect } from "react";

import data from "./data/data.json";

import BurgerMenu from "./assets/icon-hamburger.svg";
import Arrow from "./assets/icon-chevron.svg";

function App() {
  const [hamburgerMenu, setHamgurgerMenu] = useState<boolean>(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    console.log(mediaQuery);
    setIsSmallScreen(mediaQuery.matches);

    const handleScreenChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addListener(handleScreenChange);

    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []);

  return (
    <div className=" min-h-screen bg-[url('./assets/background-stars.svg')] bg-space">
      <header className=" flex gap-y-[1rem] justify-between items-center py-4 px-6 bg-transparent relative before:absolute  before:left-0 before:bottom-0 before:w-full before:h-px before:bg-white before:opacity-20 md:py-8 md:justify-center md:flex-col desktop:flex-row desktop:items-center desktop:py-[2.2rem] desktop:px-[3.2rem] desktop:justify-between">
        <h1 className=" text-white font-antionio font-normal text-[2.8rem] leading-[3.6rem] tracking-[0.1rem] cursor-pointer">
          THE PLANETS
        </h1>
        {isSmallScreen ? (
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

        {!isSmallScreen ? (
          <nav>
            <ul className="flex gap-x-[3.3rem] desktop:mt-[-2rem]">
              {data.map((planet) => {
                console.log(planet["planet-color"]);
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

        {isSmallScreen ? (
          <div
            className={`flex flex-col fixed top-[9.3rem] left-0 w-full py-6 transition-transform transition-1000 ${
              hamburgerMenu ? "translate-x-[0]" : "translate-x-[-100%]"
            } md:hidden`}
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

      {/* <Routes>
        {data.map((planet) => {
          return (
            <Route
              path={planet.name}
              element={<Planet planet={planet} />}
              key={planet.name}
            />
          );
        })}
      </Routes> */}
    </div>
  );
}

export default App;
