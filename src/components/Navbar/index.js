import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
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

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <Nav scrollNav={scrollNav}>
                    <NavContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <img src={logo} Style="width: 120px" alt="Logo" />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='bulbasaur' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Bulbasaur</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='charmander' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Charmander</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='squirtle' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Squirtle</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='legends' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Legends</NavLinks>
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