"use client"

import { SessionProvider } from "next-auth/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux/store"
import { fetchAnnouncementAsync } from "../redux/member/memberSlice"

function AuthProvider({ children }: { children: React.ReactNode }) {
  
  const dispatch = useDispatch<AppDispatch>()
  
  useEffect(()=>{
    // dispatch(fetchAnnouncementAsync())
  },[])

  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider