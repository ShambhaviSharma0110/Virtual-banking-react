import React from 'react';
import {Button} from '../ButtonElements';
import {InfoCont, InfoWrap, InfoRow, Column1, Textwrap,ImgWrap,Subtitle,Heading,TopLine,Column2,Btnwrap,Img} from './InfoElements';

const Info = ({lightBg, id, imgStart, topline, lightText, headline, description,buttonLabel, darkText,img,alt}) => {
    return (
      <>
        <InfoCont id = {id}>
          <InfoWrap>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <Textwrap>
                  <TopLine>{topline}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <Btnwrap>
                    <Button to="home">{buttonLabel}</Button>
                  </Btnwrap>
                </Textwrap>
              </Column1>
              <Column2>
                <ImgWrap>
                <Img src ={img} alt= {alt}/>
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrap>
        </InfoCont>
      </>
    );
}

export default Info;
