import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import { useUser } from '../../context/authContext'
import SideBarLayout from '../../Layouts/SideBarLayout'
import { CenterWrapper } from '../login'
import UserList from '../../components/UserList'

const Users: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const {
    user: { isUserValid }
  } = useUser()

  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    if (!isUserValid()) {
      router.push('/login')
    }
    setLoading(false)
  }, [])

  if (loading)
    return (
      <CenterWrapper>
        <Loader />
      </CenterWrapper>
    )
  return (
    <SideBarLayout>
      <UserList />
    </SideBarLayout>
  )
}

export default Users
