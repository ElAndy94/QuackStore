import create from 'zustand';
import { persist } from 'zustand/middleware';
import { BasketProduct } from '../types/product';

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
          if (prev.basketProducts.find(item => product.sku.sys.id === item.sku.sys.id)) {
            let newTotalPrice = prev.totalPrice;
            const currentBasket = prev.basketProducts.map(item => {
              if (product.sku.sys.id === item.sku.sys.id) {
                newTotalPrice += product.sku.price * product.quantity;
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
            if (product.sku.sys.id === item.sku.sys.id) {
              if (operator === '+') {
                newTotalPrice += item.sku.price;
                newQuantity += 1;
              } else {
                newTotalPrice -= item.sku.price;
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
          totalPrice: state.totalPrice - product.sku.price * product.quantity,
          basketProducts: state.basketProducts.filter(
            (item: BasketProduct) => item.sku.sys.id !== product.sku.sys.id
          ),
        })),
      clearBasket: () => set({ totalPrice: 0, basketProducts: [] }),
    }),
    { name: 'basket', getStorage: () => localStorage }
  )
);

export default useBasket;
