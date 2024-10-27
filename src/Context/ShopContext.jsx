import React, {createContext} from "react"; 
import all_product from "../Components/Assets/all_product";
import Cartitems from "../Components/Cartitems/Cartitems";
import Product from "../Pages/Product";
export const ShopContextProvider = createContext(null);
const ShopContext = (props) => {
    const contextValue = {all_product};
    const getDefaultCart = () => {
        let cart = {};
        for( let index=0;index < all_product.length+1;index++){
            cart[index]=0;
        }
    }
    return cart;
}
const ShopContextProvider=(props)=>{
  const [cartItems,setCartItems]=useState(getDefaultCart());
  const contextValue={all_product}; 
 
  const addToCart = (itemsId) => {
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
  const removefromCart = (itemsId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

const getTotalCartAmout=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    if(Cartitems[item]>0){
      let itemInfo=all_product.find((product)=>product.id===Number(items))
    totalAmount+=itemInfo.new_price*Cartitems[item];
    }
    return totalAmount;
  }
}
const getTotalCartItems = () => {
  let totalItem=0;
  for(const item in cartItems){
if(cartItems[item]>0){
  totalItem+=cartItems[item];
}
  }
  return totalItem;
}


contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removefromCart}

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
      
  )
}

export default ShopContext
