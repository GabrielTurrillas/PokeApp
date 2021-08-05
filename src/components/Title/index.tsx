import React from 'react'
import styled from 'styled-components';
import { PokemonType } from '../../actions/PokemonActionTypes'


export interface TitleI {
  name?: PokemonType['name']
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 102px;
  width:100%;
  text-align: center;
  font-size:2rem;
  border:3px solid #1b1b1b;
  border-radius:10px;
  background-color:white;
  box-shadow: .5rem .5rem #1b1b1b;
  font-family: 'Roboto', sans-serif;
`

const Title: React.FC<TitleI> = ({
  name
}) => {
  return (
    <Container>
      {name}
    </Container>
  )
}

export default Title
