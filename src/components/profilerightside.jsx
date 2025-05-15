import Image from "next/image";

export default function RightSide() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 gap-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full md:max-w-xl text-xl">
        <p className="font-semibold text-gray-900">Ayselah Smith</p>
        <p className="text-gray-500 text-xs">Middle Tennessee</p>
        <div className="mt-2 rounded-xl overflow-hidden">
          <Image
            src="/BehanceTitle.png"
            alt="Profile"
            width={180}
            height={90}
            className="rounded-2xl object-cover shadow-md"
          />
        </div>
        <div className="mt-2 text-xs flex items-center gap-1">
          <span className="bg-black text-white px-2 py-0.5 rounded-full text-[10px]">
            Microsoft & Linux Security
          </span>
        </div>
        <p className="text-blue-500 mt-2 text-xs">Certified</p>
      </div>

      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex items-center justify-center gap-2 w-16 h-16 aspect-square">
          <Image
            src="/BehanceTitle.png"
            alt="Github"
            width={60}
            height={60}
            className="rounded-full shadow-md object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 w-16 h-16 aspect-square">
          <Image
            src="/BehanceTitle.png"
            alt="LinkedIn"
            width={60}
            height={60}
            className="rounded-full shadow-md object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 w-16 h-16 aspect-square">
          <Image
            src="/BehanceTitle.png"
            alt="Behance"
            width={60}
            height={60}
            className="rounded-full shadow-md object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 w-16 h-16 aspect-square">
          <Image
            src="/BehanceTitle.png"
            alt="Behance"
            width={60}
            height={60}
            className="rounded-full shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
