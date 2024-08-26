import { createContext, useEffect, useState } from "react";
import productTypes from "./Product.type";

type CartContextProviderProps = {
    children: React.ReactNode
}

type CartContextType = {
    shop: productTypes[];
    UserCart: productTypes[];
    addProduct: (id: number) => void;
    removeProduct: (id: number) => void;
    removeAll: () => void;
}

export const CartContext = createContext({} as CartContextType)

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [shop, setShop] = useState<productTypes[]>([])
    const [UserCart, setUserCart] = useState<productTypes[]>([])

    useEffect(() => {
        const getProduct = async () => {
            const products = await fetch('https://fakestoreapi.com/products')
            const data = await products.json()
            setShop(data)
        }
        getProduct()
    }, [])

    const addProduct = (id: number) => {
        setUserCart((prev) => {
            const mainPic = UserCart.find(product => product.id === id)

            if (mainPic) {
                return prev.map(product => {
                    if (product.id === id) {
                        return { ...product, count: product.count + 1 }
                    } else {
                        return product
                    }
                })
            } else {
                const mainPis = shop.find(product => product.id === id) as productTypes

                return [...prev, { ...mainPis, count: 1 }]
            }
        })

    }

    const removeProduct = (id: number) => {
        setUserCart((prev) => prev.filter(prodct => prodct.id !== id))
    }

    const removeAll = () => {
        setUserCart([])
    }


    return (
        <CartContext.Provider value={{
            shop, UserCart, addProduct, removeAll, removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider