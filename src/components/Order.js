import React from "react";

const Order = () => {
  return (
    <>
      <section class="bg-gray-400 py-16 flex flex-col items-center">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 class="mb-12 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
            Contact For Orders
          </h2>
          <div class="grid grid-cols-1 gap-8 font-semibold text-white text-center sm:gap-12 md:grid-cols-4 lg:grid-cols-4">
            <h3 className=" text-2xl">Pencil Sketches</h3>
            <h3 className=" text-2xl">Watercolor Paintings</h3>
            <h3 className=" text-2xl">Acrylic Paintings</h3>
            <h3 className=" text-2xl">Custom Paintings</h3>
          </div>
         
        </div>
        <div>
              <a href="https://hemants.live/contact">
                <button class="px-4 py-2 text-2xl tracking-tight leading-tight bg-indigo-600 hover:bg-indigo-900 text-gray-50  rounded-xl flex items-center gap-2">
                  Contact
                </button>
              </a>
          </div>
      </section>
    </>
  );
};

export default Order;
