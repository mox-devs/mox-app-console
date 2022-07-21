import { ErrorMessage, Formik, useFormikContext } from 'formik'
import Image from 'next/image'
import React, { useState } from 'react'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import * as Yup from 'yup'
import {
  ButtonContainer,
  ErrorContainer,
  ImgContainer,
  Label,
  StyledForm
} from '../styles/FormStyles'
import Loader from './Loader'
import styled from 'styled-components'
import ineAnverso from '../images/IneAnverso.svg'
import ineReverso from '../images/IneReverso.svg'
import selfie from '../images/selfie.png'
import Swal from 'sweetalert2'
import { userData } from './OnBoardingForm'

interface validationData {
  idFront: string
  idBack: string
  selfie: string
}

interface Iprops {
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const DashedBox = styled.div`
  border: 3px dashed #002e61;
  border-radius: 20px;
  padding: 10px;
`
const Card = styled.label`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    display: none;
  }

  & p {
    margin: 0 0 0 5px;
  }
`
const Img = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  & p {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    margin: 0;
    font-size: 20px;
    cursor: pointer;
  }
`

const IneValidation: React.FC<Iprops> = ({ setStep }) => {
  const [loading, setLoading] = useState(false)

  const { setFieldValue, values } = useFormikContext()
  const userData: userData = values as userData

  const initialValues: validationData = {
    idFront: userData.idFront || '',
    idBack: userData.idBack || '',
    selfie: userData.selfie || ''
  }

  const validationSchema = Yup.object({
    idFront: Yup.string().required('Obligatorio'),
    idBack: Yup.string().required('Obligatorio'),
    selfie: Yup.string().required('Obligatorio')
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: string | ArrayBuffer,
      shouldValidate?: boolean
    ) => void
  ) => {
    const photo = e.target.files
    const reader = new FileReader()

    reader.onloadend = () => {
      setFieldValue(e.target.id, reader.result as string)
    }

    if (photo) reader.readAsDataURL(photo[0])
  }

  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    changeValue: (
      field: string,
      value: string | ArrayBuffer,
      shouldValidate?: boolean
    ) => void
  ) => {
    setFieldValue(e.currentTarget.id, '')
    changeValue(e.currentTarget.id, '')
  }

  const handleSubmit = (values: validationData) => {
    setLoading(true)
    const { idBack, idFront, selfie } = values
    try {
      setTimeout(() => {
        setFieldValue('ineVerified', true)
        setFieldValue('idFront', idFront)
        setFieldValue('idBack', idBack)
        setFieldValue('selfie', selfie)
        setStep(3)
        setLoading(false)
      }, 2000)
      // Petición de validación de RFC
      // const res = await axios.get('url')
      // if (res.status === 200) {
      //   const { data } = res
      //   setFieldValue('ineVerified', res.data.valid)
      // }
      // setLoading(false)
      // setStep(2)
    } catch (error) {
      console.log(error)
      setLoading(false)
      Swal.fire({
        icon: 'warning',
        title: 'No se puedo validar su INE',
        text: 'Inténtelo mas tarde '
      })
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSubmit(values)
      }}
    >
      {({ setFieldValue, values }) => (
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
          {loading ? (
            <ButtonContainer>
              <Loader />
            </ButtonContainer>
          ) : (
            <>
              <Label htmlFor="idFront">Imagen frontal INE</Label>
              <DashedBox>
                {values.idFront ? (
                  <Img>
                    <p
                      id="idFront"
                      onClick={e => handleClick(e, setFieldValue)}
                    >
                      ✖
                    </p>
                    <Image
                      src={values.idFront}
                      width="200px"
                      height="80px"
                      alt="Ine parte frontal"
                    />
                  </Img>
                ) : (
                  <Card htmlFor="idFront">
                    <input
                      type="file"
                      id="idFront"
                      name="idFront"
                      accept="image/*"
                      capture="user"
                      onChange={e => handleChange(e, setFieldValue)}
                    />
                    <Image
                      src={ineAnverso}
                      width="50px"
                      height="35px"
                      alt="iconId"
                    />
                    <p>Cargar imagen</p>
                  </Card>
                )}
              </DashedBox>
              <ErrorContainer>
                <ErrorMessage name="idFront" />
              </ErrorContainer>

              <Label htmlFor="idBack">Imagen trasera INE</Label>
              <DashedBox>
                {values.idBack ? (
                  <Img>
                    <p id="idBack" onClick={e => handleClick(e, setFieldValue)}>
                      ✖
                    </p>
                    <Image
                      src={values.idBack}
                      width="200px"
                      height="80px"
                      alt="Ine parte frontal"
                    />
                  </Img>
                ) : (
                  <Card htmlFor="idBack">
                    <input
                      type="file"
                      id="idBack"
                      name="idBack"
                      accept="image/*"
                      capture="user"
                      onChange={e => handleChange(e, setFieldValue)}
                    />
                    <Image
                      src={ineReverso}
                      width="50px"
                      height="35px"
                      alt="iconId"
                    />
                    <p>Cargar imagen</p>
                  </Card>
                )}
              </DashedBox>
              <ErrorContainer>
                <ErrorMessage name="idBack" />
              </ErrorContainer>

              <Label htmlFor="selfie">Fotografía</Label>
              <DashedBox>
                {values.selfie ? (
                  <Img>
                    <p id="selfie" onClick={e => handleClick(e, setFieldValue)}>
                      ✖
                    </p>
                    <Image
                      src={values.selfie}
                      width="200px"
                      height="80px"
                      alt="Ine parte frontal"
                    />
                  </Img>
                ) : (
                  <Card htmlFor="selfie">
                    <input
                      type="file"
                      id="selfie"
                      name="selfie"
                      accept="image/*"
                      capture="user"
                      onChange={e => handleChange(e, setFieldValue)}
                    />
                    <Image
                      src={selfie}
                      width="50px"
                      height="35px"
                      alt="iconId"
                    />
                    <p>Cargar imagen</p>
                  </Card>
                )}
              </DashedBox>
              <ErrorContainer>
                <ErrorMessage name="selfie" />
              </ErrorContainer>

              <ButtonContainer>
                <StyledButton
                  type="button"
                  variant={VariantType.secondary}
                  onClick={() => setStep(1)}
                >
                  Atrás
                </StyledButton>

                <StyledButton type="submit" variant={VariantType.primary}>
                  Continuar
                </StyledButton>
              </ButtonContainer>
            </>
          )}
        </StyledForm>
      )}
    </Formik>
  )
}

export default IneValidation
