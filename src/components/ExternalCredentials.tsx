import React, { useState } from 'react'
import styled from 'styled-components'
import { ErrorMessage, Field, Formik } from 'formik'
import Image from 'next/image'
import * as Yup from 'yup'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import {
  ButtonContainer,
  ErrorContainer,
  ImgContainer,
  InputText,
  Label,
  PasswordInput,
  StyledForm
} from '../styles/FormStyles'
import Modal from './Modal'
import { Loader } from './Loader'
import { entityTypes } from '../pages/invite/[invitation]'
import RequestTwoFactor from './RequestTwoFactor'

interface Iprops {
  setStep: React.Dispatch<React.SetStateAction<number>>
  entity: entityTypes
}
interface externalData {
  user: string
  password: string
  twoFactor: string
}

const H1 = styled.h1`
  margin: 0px;
  font-size: 24px;
`

const ExternalCredentials: React.FC<Iprops> = ({ setStep, entity }) => {
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const initialValues: externalData = {
    user: '',
    password: '',
    twoFactor: ''
  }
  const validationSchema = Yup.object({
    user: Yup.string()
      .required('Ingrese su nombre de usuario')
      .email('Ingreses un email valido'),
    password: Yup.string().required('Ingrese contraseña')
  })

  const onSubmit = (values: externalData) => {
    if (entity.twoFactor && values.twoFactor === '') {
      setOpenModal(true)
    } else {
      setStep(5)
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async values => {
        onSubmit(values)
      }}
    >
      {({ handleSubmit }) => (
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
          <H1>Inicio de sesión con {entity.name}</H1>

          {loading ? (
            <ButtonContainer>
              <Loader />
            </ButtonContainer>
          ) : (
            <>
              <Label htmlFor="user">Usuario</Label>
              <InputText id="user" name="user" placeholder="Mox-Admin" />
              <ErrorContainer>
                <ErrorMessage name="user" />
              </ErrorContainer>

              <Label htmlFor="password">Contraseña</Label>
              <PasswordInput>
                <Field
                  id="password"
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

              <ButtonContainer>
                <StyledButton type="submit" variant={VariantType.primary}>
                  Iniciar sesión
                </StyledButton>
              </ButtonContainer>
            </>
          )}

          {openModal && (
            <Modal>
              <RequestTwoFactor
                closeModal={setOpenModal}
                closeLoader={setLoading}
              />
            </Modal>
          )}
        </StyledForm>
      )}
    </Formik>
  )
}

export default ExternalCredentials
