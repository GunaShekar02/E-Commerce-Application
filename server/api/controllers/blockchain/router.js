import * as express from "express";
import controller from "./controller";

export default express.Router().post("/createOrder", controller.createOrder);
