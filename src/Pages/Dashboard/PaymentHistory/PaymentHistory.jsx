import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payment", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user.email}`);
      return res.data;
    },
  });


  return (
    <div>
      <h1>PAyment {payments.length}</h1>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Amount</th>
        <th>Paid Time</th>
        <th>Transaction Id</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((payments,i) => <tr key={payments._id}>
        <th>{i +1}</th>
        <td>{payments.name}</td>
        <td>{payments.amount}</td>
        <td>{payments.paidAt}</td>
        <td>{payments.transactionId}</td>
      </tr>)
      }
    
    </tbody>
  </table>
</div>
    </div>
  );
};

export default PaymentHistory;
