import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { GetPokemon } from './actions/PokemonActions';
import styled from 'styled-components';

import GlobalStyles from './styles/global'
import Layout from './components/Layout';
import Title from './components/Title'
import InfoSection from './components/InfoSection'
import SpriteWindow from './components/SpriteWindow';
import Button from './components/Button';
import Input from './components/Input';

const Container = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #C1BFFA;
`

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('')
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setPokemonName(event.target.value)
  const handleSubmit = (): void => {
    dispatch(GetPokemon(pokemonName))
  }

  console.log('pokemon state:', pokemonState)
  return (
    <div>
      <GlobalStyles />
      <Container>
        {pokemonState.pokemon?.id ?
          <Layout
            title={<Title name={pokemonState.pokemon.name} />}
            infoSection={<InfoSection
              abilities={pokemonState.pokemon.abilities}
              stats={pokemonState.pokemon.stats}
            />}
            spriteWindow={<SpriteWindow src={pokemonState.pokemon.sprites.front_default} />}
            button={<Button onClick={handleSubmit} />}
            input={<Input onChange={handleChange} />}
          /> :
          <Layout
            title={<Title />}
            infoSection={<InfoSection />}
            spriteWindow={<SpriteWindow />}
            button={<Button onClick={handleSubmit} />}
            input={<Input onChange={handleChange} />}
          />
        }
      </Container>
    </div>
  );
}

export default App;
