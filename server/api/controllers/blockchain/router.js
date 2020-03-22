import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/createOrder", controller.createOrder)
  .post("/requestTransfer", controller.requestTransfer)
  .post("/approveTransfer", controller.approveTransfer)
  .post("/rejectTransfer", controller.rejectTransfer)
  .get("/getTrackingData", controller.getTrackingData);
