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
  const Capitalize = (name: any): string => {
    const firstLetter: string = name.charAt(0)
    const upperLetter: string = firstLetter.toUpperCase()
    const capitalizedName: string = upperLetter + name.slice(1)
    return capitalizedName
  }

  let capitalizedName: string = ' '
  if (name) {
    capitalizedName = Capitalize(name)
  }

  return (
    <Container>
      {capitalizedName}
    </Container>
  )
}

export default Title
