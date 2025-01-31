import Layout from "@/components/Layout";
import { services, whyChooseUs } from "@/utils";
import ServiceCard from "@/components/ServiceCard";
import CustomerReview from "@/components/CustomerReview";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center space-y-5 font-suse">
        <div className="font-medium text-lg md:text-2xl bg-homeHero text-white py-20 md:py-16 space-y-2 rounded-md">
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
          <p className="text-xl md:text-3xl text-center font-semibold">
            Why Choose Us
          </p>
          <div className="font-medium text-base space-y-4">
            <div>
              <p className="text-center">
                At Dansam Travels, we understand that planning a trip can be
                overwhelming, especially with the numerous options available.
                That's why we're committed to providing personalized and
                hassle-free that exceed your expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              {whyChooseUs.map((choose) => (
                <p className="text-justify">
                  <strong>{choose.title}:</strong> {choose.description}
                </p>
              ))}
            </div>
          </div>
          <div></div>
        </div>
        {/* area showing customers feedback staticly */}
        <div className="space-y-4">
          <p className="text-xl md:text-3xl text-center font-semibold">
            Here Some of What Our Clients say
          </p>
          <CustomerReview />
        </div>
      </div>
    </Layout>
  );
}
