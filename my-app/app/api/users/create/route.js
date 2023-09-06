import prisma from '@/libs/prisma';  // Adjust the path based on your project's structure
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
