import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    const { id } = req.query;

    switch (req.method) {
        case "GET":
            
            const product = await prisma.product.findUnique({
                where: { id: Number(id) },
            });
            if (!product) return res.status(404).json({ error: "Product not found" });
            return res.status(200).json(product);

        case "PUT":
            
            const updatedProduct = await prisma.product.update({
                where: { id: Number(id) },
                data: req.body,
            });
            return res.status(200).json(updatedProduct);

        case "DELETE":
            
            await prisma.product.delete({
                where: { id: Number(id) },
            });
            return res.status(200).json({ message: "Product deleted" });

        default:
            return res.status(405).end();
    }
};
