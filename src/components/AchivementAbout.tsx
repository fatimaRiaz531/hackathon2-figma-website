import Image from 'next/image';

function AchivementAbout() {
  return (
    <section className="stats py-8 px-4 sm:py-12 sm:px-8 lg:px-16 bg-gray-50">
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Happy Customers */}
        <div className="stat group">
          <div className="number text-4xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
            15K
          </div>
          <p className="text-gray-500 text-base mt-2 group-hover:text-black transition-colors duration-300">
            Happy Customers
          </p>
        </div>

        {/* Monthly Visitors */}
        <div className="stat group">
          <div className="number text-4xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
            150K
          </div>
          <p className="text-gray-500 text-base mt-2 group-hover:text-black transition-colors duration-300">
            Monthly Visitors
          </p>
        </div>

        {/* Countries Worldwide */}
        <div className="stat group">
          <div className="number text-4xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
            15
          </div>
          <p className="text-gray-500 text-base mt-2 group-hover:text-black transition-colors duration-300">
            Countries Worldwide
          </p>
        </div>

        {/* Top Partners */}
        <div className="stat group">
          <div className="number text-4xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
            100+
          </div>
          <p className="text-gray-500 text-base mt-2 group-hover:text-black transition-colors duration-300">
            Top Partners
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 group">
        <Image
          src="/images/video.PNG"
          alt="video"
          width={1200}
          height={600}
          className="rounded-md mx-auto transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
        />
      </div>
    </section>
  );
}

export default AchivementAbout;
