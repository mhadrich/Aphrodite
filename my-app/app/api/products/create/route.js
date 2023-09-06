import prisma from '@/libs/prisma'; 
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        const body = await req.json();
        const newData = await prisma.product.create({ data: body });
        return NextResponse.json(newData);
    } catch (err) {
        return NextResponse.json({ message: "Error creating product", err }, { status: 500 });
    }
}
