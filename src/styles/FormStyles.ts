import { Field } from 'formik'
import styled from 'styled-components'
import { Palette } from './ColorPalette'

export const InputText = styled(Field)`
  background: ${Palette.bg_input};
  border: none;
  width: 80%;
  padding: 0;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  text-align: center;
`
export const PasswordInput = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  z-index: 1;

  & input {
    background: ${Palette.bg_input};
    border: none;
    width: 85%;
    padding: 0;
    height: 50px;
    font-size: 16px;
    border-radius: 10px 0 0 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
    text-align: center;
  }

  & button {
    background: ${Palette.secondary};
    height: 100%;
    border: none;
    width: 15%;
    border-radius: 0 10px 10px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0;
    & svg {
      width: 25px;
      height: 25px;
      color: ${Palette.dark};
    }
  }
`

export const ErrorContainer = styled.div`
  color: ${Palette.danger};
  margin: 10px 0 0 0;
  font-size: 16px;
`
