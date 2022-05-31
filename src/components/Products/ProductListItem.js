import React from 'react'

import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ProductListItem.scss'
export const ProductListItem = () => {
    return (
        <Card>
            <CardContent>
                <h4>Iphone XS</h4>
                <p>This is IPhone</p>
                <div>Type:phone</div>
                <div>Capacity:64gb</div>
                <div>500$</div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
