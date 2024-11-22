import { createContext, useReducer } from "react";

const BasketContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  deleteItem: (id) => {},
});

function basketReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (existingBasketItemIndex > -1) {
      const existingItem = state.items[existingBasketItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingBasketItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    console.log("Updated Basket (ADD_ITEM):", updatedItems);

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingBasketItemIndex];
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingBasketItemIndex, 1);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems[existingBasketItemIndex] = updatedItem;
    }

    console.log("Updated Basket (REMOVE_ITEM):", updatedItems);

    return { ...state, items: updatedItems };
  }

  if (action.type === "DELETE_ITEM") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);

    console.log("Updated Basket (DELETE_ITEM):", updatedItems);

    return { ...state, items: updatedItems };
  }

  return state;
}

export function BasketContextProvider({ children }) {
  const [basket, dispatchBasketAction] = useReducer(basketReducer, { items: [] });

  function addItem(item) {
    dispatchBasketAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchBasketAction({ type: "REMOVE_ITEM", id });
  }

  function deleteItem(id) {
    dispatchBasketAction({ type: "DELETE_ITEM", id });
  }

  console.log("Basket Items (Context Provider):", basket.items);

  const basketContext = {
    items: basket.items,
    addItem,
    removeItem,
    deleteItem,
  };

  return (
    <BasketContext.Provider value={basketContext}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketContext;
