import React, { useState, createContext, useContext } from 'react'
import { UserInfo } from '../types/userInfo.types'

interface Iprops {
  children: React.ReactNode
}

interface IContext {
  isUserValid: () => boolean
  getUserData: () => void
  logOutHandler: () => void
  logInHandler: (userInfo: UserInfo) => null | void
}

const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: Iprops) => {
  const [, setUserValidated] = useState<boolean | undefined>()
  const [userInfo, setUserInfo] = useState<UserInfo>()

  const getUserData = () => {
    return {
      userInfo
    }
  }

  const isUserValid: () => boolean = () => {
    const datos = JSON.parse(localStorage.getItem('userData') as string)
    // TO DO verificar que token sea valido en cognito y su es valido cambiar a true UserValidated
    if (datos) return true
    return false
  }

  const logInHandler = (userInfo: UserInfo) => {
    if (!userInfo) return null
    localStorage.setItem('userData', JSON.stringify(userInfo))
    setUserValidated(true)
    setUserInfo(userInfo)
  }

  const logOutHandler = () => {
    localStorage.removeItem('userData')
    setUserValidated(false)
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
