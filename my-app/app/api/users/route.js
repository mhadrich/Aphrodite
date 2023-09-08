import prisma from '@/libs/prisma'; 
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        const body = await req.json();
        const newData = await prisma.User.create({ data: body });
        return NextResponse.json(newData);
    } catch (err) {
        return NextResponse.json({ message: "Error creating", err }, { status: 500 });
    }
}

export const GET = async (req) => {
    try {
        const User = await prisma.User.findMany();
        return NextResponse.json(User);
    } catch (err) {
        return NextResponse.json({ message: "Error fetching users", error: err.message }, { status: 500 });
    }
}