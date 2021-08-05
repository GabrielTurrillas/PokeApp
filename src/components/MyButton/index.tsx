import React from 'react'
import styled from 'styled-components'

type rgbType = [[number, number, number], [number, number, number]]

interface PropsI {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  label?: string
  color?: string
  backgroundColor?: rgbType
}

const Button = styled.button<{
  color: string
  backgroundColor: rgbType
}>`
  border: none; 
  padding:10px 20px;
  border-radius:5px;
  font-weight:bold;
  background: linear-gradient(
    rgb(${p => p.backgroundColor[0][0]},
        ${p => p.backgroundColor[0][1]},
        ${p => p.backgroundColor[0][2]}) 50%,
    rgb(${p => p.backgroundColor[1][0]},
        ${p => p.backgroundColor[1][1]},
        ${p => p.backgroundColor[1][2]})
  );
  color:${p => p.color};
  cursor: pointer;
  z-index: 1;
  &:hover{
    transition:0.2s;
    transform:scale(1.1); 
    &:active{
      transition:0.2s;
      transform:scale(.9); 
    }
  }
`

const MyButton: React.FC<PropsI> = ({
  onClick,
  label = 'Button',
  color = '#1b1b1b',
  backgroundColor = [[233, 64, 87], [138, 35, 135]]
}: PropsI) => {
  return (
    <Button
      color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default MyButton
