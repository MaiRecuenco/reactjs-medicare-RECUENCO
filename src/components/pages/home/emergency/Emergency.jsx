import React from "react";
import { FaTruckMedical } from "react-icons/fa6";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const Emergency = () => {
  return (
    <>
      {/* Emergency Services Section */}
      <section id="emergency" className="py-20 bg-blue-700 ">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto  px-4 items-center gap-28">
          <div className="justify-items-center mb-[-5rem] md:mb-0">
            <FaTruckMedical className="size-20 text-white " />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-5">24/7 Emergency Services</h3>
            <p className="mb-5 text-xl">
              Our emergency department is staffed around the clock with
              experienced medical professionals ready to handle any medical
              crisis.{" "}
            </p>
            <ul className="flex gap-3 items-center mb-5">
              <li className="rounded-full bg-white/20 p-2">
                <MdAccessTime className="text-white size-5" />
              </li>
              <li>Immediate response to critical conditions</li>
            </ul>
            <ul className="flex gap-3 items-center mb-5">
              <li className="rounded-full bg-white/20 p-2">
                <HiOutlineRectangleStack className="text-white size-5" />
              </li>
              <li>Sate-of-art emergency facilities</li>
            </ul>
            <ul className="flex gap-3 items-center">
              <li className="rounded-full bg-white/20 p-2">
                <IoCallOutline className="text-white size-5" />
              </li>
              <li>Emergency hotline: (555) 123-4567</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Emergency;
