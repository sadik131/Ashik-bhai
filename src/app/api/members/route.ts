import { prisma } from "@/app/Hook/Prisma/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
    try {
        const result = await prisma.teamMember.findMany({
            select: {
                id: true,
                img: true,
                name: true,
                role: true
            }
        })
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
        const data = await req.json()
        const result = await prisma.teamMember.create({
            data: {
                img:data.img,
                name:data.name,
                role:data.role
            }
        })
        console.log(result)
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}