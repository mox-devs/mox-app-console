import React, { useState } from 'react'
import styled from 'styled-components'
import Palette from '../styles/ColorPalette'
import ToolTipComponent from './ToolTip'

const H1 = styled.h1`
  margin-top: 0px;
  font-size: 24px;
  text-align: center;
  color: ${Palette.primary};
`
const Invitation = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px ${Palette.gray};
  border-radius: 5px;
  padding: 0 0 0 5px;
  width: fit-content;
  background: #c4c4c492;
  user-select: none;
`
const Button = styled.button`
  margin: 0 0 0 5px;
  border: none;
  padding: 10px;
  font-weight: 700;
  font-size: 16px;
  color: ${Palette.light};
  background: ${Palette.secondary};
  transition: 300ms;
  &:hover {
    border-radius: 0 5px 5px 0;
    transform: scale(1.1);
  }
`

const OnBoard: React.FC = () => {
  const [toolTip, setToolTip] = useState(false)
  const urlInvite = 'http://localhost:3000/invite/asdq131234'

  const handleClick = () => {
    setToolTip(true)

    setTimeout(() => {
      setToolTip(false)
    }, 600)

    navigator.clipboard.writeText(urlInvite)
  }

  return (
    <div>
      <H1>On boarding</H1>

      <div>
        <p>Con este link podrás invitar a mas usuarios:</p>

        <Invitation>
          {urlInvite}
          <ToolTipComponent toolTipText="Texto copiado" visible={toolTip}>
            <Button type="button" onClick={handleClick}>
              Copiar
            </Button>
          </ToolTipComponent>
        </Invitation>
      </div>
    </div>
  )
}

export default OnBoard
