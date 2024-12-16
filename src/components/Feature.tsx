import React from 'react';

const posts = [
    {
        id: 1,
        image: '/images/feature/1.jpg',
        title: "Loudest à la Madison #1 (L'intégral)",
        description: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.',
        date: '22 April 2021',
        comments: 10,
    },
    {
        id: 2,
        image: '/images/feature/2.jpg',
        title: "Loudest à la Madison #1 (L'intégral)",
        description: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.',
        date: '22 April 2021',
        comments: 10,
    },
    {
        id: 3,
        image: '/images/feature/3.jpg',
        title: "Loudest à la Madison #1 (L'intégral)",
        description: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.',
        date: '22 April 2021',
        comments: 10,
    },
];

const FeaturedPosts = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16 py-8">
            <h2 className="text-2xl font-bold text-center mb-4">Featured Posts</h2>
            <p className="text-center text-gray-600 mb-8">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <img src={post.image} alt={post.title} className="w-[400px] h-[300px] object-cover" />
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
                        </div>
                        <div className="p-4">
                            <h4 className="text-xs text-blue-300 inline-block">Google</h4>
                            <span className="text-xs text-gray-500"> Trending New</span>
                            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span className="flex items-center">
                                    <svg
                                        xmlns="https://www.svgrepo.com/svg/514079/clock"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1 text-blue-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6l4 2"
                                        />
                                    </svg>
                                    {post.date}
                                </span>
                                <span className="flex items-center">
                                    <svg
                                        xmlns="https://www.svgrepo.com/svg/514079/clock"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1 text-green-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 9V5.25a3 3 0 00-3-3h-1.5a3 3 0 00-3 3V9"
                                        />
                                    </svg>
                                    {post.comments} comments
                                </span>
                            </div>
                            <div className="mt-4">
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-gray-600 hover:text-gray-800 flex items-center"
                                >
                                    Learn More
                                    <svg
                                        xmlns="https://www.svgrepo.com/svg/514079/clock"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#0000ff"
                                        className="w-4 h-4 ml-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 12h7.5m-3-3 3 3m-3 3-3-3"
                                        />
                                </svg>
                            </a>
                        </div>
                    </div>
                    </div>)
                )}
                </div></div>
         
  );
};

export default FeaturedPosts;
