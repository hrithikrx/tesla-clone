import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="./images/model-s.jpg"
            leftButton="custom order"
            rightButton="existing inventory"
            
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="./images/model-y.jpg"
            leftButton="custom order"
            rightButton="existing inventory"
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="./images/model-3.jpg"
            leftButton="custom order"
            rightButton="existing inventory"
        />
        <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="./images/model-x.jpg"
            leftButton="custom order"
            rightButton="existing inventory"
        />
        <Section
            title="Lowest Cost Solar Panel in America"
            description="Money Back Guarentee"
            backgroundImg="./images/solar-panel.jpg"
            leftButton="order now"
            rightButton="Learn More"
        />
         <Section
            title="Solar For New Roofs"
            description="Money Back Guarentee"
            backgroundImg="./images/solar-roof.jpg"
            leftButton="order now"
            rightButton="Learn More"
        />
         <Section
            title="Accessories"
            description="Green Energy Accessories"
            backgroundImg="./images/accessories.jpg"
            leftButton="SHOP NOW"
            
        />
    </Container>
  )
}

export default Home

const Container=styled.div`
    height:100vh;

`
