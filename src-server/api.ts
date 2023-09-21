import express, {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
export const apisys = express.Router();

apisys.get("/", (req: Request, res: Response, next) => {
    res.status(200).json(`VX API v0.3 VARIUS dev team and nknight amamiya 2023` + "\n" + " Hello World!");
});

apisys.get("/v1", (req: Request, res: Response, next) => {
    const {id, state} = req.query;
    id ? res.status(200).json({
            id,
            state
        })
        : res.status(200).json("test");
});

apisys.post("/", (req: Request, res: Response, next) => {
    res.status(200).json(`POST`);
});
