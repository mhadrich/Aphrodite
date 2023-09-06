import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method === "GET") {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    } else {
        return res.status(405).end();  
    }
};
