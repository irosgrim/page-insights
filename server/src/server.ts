import express from "express";
import cors from "cors";
import analytics from './api/routes/analytics';

const server = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/analytics", analytics);
    return app;
}

export default server;