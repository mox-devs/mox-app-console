import React from 'react'
import OnBoardingForm from '../../components/OnBoardingForm'
import { CenterWrapper } from '../login'

export interface entityTypes {
  name: string
  id: string
  twoFactor: boolean
}

const Invitation = () => {
  return (
    <CenterWrapper>
      <OnBoardingForm />
    </CenterWrapper>
  )
}

export default Invitation
