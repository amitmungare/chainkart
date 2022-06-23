import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../components/E-Commerce/PaymentForm";
const stripePromise = loadStripe(
  "pk_test_51LC9yhSE5P4xQp6tex03MR2aoEiW5ZP1HvJ4ArhnZ4dN7fbBn5K6wlMrczHkpUJQSMLnr8ImJRE3G3rc17H1FPdg006fkGsf4G"
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
