import React, { Children } from 'react';
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price 
  const [totalPrice, setTotalPrice] = useState(0);
  // update item amount 
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)

    }
    // total price
    const amountPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount * currentItem.price
    }, 0)
    setTotalPrice(amountPrice)
  }, [cart])
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        }
        else {
          return item
        }
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, newItem])
    }

  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }
  // increase amount
  const increaseAmount = (id) => {

  }
  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => { return item.id === id })
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        }
        else {
          return item;
        }
      })
      setCart(newCart)
    }


    if (cartItem.amount < 2) {
      removeFromCart(id)
    }

  }


  return <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, increaseAmount, decreaseAmount, itemAmount, totalPrice }}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;