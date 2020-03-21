import examplesRouter from "./api/controllers/examples/router";
import blockchainRouter from "./api/controllers/blockchain/router";

export default function routes(app) {
  app.use("/blockchain", blockchainRouter);
  app.use("/api/v1/examples", examplesRouter);
}
