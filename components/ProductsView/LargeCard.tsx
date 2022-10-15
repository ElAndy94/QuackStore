import React, { useState } from 'react';
import { BasketProduct } from '../../utils/helpers/types/product';
import Image from 'next/image';
interface Props {
  product: BasketProduct;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const LargeCard = ({ product, onRemove, onIncrease, onDecrease }: Props) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(product.quantity);

  return (
    <article className="flex w-full">
      <figure className="w-1/2 h-full">
        <Image
          src={product.imagesCollection.items[0].url}
          alt={product.imagesCollection.items[0].title}
          width={product.imagesCollection.items[0].width}
          height={product.imagesCollection.items[0].height}
        />
      </figure>
      <div className="px-10 w-full flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-semibold">{product.name}</h5>
            <p className="text-primary font-medium text-lg">£{product.sku.price}</p>
          </div>
          <p className="text-granite-gray">{product.style}</p>
          <p className="text-granite-gray">
            Size: <span className="text-primary font-medium">{product.sku.size}</span>
          </p>
          <p className="text-granite-gray">
            colour: <span className="text-primary font-medium">{product.sku.colour}</span>
          </p>
          <p className="text-granite-gray">
            Estimated delivery date:
            <span className="text-primary font-medium"> 12-16 April</span>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-row">
            <button
              type="button"
              className="bg-grey-200 w-12 h-12 border-y border-l"
              onClick={() => {
                selectedQuantity > 0 && setSelectedQuantity(selectedQuantity - 1);
                onDecrease();
              }}
            >
              -
            </button>
            <p className="flex items-center justify-center w-14 h-12 border-y">
              {selectedQuantity}
            </p>
            <button
              type="button"
              className="bg-grey-200 w-12 h-12 border-y border-r"
              onClick={() => {
                setSelectedQuantity(selectedQuantity + 1);
                onIncrease();
              }}
            >
              +
            </button>
          </div>
          <button type="button" className="text-magenta font-medium" onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default LargeCard;
