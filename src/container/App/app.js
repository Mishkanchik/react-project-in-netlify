import React from 'react'

import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'

export const App = () => {
    const [procuctsInCart, setprocuctsInCart] = useState({
        1: 5,
        2: 5,
    })
    const addProductToCart = () => {}

    return (
        <>
            <CssBaseline />
            <Header procuctsInCart={procuctsInCart} />

            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
