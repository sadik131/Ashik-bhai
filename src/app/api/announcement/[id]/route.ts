import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


// GET BY ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params

    try {
        const result = await prisma.announcement.findFirst({
            where: { id },
            select: {
                description: true,
                title: true
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

// patch
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    const {update} = await req.json()
   
    try {
        const result = await prisma.announcement.update({
            where: { id },
            data: {
                description: update.description,
                title: update.title
            }
        })
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