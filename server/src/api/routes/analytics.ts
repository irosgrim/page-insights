import { Router } from "express";
import analyticsEndpoint from '../middlewares/analytics/analytics';

const analytics = Router();

analytics.post("/", analyticsEndpoint());

export default analytics;