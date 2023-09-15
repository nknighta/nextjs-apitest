import express, {Request, Response} from 'express';
import next from "next";

const port = 3000;
const dev = process.env.NODE_ENV === "development";
const app = next({dev: dev});
const handle = app.getRequestHandler();
import {router} from "./router/router";
import {apps} from "./apps/router";
import {userdata} from "./user/data";

(async () => {
    await app.prepare();
    const server = express();
    const apiresponsepath = "/api/v1";
    // api test
    server.use("/api", router);
    server.use("/apps", apps);
    // /api/v1/user?id=1
    server.use(`${apiresponsepath}/user`, userdata);

    server.all("*", (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.get("*", (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.listen(port, (err?: any) => {
        if (err) throw err
        console.log(`> Ready on http://127.0.0.1:${port}/ - env ${process.env.NODE_ENV}`);
    });
})();