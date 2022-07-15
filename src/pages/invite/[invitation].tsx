import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CenterWrapper } from '../login'
import RFC from '../../components/RFC'
import CreatePassword from '../../components/CreatePassword'

const Invitation = () => {
  const [password, setPassword] = useState(false)

  const router = useRouter()
  const { invitation } = router.query
  console.log(router.query)

  if (password) {
    return (
      <CenterWrapper>
        <CreatePassword />
      </CenterWrapper>
    )
  }

  return (
    <CenterWrapper>
      <RFC createPassword={setPassword} />
    </CenterWrapper>
  )
}

export default Invitation
