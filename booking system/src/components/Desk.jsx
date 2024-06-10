import { useState } from "react";

const desksInitialState = Array(15)
  .fill({ booked: false, type: "individual" })
  .map((desk, index) => {
    return { ...desk, type: index < 10 ? "individual" : "team" };
  });

const membershipTiers = {
  basic: 10,
  premium: 15,
  executive: 20,
  team: 25,
};

const discountThreshold = 3;
const discountRate = 0.1;

const Desk = () => {
  const [desks, setDesks] = useState(desksInitialState);
  const [totalCharge, setTotalCharge] = useState(0);

  const bookDesk = (index) => {
    if (desks[index].booked) {
      alert("This desk is already booked.");
      return;
    }

    const hours = prompt("Enter the number of hours:");
    const membershipTier = prompt(
      "Enter your membership tier (basic, premium, executive):"
    ).toLowerCase();

    if (hours && membershipTier && membershipTiers[membershipTier]) {
      let rate = membershipTiers[membershipTier];
      if (desks[index].type === "team") {
        rate = membershipTiers["team"];
      }

      let total = rate * hours;
      if (hours > discountThreshold) {
        total -= total * discountRate;
      }

      setTotalCharge(total.toFixed(2));
      const updatedDesks = [...desks];
      updatedDesks[index].booked = true;
      setDesks(updatedDesks);
    } else {
      alert("Invalid input. Please try again.");
    }
  };

  return (
    <div id="desks-container">
      {desks.map((desk, index) => (
        <div
          key={index}
          className={`desk ${desk.booked ? "booked" : ""}`}
          onClick={() => bookDesk(index)}
        >
          {desk.type === "individual" ? "Individual" : "Team"}
        </div>
      ))}
    </div>
  );
};

export default Desk;
