import Image from "next/image";

export default function GreenBG() {
    return (
        <div className="bg-[#23856d] flex">
            {/* Left div */}
            <div className="text-white text-left ml-24 flex flex-col justify-center items-start">
                <h2 className="text-xl  mb-4">SUMMER 2020</h2>
                <h3 className="text-4xl font-bold mb-2">
                    Vita Classic <br />
                    <span className="font-bold">Product</span>
                </h3>

                <p className="text-base">
                    We know how large objects will act. We know <br />
                    how are objects will act. We know
                </p>
                <div className="flex items-center mt-8">
                    <span className="text-white font-bold text-xl mr-4">$16.48</span>
                    <button className="bg-[#2DC071] text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-all">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Right div */}
            <div>
                <Image
                    src="/images/mainpage/greenbg.png"
                    alt="hero right"
                    width={700}
                    height={700}
                    className="w-full h-auto object-cover bg-transparent ml-52"
                />
            </div>
        </div>
    );
}