import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import { Bulbasaur, Charmander, Squirtle } from '../components/Info/Data'
import Legends from '../components/Legends'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <Header></Header>
            <Info {...Bulbasaur}></Info>
            <Info {...Charmander}></Info>
            <Info {...Squirtle}></Info>
            <Legends></Legends>
            <Footer></Footer>
        </>
    )
}

export default Home