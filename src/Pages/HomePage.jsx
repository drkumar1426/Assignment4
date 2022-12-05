import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
const HomePage = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Main />
                <Nav />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
