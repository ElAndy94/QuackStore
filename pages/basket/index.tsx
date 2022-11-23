import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Button from '../../components/UI/Buttons';
import useBasket from '../../store/basket';
import LargeCard from '../../components/ProductsView/LargeCard';
import Dialog from '../../components/Dialog/Dialog';
import Checkout from '../../components/Checkout/Checkout';
import clsx from 'clsx';

type PromoCode = {
  code: string;
  discount: number;
};

const Basket = () => {
  const { basketProducts, totalPrice, removeFromBasket, updateProductQuantity } =
    useBasket();
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(totalPrice);
  const [appliedPromo, setAppliedPromo] = useState<number>(0);
  const [promo, setPromo] = useState<string>('');
  const shippingCost = 5;

  const promoCodes: PromoCode[] = [
    {
      code: 'QUACK10',
      discount: 10,
    },
    {
      code: 'QUACK20',
      discount: 20,
    },
    {
      code: 'QUACK30',
      discount: 30,
    },
  ];

  const handleDiscount = (code: string) => {
    const item = promoCodes.find(promo => promo.code === code);
    if (item) {
      setAppliedPromo(totalPrice * (item.discount / 100));
      setTotal(totalPrice - appliedPromo);
    }
  };

  return (
    <Layout
      seo={{
        title: 'Basket | QuackStore',
        description: 'Basket products | QuackStore',
        canonicalUrl: 'https://quackstore.com/Basket',
      }}
    >
      <div className="wrapper mt-20">
        <section className="w-4/5">
          <div>
            <h1 className="font-bold text-primary tracking-tight">Shopping cart</h1>
            <p className="text-granite-gray">
              Total:{' '}
              <span className="text-primary font-medium">{basketProducts.length}</span>{' '}
              items
            </p>
          </div>
          {basketProducts.length > 0 ? (
            <ul className="flex flex-col gap-8 mt-10">
              {basketProducts.map((product, index) => {
                return (
                  <li key={product.sku.sys.id}>
                    {index !== 0 && <hr />}
                    <LargeCard
                      product={product}
                      onRemove={() => removeFromBasket(product)}
                      onIncrease={() => updateProductQuantity(product, '+')}
                      onDecrease={() => updateProductQuantity(product, '-')}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <figure className="opacity-40">
              <Image
                src="/assets/images/empty-cart.png"
                alt="empty cart"
                width={800}
                height={600}
              />
            </figure>
          )}
        </section>
        <section className="border p-4">
          <article className="flex flex-col gap-5 p-6 text-primary border-b">
            <h5 className="font-bold text-primary tracking-tight text-xl">
              Order Summary
            </h5>
            <div className="flex justify-between">
              <p>Total products</p>
              <p>£{totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping costs</p>
              <p>£{shippingCost}</p>
            </div>
            <div className="mt-5 flex justify-center w-full">
              <input
                type="text"
                placeholder="Promo Code"
                value={promo}
                onChange={e => setPromo(e.target.value)}
                className="border focus:outline-none rounded-l px-5 py-2 w-2/3"
              />

              <Button
                type="dark"
                className="rounded-r focus:rounded-l-none"
                onClick={() => handleDiscount(promo)}
              >
                Apply
              </Button>
            </div>
            {!promoCodes.find(item => item.code === promo) && (
              <p className="-m-3 text-md text-magenta ml-1">
                Please enter valid promo code!
              </p>
            )}
          </article>
          <article className="flex flex-col mt-14 gap-5 p-6 text-primary">
            <div className="flex justify-between">
              <p>Applied promo code</p>
              <p className={clsx('text-magenta')}>-£{appliedPromo}</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>£{total}</p>
            </div>
          </article>
          <article className="flex flex-col justify-between gap-5 p-6">
            <Button type="dark" size="full" onClick={() => setOpen(true)}>
              Proceed to Checkout
            </Button>
            <Button type="outline" size="full">
              Member Checkout
            </Button>
          </article>
          <article className="flex flex-col justify-between mt-5">
            <p className="text-primary">Accepted payment methods</p>
            <figure className="mt-6">
              <Image
                src="/assets/images/payment-methods.png"
                alt="payment methods"
                width={500}
                height={70}
              />
            </figure>
          </article>
        </section>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} title="Checkout">
        <Checkout />
      </Dialog>
    </Layout>
  );
};

export default Basket;
