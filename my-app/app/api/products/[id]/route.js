import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";



export const DELETE = async (req, { params }) => {
    try {
        if (!params || !params.id) {
            throw new Error("ID parameter is missing");
        }

        const { id } = params;

        await prisma.product.delete({
            where: { id: Number(id) },
        });
        return NextResponse.json({ message: "Product deleted successfully" });
    } catch (err) {
        return NextResponse.json({ message: "Error deleting product", error: err.message }, { status: 500 });
    }
}






export const PUT = async (req, { params }) => {
    try {
        if (!params || !params.id) {
            throw new Error("ID parameter is missing");
        }

        const { id } = params;
        const data = await req.json();

        const updatedProduct = await prisma.product.update({
            where: { id: Number(id) },
            data,
        });

        return NextResponse.json(updatedProduct);
    } catch (err) {
        return NextResponse.json(
            { message: "Error updating product", error: err.message },
            { status: 500 }
        );
    }
};

