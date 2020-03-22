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
    const { orderId, location, owner, password } = req.body;
    try {
      const success = await BlockchainService.requestTransfer(
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

  async approveTransfer(req, res) {
    const { orderId, password } = req.body;
    try {
      const success = await BlockchainService.approveTransfer(
        orderId,
        password
      );
      if (success) res.send("Done");
      else throw { message: "Transaction could not be successfully completed" };
    } catch (err) {
      res.status(500).send(err.message || "Some error occurred");
    }
  }

  async rejectTransfer(req, res) {
    const { orderId, password } = req.body;
    try {
      const success = await BlockchainService.rejectTransfer(orderId, password);
      if (success) res.send("Done");
      else throw { message: "Transaction could not be successfully completed" };
    } catch (err) {
      res.status(500).send(err.message || "Some error occurred");
    }
  }

  async getTrackingData(req, res) {
    const { orderId } = req.body;
    try {
      const locationInfo = await BlockchainService.getTrackingData(orderId);
      res.status(200).send(locationInfo);
    } catch (err) {
      res.status(500).send(err.message || "Some error occurred");
    }
  }
}
export default new Controller();
