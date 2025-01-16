import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


// patch
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    const {update} = await req.json()
    try {
        const result = await prisma.services.update({
            where: { id },
            data: {
                imgSrc:update.imgSrc,
                text:update.text,
                title:update.title
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
// delete
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params

    try {
        const result = await prisma.services.delete({
            where: { id },
        })
        console.log(result, "id:", id)
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}