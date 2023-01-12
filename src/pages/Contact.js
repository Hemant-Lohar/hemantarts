import React from "react";
import { AiOutlineInstagram ,AiFillYoutube} from "react-icons/ai";
import {RiWhatsappFill} from "react-icons/ri";
const Contact = () => {
  return (
    <>
      <section class="bg-gray-200 h-screen flex flex-col items-center pt-32">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 flex flex-col items-center justify-center">
          <h2 class="mb-12 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
          Contact To Get a Quote
          </h2>
          <div class="grid grid-cols-1 gap-8 font-semibold text-center items-center sm:gap-12 md:grid-cols-3 lg:grid-cols-3">
          <a href="https://www.instagram.com/hemant_arts/?hl=en" className="text-4xl text-pink-500"><AiOutlineInstagram/></a>
          <a href="https://www.youtube.com/channel/UCDsRPURQG_1enETI3Zjyfbw" className="text-4xl text-red-500"><AiFillYoutube/></a>
          <a href="https://wa.me/9763007319" className="text-4xl text-green-500"><RiWhatsappFill/></a>
            
          </div>
        </div>
        <div>
        
        </div>
      </section>
    </>
  );
};

export default Contact;
