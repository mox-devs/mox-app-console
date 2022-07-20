import React, { useState } from 'react'
import CreateNewPass from '../components/CreateNewPass'
import PassRecovery from '../components/PassRecovery'
import PassAuthentication from '../components/PassAuthentication'
import { CenterWrapper } from './login'

/* function reducer(state, action) {
  switch (action.type) {
    case 'authentication':
      return { component: <PassAuthentication />}
    case 'create': 
      return { component: <CreateNewPass /> }
    default:
      return { component: <PassRecovery /> }
  }
} */

const NewPassword = () => {
  const [email, setEmail] = useState('')
  const [auth, setAuth] = useState(false)
  const [pass, setPass] = useState(false)

  if (pass) {
    return (
      <CenterWrapper>
        <CreateNewPass />
      </CenterWrapper>
    )
  }

  if (auth) {
    return (
      <CenterWrapper>
        <PassAuthentication
          handleState={setPass}
          handleBack={setAuth}
          email={email}
        />
      </CenterWrapper>
    )
  }

  return (
    <CenterWrapper>
      <PassRecovery handleState={setAuth} handleEmail={setEmail} />
    </CenterWrapper>
  )
}

export default NewPassword
