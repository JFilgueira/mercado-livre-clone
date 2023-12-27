import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from './logo.webp'
import logoMobile from './logomobile.webp'
import CartIcon from 'components/CartIcon'
import SearchBar from 'components/SearchBar'

const Header = () => {

    return (
        <header className='header'>
            <div className='header-container container'>
                <a href='/'>
                    <img src={logo} alt="Mercado Livre" className='logo'/>
                </a>
                <SearchBar />
                <CartIcon />
            </div>
        </header>
    )
}

export default Header