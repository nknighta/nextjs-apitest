import express from "express";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const userdata = express();

userdata.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

userdata.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.json(user);
    } catch (e) {
        return res.status(404).json({error: "User not found"});
    }
});

userdata.use(express.json());
userdata.post("/", async (req, res) => {
    const {name, password} = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name,
                password,
            },
        });
        return res.json(user);
    } catch (e) {
        return res.status(404).json({error: "error create user"});
    }
});

userdata.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {name, password} = req.body;
    try {
        const user = await prisma.user.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name,
                password,
            },
        });
        return res.json(user);
    } catch (e) {
        return res.status(404).json({error: "User not found"});
    }
});

userdata.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const user = await prisma.user.delete({
            where: {
                id: parseInt(id),
            },
        });
        return res.json(user);
    } catch (e) {
        return res.status(404).json({error: "User not found"});
    }
});