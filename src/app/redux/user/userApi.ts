import { UserData } from "@/app"

// get all the user
export function getAllUserInfo(): Promise<{ data: UserData[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user")
        const data: UserData[] = await responce.json()
        resolve({ data })
    })
}

// get cureent user 
export function getUserInfo(email: string): Promise<{ data: UserData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user/currentUser", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email })
        })
        const data: UserData = await responce.json()
        resolve({ data })
    })
}