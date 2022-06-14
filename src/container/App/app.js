import React from 'react'

import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'

export const App = () => {
    const [cartData, setCartData] = useState({
        count: 10,
        price: 100,
    })
    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main />
            <Footer />
        </>
    )
}
