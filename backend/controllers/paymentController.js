const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(
  "sk_test_51LC9yhSE5P4xQp6t5j96GkkhWj7FvavqOdcaEGbEXbRc8vfY4T65EtXvyjpHdxy2QoUQZk6Hev5wxAp2PHHlbooX00B581yuU3"
);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  // console.log("Hi");
  const { Amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Amount * 100,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  // console.log(paymentIntent);

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// exports.processPayment = catchAsyncErrors(async (req, res, next) => {
//   const myPayment = await stripe.paymentIntents.create({
//     amount: req.body.amount,
//     currency: "inr",
//     metadata: {
//       company: "Ecommerce",
//     },
//   });

//   res
//     .status(200)
//     .json({ success: true, clientSecret: myPayment.client_secret });
// });

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
