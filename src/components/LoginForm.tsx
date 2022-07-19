import React, { useState } from 'react'
import styled from 'styled-components'
import { ErrorMessage, Field, Formik } from 'formik'
import Image from 'next/image'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
// import {
//   CognitoUserPool,
//   CognitoUser,
//   AuthenticationDetails
// } from 'amazon-cognito-identity-js'
// import Swal from 'sweetalert2'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import { Palette } from '../styles/ColorPalette'
import { ErrorContainer, InputText, PasswordInput } from '../styles/FormStyles'
import { useUser } from '../context/authContext'
import Modal from './Modal'
import { Loader } from './Loader'
import { RequestNewPass } from './RequestNewPass'

type LoginData = {
  user: string
  password: string
  newPassword?: string
}
// ---------------------- Styles ----------------------
const StyledForm = styled.form`
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

const ImgContainer = styled.div`
  margin: 30px;
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
const P = styled.p`
  margin: 10px 0;
  color: ${Palette.info};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
// ---------------------- Component logic ----------------------

export const LoginForm: React.FC = () => {
  const router = useRouter()
  const { user } = useUser()

  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const initialValues: LoginData = {
    user: '',
    password: '',
    newPassword: ''
  }

  const onSubmit = (values: LoginData) => {
    setLoading(true)
    setOpenModal(false)
    console.log(values)
    user.logInHandler({
      id: 123,
      token: '123123'
    })
    router.push('/home')
    setLoading(false)

    // const poolData = {
    //   UserPoolId: process.env.USER_POOL_ID || 'us-east-1_4KAiufRxD',
    //   ClientId: process.env.CLIENT_ID || '61uo42kihg2vp5ce1v0qfg5u94'
    // }

    // const authenticationDetails = new AuthenticationDetails({
    //   Username: values.user,
    //   Password: values.password
    // })

    // const cognitoUser = new CognitoUser({
    //   Username: values.user,
    //   Pool: new CognitoUserPool(poolData)
    // })

    // cognitoUser.authenticateUser(authenticationDetails, {
    //   onSuccess(result) {
    //     const accessToken = result.getAccessToken().getJwtToken()
    //     user.logInHandler(accessToken, {
    //       companyID: 1005,
    //       companyName: 'IZA BC',
    //       email: '',
    //       user: values.user
    //     })
    //     router.push('/dashboard')
    //     setLoading(false)
    //   },

    //   onFailure(err) {
    //     setLoading(false)
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Uy, algo salio mal',
    //       text: 'El usuario o la contraseña son incorrectos, por favor verifique',
    //       footer: err
    //     })
    //   },

    //   newPasswordRequired(userAttributes) {
    //     delete userAttributes.email_verified

    //     if (!values.newPassword) setOpenModal(true)
    //     else
    //       cognitoUser.completeNewPasswordChallenge(
    //         values.newPassword,
    //         { name: values.user },
    //         {
    //           onSuccess(result) {
    //             const accessToken = result.getAccessToken().getJwtToken()
    //             user.logInHandler(accessToken, {
    //               companyID: 1005,
    //               companyName: 'IZA BC',
    //               email: '',
    //               user: values.user
    //             })
    //             router.push('/dashboard')
    //           },

    //           onFailure(err) {
    //             setOpenModal(false)
    //             // eslint-disable-next-line no-param-reassign
    //             values.newPassword = ''
    //             Swal.fire({
    //               icon: 'error',
    //               title: 'Uy, algo salio mal',
    //               text: 'Por favor comuníquese con soporte',
    //               footer: err
    //             })
    //           }
    //         }
    //       )
    //   }
    // })
  }

  const validationSchema = Yup.object({
    user: Yup.string()
      .required('Ingrese su nombre de usuario')
      .email('Ingreses un email valido'),
    password: Yup.string().required('Ingrese contraseña')
  })

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
          <H1>Inicio de sesión</H1>

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

              <P
                onClick={
                  () => router.push('/password-recovery')
                  /* Swal.fire({
                    icon: 'info',
                    title: 'Olvidaste tu contraseña',
                    text: 'Por favor comuníquese con soporte para recuperar la contraseña'
                  }) */
                }
              >
                Olvide mi contraseña
              </P>
              <ButtonContainer>
                <StyledButton type="submit" variant={VariantType.primary}>
                  Iniciar sesión
                </StyledButton>
              </ButtonContainer>
            </>
          )}

          {openModal && (
            <Modal>
              <RequestNewPass
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

export default LoginForm
