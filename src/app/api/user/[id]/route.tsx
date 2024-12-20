import { prisma } from "@/app/Hook/Prisma/prisma"
import { NextRequest, NextResponse } from "next/server"

// patch
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    const update  = await req.json()
    console.log(update)

    try {
        const result = await prisma.user.update({
            where: { id },
            data: update
        })
        console.log(result)
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}


// delete
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params

    try {
        const result = await prisma.announcement.delete({
            where: { id },
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}