import { IProductFields } from '../@types/generated/contentful';

export interface Product extends IProductFields {
  sys: {
    id: string;
  };
  imagesCollection: {
    items: {
      height: string | number | undefined;
      width: string | number | undefined;
      url: string;
      title: string;
    }[];
  };
  description: {
    json: any;
  };
}

export interface BasketProduct extends Product {
  sys: {
    id: string;
  };
  imagesCollection: {
    items: {
      height: string | number | undefined;
      width: string | number | undefined;
      url: string;
      title: string;
    }[];
  };
  sku: Sku;
  quantity: number;
}
export interface Sku extends ISku {
  sys: {
    id: string;
  };
  colour: string;
  size: string;
  price: number;
}
