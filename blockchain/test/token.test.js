let Token = artifacts.require("./Token.sol");

contract("Token", accounts => {
  let tokenInstance;

  it("deployes successfully", async () => {
    try {
      tokenInstance = await Token.deployed();
    } catch (err) {
      assert.equal(err, null, err);
    }
  });

  it("creates order and fires event", async () => {
    try {
      tokenInstance = await Token.deployed();
      const receipt = await tokenInstance.createOrder(
        1,
        "XYZ",
        "ABC DEF",
        "myPassword",
        {
          from: accounts[0]
        }
      );
      assert.notEqual(receipt, undefined);
      assert.notEqual(receipt, null);
      const events = await tokenInstance.getPastEvents("Transfer");
      assert.equal(
        events[0].args["0"].toNumber(),
        1,
        "Fires the wrong order ID"
      );
      assert.equal(events[0].args["1"], "XYZ", "Fires the wrong location");
      assert.equal(events[0].args["2"], "ABC DEF", "Fires the wrong owner");
    } catch (err) {
      assert.equal(err, null, err);
    }
  });

  it("requests transfer", async () => {
    try {
      tokenInstance = await Token.deployed();
      const successBeforeRequest = await tokenInstance.isTransferRequested(1);
      assert.equal(successBeforeRequest, false);
      const request = await tokenInstance.requestTransfer(
        1,
        "LMN",
        "GHI JKL",
        "requestPassword",
        {
          from: accounts[0]
        }
      );
      const successAfterRequest = await tokenInstance.isTransferRequested(1);
      assert.equal(successAfterRequest, true);
    } catch (err) {
      assert.equal(err, null, err);
    }
  });

  it("transfers successfully", async () => {
    try {
      tokenInstance = await Token.deployed();
      const transfer = await tokenInstance.approveTransfer(1, "myPassword");
      const events = await tokenInstance.getPastEvents("Transfer", {
        fromBlock: 0
      });
      assert.equal(
        events[0].args["0"].toNumber(),
        1,
        "Fires the wrong order ID"
      );
      assert.equal(events[0].args["1"], "XYZ", "Fires the wrong old location");
      assert.equal(events[0].args["2"], "ABC DEF", "Fires the wrong old owner");
      assert.equal(
        events[1].args["0"].toNumber(),
        1,
        "Fires the wrong order ID"
      );
      assert.equal(events[1].args["1"], "LMN", "Fires the wrong new location");
      assert.equal(events[1].args["2"], "GHI JKL", "Fires the wrong new owner");
      const successAfterRequest = await tokenInstance.isTransferRequested(1);
      assert.equal(successAfterRequest, false);
    } catch (err) {
      assert.equal(err, null, err);
    }
  });
});
