import React from 'react'

import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'

export const App = () => {
    const [cartData, setCartData] = useState({
        count: 0,
        price: 0,
    })

    const addProductToCart = (count, price) => {
        setCartData((prevState) => ({
            count: prevState.count + count,
            price: prevState.price + count * price,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />

            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
