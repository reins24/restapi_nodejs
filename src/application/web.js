import express from 'express'; 
import { publicRouter } from "../route/public.api.js";
import { errorMiddleware } from "../middleware/error.middleware.js";
import { userRouter } from '../route/api.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import cors from "cors";


export const web = express();

web.use(express.json());
web.use(cors());
web.use(publicRouter);
web.use(userRouter);

web.use(errorMiddleware);