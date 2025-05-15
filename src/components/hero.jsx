import React from "react";
import Header from "./header";
import Image from "next/image";
import RightSide from "./profilerightside";
//import profileImg from

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-between py-16 px-6 md:px-20 gap-10">
      {/* Left section */}
      <div className="">
        <div className="mb-4">
          <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
            Available for Work
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Hi I'm a <br />
          <span className="text-gray-900">Security Analyst ©</span>
        </h1>
        <p className="text-gray-600 mb-6">
          <b>
            Cybersecurity Professional | Masters in Web Design & Communications
            | Bachelors in Digital Arts & Sciences
          </b>
          <br />
          Passionate about technology and committed to continuous learning, I am
          particularly interested in opportunities that
          <br /> allow me to contribute to innovative solutions and enhance user
          experiences.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition">
          Let's Connect
        </button>
      </div>
      <RightSide className="" />
    </section>
  );
}
