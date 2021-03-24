import React,{useState} from 'react';
import Video from '../videos/video.mp4'
import {HeroCont, Herobg,Videobg, HeroContent,HeroH1,HeroP,HeroBtnWrap,ArrowForward,ArrowRight  } from './HeroElements';
import {Button} from '../ButtonElements';

const HeroElements = () => {

        const {hover,setHover} = useState(false)
        const onHover = () => {
            setHover(!hover);
        }
    return (
        <HeroCont>
            <Herobg>
                <Videobg autoplay loop muted src={Video} type='video/mp4'/>
            </Herobg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a new account today and receive $250 in credit towards your next payment!
                </HeroP>
                <HeroBtnWrap>
                    <Button to ='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary ='true' dark='true'>
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrap>
            </HeroContent>
        </HeroCont>
    )
}

export default HeroElements;