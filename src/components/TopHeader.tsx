function TopHeader() {
  return (
    <div className='w-full bg-green-700 text-white flex justify-evenly sm:h-[40px] md:h-[30px] lg:h-[38px] xl:h-[48px] 2xl:h-[50px]'>
      {/* Left side */}
      <div className='flex items-center gap-2'>
        <h1 className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
          {/* Display important words for small screens */}
          <span className="sm:inline text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Summer Sale - OFF 50%!
          </span>
          {/* Full message for larger screens */}
          <span className="hidden sm:hidden md:inline text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
        </h1>
        <a href='/products'>
        <button
         className='font-bold underline text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
          ShopNow
        </button>
        </a>
      </div>

      
    </div>
  );
}

export default TopHeader;