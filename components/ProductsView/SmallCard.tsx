import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

const SmallCard: FC<Props> = ({ image, title, description, price, quantity }) => {
  return (
    <div aria-label={title + 'card'}>
      <div className="flex gap-2 rounded-md hover:bg-grey-100 px-3 py-2 w-full">
        <Image src={image} width={80} height={80} alt="shoes" />
        <div className="flex justify-between w-full text-left">
          <div>
            <p className="font-normal text-sm text-grey-500">{title}</p>
            <p className="text-md">{description}</p>
            <p className="text-magenta">£{price}</p>
          </div>
          <div className="flex items-end">
            <p className="font-normal text-sm text-grey-500">quantity: {quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
