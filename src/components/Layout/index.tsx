import React from 'react'
import styled from 'styled-components';
import { device } from '../../styles/sizes'

type rgbType = [number, number, number]

interface LayoutI {
  backgroundColor?: rgbType
  title: React.ReactNode;
  infoSection: React.ReactNode;
  spriteWindow: React.ReactNode;
  button: React.ReactNode;
  input: React.ReactNode;
}


const Container = styled.div<{
  backgroundColor: rgbType
}>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 6fr 16fr 3fr;
  grid-column-gap: 9px;
  border:3px solid #1b1b1b;
  background-color:    
    rgb(${p => p.backgroundColor[0]},
        ${p => p.backgroundColor[1]},
        ${p => p.backgroundColor[2]});
  margin:auto;
  height:fit-content;
  width:800px;
  border-radius:10px;
  box-shadow: .5rem .5rem #1b1b1b;
  font-family: 'Roboto', sans-serif;
  @media ${device.tablet}{
    width:100vw;
    height:65rem;
  }
  @media ${device.mobileL}{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr)
  }
  `

const Zone = styled.div<{
  backgroundColor: rgbType
}>`
  background-color:    
  rgb(${p => p.backgroundColor[0]},
    ${p => p.backgroundColor[1]},
    ${p => p.backgroundColor[2]});
    `

const TopZone = styled(Zone)`
  align-items:center;
  grid-column-start:1;
  grid-column-end:-1;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-left:5rem;
  padding-right:5rem;
  padding-top:3rem;
  padding-bottom:3rem;
  @media ${device.tablet}{
    padding-left:2rem;
    padding-right:2rem;
  }
  @media ${device.mobileL}{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    padding-top:2rem;
    padding-bottom:1rem;
  }
`

const LeftZone = styled(Zone)`
  display: flex;
  padding-left:5rem;
  @media ${device.tablet}{
    align-items:center;
    padding-left:2rem;
  }
  @media ${device.mobileL}{
    padding-right: 2rem;
    padding-bottom: 2rem;
  }
  @media ${device.mobileM}{
    padding-right: 0rem;
    padding-left:0rem;
  }
  `

const RightZone = styled(Zone)`
  display:flex;
  align-items:center;
  justify-content:end;
  padding-right:5rem;
  @media ${device.tablet}{
    padding-right:2rem;
  }
  @media ${device.mobileL}{
    grid-row-start:2;
    grid-row-end:3;
    padding:2rem 0rem;
    justify-content: center;
  }
  `

const BottomZone = styled(Zone)`
  display: flex;
  justify-content: start;
  align-items: start;
  grid-column-start: 1;
  grid-column-end: -1;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding-left: 5rem;
  padding-right:5rem;
  @media ${device.tablet}{
    padding-left: 2rem;
    padding-right:2rem;
    align-items: center;
  }
  @media ${device.mobileL}{
    padding:0rem 2rem;
    padding-bottom:1rem;
  }
  `


const Layout: React.FC<LayoutI> = ({
  backgroundColor = [249, 228, 80],
  title,
  infoSection,
  spriteWindow,
  button,
  input
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <TopZone backgroundColor={backgroundColor}>
        {title}
      </TopZone>
      <LeftZone backgroundColor={backgroundColor}>
        {infoSection}
      </LeftZone>
      <RightZone backgroundColor={backgroundColor}>
        {spriteWindow}
      </RightZone>
      <BottomZone backgroundColor={backgroundColor}>
        {button}{input}
      </BottomZone>
    </Container>
  )
}

export default Layout
