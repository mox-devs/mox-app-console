import { Field } from 'formik'
import styled from 'styled-components'
import { Palette } from './ColorPalette'

export const InputText = styled(Field)`
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
  width: 80%;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  text-align: center;
  background: ${Palette.bg_input};
`
export const PasswordInput = styled.div`
  z-index: 1;
  display: flex;
  width: 80%;
  height: 50px;

  & input {
    outline: none;
    border: none;
    border-radius: 10px 0 0 10px;
    padding: 0;
    width: 85%;
    height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 16px;
    text-align: center;
    background: ${Palette.bg_input};
  }

  & button {
    border: none;
    border-radius: 0 10px 10px 0;
    padding: 0;
    width: 15%;
    height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: ${Palette.secondary};
    & svg {
      width: 25px;
      height: 25px;
      color: ${Palette.dark};
    }
  }
`

export const ErrorContainer = styled.div`
  margin: 10px 0 0 0;
  font-size: 16px;
  color: ${Palette.danger};
`
