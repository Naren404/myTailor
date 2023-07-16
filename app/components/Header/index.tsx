import { Link } from "@remix-run/react";

import Container from "../Container"

const Header = () => {
  return (
    <header>
      <nav className="absolute z-10 w-full">
        <Container> 
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 md:py-4 md:gap-0">
            <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />

            <div className="relative z-20 flex justify-between w-full lg:w-max md:px-0">
              <Link to="/" className="flex items-center space-x-2">
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="w-4 h-4 bg-gray-900 rounded-full dark:bg-white"></div>
                  <div className="w-2 h-6 bg-primary"></div>
                </div>

                  <span className="text-2xl font-bold text-gray-900 dark:text-white">myTailor</span>
              </Link>

              <div className="relative flex items-center lg:hidden max-h-10">
                <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative p-6 -mr-6">
                  <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                  <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                </label>
              </div>
            </div>

            
            <div className="absolute left-0 z-20 flex-col flex-wrap justify-end w-full gap-6 p-8 transition-all duration-300 origin-top scale-95 translate-y-1 bg-white border border-gray-100 shadow-2xl opacity-0 rounded-3xl shadow-gray-600/10 top-full lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
              <div className="w-full text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto lg:pt-0">
                <ul className="flex flex-col gap-6 font-medium tracking-wide lg:text-sm lg:flex-row lg:gap-0">
                  <li>
                    <Link to="/" className="block font-bold transition md:px-4 hover:text-primary">HOME</Link>
                  </li>

                  <li>
                    <Link to="/" className="block font-bold transition md:px-4 hover:text-primary">ABOUT</Link>
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <a className="relative flex items-center justify-center w-full px-4 h-9 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span className="relative text-sm font-semibold text-white">Sign Out</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
   )
}
 
export default Header