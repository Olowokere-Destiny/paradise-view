import { Stripe, loadStripe } from "@stripe/stripe-js";
interface CheckoutProps {
  lineItems: [{ price: string | undefined; quantity: number }];
}
export default async function stripeCheckout({ lineItems }: CheckoutProps) {
  let stripePromise: Promise<Stripe | null>;

  function getStripe() {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!);
    }
    return stripePromise;
  }

  const stripe = await getStripe();
  await stripe?.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
