import { Formik } from 'formik'
import React, { useState } from 'react'
import IneValidation from './IneValidation'
import RFC from './RFC'
import TermsConditions from './TermsConditions'
import Loader from './Loader'
import { CenterWrapper } from '../pages/login'

export interface userData {
  RFC: string
  name: string
  lastName: string
  salaryAmount: string
  paidPeriod: string
  ineVerified: boolean
  acceptContract: boolean
  termsConditions: boolean
  workPlace: string
  idFront: string
  idBack: string
  selfie: string
}

const OnBoardingForm: React.FC = () => {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const initialValues: userData = {
    RFC: '',
    name: '',
    lastName: '',
    salaryAmount: '',
    paidPeriod: '',
    ineVerified: false,
    acceptContract: false,
    termsConditions: false,
    workPlace: '',
    idFront: '',
    idBack: '',
    selfie: ''
  }

  const handleSubmit = (values: userData) => {
    setLoading(true)
    console.log(values)
    setLoading(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        handleSubmit(values)
      }}
    >
      {() => (
        <>
          {loading ? (
            <CenterWrapper>
              <Loader />
            </CenterWrapper>
          ) : (
            <>
              {step === 1 && <RFC setStep={setStep} />}
              {step === 2 && <IneValidation setStep={setStep} />}
              {step === 3 && <TermsConditions setStep={setStep} />}
            </>
          )}
        </>
      )}
    </Formik>
  )
}

export default OnBoardingForm
