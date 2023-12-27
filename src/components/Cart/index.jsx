import React, { useContext } from 'react'

import './Cart.css'
import CartItens from 'components/CartItens'
import { ProductsContext } from 'context/ProductsContext'

const Cart = () => {
  const {cartItens, isCartActive} = useContext(ProductsContext);

  const totalPrice = cartItens.reduce((acc, item) => item.price + acc, 0);

  function formatCurrency(value, currency) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: currency })
  }

  return (
    <section className={`cart ${isCartActive ? 'cart--active' : ''}`}>
        <div className='cart-cart-itens'>
          {cartItens.length < 1 && <div className='no-item-message'>
            <p>Carrinho vazio!</p>
            <p className='no-item-submessage'>Continue navegando para encontrar produtos.</p>
          </div> 
          }
            
          {cartItens.map(cartItem => <CartItens key={cartItem.id} data={cartItem}/>)}
        </div>
        <div className='cart-resume'>
          <h3>Total: {formatCurrency(totalPrice, 'BRL')}</h3>
          <button className='close-order'>Comprar</button>
        </div>
    </section>
  )
}

export default Cart