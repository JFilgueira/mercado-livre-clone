import React, { useContext, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './SearchBar.css'
import { ProductsContext } from 'context/ProductsContext'
import fetchProducts from 'api/fetchProducts'

const SearchBar = () => {
    const {setProducts, setLoading} = useContext(ProductsContext);

    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const products = await fetchProducts(searchValue);
        setProducts(products.results);
        setSearchValue('');
        setLoading(false);
    }

    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <input 
                type="search"
                placeholder='Buscar produtos, marcas e muito mais...' 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <button type='submit'>
                <AiOutlineSearch/>
            </button>
        </form>
    )
}

export default SearchBar