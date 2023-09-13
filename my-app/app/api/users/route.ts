import prisma from '@/libs/prisma'; 
import { NextResponse } from 'next/server';
import type { NextApiRequest } from 'next';

export async function POST(req: Request) {
    try {
      // Parse the JSON body
      const body = await req.json();
  
      // Create a new user with Prisma
      const newData = await prisma.user.create({ data: body });
  
      // Return the new user data
      return new Response(JSON.stringify(newData), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err: unknown) {
      // Handle errors
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      return new Response(JSON.stringify({ message: "Error creating", error: message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
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
