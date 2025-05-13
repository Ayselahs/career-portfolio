import Image from "next/image"

const workItems = [
    {
        title: "Cyber",
        tags: ["Microsoft", "Security"],
        year: 2025,
        image: "/BehanceTitle.png",
    }
]

export default function SelectedWorkSection() {
    return(
        <section className="bg-gray-50 py-16 px-6 md:px-20">
            <div className="flex flex-col md:flex-row gap-8">
                // Sidebar
                <div className="md:w-1/4">
                    <h2 className="text-3xl font-semibold mb-4">Showcased <br />Work</h2>
                    <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">See All</button>
                </div>

                //Work
                <div className="md:w-3/4 space-y-10">
                    {workItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">{item.title}</p>
                                    <div className="flex gap-2 mt-2">
                                        {item.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="text-xs px-3 py-1 bg-blue-50 text-blue-500 rounded-full">{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400">{item.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>        
    )
}
