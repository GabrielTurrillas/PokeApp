import React from 'react';
import styled from 'styled-components';
import { PokemonType } from '../../actions/PokemonActionTypes'
import { device } from '../../styles/sizes'

interface InfoSectionI {
  abilities?: PokemonType['abilities']
  stats?: PokemonType['stats']
}

const Card = styled.div`
  display:flex;
  flex-direction:column;
  justify-items:center;
  box-shadow: .5rem .5rem #1b1b1b;
  font-family:'Roboto', sans-serif;
  border-radius:10px;
  border:3px solid #1b1b1b;
  `

const Container = styled(Card)`
  grid-template-rows:1fr 2fr 1fr 4fr;
  background-color: white;
  font-size: 1.3rem;
  width:100%;
  height:fit-content;
  grid-row-gap: 15px;
  align-items:start;
  padding-left:2rem;
  padding-right:2rem;
  padding-top:2rem;
  padding-bottom:2rem;
  @media ${device.mobileM}{
    border-radius:0;
    box-shadow:none;
    border:2px solid #1b1b1b;
  }
  `

const Zone = styled(Card)`
  background-color:#F9E450;
`

const AbilityZone = styled(Zone)`
  width:100%;
  display:grid;
  grid-row-gap: 5px;
  padding-top:10px;
  padding-bottom:10px;
`


const Title = styled(Zone)`
  width:100%;
  justify-content: center;
  align-items: center;
  height: 40px;
`

const StatsCard = styled(Card)`
  display:grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  background-color:#F9E450;
  grid-gap: 4px;
  padding-top:7px;
  padding-bottom:7px;
  padding-left:1rem;
  padding-right:1rem;
  @media ${device.mobileL}{
    width:100%;
  }
`

const Textbox = styled.div`
  display:flex;
  border:3px solid #1b1b1b;
  height:35px;
  width:80%;
  color: #1b1b1b;
  background-color: white;
  border-radius:10px;
  justify-content:center;
  align-items:center;
  margin-left:.5rem;
  margin-right:1rem;
  padding:1rem;
`

const StatCell = styled.div`
  display: grid;
  color: #F9E450;
  grid-row-gap:4px;
`

const StatsName = styled.div`
  display:flex;
  align-items:center;
  width:5rem;
  justify-content:center;
  background-color: #1b1b1b;
  border-radius:10px;
  min-height:35px;
  font-size:1rem; 
`

const InfoSection: React.FC<InfoSectionI> = ({
  abilities,
  stats,
}) => {
  let checkedAbilities: any = [' ', ' ']

  const abilityCheck = (abilities: any): any => {
    if (abilities.length >= 2) {
      const checkedAbilities = [abilities[0].ability.name, abilities[1].ability.name]
      return checkedAbilities
    }
    else if (abilities.length === 1) {
      const checkedAbilities = [abilities[0].ability.name, ' ']
      return checkedAbilities
    }
    else {
      const checkedAbilities = [' ', ' ']
      return checkedAbilities
    }
  }

  if (abilities !== undefined) {
    checkedAbilities = abilityCheck(abilities)
  }

  //{stats && console.log('stats', stats[5].stat.name)}
  //{stats && console.log('stats', stats[5].base_stat)}
  return (
    <Container>
      <Title>Abilities</Title>
      <AbilityZone>
        <Textbox>
          {checkedAbilities[0]}
        </Textbox>
        <Textbox>
          {checkedAbilities[1]}
        </Textbox>
      </AbilityZone>
      <Title>Stats</Title>
      <StatsCard>
        <StatCell>
          <StatsName>hp</StatsName>
          <Textbox>{stats && stats[0].base_stat}</Textbox>
        </StatCell>
        <StatCell>
          <StatsName>atack</StatsName>
          <Textbox>{stats && stats[1].base_stat}</Textbox>
        </StatCell>
        <StatCell>
          <StatsName>defense</StatsName>
          <Textbox>{stats && stats[2].base_stat}</Textbox>
        </StatCell>
        <StatCell>
          <StatsName>speed</StatsName>
          <Textbox>{stats && stats[5].base_stat}</Textbox>
        </StatCell>
        <StatCell>
          <StatsName>special.a</StatsName>
          <Textbox>{stats && stats[3].base_stat}</Textbox>
        </StatCell>
        <StatCell>
          <StatsName>special.d</StatsName>
          <Textbox>{stats && stats[4].base_stat}</Textbox>
        </StatCell>
      </StatsCard>
    </Container>
  )
}

export default InfoSection
