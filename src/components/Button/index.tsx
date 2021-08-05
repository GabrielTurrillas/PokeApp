import React from 'react'
import styled from 'styled-components';
import { HiOutlineSparkles } from 'react-icons/hi';

interface ButtonI {
  onClick?: React.MouseEventHandler<HTMLInputElement>
}

const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  width:140px;
  max-height:50px;
  padding-top:17px;
  padding-bottom:17px;
  padding-left:10px;
  padding-right:10px;
  margin-right:15px;
  border-radius:13px;
  font-family:'Roboto', sans-serif;
  font-size:1.2rem;
  letter-spacing:1px;
  background:#1b1b1b;
  color: #F9E450;
  cursor: pointer;
  &:hover{
    transition:.2s;
    transform:scale(1.1);
    &:active{
      transition:.2s;
      transform:scale(.9);
    }
  }
`

const Button: React.FC<ButtonI> = ({
  onClick
}) => {
  return (
    <Container onClick={onClick}>
      <HiOutlineSparkles />Search<HiOutlineSparkles />
    </Container>
  )
}

export default Button
