import React from "react";
import bookingImg from "../../assets/bookingIcon.png";
import deliveryImg from "../../assets/delivery-van.png";
import safeImg from "../../assets/safe-delivery.png";

const Works = () => {
  const delivery = [
    {
      image: bookingImg,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      image: bookingImg,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      image: deliveryImg,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      image: safeImg,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="py-14 px-10">
      <h2 className="text-3xl font-bold mb-9">How it Works</h2>
      <div className="flex flex-col md:flex-row gap-5">
        {delivery.map((card, i) => (
          <div key={i} className="bg-white rounded-lg p-5">
            <div>
              <img src={card.image} className="h-[56px]" alt="" />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-secondary">
                {card.title}
              </h2>
              <p className="text-[#606060]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
