import React, { useContext } from 'react';
import './Card.css';
import { AiFillStar } from 'react-icons/ai';
import productTypes from '../../Context/Product.type';
import { CartContext } from '../../Context/CartContext';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';



export default function Card({ image, title, price, rating, id }: productTypes) {
    const contaxt = useContext(CartContext)
    const navigate = useNavigate()
    const addProduct = (id: number) => {
        contaxt.addProduct(id)
        swal({
            title: 'محصول با موفقیت  به سبدخرید افزوده شد!',
            icon: 'succes',
            buttons: ['اوکی', 'رفتن به سبدخرید']
        }).then((res) => {
            if (res) {
                navigate('/cart')
            }
        })
    }
    return (
        <div className="card">
            <img src={image} />
            <div className="card-title">{title.slice(0, 15)}...</div>
            <div className="card-price-rating">
                <div className="card-price">{price} تومان</div>
                <div className="card-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                        <AiFillStar
                            key={index}
                            className="star"
                            style={{ color: index < rating.rate ? 'gold' : 'lightgray' }}
                        />
                    ))}
                </div>
            </div>
            <button className="add-to-cart-button" onClick={() => addProduct(id)}>افزودن به سبد خرید</button>
        </div>
    );
}
