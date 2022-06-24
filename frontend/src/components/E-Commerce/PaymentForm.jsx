import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { clearCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const PaymentForm = () => {
  const { user } = useSelector((state) => state.user);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "stripeapikey"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          toast.success("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          toast.info("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          toast.error("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          toast.error("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    dispatch(clearCart());

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/profile/orders",
        payment_method_data: {
          billing_details: {
            name: `${user.firstname} ${user.lastname}`,
            address: `${user.hnumber} , ${user.landmark}, ${user.city}-${user.state},${user.pincode}`,
            email: user.email,
          },
        },
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
      toast.error(error.message);
    } else {
      setMessage("An unexpected error occurred.");
      toast.error("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div className="h-screen flex justify-center">
      <form className="form" id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button
          className="button"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
