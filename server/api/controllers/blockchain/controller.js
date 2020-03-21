import BlockchainService from "../../services/blockchain.service";

export class Controller {
  async createOrder(req, res) {
    const { orderId, location, owner, password } = req.body;
    try {
      const success = await BlockchainService.createOrder(
        orderId,
        location,
        owner,
        password
      );
      if (success) res.send("Done");
      else throw { message: "Transaction could not be successfully completed" };
    } catch (err) {
      res.status(500).send(err.message || "Some error occurred");
    }
  }

  async requestTransfer(req, res) {
    console.log("in the right route");
  }
}
export default new Controller();
