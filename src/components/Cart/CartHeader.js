import React from 'react'
import './CartHeader.scss'
export const CartHeader = ({ procuctsInCart }) => {
    return (
        <div className="cartHeader">
            {Object.keys(procuctsInCart).map((productId) => (
                <div>
                    {productId} : {procuctsInCart[productId]}
                </div>
            ))}
        </div>
    )
}
