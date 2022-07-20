import React, { useState } from 'react'
import { Formik, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import Image from 'next/image'
import { ErrorContainer, PasswordInput } from '../styles/FormStyles'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { StyledForm } from './RFC'

// ----- Types ------
type Password = {
  password: string
  confirmPassword: string
}
interface Iprops {
  setStep: React.Dispatch<React.SetStateAction<number>>
}
// ----- Styles -----

const ImgContainer = styled.div`
  margin: 30px;
`

const Label = styled.label`
  margin: 30px 0 10px;
  font-weight: 700;
  line-height: 19px;
`

const ButtonContainer = styled.div`
  margin: 50px 30px;
`

// ----- Component Logic -----

const CreatePassword: React.FC<Iprops> = ({ setStep }) => {
  const [showPass, setShowPass] = useState({
    pass: false,
    confirmPass: false
  })

  const initialValues: Password = {
    password: '',
    confirmPassword: ''
  }

  const handleSubmit = (values: Password) => {
    setStep(3)
    console.log(
      `Contraseña: ${values.password}, confirmación: ${values.confirmPassword}`
    )
  }

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
      .required('Ingrese una nueva contraseña'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Confirme su contraseña')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => handleSubmit(values)}
    >
      {({ values, handleChange }) => (
        <StyledForm method="POST">
          <ImgContainer>
            <Image
              src="https://s3.amazonaws.com/mox.cash/website/615b3d76eef2b86a7a22a186_mox-main-logo-sep21.svg"
              alt="Mox Servicios de Nómina"
              width="180px"
              height="40px"
              priority
            />
          </ImgContainer>
          <Label htmlFor="password">Contraseña</Label>
          <PasswordInput>
            <Field
              id="password"
              name="password"
              type={showPass.pass ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() =>
                setShowPass({
                  pass: !showPass.pass,
                  confirmPass: showPass.confirmPass
                })
              }
            >
              {showPass.pass ? <BsEyeSlashFill /> : <BsEyeFill />}
            </button>
          </PasswordInput>
          <ErrorContainer>
            <ErrorMessage name="password" />
          </ErrorContainer>
          <Label>Repetir Contraseña</Label>
          <PasswordInput>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type={showPass.confirmPass ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() =>
                setShowPass({
                  pass: showPass.pass,
                  confirmPass: !showPass.confirmPass
                })
              }
            >
              {showPass.confirmPass ? <BsEyeSlashFill /> : <BsEyeFill />}
            </button>
          </PasswordInput>
          <ErrorContainer>
            <ErrorMessage name="confirmPassword" />
          </ErrorContainer>
          <ButtonContainer>
            <StyledButton type="submit" variant={VariantType.primary}>
              Continuar
            </StyledButton>
          </ButtonContainer>
        </StyledForm>
      )}
    </Formik>
  )
}

export default CreatePassword
