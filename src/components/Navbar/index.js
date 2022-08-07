import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../img/nav-logo-pokemon.png'
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
    return (
        <>
            <Nav>
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
        </>
    )
}

export default Navbar