import React from 'react'
import './PaymentInfoCards.css'

import {BsCreditCard2Front} from 'react-icons/bs'
import {BiCheckShield} from 'react-icons/bi'
import {LiaShippingFastSolid} from 'react-icons/lia'

const PaymentInfoCards = () => {
  return (
    <section className='payment-cards'>
        <div className='payment-cards-container'>
            <div className='payment-cards-card'>
              <BsCreditCard2Front className='payment-cards-icon'/>
              <h3 className='payment-cards-title'>Escolha como pagar</h3>
              <p className='payment-cards-desc'>Com o Mercado Pago, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x no boleto com o Mercado Crédito.</p>
              <p className='payment-cards-link'>Como pagar com Mercado Pago</p>
            </div>

            <div className='payment-cards-card'>
              <LiaShippingFastSolid className='payment-cards-icon'/>
              <h3 className='payment-cards-title'>Frete grátis a partir de R$ 100</h3>
              <p className='payment-cards-desc'>Ao se cadastrar no Mercado Livre, você tem frete grátis em milhares de produtos.</p>
              <p className='payment-cards-link'>Como pagar com Mercado Pago</p>
            </div>

            <div className='payment-cards-card'>
              <BiCheckShield className='payment-cards-icon'/>
              <h3 className='payment-cards-title'>Segurança, do início ao fim</h3>
              <p className='payment-cards-desc'>Você não gostou do que comprou? Devolva! No Mercado Livre não há nada que você não possa fazer, porque você está sempre protegido.</p>
              <p className='payment-cards-link'>Como te protegemos</p>
            </div>
        </div>
    </section>
  )
}

export default PaymentInfoCards