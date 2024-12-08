// import Image from "next/image";

// function About() {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//         {/* Left Section */}
//         <div className="w-full md:w-2/3 text-center md:text-left p-4">
//           <h4 className="text-sm md:text-base lg:text-lg font-semibold">ABOUT COMPANY</h4>
//           <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-2">ABOUT US</h1>
//           <p className="pt-6 text-sm md:text-lg lg:text-xl">
//             We know how large object will act,
//             <br></br> but thing on a small scale
//           </p>
//           <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-sm lg:text-base py-2 px-4 rounded">
//             Get Quote now
//           </button>
//         </div>
      

//             {/* Right Section */}
//             <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Image
//         src="/images/girl.png" // Image ko 'public' folder ke andar rakhein
//         alt="Shopping Girl"
//         width={600} // Desired width
//         height={600} // Desired height
//         className="rounded-lg"
//       />
//     </div>
           
//         </div>
//     );
// }

// export default About;



import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
      {/* Left Section */}
      <div className="w-full md:w-2/3 text-center md:text-left p-4">
        <h4 className="text-sm md:text-base lg:text-lg font-semibold">ABOUT COMPANY</h4>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-2">ABOUT US</h1>
        <p className="pt-6 text-sm md:text-lg lg:text-xl">
          We know how large object will act,
          <br /> but thing on a small scale
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-sm lg:text-base py-2 px-4 rounded">
          Get Quote now
        </button>
      </div>

     {/* Right Section */}
     <div className="md:order-2">
          <Image
            src={"/images/girl.png"}
            alt="About Us"
            width={600} // Adjust width as needed
            height={400} // Adjust height as needed
            // className="rounded-lg shadow-md"
          />
        </div>
        </div>
  );
}

export default About;
