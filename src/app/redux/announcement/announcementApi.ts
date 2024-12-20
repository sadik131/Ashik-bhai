import { AnnouncementData } from "@/app"

// get all announcement 
export function getDatasApi(): Promise<{ data: AnnouncementData[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/announcement")
        const data: AnnouncementData[] = await responce.json()
        resolve({ data })
    })
}
// get databyid
export function getDataByIdApi(id: string): Promise<{ data: AnnouncementData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/announcement/${id}`)
        const data: AnnouncementData = await responce.json()
        resolve({ data })
    })
}

// create announcement 
export function createApi(doc: AnnouncementData): Promise<{ data: AnnouncementData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/announcement",{
            method:"POST",
            headers: { "content-type": "application/json" },
            body:JSON.stringify(doc)
        })
        const data: AnnouncementData = await responce.json()
        resolve({ data })
    })
}
// update announcement
export function updateApi({ update, id }: { update: AnnouncementData, id: string }): Promise<{ data: AnnouncementData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/announcement/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ update })
        })
        const data: AnnouncementData = await responce.json()
        resolve({ data })
    })
}
// delete announcement
export function deleteApi(id: string): Promise<{ data: AnnouncementData }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/announcement/${id}`, {
            method: "DELETE",
        })
        const data: AnnouncementData = await responce.json()
        resolve({ data })
    })
}