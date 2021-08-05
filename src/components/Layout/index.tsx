import React from 'react'
import styled from 'styled-components';

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
  padding-left:80px;
  padding-right:80px;
  padding-top:50px;
  padding-bottom:50px;
`

const LeftZone = styled(Zone)`
  display: flex;
  padding-left:80px;
  padding-bottom:30px;
`

const RightZone = styled(Zone)`
  display:flex;
  align-items:center;
  justify-content:end;
  padding-right:80px;
`

const BottomZone = styled(Zone)`
  display: flex;
  justify-content: start;
  align-items: start;
  padding-top: 15px;
  padding-left: 80px;
  grid-column-start: 1;
  grid-column-end: -1;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding-right:70px;
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
