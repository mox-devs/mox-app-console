import { Formik } from 'formik'
import Image from 'next/image'
import React from 'react'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import {
  ButtonContainer,
  ImgContainer,
  Label,
  StyledForm,
  TextContainer
} from '../styles/FormLayoutStyles'
import { InputText } from '../styles/FormStyles'
import * as Yup from 'yup'
import AutoSubmitToken from './AutoSubmitToken'
import Swal from 'sweetalert2'
import { BsArrowLeft } from 'react-icons/bs'

// ----- Types -----

export type Auth = {
  auth: string
}

interface IProps {
  handleState: React.Dispatch<React.SetStateAction<boolean>>
  handleBack: React.Dispatch<React.SetStateAction<boolean>>
  email: string
}

// ----- Component Logic -----

const PassAuthentication: React.FC<IProps> = ({
  handleState,
  handleBack,
  email
}) => {
  const initialValues: Auth = {
    auth: ''
  }

  const validationSchema = Yup.object({
    auth: Yup.string().min(6).max(6).required('Obligatorio')
  })

  const onSubmit = (values: Auth) => {
    if (values.auth === '123456') {
      handleState(true)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Token no válido',
        text: 'Por favor ingrese el token nuevamente'
      })
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <StyledForm method="POST" onSubmit={handleSubmit}>
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
              Se ha enviado un email a <strong>{email}</strong>. Por favor,
              revise su bandeja de entrada.
            </p>
          </TextContainer>
          <Label htmlFor="auth">Ingrese su codigo de recuperación</Label>
          <InputText
            id="auth"
            name="auth"
            maxLength="6"
            autocomplete="off"
            value={values.auth}
            onChange={handleChange}
          />
          <AutoSubmitToken />
          <ButtonContainer>
            <StyledButton
              type="button"
              onClick={() => {
                handleBack(false)
              }}
              variant={VariantType.secondary}
            >
              {<BsArrowLeft />} Atrás
            </StyledButton>
          </ButtonContainer>
        </StyledForm>
      )}
    </Formik>
  )
}

export default PassAuthentication
