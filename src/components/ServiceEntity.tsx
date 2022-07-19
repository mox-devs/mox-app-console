import React, { useState } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import Palette from '../styles/ColorPalette'
import * as Yup from 'yup'
import Image from 'next/image'
import { ErrorContainer } from '../styles/FormStyles'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import Loader from './Loader'
import Deel from '../images/Deel_Logo.jpg'
import Uber from '../images/Uber_logo.png'
import { useRouter } from 'next/router'
import { StyledForm } from './RFC'
import { entityTypes } from '../pages/invite/[invitation]'
// ----- Types & Interfaces -----
type EntityData = {
  id: string
}

interface Iprops {
  setStep: React.Dispatch<React.SetStateAction<number>>
  setEntity: React.Dispatch<React.SetStateAction<entityTypes>>
}

interface StyleProps {
  readonly selected: boolean
}
// ----- Styles -----

const ImgContainer = styled.div`
  margin: 30px;
`
const H1 = styled.h1`
  font-size: 20px;
  text-align: center;
`
const ItemsWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`
const Item = styled.div<StyleProps>`
  padding: 12px;
  cursor: pointer;
  ${props =>
    props.selected && {
      border: `solid 2px ${Palette.info}`,
      borderRadius: '5px',
      padding: '5px'
    }}
`

const Label = styled.label`
  display: block;
  padding: 10px;
  cursor: pointer;
  & input {
    display: none;
  }
`
const ButtonContainer = styled.div`
  margin: 10px auto 20px;
`

// ----- Component Logic -----

const ServiceEntity: React.FC<Iprops> = ({ setStep, setEntity }) => {
  const [loading, setLoading] = useState(false)
  const [selected, setSSelected] = useState<string>()
  const router = useRouter()

  const initialValues: EntityData = {
    id: ''
  }

  const handleSubmit = (values: EntityData) => {
    setLoading(true)
    setStep(4)
    setEntity({
      name: 'Uber',
      id: '1',
      twoFactor: true
    })
    router.query.id = values.id
    router.push(router)
    console.log(values)

    setLoading(false)
  }

  const validationSchema = Yup.object({
    id: Yup.string().required('Obligatorio')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSubmit(values)
      }}
    >
      {({ setFieldValue }) => (
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
              <H1>Seleccione su proveedor de servicios</H1>

              <ItemsWrapper>
                <Item selected={selected === '1'}>
                  <Label>
                    <Field
                      type="radio"
                      name="id"
                      value="1"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue('id', e.target.value)
                        setSSelected(e.target.value)
                      }}
                    />
                    <Image
                      src={Deel}
                      alt="Mox Servicios de Nómina"
                      width="150px"
                      height="40px"
                      priority
                    />
                  </Label>
                </Item>

                <Item selected={selected === '4'}>
                  <Label>
                    <Field
                      type="radio"
                      name="id"
                      value="4"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue('id', e.target.value)
                        setSSelected(e.target.value)
                      }}
                    />
                    <Image
                      src={Uber}
                      alt="Mox Servicios de Nómina"
                      width="150px"
                      height="40px"
                      priority
                    />
                  </Label>
                </Item>
              </ItemsWrapper>
              <ErrorContainer>
                <ErrorMessage name="id" />
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

export default ServiceEntity
