import React from 'react'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import Image from 'next/image'
import { ErrorContainer, InputText } from '../styles/FormStyles'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import Swal from 'sweetalert2'
import {
  ButtonContainer,
  ImgContainer,
  Label,
  StyledForm,
  TextContainer
} from '../styles/FormLayoutStyles'

// ----- Types -----

type UserEmail = {
  email: string
}

interface IProps {
  handleState: React.Dispatch<React.SetStateAction<boolean>>
  handleEmail: React.Dispatch<React.SetStateAction<string>>
}

// ----- Styles -----

const H1 = styled.h1`
  margin: 0px;
  font-size: 24px;
`

// ----- Component Logic -----

const PassRecovery: React.FC<IProps> = ({ handleState, handleEmail }) => {
  const initialValues: UserEmail = { email: '' }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Ingrese un correo electronico valido')
      .required('Ingrese un correo electronico')
  })

  const onSubmit = (values: UserEmail) => {
    if (values.email === 'notfound@email.com') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor intente nuevamente'
      })
    } else {
      handleEmail(values.email)
      handleState(true)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange }) => (
        <StyledForm>
          <ImgContainer>
            <Image
              src="https://s3.amazonaws.com/mox.cash/website/615b3d76eef2b86a7a22a186_mox-main-logo-sep21.svg"
              alt="Mox Servicios de Nómina"
              width="180px"
              height="40px"
              priority
            />
          </ImgContainer>
          <H1>Recuperar contraseña</H1>
          <TextContainer>
            <p>
              Ingrese el email asociado con su cuenta y le enviaremos un código
              de recuperación.
            </p>
          </TextContainer>

          <Label htmlFor="email">Ingrese su e-mail</Label>
          <InputText
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <ErrorContainer>
            <ErrorMessage name="email" />
          </ErrorContainer>
          <ButtonContainer>
            <StyledButton type="submit" variant={VariantType.primary}>
              Enviar código
            </StyledButton>
          </ButtonContainer>
        </StyledForm>
      )}
    </Formik>
  )
}

export default PassRecovery
