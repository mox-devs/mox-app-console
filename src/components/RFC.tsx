import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import Palette from '../styles/ColorPalette'
import * as Yup from 'yup'
import { InputText } from '../styles/FormStyles'
import Image from 'next/image'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import Swal from 'sweetalert2'
import Loader from './Loader'

// ----- Types & Interfaces -----
type RfcData = {
  rfc: string
  terms: boolean
}

interface Iprops {
  createPassword: React.Dispatch<React.SetStateAction<boolean>>
}

// ----- Styles -----
const StyledForm = styled(Form)`
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

const Label = styled.label`
  margin: 10px 0 10px;
  font-weight: 700;
  line-height: 19px;
`

const CheckboxLabel = styled.label`
  margin: 30px 0;
  font-weight: 400;
  font-size: 0.9rem;

  &,
  input {
    cursor: pointer;
  }
`

const ButtonContainer = styled.div`
  margin: 50px 30px;
`

// ----- Component Logic -----

const RFC: React.FC<Iprops> = ({ createPassword }) => {
  const [loading, setLoading] = useState(false)

  const initialValues: RfcData = {
    rfc: '',
    terms: false
  }

  const handleSubmit = (values: RfcData) => {
    setLoading(true)
    if (values.rfc === '1234') {
      createPassword(true)
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Clave RFC no encontrada',
        text: 'Disculpe las molestias.'
      })
    }

    setLoading(false)
  }

  const validationSchema = Yup.object({
    rfc: Yup.string().required('Obligatorio'),
    terms: Yup.bool().oneOf([true], 'Obligatorio')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSubmit(values)
      }}
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
          {loading ? (
            <ButtonContainer>
              <Loader />
            </ButtonContainer>
          ) : (
            <>
              <Label htmlFor="rfc">Ingrese su clave RFC</Label>
              <InputText
                id="rfc"
                name="rfc"
                value={values.rfc}
                onChange={handleChange}
              />
              <CheckboxLabel htmlFor="terms">
                <Field
                  id="terms"
                  name="terms"
                  type="checkbox"
                  onChange={handleChange}
                />
                Acepto los <strong>terminos y condiciones</strong>
              </CheckboxLabel>
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
