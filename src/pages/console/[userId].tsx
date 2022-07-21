import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import UserDetail from '../../components/UserDetail'
import { useUser } from '../../context/authContext'
import SideBarLayout from '../../Layouts/SideBarLayout'
import { CenterWrapper } from '../login'

const UserId: NextPage = () => {
  const router = useRouter()
  const { userId } = router.query
  // ruta es /console/userId ejemplo usuario de id 1  /console/1

  const [loading, setLoading] = useState(true)
  const {
    user: { isUserValid }
  } = useUser()

  useEffect(() => {
    if (!isUserValid()) {
      router.push('/login')
    } else {
      setLoading(false)
    }
  }, [])

  if (loading)
    return (
      <CenterWrapper>
        <Loader />
      </CenterWrapper>
    )
  return (
    <SideBarLayout>
      <UserDetail id={userId as string} />
    </SideBarLayout>
  )
}

export default UserId
