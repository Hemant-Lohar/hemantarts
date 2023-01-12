import React from "react";

const Sectiontwo = () => {
  return (
    <section class="bg-gray-100 py-4">
    <div
      className="py-8 px-8 lg:py-16 lg:px-24 lg:mx-16 lg:flex flex-row-reverse items-center"
    >
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 basis-1/2 flex flex-col lg:items-end">
        <h2
          className="mb-4 text-4xl lg:text-right tracking-tight font-bold text-gray-900"
        >
          Watercolor Paintings
        </h2>
        <a href="/gallary">
            <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 font-bold rounded-xl flex items-center gap-2">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </a>
      </div>
      
      <div class="grid lg:grid-cols-3 gap-4 mt-8">
        <img class="w-72 rounded-lg" src="images/02.jpg" alt="img" />
        <img
          class="mt-4 w-72 lg:mt-10 rounded-lg"
          src="images/06.jpg"
          alt="img"
        />
        <img
          class="mt-6 w-72 lg:mt-16 rounded-lg"
          src="images/12.jpg"
          alt="img"
        />
      </div>
    </div>
  </section>
  );
};

export default Sectiontwo;
