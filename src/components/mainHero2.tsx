import React from 'react';

export default function MainHero2() {
    return (
        <div>
            {/* Editor's Pick Section */}
            <section className="py-12 bg-white relative z-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        EDITOR'S PICK
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        Problems trying to resolve the conflict between
                    </p>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {/* Men */}
                        <div className="relative group">
                            <img
                                src="/images/mainpage/capboy.jpg"
                                alt="Men"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-white text-black py-2 px-4 rounded-md text-sm font-semibold">
                                    MEN
                                </span>
                            </div>
                        </div>
                        {/* Women */}
                        <div className="relative group">
                            <img
                                src="/images/mainpage/brownhair.jpg"
                                alt="Women"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-white text-black py-2 px-4 rounded-md text-sm font-semibold">
                                    WOMEN
                                </span>
                            </div>
                        </div>
                        {/* Accessories */}
                        <div className="grid grid-cols-1 gap-6">
                            {/* Accessories */}
                            <div className="relative group">
                                <img
                                    src="/images/mainpage/browncote.jpg"
                                    alt="Accessories"
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="bg-white text-black py-2 px-4 rounded-md text-sm font-semibold">
                                        ACCESSORIES
                                    </span>
                                </div>
                            </div>

                            {/* Kids */}
                            <div className="relative group">
                                <img
                                    src="/images/mainpage/yellowshirt.jpg"
                                    alt="Kids"
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="bg-white text-black py-2 px-4 rounded-md text-sm font-semibold">
                                        KIDS
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}