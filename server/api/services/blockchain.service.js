const Web3 = require("web3");

const { abi, address } = require("../../../public/assets/data/contractData");

const web3 = new Web3(
  "https://ropsten.infura.io/v3/f66dd9caa2b546b8936465091c6f9845"
);
const contract = new web3.eth.Contract(abi, address);

// contract.getPastEvents("Transfer", { fromBlock: 1 }).then(console.log);

class BlockchainService {
  async createOrder(orderId, location, owner, password) {
    try {
      const encodedData = contract.methods
        .createOrder(web3.utils.numberToHex(orderId), location, owner, password)
        .encodeABI();

      const signedTransaction = await web3.eth.accounts.signTransaction(
        { to: address, data: encodedData, gas: 1000000 },
        process.env.ACCOUNT_PRIVATE_KEY
      );

      const receipt = await web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction
      );
      return receipt.status;
    } catch (err) {
      throw err;
    }
  }

  async requestTransfer(orderId, location, owner, password) {
    try {
      const encodedData = contract.methods
        .requestTransfer(
          web3.utils.numberToHex(orderId),
          location,
          owner,
          password
        )
        .encodeABI();

      const signedTransaction = await web3.eth.accounts.signTransaction(
        { to: address, data: encodedData, gas: 1000000 },
        process.env.ACCOUNT_PRIVATE_KEY
      );

      const receipt = await web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction
      );
      return receipt.status;
    } catch (err) {
      throw err;
    }
  }

  async approveTransfer(orderId, password) {
    try {
      const encodedData = contract.methods
        .approveTransfer(web3.utils.numberToHex(orderId), password)
        .encodeABI();

      const signedTransaction = await web3.eth.accounts.signTransaction(
        { to: address, data: encodedData, gas: 1000000 },
        process.env.ACCOUNT_PRIVATE_KEY
      );

      const receipt = await web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction
      );
      return receipt.status;
    } catch (err) {
      throw err;
    }
  }

  async rejectTransfer(orderId, password) {
    try {
      const encodedData = contract.methods
        .rejectTransfer(web3.utils.numberToHex(orderId), password)
        .encodeABI();

      const signedTransaction = await web3.eth.accounts.signTransaction(
        { to: address, data: encodedData, gas: 1000000 },
        process.env.ACCOUNT_PRIVATE_KEY
      );

      const receipt = await web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction
      );
      return receipt.status;
    } catch (err) {
      throw err;
    }
  }

  async getTrackingData(orderId) {
    try {
      const pastEvents = await contract.getPastEvents("Transfer", {
        fromBlock: 1,
        filter: {
          _orderId: orderId.toString()
        }
      });
      const locationInfo = pastEvents.map(event => ({
        location: event.returnValues._currentLocation,
        owner: event.returnValues._currentOwner
      }));
      return locationInfo;
    } catch (err) {
      throw err;
    }
  }
}

export default new BlockchainService();
