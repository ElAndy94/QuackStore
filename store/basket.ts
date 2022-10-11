import create from 'zustand';
import { persist } from 'zustand/middleware';
import { BasketProduct } from '../utils/helpers/types/product';

type Basket = {
  total: number;
  totalQuantity: number;
  basketContent: BasketProduct[];
  //   addToBasket: (product: BasketProduct) => void;
};

const useBasket = create<Basket>(set => ({
  total: 0,
  totalQuantity: 0,
  basketContent: [],
  //   addToBasket: (product: BasketProduct) => {
  //     console.log(product);
  //     set((state: { totalQuantity: number; total: number; basketContent: Basket[] }) => ({
  //       totalQuantity: state.totalQuantity + 1,
  //       total: state.total + parseFloat(product.price),
  //       basketContent: [...state.basketContent, product],
  //     }));
  //   },
  //   updateBasket: ({
  //     product,
  //     myBasket,
  //   }: {
  //     product: BasketProduct;
  //     myBasket: Basket[];
  //   }) => {
  //     set((state: { totalQuantity: number; total: number }) => ({
  //       totalQuantity: state.totalQuantity + 1,
  //       total: state.total + parseFloat(product.price),
  //       basketContent: myBasket,
  //     }));
  //   },
  //   clearBasket: () => set({ totalQuantity: 0, total: 0, basketContent: [] }),
  //   removeFromBasket: (product: BasketProduct) =>
  //     set((state: { total: number; totalQuantity: number; basketContent: Basket[] }) => ({
  //       total: state.total - +product.price * product.quantity,
  //       totalQuantity: state.totalQuantity - product.quantity,
  //       basketContent: state.basketContent.filter(
  //         // @ts-ignore
  //         (item: BasketProduct) => item.sys.id !== product.sys.id
  //       ),
  //     })),
}));
export default useBasket;
