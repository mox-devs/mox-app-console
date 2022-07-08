import React, { useState, createContext, useContext } from 'react'
import { UserInfo } from '../types/userInfo.types'

interface Iprops {
  children: React.ReactNode
  loggedUser:
    | undefined
    | {
        userInfo: UserInfo | undefined
        token: string
      }
}

interface IContext {
  isUserValid: () => void
  getUserData: () => void
  logOutHandler: () => void
  logInHandler: (token: string, userInfo: UserInfo) => null | void
}

const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children, loggedUser }: Iprops) => {
  const [userValidated, setUserValidated] = useState(!!loggedUser)
  const [token, setToken] = useState<string | undefined>(loggedUser?.token)
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(
    loggedUser?.userInfo
  )

  const getUserData = () => {
    return {
      userInfo
    }
  }

  const isUserValid = () => {
    return userValidated && token
  }

  const logInHandler = (token: string, userInfo: UserInfo) => {
    if (!token) return null
    localStorage.setItem('userData', JSON.stringify({ userInfo, token }))
    setUserValidated(true)
    setToken(token)
    setUserInfo(userInfo)
  }

  const logOutHandler = () => {
    localStorage.removeItem('userData')
    setUserValidated(false)
    setToken(undefined)
    setUserInfo(undefined)
  }

  return (
    <AuthContext.Provider
      value={{
        isUserValid,
        getUserData,
        logInHandler,
        logOutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useUser = () => {
  const user = useContext(AuthContext)
  return { user }
}
