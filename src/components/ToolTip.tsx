import React from 'react'
import styled from 'styled-components'

interface Iprops {
  children: React.ReactNode
  toolTipText: string
  visible: boolean
}
interface styleProps {
  readonly visible: boolean
}

const ToolTipText = styled.span<styleProps>`
  position: absolute;
  left: 50%;
  bottom: 150%;
  z-index: 1;
  margin-left: -60px;
  border-radius: 6px;
  padding: 5px 0;
  width: 120px;
  text-align: center;
  color: #fff;
  background-color: #000;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    margin-left: -5px;
    border-style: solid;
    border-width: 5px;
    border-color: black transparent transparent transparent;
  }
`
const ToolTip = styled.div`
  position: relative;
  /* &:hover span {
    visibility: visible;
  } */
`

const ToolTipComponent: React.FC<Iprops> = ({
  children,
  toolTipText,
  visible
}) => {
  return (
    <ToolTip>
      {children}
      <ToolTipText visible={visible}>{toolTipText}</ToolTipText>
    </ToolTip>
  )
}

export default ToolTipComponent
