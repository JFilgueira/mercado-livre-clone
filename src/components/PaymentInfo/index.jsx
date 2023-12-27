import React from 'react'
import './PaymentInfo.css'
import PaymentInfoContainer from 'components/PaymentInfoContainer'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { MdPix } from 'react-icons/md'
import { AiFillPlusCircle } from 'react-icons/ai'

const PaymentInfo = () => {
    return (
        <section className='payment-info'>
            <div className='container payment-info__container'>
                <div className='deco'></div>
                <PaymentInfoContainer title='Até 10 parcelas sem juros' desc='Ver mais' icon={<BsFillCreditCard2BackFill />} />
                <PaymentInfoContainer title='Parcelamento sem cartão' desc='Ver mais' icon={<FaHandHoldingUsd />} />
                <PaymentInfoContainer title='Via Pix' desc='Ver mais' icon={<MdPix />} />
                <div className='icon-div'>
                    <div className='icon-circle'>
                        <AiFillPlusCircle />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentInfo