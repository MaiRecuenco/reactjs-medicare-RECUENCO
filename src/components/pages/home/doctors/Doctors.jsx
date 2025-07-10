import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import CardDoctors from "../../../partials/CardDoctors";

const Doctors = () => {
  return (
    <>
      {/* Doctors */}
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-blue-800 font-bold mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-gray-600">
              Our team of board-certified physicians are dedicated to your
              health and wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardDoctors
              icon={FaUserDoctor}
              title={"Dr. Sarah Johnson"}
              position={"General Practitioner"}
              description={
                "With over 15 years of experience, Dr. Johnson provides compassionate primary care."
              }
            />
            <CardDoctors
              icon={FaUserDoctor}
              title={"Dr. Michael Chen"}
              position={"Cardiologist"}
              description={
                "Specializing in interventional cardiology with a focus on preventive care."
              }
            />
            <CardDoctors
              icon={FaUserDoctor}
              title={"Dr. Emily Rodrigues"}
              position={"Pediatrician"}
              description={
                "Dedicated to providing exceptional care for infants, children, and adolescents."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
