import Image from 'next/image';

export default function Universe() {
    return (
        <div className="bg-white flex flex-col md:flex-row"> {/* Change flex direction on md screen */}
            <div className="md:w-1/2 w-full"> {/* Image div takes full width on small screens */}
                <Image
                    src="/images/universe/universe.jpg"
                    alt="hero right"
                    width={700}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="text-black text-left flex flex-col justify-center items-start px-16 py-20 md:w-1/2">
                <h2 className="text-sm text-gray-400 mb-4">SUMMER 2020</h2>
                <h3 className="text-4xl font-bold mb-6">Parts of the Neural <br /> Universe</h3>
                <p className="text-base mb-8">
                    We know how large objects will act,<br />but things
                    on a small scale.
                </p>

                {/* Wrapping buttons div in a flex container to push them down on small screens */}
                <div className="flex flex-col md:flex-row items-center gap-4 mt-8 md:mt-0">
                    <button className="bg-[#2DC071] text-white font-medium py-2 px-4 rounded hover:bg-green-700 transition-all">
                        BUY NOW
                    </button>
                    <button className="bg-transparent border border-green-500 text-green-500 font-medium py-2 px-4 rounded hover:bg-green-500 hover:text-white">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
