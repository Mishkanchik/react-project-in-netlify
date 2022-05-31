import React from 'react'
import { ProductList } from 'components/Products/ProductList'
import { Container } from '@mui/system'

export const Main = () => {
    return (
        <>
            <Container>
                <ProductList />
            </Container>
        </>
    )
}
