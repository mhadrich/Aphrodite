import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    try {
        if (!params || !params.id) {
            throw new Error("ID parameter is missing");
        }

        const { id } = params;
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json({ message: "Error fetching user", error: err.message }, { status: 500 });
    }
};

export const PUT = async (req, { params }) => {
    try {
        if (!params || !params.id) {
            throw new Error("ID parameter is missing");
        }

        const { id } = params;
        const data = await req.json();
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data,
        });
        return NextResponse.json(updatedUser);
    } catch (err) {
        return NextResponse.json({ message: "Error updating user", error: err.message }, { status: 500 });
    }
};

export const DELETE = async (req, { params }) => {
    try {
        if (!params || !params.id) {
            throw new Error("ID parameter is missing");
        }

        const { id } = params;
        await prisma.user.delete({
            where: { id: Number(id) },
        });
        return NextResponse.json({ message: "User deleted successfully" });
    } catch (err) {
        return NextResponse.json({ message: "Error deleting user", error: err.message }, { status: 500 });
    }
};
