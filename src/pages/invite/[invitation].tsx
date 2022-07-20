import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CenterWrapper } from '../login'
import RFC from '../../components/RFC'
import ServiceEntity from '../../components/ServiceEntity'
import CreatePassword from '../../components/CreatePassword'
import ExternalCredentials from '../../components/ExternalCredentials'
import TermsConditions from '../../components/TermsConditions'

export interface entityTypes {
  name: string
  id: string
  twoFactor: boolean
}

const Invitation = () => {
  const [step, setStep] = useState(1)
  const [entity, setEntity] = useState<entityTypes>({
    name: 'Uber',
    id: '1',
    twoFactor: true
  })

  const router = useRouter()
  const { invitation } = router.query
  console.log(invitation)

  return (
    <CenterWrapper>
      {step === 1 && <RFC setStep={setStep} />}
      {step === 2 && <CreatePassword setStep={setStep} />}
      {step === 3 && <ServiceEntity setStep={setStep} setEntity={setEntity} />}
      {step === 4 && <ExternalCredentials setStep={setStep} entity={entity} />}
      {step === 5 && <TermsConditions />}
    </CenterWrapper>
  )
}

export default Invitation
