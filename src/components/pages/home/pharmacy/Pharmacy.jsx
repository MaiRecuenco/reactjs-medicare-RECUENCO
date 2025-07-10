import React from "react";
import { FaPills } from "react-icons/fa";

const Pharmacy = () => {
  return (
    <>
      {/* Pharmacy Services Section */}
      <section id="pharmacy" className="py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto  px-4 items-center">
          <div className=" max-w-lg">
            <h3 className="text-3xl text-blue-800 font-bold mb-5">
              In-House Pharmacy
            </h3>
            <p className="mb-5 text-gray-600 text-lg">
              Our fully-stocked pharmacy provides convenient access to
              medications with expert advice from our licensed pharmacists.{" "}
            </p>
            <ul className="flex gap-3 items-center mb-5">
              <li className="rounded-full bg-white/20 p-2">
                <FaPills className="text-blue-600 size-5" />
              </li>
              <li>
                <p className="font-bold text-blue-800">
                  Prescription Medications
                </p>
                <p className="text-gray-600">
                  Fast filling of all your prescription needs
                </p>
              </li>
            </ul>
            <ul className="flex gap-3 items-center mb-5">
              <li className="rounded-full bg-white/20 p-2">
                <FaPills className="text-blue-600 size-5" />
              </li>
              <li>
                <p className="font-bold text-blue-800">Over-the-Counter</p>
                <p className="text-gray-600">
                  Wide selection of health and wellness products
                </p>
              </li>
            </ul>
            <ul className="flex gap-3 items-center">
              <li className="rounded-full bg-white/20 p-2">
                <FaPills className="text-blue-600 size-5" />
              </li>
              <li>
                <p className="font-bold text-blue-800">Compounding Services</p>
                <p className="text-gray-600">
                  Custom medication formulations when needed
                </p>
              </li>
            </ul>
          </div>
          <div className="justify-items-center ">
            <div className="w-fit h-fit p-10  bg-blue-100 rounded-lg mt-10 md:mt-0">
              <FaPills className="size-20 text-blue-600" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pharmacy;
