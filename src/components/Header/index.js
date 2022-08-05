import React, { useState } from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElements'
import {
    HeaderBg,
    HeaderContainer,
    HeaderH1,
    VideoBg,
    HeaderContent,
    HeaderBtnWrapper,
    HeaderP,
    ArrowFoward,
    ArrowRight,
} from './HeaderElements'

const Header = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeaderContainer>
                <HeaderBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
                </HeaderBg>
                <HeaderContent>
                    <HeaderH1>Time to become a Pokemon Trainer</HeaderH1>
                    <HeaderP>Sign up to create your team now</HeaderP>
                    <HeaderBtnWrapper>
                        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                            Get Started {hover ? <ArrowFoward /> : <ArrowRight></ArrowRight>}
                        </Button>
                    </HeaderBtnWrapper>
                </HeaderContent>
            </HeaderContainer>
        </>
    )
}

export default Header