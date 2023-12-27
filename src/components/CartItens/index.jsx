import React, { useContext } from 'react'
import {BsFillCartDashFill} from 'react-icons/bs'

import './CartItens.css'
import { ProductsContext } from 'context/ProductsContext';

const CartItens = ({data}) => {
    const {
        id,
        title,
        thumbnail,
        price
    } = data;

    const {cartItens, setCartItens} = useContext(ProductsContext);

    function formatCurrency(value, currency) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: currency })
    }

    const deleteItem = () => {
        const cartItensFiltered = cartItens.filter(item => item.id !== id);
        setCartItens(cartItensFiltered);
    }

  return (
    <div className='cart-item'>
        <img className='cart-item-img' src={thumbnail} alt={title} />
        <div className='cart-item-info'>
            <h3 className='cart-item-title'>{title}</h3>
            <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>
        </div>

        <button type='button' className='cart-remove-item' onClick={deleteItem}>
            <BsFillCartDashFill/>
        </button>
    </div>
  )
}

export default CartItens