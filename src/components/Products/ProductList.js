import React from 'react'
import { Grid, Typography } from '@mui/material'

import { ProductListItem } from './ProductListItem'

export const ProductList = () => {
    return (
        <>
            <Typography variant="h3" align="center" style={{ marginTop: 30 }}>
                ProductList
            </Typography>
            <Grid></Grid>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iphone XS"
                        description=" this is iphone XS "
                        type="phone"
                        capasity="64"
                        price="500"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iphone 13 pro"
                        description=" this is iphone 13 pro "
                        type="phone"
                        capasity="128"
                        price="800"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iphone 12 pro"
                        description=" this is iphone 12 pro "
                        type="phone"
                        capasity="32"
                        price="1000"
                    />
                </Grid>
            </Grid>
        </>
    )
}
