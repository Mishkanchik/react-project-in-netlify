import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ProductListItem.scss'
import PropTypes from 'prop-types'

export const ProductListItem = ({
    id,
    addProductToCart,
    name,
    description,
    type,
    capasity,
    price,
    images,
}) => {
    const [count, setCount] = useState(1)

    const onIncrementClick = () => setCount(count + 1)
    const onDecrementClick = () => setCount(count - 1)

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={images} alt={name} />
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
                <div className="product-quantity">
                    <Button
                        variant="contained"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        variant="contained"
                        onClick={onIncrementClick}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
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
ProductListItem.defaultProps = {
    description: 'No desc ...',
    images: 'images/imagessf.jpg',
}
