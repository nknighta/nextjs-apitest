import express, {Request, Response} from "express";
export const router = express.Router();

router.get("/", (req: Request, res: Response, next) => {
    res.status(200).json(`VX API v0.3 VARIUS dev team and nknight amamiya 2023` + "\n" + " Hello World!");
});

router.get("/v1", (req: Request, res: Response, next) => {
    const {id, state} = req.query;
    id ? res.status(200).json({
        id,
        state
        })
        : res.status(200).json("test");
});

router.post("/", (req: Request, res: Response, next) => {
    res.status(200).json(`POST`);
});

