import { useRouter } from 'next/router'
import React from 'react'

const Invitation = () => {
  const router = useRouter()
  const { invitation } = router.query
  console.log(router.query)

  return <div>Usuario {invitation}</div>
}

export default Invitation
