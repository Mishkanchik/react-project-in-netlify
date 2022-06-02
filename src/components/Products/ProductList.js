import React from 'react'
import { Grid, Typography } from '@mui/material'

import { ProductListItem } from './ProductListItem'
import productsArray from 'utils/productsArray'

export const ProductList = () => {
    return (
        <>
            <Typography variant="h3" align="center" style={{ marginTop: 30 }}>
                ProductList
            </Typography>

            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {productsArray.map((product, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <ProductListItem
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            capasity={product.capasity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
