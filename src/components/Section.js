import React from "react";

const Section = () => {
  return (
    <section class="bg-white dark:bg-white py-4">
      <div
        className="py-8 px-8  lg:py-16 lg:px-24 lg:mx-16 lg:flex items-center"
      >
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 basis-1/2">
          <h2
            className="mb-4 text-4xl tracking-tight font-bold text-gray-900"
          >
            Pencil Sketches
          </h2>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-4 mt-8">
          <img class="w-full rounded-lg" src="images/01.png" alt="img" />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="images/03.png"
            alt="office content 2"
          />
          <img
            class="mt-6 w-full lg:mt-16 rounded-lg"
            src="images/05.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
