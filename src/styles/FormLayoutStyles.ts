import styled from 'styled-components'
import { Form } from 'formik'
import Palette from './ColorPalette'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 400px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  background: ${Palette.light};

  @media (max-width: 744px) {
    width: 330px;
  }
`

export const ImgContainer = styled.div`
  margin: 30px;
`

export const Label = styled.label`
  margin: 30px 0 10px;
  font-weight: 700;
`

export const ButtonContainer = styled.div`
  margin: 50px 30px;
`

export const TextContainer = styled.div`
  margin: 10px 30px 0;
  font-weight: 300;
  text-align: center;
`
