import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../img/nav-logo-pokemon.png'
import { IconContext } from 'react-icons/lib'
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)

    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <Nav scrollNav={scrollNav}>
                    <NavContainer>
                        <NavLogo to='/'>
                            <img src={logo} Style="width: 120px" alt="Logo" />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='bulbasaur'>Bulbasaur</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='charmander'>Charmander</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='squirtle'>Squirtle</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='legends'>Legends</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/pokedex">Pokedex</NavBtnLink>
                        </NavBtn>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar