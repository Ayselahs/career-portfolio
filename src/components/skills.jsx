export default function SkillsSection() {
    return (
        <section id="skills" className="bg-gray-50 py-16 px-6 md:px-20">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Section */}
                <div className="md:w-1/3">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">Certified <br />Skills</h2>
                </div>
                 {/* Service Cards */}
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Cards */}
                    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between min-h-[180px]">
                        <p className="text-gray-600 mb-2 text-sm mb-3">

                        </p>
                        
                        <span className="inline-block text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                            Comptia Security+ Certified
                        </span>
                    </div>
                    {/* Service Cards */}
                    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between min-h-[180px]">
                        <p className="text-gray-600 mb-2 text-sm mb-3">

                        </p>
                        
                        <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                            Comptia Security+ Certified
                        </span>
                    </div>
                    {/* Service Cards */}
                    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between min-h-[180px]">
                        <p className="text-gray-600 mb-2 text-sm mb-3">

                        </p>
                        
                        <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                            Comptia Security+ Certified
                        </span>
                    </div>
                    {/* Service Cards */}
                    <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between min-h-[180px]">
                        <p className="text-gray-600 mb-2 text-sm mb-3">

                        </p>
                        
                        <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                            Comptia Security+ Certified
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}