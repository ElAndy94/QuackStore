import Link from 'next/link';
import { FC } from 'react';
import Icon from '../UI/Icon';
import Image from 'next/image';
import Rating from '../UI/Rating';

type Products = {
  sys: {
    id: string;
  };
  rating: number;
  /** Name */
  name: string;
  /** Description */
  description: Document;
  /** Price */
  price: string;
  /** Size */
  size: ('3' | '4' | '5' | '6' | '7' | '8' | '9' | '10')[];
  /** ReleaseDate */
  releaseDate: string;
  /** Brand */
  brand:
    | 'Nike'
    | 'Adidas'
    | 'Adidas Originals'
    | 'Asics'
    | 'B Malone'
    | 'BOSS'
    | 'EA7'
    | 'Emporio Armani EA7'
    | 'Lacoste'
    | 'McKenzie'
    | 'New Balance'
    | 'On Running'
    | 'Puma'
    | 'Reebok';
  /** Style */
  style:
    | 'Trainers Classic'
    | 'Trainers'
    | 'Canvas & Plimsolls'
    | 'Hi-Tops'
    | 'Modern Trainers'
    | 'Running Shoes'
    | 'Football Boots'
    | 'Training Footwear'
    | 'Trail Footwear'
    | 'Flip Flops & Slides'
    | 'Boots & Shoes';
  /** NumberOfSales */
  numberOfSales: number;
  /** InStock */
  inStock: boolean;
  /** images */
  imagesCollection: any;
  /** Department */
  department: 'Mens' | 'Womans' | 'Kids';
  /** Colors */
  colors: 'White' | 'Black' | 'Blue' | 'Green' | 'Yellow' | 'Pink';
  /** Activity */
  activity: 'Indoor' | 'Outdoor';
};
interface Props {
  title: string;
  products: Products[];
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
          const productImages = product.imagesCollection.items;
          return (
            <li key={product.sys.id}>
              <Link href={`/products`}>
                <article className="flex flex-col justify-between w-[300px] h-full cursor-pointer">
                  <figure>
                    <Image
                      src={productImages && (productImages[0].url as string)}
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
