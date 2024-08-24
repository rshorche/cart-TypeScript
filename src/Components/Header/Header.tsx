import React from 'react';
import './Header.css';
import { CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <Link to={'/'} className='logo'>سبد خرید</Link>
            <Link to={'/Cart'} className='cartIcon'>
                <CiShoppingCart className='cartIcon-icon' size={24} />
                <span className='cartIcon-count'>2</span>
            </Link>
        </div>
    );
}
