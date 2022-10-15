import React, { useState } from 'react';
import Image from 'next/image';
import { Product, Sku } from '../../utils/helpers/types/product';
import Rating from '../UI/Rating';
import RadioSelect from '../UI/RadioSelect';
import useHasHydrated from '../UseHasHydrated';
import Button from '../UI/Buttons';
import useBasket from '../../store/basket';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  product: Product;
  skus: Sku[];
}

const FullProduct = ({ product, skus }: Props) => {
  const { name, description, price, rating, imagesCollection, department } = product;
  const [productPrice, setProductPrice] = useState<number>(price);
  const [selectedColour, setSelectedColour] = useState<Sku | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<Sku | undefined>(undefined);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [skuOptions, setSkuOptions] = useState<Sku[]>(skus);
  const [selectedSku, setSelectedSku] = useState<Sku>();
  const hasHydrated = useHasHydrated();
  const { addToBasket } = useBasket();

  const handleAddToBasket = () => {
    if (selectedSku) {
      addToBasket({
        ...product,
        quantity: selectedQuantity,
        sku: selectedSku,
      });
    } else {
      return 'Please select a size and colour';
    }
  };

  return (
    <section className="wrapper mt-32">
      <article className="w-1/2 px-4">
        <figure>
          <Image
            src={imagesCollection.items[0].url}
            layout="responsive"
            width={imagesCollection.items[0].width}
            height={imagesCollection.items[0].height}
            alt={imagesCollection.items[0].title}
            priority
          />
        </figure>
      </article>
      <article className="w-1/2 flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <p>{department}</p>
          <Rating rating={rating} />
        </div>
        <h1>{name}</h1>
        <div className="flex gap-5">
          <p>Available in:</p>
          <RadioSelect
            id={'colour'}
            name={'colour'}
            value={selectedColour}
            options={skus}
            filteredOptions={skuOptions}
            type={'colour'}
            onChange={option => {
              setSelectedColour(option);
              setProductPrice(option.price);
              setSkuOptions(skus.filter(skus => skus.colour === option.colour));
              setSelectedSku(
                skus.find(
                  skus =>
                    skus.size === option.size && skus.colour === selectedColour?.colour
                )
              );
            }}
          />
        </div>
        <h2>£{selectedSku ? selectedSku.price : productPrice}</h2>

        <h3>Select size</h3>
        <div className="w-full">
          <RadioSelect
            id={'size'}
            name={'Size'}
            value={selectedSize}
            options={skus}
            filteredOptions={skuOptions}
            type={'size'}
            onChange={option => {
              setSelectedSize(option);
              setProductPrice(option.price);
              setSelectedSku(
                skus.find(
                  skus =>
                    skus.size === option.size && skus.colour === selectedColour?.colour
                )
              );
            }}
          />
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex flex-row">
            <button
              type="button"
              className="bg-grey-200 w-12 h-12 border-y border-l"
              onClick={() => {
                selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1);
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
              }}
            >
              +
            </button>
          </div>
          <Button
            type="primary"
            onClick={() => hasHydrated && handleAddToBasket()}
            disabled={!selectedSize}
          >
            Add to cart
          </Button>
        </div>
        <div className="text-granite-gray mt-10">
          <p className="text-primary font-semibold text-lg">Product Info</p>
          {documentToReactComponents(description.json)}
        </div>
      </article>
    </section>
  );
};

export default FullProduct;
