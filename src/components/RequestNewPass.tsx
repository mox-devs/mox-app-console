import React, { useState } from 'react'
import { ErrorMessage, Field, Formik, useFormikContext } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
// import useOutsideClick from '../../../hooks/useOutsideClick'
import { Palette } from '../styles/ColorPalette'
import { ErrorContainer, PasswordInput } from '../styles/FormStyles'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import { Anvil } from '../styles/animations/Anvil'

interface Iprops {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>
  closeLoader: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledForm = styled.form`
  z-index: 10;
  width: 500px;
  background: ${Palette.light};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.418);
  position: fixed;
  top: 0px;
  z-index: 2;
`

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 30px);
  margin: 20px;

  & button {
    border: none;
    padding: 5px;
    background: none;
    font-size: 16px;
    cursor: pointer;
  }
`
export const RequestNewPass: React.FC<Iprops> = ({
  closeModal,
  closeLoader
}) => {
  const initialValues = {
    password: '',
    confirmPass: ''
  }
  const { submitForm, setFieldValue } = useFormikContext()

  const [showPass, setShowPass] = useState(false)
  const [showConPass, setShowConPass] = useState(false)

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(10, 'Contraseña muy corta')
      .matches(/[A-Z]/, 'Debe contener por lo menos 1 mayúscula')
      .matches(/[a-z]/, 'Debe contener por lo menos 1 minúscula')
      .matches(/[0-9]/, 'Debe contener por lo menos 1 dígito')
      .matches(
        /[!@#$%^&*()\-_=+{};:,<.>]/,
        'Debe contener por lo menos 1 carácter especial'
      )
      .required('Ingrese su nueva contraseña'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Confirme su contraseña')
  })

  const onSubmit = (values: { password: string }) => {
    setFieldValue('newPassword', values.password)
    submitForm()
  }

  // const ref = useRef()

  const onClose = () => {
    closeModal(false)
    closeLoader(false)
    setFieldValue('newPassword', '')
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
            <H1>Actualización de contraseña</H1>

            <Label htmlFor="password">Contraseña</Label>
            <PasswordInput>
              <Field
                id="newPassword"
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="**** **** ****"
                autoComplete="off"
              />
              <button type="button" onClick={() => setShowPass(!showPass)}>
                {showPass ? <BsEyeSlashFill /> : <BsEyeFill />}
              </button>
            </PasswordInput>
            <ErrorContainer>
              <ErrorMessage name="password" />
            </ErrorContainer>

            <Label htmlFor="confirmPass">Confirmar Contraseña</Label>
            <PasswordInput>
              <Field
                id="confirmPass"
                name="confirmPass"
                type={showConPass ? 'text' : 'password'}
                placeholder="**** **** ****"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowConPass(!showConPass)}
              >
                {showConPass ? <BsEyeSlashFill /> : <BsEyeFill />}
              </button>
            </PasswordInput>
            <ErrorContainer>
              <ErrorMessage name="confirmPass" />
            </ErrorContainer>

            <ButtonContainer>
              <StyledButton type="submit" variant={VariantType.primary}>
                Cambiar contraseña
              </StyledButton>
            </ButtonContainer>
          </StyledForm>
        )}
      </Formik>
    </Div>
  )
}

export default RequestNewPass
