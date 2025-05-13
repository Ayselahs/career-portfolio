import Link from "next/link"


export default function Header() {
    return (
        <header className="sticky top-4 z-10 mx-auto flex max-w-5xl items-center justify-between rounded-full bg-white px-6 py-3 shadow-md">
            <div className="text-lg font-semibold">Ayselah Smith</div>
            <button className="rounded-full bg-black px-4 py-2 text-white hover:bg-gray-800">
                Contact
            </button>
        </header>

    )
}
