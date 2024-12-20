"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import UserIcon from './layout/UserIcon'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { UserData } from '..'
import { signOut, useSession } from 'next-auth/react'
import { fetchuserAsync } from '../redux/user/userSlice'

function Navbar() {
    const dispatch = useDispatch<AppDispatch>()
    const { data } = useSession()
    console.log(data)
    const user = useSelector<RootState>(state => state.user.currentUser) as UserData

    useEffect(() => {
        if (data?.user?.email) {
            dispatch(fetchuserAsync({ email: data?.user?.email }))
        }
    }, [data?.user?.email])


    console.log(user)
    return (
        <div className="flex items-center justify-between py-4 px-6 bg-gray-100">
            <Link href={"/"} className="text-xl font-bold text-gray-800">Logo</Link >

            <div className="flex relative items-center gap-4 justify-center">
                {
                    user ? <button onClick={()=>signOut()} className="px-4 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition">
                        Logout
                    </button> :
                        <Link href={"/pages/auth"} className="px-4 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition">
                            Login
                        </Link>
                }
                {
                    (user && user.role==="ADMIN") && <Link href={"/pages/admin/users"} className="px-4 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition">
                        admin
                    </Link>
                }
                
                {user && <UserIcon />}
            </div>
        </div>
    )
}

export default Navbar
