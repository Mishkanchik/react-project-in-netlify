import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'

export const CartHeader = ({ procuctsInCart }) => {
    return (
        <div className="cartHeader">
            <div>
                {keys(procuctsInCart).map((productId) => (
                    <div key={productId}>
                        {productId} : {procuctsInCart[productId]}
                    </div>
                ))}
            </div>
            <div>Total:0$</div>
        </div>
    )
}
