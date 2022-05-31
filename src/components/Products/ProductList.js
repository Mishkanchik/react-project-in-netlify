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
                    <ProductListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}
