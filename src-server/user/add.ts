import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const userdataadd = express();
// POST /users
userdataadd.post('/add', async (req, res) => {
    const { name, password } = req.body;
    const user = await prisma.user.create({
        data: {
            name,
            password,
        },
    });
    return res.json(user);
});
