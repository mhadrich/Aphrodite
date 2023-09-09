import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import type { NextApiRequest } from "next";

interface Params {
  params: {
    id?: string;
  };
}

export const DELETE = async (req: NextApiRequest, { params }: Params) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;

    await prisma.product.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: "Error deleting product", error: message },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextApiRequest, { params }: Params) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const data = JSON.parse(req.body as string);

    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json(updatedProduct);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: "Error updating product", error: message },
      { status: 500 }
    );
  }
};
