import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { stripe, PLANS } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const plan = formData.get('plan') as string;

    if (!plan || !['PRO', 'ENTERPRISE'].includes(plan)) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const planData = PLANS[plan as keyof typeof PLANS];

    // Crea una Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `SnappClip ${planData.name}`,
              description: planData.features.join(', '),
            },
            unit_amount: planData.price * 100, // Stripe usa centesimi
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.nextUrl.origin}/dashboard?success=true`,
      cancel_url: `${req.nextUrl.origin}/pricing?canceled=true`,
      client_reference_id: userId,
      metadata: {
        userId,
        plan,
      },
    });

    return NextResponse.redirect(session.url!);
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
