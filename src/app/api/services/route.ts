import { prisma } from "@/app/Hook/Prisma/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
    try {
        const result = await prisma.services.findMany({})
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)
    console.log(session)
    // if (!session || session.token?.role !== "ADMIN") {
    //     return NextResponse.json({ message: "Unauthorized access" }, { status: 403 });
    // }
    try {
        const doc = await req.json()
        console.log(doc,"<api")
        const result = await prisma.services.create({
            data: {
                imgSrc:doc.imgSrc,
                text:doc.text,
                title:doc.title
            }
        })
        console.log(result)
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}