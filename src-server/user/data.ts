import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const userdata = express();

userdata.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

userdata.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    res.json(user);
});