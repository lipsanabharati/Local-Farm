"use client";
import React, {createContext,useState,useEffect} from 'react';
import { useToast } from "@/context/ToastContext";

//create context
export const CartContext= createContext();

const CartProvider = ({children}) => {
  //cart state
  //initialize cart from localstorage if cart exists there otherwise initialize with empty array
      const [cart, setCart] = useState(() => {
      if (typeof window !== "undefined") { //checks if the component is client side
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
      }
      return [];
    });
  //item amount state
  const[itemAmount,setItemAmount]=useState(0);
  const [total,setTotal]= useState(0);

  //functions for toast notif
   const { showSuccess, showFail } = useToast();

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //update total price
  useEffect(()=>{
    const total=cart.reduce((accumulator,currentItem)=>{
      return accumulator + currentItem.price * currentItem.amount;
    },0);
    setTotal(total);
  },[cart])


  //update item amount
  useEffect(()=>{
    if(cart){
      const amount=cart.reduce((accumulator,currentItem)=>{
      return accumulator+currentItem.amount;
    },0);
    setItemAmount(amount);
  }
  },[cart]);


  //add to cart
  const addToCart=(product,id)=>{
   try
   {
      const newItem={...product,amount:1,price:product.price||0};
      //check if the item is already in the cart
      const cartItem = cart.find(item=>{
        return item.id ===id;
      });
      //if cart item is already in the cart
      if(cartItem){
        const newCart= [...cart].map(item=>{
          if(item.id===id){
            return {...item, amount:cartItem.amount+1};
          }else{
            return item;
          }
        });
        setCart(newCart);
      }else{
        setCart([...cart,newItem]);
      }
      showSuccess("Added to cart");
   }
    catch(err)
    {
      showFail("Failed to add to cart");
    }
    
  };
  
  //add by number
  const addToCartNum = (product, id, amt) => {
  try {
    const newAmount = Number(amt);

    const newItem = {
      ...product,
      amount: newAmount,
      price: product.price || 0,
    };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: Number(item.amount) + newAmount,
          };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    showSuccess("Added to cart");
  } catch (err) {
    showFail("Failed to add to cart");
  }
};

  //remove from cart
  const removeFromCart=(id)=>{
    const newCart= cart.filter(item=>{
      return item.id!==id;
    });
    setCart(newCart);
  }

  //clear cart
  const clearCart=()=>{
    setCart([]);
  }

  const increaseAmount = (id) => {
  const newCart = cart.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        amount: Number(item.amount) + 1,
      };
    }

    return item;
  });

  setCart(newCart);
};

const decreaseAmount = (id) => {
  const cartItem = cart.find((item) => item.id === id);

  if (cartItem) {
    if (Number(cartItem.amount) <= 1) {
      removeFromCart(id);
      return;
    }

    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: Number(item.amount) - 1,
        };
      }

      return item;
    });

    setCart(newCart);
  }
};

  return (
  <CartContext.Provider 
  value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,total,addToCartNum}}>
    {children}
    </CartContext.Provider>);
};

export default CartProvider;