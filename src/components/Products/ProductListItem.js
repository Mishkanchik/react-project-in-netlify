import React from 'react'

import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ProductListItem.scss'

export const ProductListItem = ({
    name,
    description,
    type,
    capasity,
    price,
    images,
}) => {
    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={images} alt="" />
                </div>
                <h4>{name}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capasity}gb
                </div>
                <div className="product-price">{price}$</div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
