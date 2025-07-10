import React from "react";
import { FaClinicMedical } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      {/* Banner */}
      <section className="py-20  bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto px-4 items-center gap-10">
          <div className="text-white max-w-xl">
            <h1 className=" text-4xl md:text-5xl font-bold">
              Quality Healthcare Made Simple
            </h1>
            <p className="mb-10 mt-5 text-xl">
              Comprehensive medical services tailored to your needs with care
              and compassion.
            </p>
            <a
              href="#"
              className="px-5 py-3 rounded-[5rem] font-bold bg-white text-blue-800 hover:bg-blue-800 
              hover:text-white transition hover:duration-150 hover:ease-in-out"
            >
              Book an Appointment
            </a>
          </div>
          <div className="justify-items-center">
            <div className=" bg-white/20 h-fit rounded-full p-4 hover:shadow-xl hover:shadow-white/50">
              <FaClinicMedical className="text-white text-8xl md:text-9xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
