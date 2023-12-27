import React, { useContext } from 'react'
import './ProductCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import {BsLightningFill} from 'react-icons/bs'
import { ProductsContext } from 'context/ProductsContext'

const ProductCard = ({ data }) => {
    const {cartItens, setCartItens} = useContext(ProductsContext);

    const {
        title,
        price,
        thumbnail
    } = data

    const addItemHandler = () => setCartItens([...cartItens, data])

    function formatCurrency(value, currency) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: currency })
    }

    return (
        <div className='product-card'>
            <img className='product-card__img' src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={title} />
            <div className='product-card__info'>
                <h3 className='product-card__title'>{title}</h3>
                <h3 className='product-card__price'>{formatCurrency(price, 'BRL')}</h3>
                <p className='product-card__parcelled'>em <span>10x R$ {(price / 10).toFixed(2)} sem juros</span></p>
                {price > 100 &&
                    <p className='product-card__shipping'>
                        Frete grátis
                        <span> </span>
                        {price > 1000 &&
                            <span>
                                <BsLightningFill />
                                <em>FULL</em>
                            </span>}
                    </p>}
            </div>
            <div 
                className='product-card__cart'
                onClick={addItemHandler}
            >
                <BsFillCartPlusFill />
            </div>
        </div>
    )
}

export default ProductCard