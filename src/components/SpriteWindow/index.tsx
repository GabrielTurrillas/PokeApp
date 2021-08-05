import React from 'react'
import styled from 'styled-components'

interface SpriteWindowI {
  src?: string
}

const Container = styled.div`
  padding-top:50px;
  padding-bottom:50px;
  padding-left:50px;
  padding-right:50px;
  min-height:204.993px;
  min-width:200.477px;
  border:3px solid #1b1b1b;
  box-shadow: .5rem .5rem #1b1b1b;
  border-radius:10px;
  background-color:white;
`

const SpriteWindow: React.FC<SpriteWindowI> = ({
  src
}) => {
  return (
    <Container>
      <img src={src} alt="" />
    </Container>
  )
}

export default SpriteWindow
