import React from "react";

const Sectiontwo = () => {
  return (
    <section class="bg-white dark:bg-white py-4">
    <div
      className="py-8 px-8 lg:py-16 lg:px-24 lg:mx-16 lg:flex flex-row-reverse items-center"
    >
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 basis-1/2">
        <h2
          className="mb-4 text-4xl lg:text-right tracking-tight font-bold text-gray-900"
        >
          Watercolor Paintings
        </h2>
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
