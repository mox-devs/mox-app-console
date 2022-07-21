import { Field, Form } from 'formik'
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
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 450px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  background: ${Palette.light};

  @media (max-width: 744px) {
    width: 330px;
  }
`

export const ImgContainer = styled.div`
  margin: 30px 30px 20px;
`

export const Label = styled.label`
  margin: 10px 0;
  font-weight: 700;
`

export const ButtonContainer = styled.div`
  display: flex;
  margin: 10px 0;

  & button {
    margin: 10px;
  }
`

export const TextContainer = styled.div`
  margin: 10px 30px 0;
  font-weight: 300;
  text-align: center;
`

export const CheckboxLabel = styled.label`
  margin: 20px 0 0;
  font-weight: 400;
  font-size: 0.9rem;

  &,
  input {
    cursor: pointer;
  }
`
