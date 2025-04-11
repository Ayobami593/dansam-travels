import { Card, Carousel } from "antd";
import React from "react";

const CustomerReview = () => {
  const customerReview = [
    {
      comment:
        "I was skeptical about using a travel company, but Dansam Travels proved to be an excellent choice. Their competitive pricing and exceptional service made our family vacation truly unforgettable.",
      name: "O. Samson",
    },
    {
      comment:
        "I've never been impressed with a travel company like I was with Dansams travels and educonsult. Their professionalism, expertise, and dedication to customer satisfaction are truly exceptional.",
      name: "A. Samuel",
    },
  ];
  return (
    <Carousel autoplay dots={true} autoplaySpeed={3000} effect="fade">
      {customerReview.map((review, index) => (
        <div key={index} className="font-suse">
          <Card
            style={{
              margin: "0 auto",
              textAlign: "center",
              padding: "20px",
              borderRadius: "0.5rem",
              background: "#0074D9",
              color: "white",
            }}
          >
            <p>{review.comment}</p>
            <h3 className="mt-4">~{review.name}</h3>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomerReview;
