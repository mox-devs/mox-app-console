import React, { useState } from 'react'
import { Formik, Field, useFormikContext, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
  ButtonContainer,
  CheckboxLabel,
  ErrorContainer,
  ImgContainer,
  InputText,
  Label,
  StyledForm
} from '../styles/FormStyles'
import Image from 'next/image'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import Swal from 'sweetalert2'
import Loader from './Loader'
import { userData } from './OnBoardingForm'

// ----- Types & Interfaces -----
type RfcData = {
  rfc: string
  terms: boolean
}

interface Iprops {
  setStep: React.Dispatch<React.SetStateAction<number>>
}

// ----- Component Logic -----

const RFC: React.FC<Iprops> = ({ setStep }) => {
  const [loading, setLoading] = useState(false)
  const { setFieldValue, values } = useFormikContext()

  const userData: userData = values as userData

  const initialValues: RfcData = {
    rfc: userData.RFC || '',
    terms: userData.termsConditions || false
  }

  const validationSchema = Yup.object({
    rfc: Yup.string().required('Obligatorio'),
    terms: Yup.bool().oneOf([true], 'Obligatorio')
  })

  const handleSubmit = async (values: RfcData) => {
    setLoading(true)
    const { rfc, terms } = values
    // consultar datos del rfc para traer los datos
    // simula la petición de axios
    try {
      if (rfc === '1234') throw new Error('algo salio mal')
      setTimeout(() => {
        setFieldValue('RFC', rfc)
        setFieldValue('termsConditions', terms)
        setFieldValue('name', 'Cesar Javier')
        setFieldValue('lastName', 'Ortiz Montero')
        setFieldValue('salaryAmount', '500')
        setFieldValue('paidPeriod', '2')
        setFieldValue('workPlace', 'Mox')
        setStep(2)
        setLoading(false)
      }, 500)
      // const res = await axios.get('url')
      // if (res.status === 200) {
      //   const { data } = res
      //   setFieldValue('RFC', rfc)
      //   setFieldValue('termsConditions', terms)
      //   setFieldValue('name', data.name)
      //   setFieldValue('lastName', data.lastName)
      //   setFieldValue('salaryAmount', data.salaryAmount)
      //   setFieldValue('paidPeriod', data.paidPeriod)
      //   setFieldValue('workPlace', data.workPlace)
      // }
      // setLoading(false)
      // setStep(2)
    } catch (error) {
      console.log(error)
      setLoading(false)
      Swal.fire({
        icon: 'warning',
        title: 'Su RFC no se encuentra',
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
      {() => (
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
              <Label htmlFor="rfc">Ingrese su numero RFC</Label>
              <InputText id="rfc" name="rfc" />

              <ErrorContainer>
                <ErrorMessage name="rfc" />
              </ErrorContainer>

              <CheckboxLabel htmlFor="terms">
                <Field id="terms" name="terms" type="checkbox" />
                Acepto los <strong>términos y condiciones</strong>
              </CheckboxLabel>

              <ErrorContainer>
                <ErrorMessage name="terms" />
              </ErrorContainer>

              <ButtonContainer>
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

export default RFC
