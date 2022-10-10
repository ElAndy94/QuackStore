import { IProductFields } from '../../../@types/generated/contentful';

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
}
