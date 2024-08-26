import React, { useContext } from 'react';
import './Header.css';
import { CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function Header() {
    const contaxt = useContext(CartContext)
    return (
        <div className='header'>
            <Link to={'/'} className='logo'>سبد خرید</Link>
            <Link to={'/Cart'} className='cartIcon'>
                <CiShoppingCart className='cartIcon-icon' size={24} />
                <span className='cartIcon-count'>{contaxt.UserCart.length}</span>
            </Link>
        </div>
    );
}
