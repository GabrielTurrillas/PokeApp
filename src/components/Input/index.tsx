import React from 'react';
import styled from 'styled-components';

interface InputI {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Container = styled.input`
  padding-left:20px;
  border-radius:15px;
  border:3px solid #1b1b1b;
  height:50px;
  width:100%;
  cursor: text;
  font-size:1.2rem;
  letter-spacing:1px;
`

const Input: React.FC<InputI> = ({
  onChange
}) => {
  return (
    <Container onChange={onChange} placeholder='Search Pokemon...' />
  )
}

export default Input
