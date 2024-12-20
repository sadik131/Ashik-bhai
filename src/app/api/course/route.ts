import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await prisma.course.findMany({
            include: { instructor: true }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const result = await prisma.course.create({
            data: {
                description: data.description,
                language: data.language,
                price: data.price,
                title: data.title,
                discount: data.discount,
                instructorId: data.instructorId,
                
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}