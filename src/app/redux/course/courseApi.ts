import { CreateCourse } from "@/app"
import { Course } from "@prisma/client"

// get all course 
export function getDatasApi(): Promise<{ data: Course[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/course")
        const data: Course[] = await responce.json()
        resolve({ data })
    })
}

// get databyid
export function getCourseByIdApi(id: string): Promise<{ data: Course }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/course/${id}`)
        const data: Course = await responce.json()
        resolve({ data })
    })
}

// create course 
export function createApi(doc: CreateCourse): Promise<{ data: Course }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/course",{
            method:"POST",
            headers: { "content-type": "application/json" },
            body:JSON.stringify(doc)
        })
        const data: Course = await responce.json()
        resolve({ data })
    })
}
// update course
export function updateApi({ update, id }: { update: CreateCourse, id: string }): Promise<{ data: Course }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/course/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ update })
        })
        const data: Course = await responce.json()
        resolve({ data })
    })
}
// delete course
export function deleteApi(id: string): Promise<{ data: Course }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/course/${id}`, {
            method: "DELETE",
        })
        const data: Course = await responce.json()
        resolve({ data })
    })
}