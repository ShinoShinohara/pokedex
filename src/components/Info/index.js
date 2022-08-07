import React from 'react'
import { Button } from '../ButtonElements'
import {
    BtnWrapper, Column1, Column2, Heading, Img, ImgWrapper,
    InfoContainer,
    InfoRow,
    InfoWrapper, Subtitle, TextWrapper, TopLine
} from './InfoElements'

const Info = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, dark, dark2, primary }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrapper>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}>
                                        {buttonLabel}</Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={img} alt={alt}>
                                </Img>
                            </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info