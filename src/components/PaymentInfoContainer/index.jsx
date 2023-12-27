import React from 'react';
import './PaymentInfoContainer.css'

const PaymentInfoContainer = ({title, icon, desc}) => {
    return (
        <div className='payment-info__box'>
            <div className='icon-circle'>
                {icon}
            </div>
            <div className='payment-info__info'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default PaymentInfoContainer