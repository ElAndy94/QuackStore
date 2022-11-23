import { useEffect, useState } from 'react';
import { Appearance, loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import useBasket from '../../store/basket';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState();
  const { basketProducts, totalPrice } = useBasket();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // NOT SECURE TESTING ONLY.
      body: JSON.stringify({ items: basketProducts, totalPrice: totalPrice }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [basketProducts, totalPrice]);

  const appearance: Appearance = {
    theme: 'stripe',
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  //   4242 4242 4242 4242
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} key={clientSecret}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent && paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/basket/payment-complete',
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(
        error.message || 'There was an error processing your payment. Please try again.'
      );
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <form
      id="payment-form"
      className="w-full min-w-[500px] p-10 rounded-md shadow-md self-center"
      onSubmit={handleSubmit}
    >
      <PaymentElement id="payment-element" />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="w-full h-12 text-white rounded-md mt-6 shadow-lg bg-[#5469d4] hover:contrast-[115] disabled:opacity-50 disabled:cursor-none"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
        </span>
      </button>
      {message && <div className="mt-4">{message}</div>}
    </form>
  );
}
