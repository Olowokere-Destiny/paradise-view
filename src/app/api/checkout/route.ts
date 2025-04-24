import { CheckoutPayload } from "@/app/hotels/[hotelId]/page";
import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!);

const zeroDecimalCurrencies = [
  "BIF",
  "CLP",
  "DJF",
  "GNF",
  "JPY",
  "KMF",
  "KRW",
  "MGA",
  "PYG",
  "RWF",
  "UGX",
  "VND",
  "VUV",
  "XAF",
  "XOF",
  "XPF",
];

function formatAmount(amount: number, currency: string) {
  return zeroDecimalCurrencies.includes(currency.toUpperCase())
    ? Math.round(amount)
    : Math.round(amount * 100);
}

export async function POST(req: NextRequest) {
  try {
    const body: CheckoutPayload = await req.json();
    const { amount, currency, name, images, cancel_url } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name,
              images,
            },
            unit_amount: formatAmount(amount, currency),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: process.env.NEXT_PUBLIC_PROD_BASE_URL!,
      cancel_url,
    });

    return Response.json(
      { url: session.url },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.log(err)
  }
}
