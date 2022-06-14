import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'

export const CartHeader = ({ procuctsInCart }) => {
    return (
        <div className="cartHeader">
            {keys(procuctsInCart).map((productId) => (
                <div key={productId}>
                    {productId} : {procuctsInCart[productId]}
                </div>
            ))}
        </div>
    )
}
