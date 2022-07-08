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
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 16px 35px;
  width: 100%;
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  font-size: 1em;
  font-size: 18px;
  color: ${Palette.light};
  background: ${props =>
    props.variant === VariantType.primary
      ? Palette.secondary
      : Palette.primary};
  background: ${props => props.disabled && Palette.gray};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    opacity: ${props => props.disabled && 1};
  }
`
