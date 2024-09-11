import React from "react";
import Appbar from "../components/Appbar";

import Dog from "../assets/dog.png";
import Rent_1 from "../assets/rent_1.png";
import Rent_2 from "../assets/rent_2.png";
import Rent_3 from "../assets/rent_3.png";
import Sponcer_01 from "../assets/sponcer_01.png";
import Sponcer_02 from "../assets/sponcer_02.png";

export default function App() {
  const search = () => {
    return (
      <form class="max-w-md mx-auto z-0">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <body className="h-screen w-auto justify-center text-center p-4  overflow-y-auto  bg-gray-200">
        <div className="">
          {/* hidden w-full md:block md:w-auto */}


          <img
            src={Sponcer_02}
            alt="sponcer"
            className="object-cover	h-56 w-full p-4 md:hidden"
          />

          <img
            src={Sponcer_02}
            alt="sponcer"
            className="object-cover	h-96 w-full p-4 hidden md:block"
          />
          {search()}
        </div>

        <div
          className="md:hidden"
          data-collapse-toggle="item-data"
          aria-controls="item-data"
          aria-expanded="false"
        >
          <div className=" items-center justify-center text-center mt-4">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <img
                    src={Rent_1}
                    alt="rent_01"
                    className="hover:scale-110 overflow-hidden w-44  rounded-lg transform transition duration-500"
                  />
                  <div className="p-4 text-left">
                    <p className="font-bold">Dog_01</p>
                    <p className="text-sm text-gray-500">Bangkok, Bangson</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="item-data">
          <div className="grid grid-cols-5 gap-4 items-center justify-center text-center p-4 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={Rent_1}
                    alt="dog"
                    className="hover:scale-110 overflow-hidden rounded-lg  transform transition duration-500"
                  />
                  <div className="p-4 text-left">
                    <p className="font-bold">Rent_01</p>
                    <p className="text-sm text-gray-500">Bangkok, Bangson</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </body>
    </>
  );
}
