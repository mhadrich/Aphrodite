import prisma from '@/libs/prisma'; 
import { NextResponse } from 'next/server';
import type { NextApiRequest } from 'next';
export const config = {
    api: {
        bodyParser: true,
    },
};


export const POST = async (req: NextApiRequest) => {
    try {
        const buffer = [];
        for await (const chunk of req.body) {
            buffer.push(chunk);
        }
        const body = JSON.parse(Buffer.concat(buffer).toString('utf8'));

        console.log("Parsed request body:", body);

        if (!body || !body.name || !body.category || !body.status || !body.price) {
            return NextResponse.json({ message: "Error creating product", error: "Invalid request body" }, { status: 400 });
        }

        const newData = await prisma.product.create({ data: body });
        return NextResponse.json(newData);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ message: "Error creating product", error: message }, { status: 500 });
    }
};




export const GET = async (req: NextApiRequest) => {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        return NextResponse.json({ message: "Error fetching products", error: message }, { status: 500 });
    }
}
