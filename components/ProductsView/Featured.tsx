import Link from 'next/link';
import { FC } from 'react';
import Icon from '../UI/Icon';
import Image from 'next/image';
import Rating from '../UI/Rating';
import { Product } from '../../utils/helpers/types/product';
interface Props {
  title: string;
  products: Product[];
}

const Featured: FC<Props> = ({ products, title }) => {
  return (
    <section className="wrapper flex-col">
      <article className="flex w-full justify-between">
        <h2 className="text-primary font-bold leading-[80px] tracking-tighter">
          {title}
        </h2>
        <Link href="/products">
          <a href="replace" className="flex items-center gap-2 text-magenta">
            view all <Icon name="chevron-magenta" width="6px" height="12px" />
          </a>
        </Link>
      </article>
      <ul className="overflow-x-scroll mt-10 h-[340px] flex gap-4">
        {products.map(product => {
          return (
            <li key={product.sys.id}>
              <Link href={`/products${product.slug}`}>
                <article className="flex flex-col justify-between w-[300px] h-full cursor-pointer">
                  <figure>
                    <Image
                      src={
                        product.imagesCollection.items &&
                        product.imagesCollection.items[0].url
                      }
                      width="300px"
                      height="180.82px"
                      alt="shoe1"
                    />
                  </figure>
                  <div className="flex flex-col justify-between h-full w-full py-4">
                    <Rating rating={product.rating} />
                    <div className="flex flex-col justify-between">
                      <p className="text-base">{product.name}</p>
                      <p className="font-bold text-lg">£{product.price}</p>
                    </div>
                  </div>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Featured;
