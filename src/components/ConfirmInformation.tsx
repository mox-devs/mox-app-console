import React from 'react'
import { ButtonContainer, ImgContainer, StyledForm } from '../styles/FormStyles'
import Image from 'next/image'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import { userData } from './OnBoardingForm'
import { useFormikContext } from 'formik'
import styled from 'styled-components'

interface Iprops {
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const H1 = styled.h1`
  margin: 0px;
  font-size: 24px;
`
const InfoWrapper = styled.div`
  display: grid;
  column-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px 10px;
  row-gap: 10px;
  & p {
    margin: 0;
  }
`

const ConfirmInformation: React.FC<Iprops> = ({ setStep }) => {
  const { values } = useFormikContext()

  const userData: userData = values as userData

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setStep(4)
  }

  return (
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
      <H1>Confirma tus datos</H1>
      <InfoWrapper>
        <p>
          <b>Nombres: </b>
          {userData.name}
        </p>

        <p>
          <b>Apellidos: </b>
          {userData.lastName}
        </p>

        <p>
          <b>Salario: </b>
          {userData.salaryAmount} MXN
        </p>

        <p>
          <b>Ciclo de pagos: </b>
          {userData.paidPeriod} al mes
        </p>

        <p>
          <b>Lugar de trabajo: </b>
          {userData.workPlace}
        </p>
        <p>
          <b>RFC: </b>
          {userData.RFC}
        </p>
      </InfoWrapper>
      <ButtonContainer>
        <StyledButton
          type="button"
          variant={VariantType.secondary}
          onClick={() => setStep(2)}
        >
          Atrás
        </StyledButton>
        <StyledButton type="submit" variant={VariantType.primary}>
          Continuar
        </StyledButton>
      </ButtonContainer>
    </StyledForm>
  )
}

export default ConfirmInformation
