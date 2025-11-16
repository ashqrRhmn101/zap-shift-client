import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    console.log(review)
  const { userName, review: testimonial, user_photoURL } = review;

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-teal-400 mb-3" />

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed border-l-2 border-teal-200 pl-4">
        {testimonial}
      </p>

      {/* Divider */}
      <div className="my-4 border-b border-dashed border-gray-300"></div>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-3">
        {/* User Image */}
        <img
          src={user_photoURL}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{userName}</h3>
          <p className="text-sm text-gray-500">Customer Review</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
