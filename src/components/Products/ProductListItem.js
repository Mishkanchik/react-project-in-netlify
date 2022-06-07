import React from 'react'

import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ProductListItem.scss'
import PropTypes from 'prop-types'

export const ProductListItem = ({
    name,
    description = 'No desc ...',
    type,
    capasity,
    price,
    images = 'images/imagessf.jpg',
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

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capasity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.string,
}
// ProductListItem.defaultProps = {
//     description: 'No desc ...',
//     images: 'images/imagessf.jpg',
// }
