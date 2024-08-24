import React from 'react';
import './Card.css';
import { AiFillStar } from 'react-icons/ai';

type CardProps = {
    image: string;
    title: string;
    price: number;
    rating: number;
};

export default function Card({ image, title, price, rating }: CardProps) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-title">{title.slice(0, 15)}...</div>
            <div className="card-price-rating">
                <div className="card-price">{price} تومان</div>
                <div className="card-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                        <AiFillStar
                            key={index}
                            className="star"
                            style={{ color: index < rating ? 'gold' : 'lightgray' }}
                        />
                    ))}
                </div>
            </div>
            <button className="add-to-cart-button">افزودن به سبد خرید</button>
        </div>
    );
}
