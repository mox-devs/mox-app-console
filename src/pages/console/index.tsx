import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import { useUser } from '../../context/authContext'
import SideBarLayout from '../../Layouts/SideBarLayout'
import { CenterWrapper } from '../login'

const Console: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const {
    user: { isUserValid }
  } = useUser()

  const router = useRouter()

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
      <p>Console</p>
    </SideBarLayout>
  )
}

export default Console
