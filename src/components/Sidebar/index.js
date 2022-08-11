import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWraper,
    SidebarMenu
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWraper>
                <SidebarMenu>
                    <SidebarLink to='bulbasaur' onClick={toggle}>
                        Bulbasaur
                    </SidebarLink>
                    <SidebarLink to='charmander' onClick={toggle}>
                        Charmander
                    </SidebarLink>
                    <SidebarLink to='squirtle' onClick={toggle}>
                        Squirtle
                    </SidebarLink>
                    <SidebarLink to='legends' onClick={toggle}>
                        Legends
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWraper>
        </SidebarContainer>
    )
}

export default Sidebar