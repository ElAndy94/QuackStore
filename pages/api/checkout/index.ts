const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
  const { totalPrice } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    // FAKE NOT SECURE, DO NOT USE IN PRODUCTION!
    amount: totalPrice,
    currency: 'gbp',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
