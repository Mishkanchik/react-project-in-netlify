import React from 'react'

import { Card, CardContent, CardActions, Button } from '@mui/material'

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
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    )
}
