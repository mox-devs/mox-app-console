import React, { useState } from 'react'
import { Formik, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import { ErrorContainer, InputText, PasswordInput } from '../styles/FormStyles'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import {
  ButtonContainer,
  ImgContainer,
  Label,
  StyledForm,
  TextContainer
} from '../styles/FormLayoutStyles'

// ----- Types -----

type Password = {
  password: string
  confirmPass: string
}

// ----- Component Logic -----

const CreateNewPass: React.FC = () => {
  const [showPass, setShowPass] = useState(false)
  const router = useRouter()

  const initialValues: Password = {
    password: '',
    confirmPass: ''
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
      .required('Ingrese su nueva contraseña'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Confirme su contraseña')
  })

  const onSubmit = (values: Password) => {
    console.log(values.password)
    router.push('/login')
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
          <TextContainer>
            <p>
              Su nueva contraseña debe ser diferente a sus contraseñas
              anteriores.
            </p>
          </TextContainer>
          <Label htmlFor="password">Nueva contraseña</Label>
          <PasswordInput>
            <Field
              id="password"
              name="password"
              type={showPass ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
            />
            <button type="button" onClick={() => setShowPass(!showPass)}>
              {showPass ? <BsEyeSlashFill /> : <BsEyeFill />}
            </button>
          </PasswordInput>
          <ErrorContainer>
            <ErrorMessage name="password" />
          </ErrorContainer>

          <Label htmlFor="confirmPas">Confirmar nueva contraseña</Label>
          <InputText
            id="confirmPass"
            name="confirmPass"
            type="password"
            value={values.confirmPass}
            onChange={handleChange}
          />
          <ErrorContainer>
            <ErrorMessage name="confirmPass" />
          </ErrorContainer>
          <ButtonContainer>
            <StyledButton type="submit" variant={VariantType.primary}>
              Listo
            </StyledButton>
          </ButtonContainer>
        </StyledForm>
      )}
    </Formik>
  )
}

export default CreateNewPass
