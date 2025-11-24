import React from "react";
import { Link } from "react-router";

const paymentCancelled = () => {
  return (
    <div>
      <h2>Your Payment is Cancelled</h2>
      <Link to="/dashboard/my-parcels">
        <button className="btn btn-primary text-black">Try Again</button>
      </Link>
    </div>
  );
};

export default paymentCancelled;
