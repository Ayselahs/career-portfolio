import React from "react"
import Header from "./header"
import Image from "next/image"
//import profileImg from

export default function HeroSection() {
    return (
        
        <section className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">
            <Header />
            //Left section
            <div className="max-w-xl">
                <div className="mb-4">
                    <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                        Available for Work
                    </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    Hi I'm a <br />
                    <span className="text-gray-900">Security Analyst ©</span>
                </h1>
                <p className="text-gray-600 mb-6">

                </p>
                <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition">
                    Let's Connect
                </button>
            </div>

            //Right section
            <div className="mt-10 md:mt-0 flex flex-col items-center space-y-4">
                <div className="flex gap-4">
                    <div className="p-4 bg-white rounded-xl shadow-md w-40 text-sm text-center">
                        <p className="font-semibold">Ayselah Smith</p>
                        <p className="text-gray-500 text-xs">Middle Tennessee</p>
                        <p className="mt-2 text-blue-600 text-xs">Cybersecurity</p>
                    </div>
                    <Image
                        src="/BehanceTitle.png"
                        alt="Profile"
                        className="rounded-xl object-cover"
                        width={120}
                        height={120}
                    />
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl shadow-md text-white text-sm text-center w-full">
                    Catch me on these socials!
                </div>

                // Social Icons
                <div className="flex gap-4 mt-4">
                    <div className="w-8 h-8 ng-gray-200 rounded-full"></div>
                    <div className="w-8 h-8 ng-gray-200 rounded-full"></div>
                    <div className="w-8 h-8 ng-gray-200 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}