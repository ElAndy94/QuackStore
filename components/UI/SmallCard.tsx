import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  image: string;
  title: string;
  description: string;
  price: string;
  quantity: string;
}

const SmallCard: FC<Props> = ({ image, title, description, price, quantity }) => {
  return (
    <button type="button">
      <div className="flex gap-2 rounded-md hover:bg-grey-100 px-3 py-2 w-full">
        <Image src={image} width="80px" height="80px" alt="shoes" />
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
    </button>
  );
};

export default SmallCard;
