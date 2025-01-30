import Layout from "@/components/Layout";
import { services } from "@/utils";
import ServiceCard from "@/components/ServiceCard";
export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center font-medium text-lg md:text-2xl space-y-5">
        <div className="bg-homeHero text-white py-20 md:py-16 space-y-2 rounded-md">
          <p className="text-center ">Welcome</p>
          <p className="text-center ">We are Dansam</p>
          <p className="text-center">
            We deal in education consulting and travel assistance
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xl md:text-3xl text-center">Our Services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                images={service.images}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xl md:text-3xl text-center">Why Choose Us</p>
          <div>
            <div>
              <p className="text-[#235e5e]">We are the best in what we do!</p>{" "}
              <p></p>
            </div>
            <p>
              <strong>:</strong>
            </p>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
}
