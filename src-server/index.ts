import express, {Request, Response} from 'express';
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT;
const app = next({dev});
const handle = app.getRequestHandler();
import {router} from "./router/router";
import {apps} from "./apps/router";
import {apisys} from "./api";

(async () => {
    await app.prepare();
    const server = express();

    // api test
    server.use("/api", router);
    server.use("/apps", apps);

    server.all("*", (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.get("*", (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.listen(port, (err?: any) => {
        if (err) throw err;
        console.log(`> Ready on http://127.0.0.1:${port}/ - env ${process.env.NODE_ENV}`);
    });
})();