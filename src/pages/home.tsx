import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import HelloWorld from '../components/HelloWorld'
import Loader from '../components/Loader'
import { useUser } from '../context/authContext'
import SideBarLayout from '../Layouts/SideBarLayout'
import { CenterWrapper } from './login'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const {
    user: { isUserValid }
  } = useUser()

  const router = useRouter()

  useEffect(() => {
    if (isUserValid() === false) {
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
      <HelloWorld />
    </SideBarLayout>
  )
}

export default Home
