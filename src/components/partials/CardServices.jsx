import React from "react";

const CardServices = ({ icon: Icon, title, description }) => {
  return (
    <>
      {/* Service 1 */}
      <div className="justify-items-center text-center rounded-md shadow-md p-10 bg-gray-50">
        <div className="rounded-full w-fit p-6 bg-blue-100 ">
            <Icon className="text-2xl text-blue-600" />
        </div>
        <h4 className="text-xl font-bold text-blue-800 py-5">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
};

export default CardServices;
