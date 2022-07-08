import styled from 'styled-components'
import { Palette } from './ColorPalette'

export enum VariantType {
  primary = 'primary',
  secondary = 'secondary'
}

interface StyleProps {
  readonly isActive?: boolean
  variant: VariantType
}

export const StyledButton = styled.button<StyleProps>`
  background: ${props =>
    props.variant === VariantType.primary
      ? Palette.secondary
      : Palette.primary};
  background: ${props => props.disabled && Palette.gray};
  border-radius: 8px;
  font-size: 1em;
  padding: 16px 35px;
  outline: none;
  border: none;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  color: ${Palette.light};
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.8;
    opacity: ${props => props.disabled && 1};
  }
`
