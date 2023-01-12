import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-900  bottom-0 w-full">
        <div class="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Hemant Arts
          </a>

          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
