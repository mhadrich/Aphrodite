import prisma from '@/libs/prisma'; 
import { NextResponse } from 'next/server';
import type { NextApiRequest } from 'next';

export const POST = async (req: NextApiRequest) => {
    try {
        const body = JSON.parse(req.body as string);
        const newData = await prisma.product.create({ data: body });
        return NextResponse.json(newData);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ message: "Error creating product", error: message }, { status: 500 });
    }
}

export const GET = async (req: NextApiRequest) => {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ message: "Error fetching products", error: message }, { status: 500 });
    }
}
