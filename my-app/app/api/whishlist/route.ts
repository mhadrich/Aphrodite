import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma";


export const POST = async (req: Request, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { userId, productId } = await req.json()
console.log(userId,"user",productId,"prodId");

      const favoriteItem = await prisma.favouriteItem.create({
        data: {
          userId,
          productId,
        },
      });


      return NextResponse.json({favoriteItem},{status:201});
    } catch (error: any) {
   return NextResponse.json({ error: error.message });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" });
  }
};


export const GET = async (request : Request
) => {

    try {

const {searchParams} = new URL(request.url)
const id = searchParams.get("id")
console.log(id,"id");

      const favoriteItems = await prisma.favouriteItem.findMany({
        where: {
          userId: id as string,
        },
        include: {
          product: true,
        },
      });
if(!favoriteItems){
  return NextResponse.json( { message: "no data" },
  { status: 404 })
}
    return   NextResponse.json(favoriteItems);
    } catch (error: any) {
   return    NextResponse.json({error: error.message });
    }
  } 
;

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    try {
      if (!req.url) {
        return res.status(400).json({ error: "Invalid request" });
      }

      const { searchParams } = new URL(req.url, "http://localhost");
      const id = searchParams.get("id");

      if (!id) {
        return res.status(400).json({ error: "ID is required" });
      }

      const deleteResponse = await prisma.favouriteItem.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json({ message: "Successfully deleted", deleteResponse });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

