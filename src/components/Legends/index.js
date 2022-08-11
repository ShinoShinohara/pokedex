import React from 'react'
import { LegendsCard, LegendsContainer, LegendsH1, LegendsIcon, LegendsP, LegendsWrapper, LegendsH2 } from './LegendsElements'
import Icon1 from '../../img/articuno.png'
import Icon2 from '../../img/articuno.png'
import Icon3 from '../../img/articuno.png'

const Legends = () => {
    return (
        <>
            <LegendsContainer id='legends'>
                <LegendsH1>Legendary Birds</LegendsH1>
                <LegendsWrapper>
                    <LegendsCard>
                        <LegendsIcon src={Icon1}></LegendsIcon>
                        <LegendsH2>Articuno</LegendsH2>
                        <LegendsP>It’s said that this Pokémon’s beautiful blue wings are made of ice.</LegendsP>
                    </LegendsCard>
                    <LegendsCard>
                        <LegendsIcon src={Icon2}></LegendsIcon>
                        <LegendsH2>Zapdos</LegendsH2>
                        <LegendsP>This Pokémon has complete control over electricity.</LegendsP>
                    </LegendsCard>
                    <LegendsCard>
                        <LegendsIcon src={Icon3}></LegendsIcon>
                        <LegendsH2>Moltres</LegendsH2>
                        <LegendsP>When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.</LegendsP>
                    </LegendsCard>
                </LegendsWrapper>
            </LegendsContainer>
        </>
    )
}

export default Legends