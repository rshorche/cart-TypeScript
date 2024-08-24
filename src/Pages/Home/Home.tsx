import React from 'react'
import Header from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'

export default function Home() {
    const ali = {
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": 3.9,

    }

    return (
        <>
            <Header />
            <Card {...ali} />
        </>
    )
}
