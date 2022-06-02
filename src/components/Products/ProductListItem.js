import React from 'react'

import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ProductListItem.scss'
export const ProductListItem = (props) => {
    return (
        <Card>
            <CardContent>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <div>Type:{props.type}</div>
                <div>Capacity:{props.capasity}gb</div>
                <div>{props.price}$</div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
