import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        console.log(data)
        const result = await prisma.user.create({
            data: {
                // email: data.email,
                // name: data.name,
                // password: data.password
                email: "admin@gmail.com",
                name: "admin",
                password: "admin"
            }
        })
        console.log(result)
        return NextResponse.json("Success")
    } catch (error) {
        return NextResponse.json(error)
    }
}
export async function GET(req: NextRequest) {
    try {
        const result = await prisma.user.findMany({
            
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json("Something went wrong")
    }
}