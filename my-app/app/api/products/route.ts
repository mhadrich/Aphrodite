import prisma from '@/libs/prisma'; 
import { NextResponse } from 'next/server';
import type { NextApiRequest } from 'next';

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        console.log('Request body:', body);

        if (!body || !body.name || !body.category || body.status === undefined || body.price === undefined || !Array.isArray(body.imageUrls)) {
            return NextResponse.json({ message: "Error creating product", error: "Invalid request body" }, { status: 400 });
        }

        const { name, ratings, description, category, status, price, imageUrls } = body;

        const newProduct = await prisma.product.create({
            data: {
                name,
                ratings,
                description,
                category,
                status,
                price,
                images: {
                    create: imageUrls.map((url: string) => ({ url })),
                },
            },
        });

        return NextResponse.json(newProduct);
    } catch (err: any) {
        console.error('Error:', err);
        return NextResponse.json({ message: "Error creating product", error: err.message }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const products = await prisma.product.findMany({ include: { images: true } });
        return NextResponse.json(products);
    } catch (err: any) {
        console.error('Error:', err);
        return NextResponse.json({ message: "Error fetching products", error: err.message }, { status: 500 });
    }
}