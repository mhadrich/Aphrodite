import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }
};
