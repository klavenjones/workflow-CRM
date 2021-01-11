import React, { useEffect, useContext, createContext, useState } from 'react'
import nookies from 'nookies'

import firebaseClient from '../util/firebase/firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  firebaseClient()
  const [user, setUser] = useState(null)

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      console.log('FIRED AUTH')
      if (!user) {
        console.log('NO USER')
        setUser()
        nookies.set(undefined, 'token', '', {})
        return
      }
      console.log('USER')
      const token = await user.getIdToken()
      setUser(user)
      nookies.set(undefined, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
