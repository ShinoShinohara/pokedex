import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItem, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterSocial, FooterWrapper, SocialIcons, SocialIconsLink, SocialLogo, SocialWrapper, WebSiteRights } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItem>
                                <FooterLinkTitle>about pokemon</FooterLinkTitle>
                                <FooterLink to="/pokedex">a</FooterLink>
                                <FooterLink to="/pokedex">b</FooterLink>
                                <FooterLink to="/pokedex">c</FooterLink>
                                <FooterLink to="/pokedex">d</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLinkTitle>about pokemon</FooterLinkTitle>
                                <FooterLink to="/pokedex">a</FooterLink>
                                <FooterLink to="/pokedex">b</FooterLink>
                                <FooterLink to="/pokedex">c</FooterLink>
                                <FooterLink to="/pokedex">d</FooterLink>
                            </FooterLinkItem>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItem>
                                <FooterLinkTitle>about pokemon</FooterLinkTitle>
                                <FooterLink to="/pokedex">a</FooterLink>
                                <FooterLink to="/pokedex">b</FooterLink>
                                <FooterLink to="/pokedex">c</FooterLink>
                                <FooterLink to="/pokedex">d</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLinkTitle>about pokemon</FooterLinkTitle>
                                <FooterLink to="/pokedex">a</FooterLink>
                                <FooterLink to="/pokedex">b</FooterLink>
                                <FooterLink to="/pokedex">c</FooterLink>
                                <FooterLink to="/pokedex">d</FooterLink>
                            </FooterLinkItem>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <FooterSocial>
                        <SocialWrapper>
                            <SocialLogo to="/">pokemon</SocialLogo>
                            <WebSiteRights>feito pelo shino</WebSiteRights>
                            <SocialIcons>
                                <SocialIconsLink href="//github.com/ShinoShinohara/pokedex" target="_blank" arial_label="GitHub">
                                    <FaGithub></FaGithub>
                                </SocialIconsLink>
                                <SocialIconsLink href="//github.com/ShinoShinohara/pokedex" target="_blank" arial_label="GitHub">
                                    <FaGithub></FaGithub>
                                </SocialIconsLink>
                                <SocialIconsLink href="//github.com/ShinoShinohara/pokedex" target="_blank" arial_label="GitHub">
                                    <FaGithub></FaGithub>
                                </SocialIconsLink>
                                <SocialIconsLink href="//github.com/ShinoShinohara/pokedex" target="_blank" arial_label="GitHub">
                                    <FaGithub></FaGithub>
                                </SocialIconsLink>
                            </SocialIcons>
                        </SocialWrapper>
                    </FooterSocial>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer