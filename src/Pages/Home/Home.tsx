import React, { useContext } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'
import { CartContext } from '../../Context/CartContext'

export default function Home() {
    const context = useContext(CartContext)

    return (
        <>
            <Header />
            <h3 className='home-title'>همه محصولات</h3>
            <div className='home-cards'>
                {
                    context.shop.map((product) => {
                        return <Card key={product.id} {...product} />
                    })
                }
            </div>
        </>
    )
}
