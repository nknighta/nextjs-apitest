import express from "express";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const userdata = express();
userdata.use(express.json());

userdata.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello express\n");
});

userdata.get("/users", async (req, res) => {
       const users = await prisma.user.findMany();
       res.json({ users });
     });

userdata.get("/users/:id", async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: Number(req.params?.id) },
    });
    res.json({ user });
});
