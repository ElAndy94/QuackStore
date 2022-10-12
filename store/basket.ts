import create from 'zustand';
import { BasketProduct } from '../utils/helpers/types/product';
// import { persist } from 'zustand/middleware';

type Basket = {
  totalPrice: number;
  basketProducts: BasketProduct[];
  addToBasket: (product: BasketProduct) => void;
  clearBasket: () => void;
  updateProductQuantity: (product: BasketProduct) => void;
};

// const addProduct = (product: BasketProduct) => {
//     const findProduct = basketProducts.find(item => product.sys.id === item.sys.id);
//     if (findProduct) {
//       updateProductQuantity(product);
//     } else {
//       addToBasket(product);
//     }
//   };

const useBasket = create<Basket>(set => ({
  totalPrice: 0,
  basketProducts: [],
  addToBasket: (product: BasketProduct) => {
    set((state: { totalPrice: number; basketProducts: BasketProduct[] }) => ({
      totalPrice: state.totalPrice + parseFloat(product.price),
      basketProducts: [...state.basketProducts, product],
    }));
  },
  updateProductQuantity: (product: BasketProduct) => {
    set((prev: { totalPrice: number; basketProducts: BasketProduct[] }) => {
      let newTotalPrice = prev.totalPrice;
      const currentBasket = prev.basketProducts.map(item => {
        if (product.sys.id === item.sys.id) {
          newTotalPrice += parseFloat(product.price) * product.quantity;
          return {
            ...product,
            quantity: item.quantity + product.quantity,
          };
        } else {
          return item;
        }
      });
      return {
        basketProducts: currentBasket,
        totalPrice: newTotalPrice,
      };
    });
  },
  clearBasket: () => set({ totalPrice: 0, basketProducts: [] }),
  removeFromBasket: (product: BasketProduct) =>
    set((state: { totalPrice: number; basketProducts: BasketProduct[] }) => ({
      totalPrice: state.totalPrice - parseFloat(product.price) * product.quantity,
      basketProducts: state.basketProducts.filter(
        (item: BasketProduct) => item.sys.id !== product.sys.id
      ),
    })),
}));
export default useBasket;
