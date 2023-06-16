import React from "react";

function TaxCalculator() {
  return (
    <div>
      <h1>Calculate My Income Tax</h1>
      <input
        type="number"
        name="income"
        id="income"
        placeholder="Enter your Income"
      />
    </div>
  );
}

export default TaxCalculator;
