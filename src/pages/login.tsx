import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Login: NextPage = () => {
  return (
    <CenterWrapper>
      <LoginForm />
    </CenterWrapper>
  )
}

export default Login
