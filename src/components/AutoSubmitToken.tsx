import React, { useEffect } from 'react'
import { useFormikContext } from 'formik'
import { Auth } from './PassAuthentication'

const AutoSubmitToken: React.FC = () => {
  const { values, submitForm, resetForm } = useFormikContext<Auth>()

  useEffect(() => {
    if (values.auth.length === 6) {
      submitForm()
      resetForm()
    }
  }, [values, submitForm])

  return null
}

export default AutoSubmitToken
