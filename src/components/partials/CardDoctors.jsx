import React from "react";

const CardDoctors = ({ icon: Icon, title, position, description }) => {
  return (
    <>
      {/* Doctor 1 */}
      <div className="justify-items-center text-center rounded-md shadow-md px-5 py-10 bg-white">
        <div className="rounded-full w-fit p-10 bg-blue-200 ">
          <Icon className="text-3xl text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-blue-800 py-5">{title}</h3>
        <p className="text-blue-600 mb-4">{position}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
};

export default CardDoctors;
