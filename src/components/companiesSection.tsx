import Image from "next/image";

const CompaniesSection = () => {
  const companies = [
    { name: "Hooli", logo: "/images/companieslogo/hooli.png" },
    { name: "Lyft", logo: "/images/companieslogo/lyft.png" },
    { name: "Leaf", logo: "/images/companieslogo/leaf.png" },
    { name: "Stripe", logo: "/images/companieslogo/stripe.png" },
    { name: "AWS", logo: "/images/companieslogo/aws.png" },
    { name: "Reddit", logo: "/images/companieslogo/face.png" },
  ];
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-center">
     

      {/* Companies Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {companies.map((company, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;

