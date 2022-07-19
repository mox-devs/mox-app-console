import React from 'react'
import { ErrorMessage, Formik, useFormikContext } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
// import useOutsideClick from '../../../hooks/useOutsideClick'
import { Palette } from '../styles/ColorPalette'
import { ErrorContainer, InputText } from '../styles/FormStyles'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import { Anvil } from '../styles/animations/Anvil'

interface Iprops {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>
  closeLoader: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledForm = styled.form`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 500px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  background: ${Palette.light};
  animation: ${Anvil} 1s ease forwards;

  @media (max-width: 744px) {
    width: 330px;
  }
`
const H1 = styled.h1`
  margin: 0px;
  font-size: 24px;
`
const Label = styled.label`
  margin: 30px 0 10px;
  font-weight: 700;
  line-height: 19px;
`

const ButtonContainer = styled.div`
  margin: 30px 30px;
`
const Div = styled.div`
  position: fixed;
  top: 0px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.418);
`

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  width: calc(100% - 30px);

  & button {
    border: none;
    padding: 5px;
    font-size: 16px;
    background: none;
    cursor: pointer;
  }
`
export const RequestTwoFactor: React.FC<Iprops> = ({
  closeModal,
  closeLoader
}) => {
  const initialValues = {
    twoFactor: ''
  }
  const { submitForm, setFieldValue } = useFormikContext()

  const validationSchema = Yup.object({
    twoFactor: Yup.string().required('obligatorio')
  })

  const onSubmit = (values: { twoFactor: string }) => {
    setFieldValue('twoFactor', values.twoFactor)
    submitForm()
    closeModal(false)
    closeLoader(false)
  }

  // const ref = useRef()

  const onClose = () => {
    closeModal(false)
    closeLoader(false)
    setFieldValue('twoFactor', '')
  }

  // useOutsideClick(ref, onClose, [(document.body.style.overflowY = 'unset')])

  return (
    <Div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async values => {
          onSubmit(values)
        }}
      >
        {({ handleSubmit }) => (
          <StyledForm method="POST" onSubmit={handleSubmit}>
            <CloseButton>
              <button type="button" onClick={() => onClose()}>
                X
              </button>
            </CloseButton>
            <H1>Ingresa el código del 2 factor</H1>

            <Label htmlFor="twoFactor">Código de confirmación</Label>
            <InputText id="twoFactor" name="twoFactor" />
            <ErrorContainer>
              <ErrorMessage name="twoFactor" />
            </ErrorContainer>

            <ButtonContainer>
              <StyledButton type="submit" variant={VariantType.primary}>
                Confirmar
              </StyledButton>
            </ButtonContainer>
          </StyledForm>
        )}
      </Formik>
    </Div>
  )
}

export default RequestTwoFactor
