import Layout from "@/components/Layout";
import { destinations, services, whyChooseUs } from "@/utils";
import ServiceCard from "@/components/ServiceCard";
import CustomerReview from "@/components/CustomerReview";
import Link from "next/link";

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
                That&apos;s why we&apos;re committed to providing personalized
                and hassle-free that exceed your expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              {whyChooseUs.map((choose, index) => (
                <p className="text-justify" key={index}>
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
            What Our Clients say
          </p>
          <CustomerReview />
        </div>
        <div className="space-y-4">
          <p className="text-xl md:text-3xl text-center font-semibold">
            Choose your Destination
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {destinations.map((destination, index) => (
              <Link
                key={index}
                href={destination.link}
                className="hover:text-inherit rounded-lg shadow-lg mr-0 md:mr-4 mb-4 md:mb-0"
              >
                <img
                  src={destination.images}
                  alt=""
                  className="h-60 w-full rounded-t-lg"
                />
                <p className="font-semibold text-lg text-center py-6">
                  {destination.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
