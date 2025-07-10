import React from "react";
import { FaClinicMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <section className="py-10 bg-blue-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex text-white gap-3 mb-5">
                <FaClinicMedical className=" text-2xl" />
                <span className="font-bold text-xl text-white ">MediCare+</span>
              </div>
              <p className="text-white/80 text-md">
                Providing compassionate healthcare services since 2005.
              </p>
            </div>
            <div>
              <p className="font-bold text-xl text-white mb-5">Quick Links</p>
              <ul className=" space-y-2 ">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#doctors" className="text-white/80 hover:text-white">
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="#emergency" className="text-white/80 hover:text-white">
                    Emergency
                  </a>
                </li>
                <li>
                  <a href="#pharmacy" className="text-white/80 hover:text-white">
                    Pharmacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl text-white mb-5">Contact Us</p>
              <ul className=" space-y-1">
                <li>
                  <a href="#" className="text-white/80">
                    123 Medical Center Drive Healthville, HV 12345
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80">
                    Phone: (555) 987-6543
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80">
                    Email: info@medicareplus.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl text-white mb-5">Opening Hours</p>
              <ul className=" space-y-2">
                <li>
                  <p className="text-white/80">Monday - Friday: 8am - 8pm</p>
                </li>
                <li>
                  <p className="text-white/80">Saturday: 9am-5pm</p>
                </li>
                <li>
                  <p className="text-white/80">Sunday: Emergency only</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="border-t border-white/10 mt-12 pt-8 text-center text-white/80">
            &copy; 2025 MediCare+. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
