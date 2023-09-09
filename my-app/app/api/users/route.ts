import prisma from '@/libs/prisma'; 
import { NextResponse } from 'next/server';
import type { NextApiRequest } from 'next';

export const POST = async (req: NextApiRequest) => {
    try {
        const body = JSON.parse(req.body as string);
        const newData = await prisma.user.create({ data: body });
        return NextResponse.json(newData);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ message: "Error creating", error: message }, { status: 500 });
    }
}

export const GET = async (req: NextApiRequest) => {
    try {
        const User = await prisma.user.findMany();
        return NextResponse.json(User);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ message: "Error fetching users", error: message }, { status: 500 });
    }
}
