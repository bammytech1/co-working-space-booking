import React from "react";

const Dashboard = ({ bookings }) => {
  const revenueByTier = bookings.reduce((acc, booking) => {
    if (!acc[booking.membershipTier]) {
      acc[booking.membershipTier] = 0;
    }
    acc[booking.membershipTier] += parseFloat(booking.total);
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <h2>Revenue Dashboard</h2>
      <ul>
        {Object.keys(revenueByTier).map((tier) => (
          <li key={tier}>
            {tier.charAt(0).toUpperCase() + tier.slice(1)}: $
            {revenueByTier[tier].toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
