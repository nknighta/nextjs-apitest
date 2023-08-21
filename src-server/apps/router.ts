import express, {Request, Response} from "express";

export const apps = express.Router();

apps.get("/", (req: Request, res: Response, next) => {
    const {name,author,url} = req.query;
    res.status(200).json({
    name,
    author,
    url
    })
});

