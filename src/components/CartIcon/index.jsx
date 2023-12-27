import React, { useContext } from 'react'
import {BsCart2} from 'react-icons/bs'
import './CartIcon.css'
import { ProductsContext } from 'context/ProductsContext'

const CartIcon = () => {
  const {cartItens, isCartActive, setIsCardActive} = useContext(ProductsContext);
  
  return (
    <button 
      className='cart__button'
      onClick={() => setIsCardActive(!isCartActive)}
    >
        <BsCart2/>
        {cartItens.length > 0 ? <span className='cart-status'>{cartItens.length}</span> : ''}
        
    </button>
  )
}

export default CartIcon