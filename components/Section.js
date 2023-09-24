import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description,backgroundImg,leftButton, rightButton}) {
  return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <Itemtext>
                    <h1>{ title }</h1>
                    <h3>{description}</h3>
                </Itemtext>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        {leftButton &&
                            <LeftButton>
                            {leftButton}
                        </LeftButton>
                        }
                        
                        {rightButton && 
                            <RightButton>
                            {rightButton}
                        </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src='./images/down-arrow.svg'/>
            </Buttons>
        </Wrap>
  )
}

export default Section

const Wrap=styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${(props) => `url("${props.bgImage}")`};
    
`
const Itemtext=styled.div`
    padding-top:15vh;
    text-align:center;
    z-index:10;
`

const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column; 
    }
`

const LeftButton=styled.div`
        background-color:rgba(23,26,32,0.8);
        height:40px;
        width:256px;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:100px;
        opacity:0.85;
        cursor:pointer;
        text-transform:uppercase;
        font-size:13px;
        margin:8px;

`

const RightButton=styled(LeftButton)`                              
    background-color:white;
    color:black;
    opacity:0.65;
    
`

const DownArrow=styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`
const Buttons=styled.div`

`