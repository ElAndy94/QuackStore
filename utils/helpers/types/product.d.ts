import { IProductFields } from '../../../@types/generated/contentful';

export interface Product extends IProductFields {
  sys: {
    id: string;
  };
  imagesCollection: {
    items: {
      url: string;
      title: string;
    }[];
  };
}
