import React from 'react'

import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { CssBaseline } from '@mui/material'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
