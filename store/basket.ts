import create from 'zustand';
import { BasketProduct } from '../utils/helpers/types/product';
import { persist } from 'zustand/middleware';

type Basket = {
  totalPrice: number;
  basketProducts: BasketProduct[];
  addToBasket: (product: BasketProduct) => void;
  clearBasket: () => void;
  updateProductQuantity: (product: BasketProduct, operator: '-' | '+') => void;
  removeFromBasket: (product: BasketProduct) => void;
};

const useBasket = create<Basket>()(
  persist(
    set => ({
      totalPrice: 0,
      basketProducts: [],
      addToBasket: (product: BasketProduct) => {
        set((prev: { totalPrice: number; basketProducts: BasketProduct[] }) => {
          if (prev.basketProducts.find(item => product.sys.id === item.sys.id)) {
            let newTotalPrice = prev.totalPrice;
            const currentBasket = prev.basketProducts.map(item => {
              if (product.sys.id === item.sys.id) {
                newTotalPrice += product.price * product.quantity;
                return {
                  ...product,
                  quantity: item.quantity + product.quantity,
                };
              } else {
                return item;
              }
            });
            return {
              totalPrice: newTotalPrice,
              basketProducts: currentBasket,
            };
          } else {
            return {
              totalPrice: prev.totalPrice + product.price,
              basketProducts: [...prev.basketProducts, product],
            };
          }
        });
      },
      updateProductQuantity: (product: BasketProduct, operator: '-' | '+') => {
        set((prev: { totalPrice: number; basketProducts: BasketProduct[] }) => {
          let newTotalPrice = prev.totalPrice;
          let newQuantity = product.quantity;
          const currentBasket = prev.basketProducts.map(item => {
            if (product.sys.id === item.sys.id) {
              if (operator === '+') {
                newTotalPrice += item.price;
                newQuantity += 1;
              } else {
                newTotalPrice -= item.price;
                newQuantity -= 1;
              }
              return {
                ...product,
                quantity: newQuantity,
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
      removeFromBasket: (product: BasketProduct) =>
        set((state: { totalPrice: number; basketProducts: BasketProduct[] }) => ({
          totalPrice: state.totalPrice - product.price * product.quantity,
          basketProducts: state.basketProducts.filter(
            (item: BasketProduct) => item.sys.id !== product.sys.id
          ),
        })),
      clearBasket: () => set({ totalPrice: 0, basketProducts: [] }),
    }),
    { name: 'basket', getStorage: () => localStorage }
  )
);

export default useBasket;
