import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ProductListItem } from './ProductListItem'
import productsArray from 'utils/productsArray'
import logo from 'assets/logo.png'

export const ProductList = () => {
    return (
        <>
            <Typography variant="h3" align="center" style={{ marginTop: 30 }}>
                ProductList
            </Typography>
            <img src={logo} alt="" />
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {productsArray.map(
                    ({ id, name, description, type, capasity, price }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                capasity={capasity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
