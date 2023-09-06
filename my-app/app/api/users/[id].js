import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    const { id } = req.query;

    switch (req.method) {
        case "GET":
            const user = await prisma.user.findUnique({
                where: { id: Number(id) },
            });
            if (!user) return res.status(404).json({ error: "User not found" });
            return res.status(200).json(user);

        case "PUT":
            const updatedUser = await prisma.user.update({
                where: { id: Number(id) },
                data: req.body,
            });
            return res.status(200).json(updatedUser);

        case "DELETE":
            await prisma.user.delete({
                where: { id: Number(id) },
            });
            return res.status(200).json({ message: "User deleted" });

        default:
            return res.status(405).end();  
    }
};
