import React from "react";
import CardServices from "../../../partials/CardServices";
import { FaHeartPulse, FaUserDoctor } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";

const Services = () => {
  return (
    <>
      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-blue-800 font-bold mb-4">
              Our Medical Services
            </h2>
            <p className="text-gray-600">
              We offer a wide range of healthcare services to meet all your
              medical needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardServices
              icon={FaUserDoctor}
              title={"General Consultation"}
              description={
                "Comprehensive health assessments and personalized treatmentplans from our experienced physicians."
              }
            />
            <CardServices
              icon={FaHeartPulse}
              title={"Cardiology"}
              description={
                "Advanced heart care including diagnostics, treatment, and preventive cardiology services."
              }
            />
            <CardServices
              icon={FaPills}
              title={"Internal Medicine"}
              description={
                "Specialized care for complex illnesses and chronic conditions in adults."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
