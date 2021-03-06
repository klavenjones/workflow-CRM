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
      if (!user) {
        setUser(null)
        nookies.destroy(undefined, 'token', '', {})
        return
      }
      const token = await user.getIdToken()
      setUser(user)
      nookies.set(undefined, 'token', token, {
        maxAge: 30 * 60,
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
