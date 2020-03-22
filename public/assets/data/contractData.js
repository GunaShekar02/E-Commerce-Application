module.exports = {
  address: "0xB13bEc543DE6eaA1EC65D78872E882238C3e5eeF",
  abi: [
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_orderId",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "_currentPassword",
          type: "string"
        }
      ],
      name: "approveTransfer",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_orderId",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "_currentLocation",
          type: "string"
        },
        {
          internalType: "string",
          name: "_currentOwner",
          type: "string"
        },
        {
          internalType: "string",
          name: "_currentPassword",
          type: "string"
        }
      ],
      name: "createOrder",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_orderId",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "_currentPassword",
          type: "string"
        }
      ],
      name: "rejectTransfer",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_orderId",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "_nextLocation",
          type: "string"
        },
        {
          internalType: "string",
          name: "_nextOwner",
          type: "string"
        },
        {
          internalType: "string",
          name: "_nextPassword",
          type: "string"
        }
      ],
      name: "requestTransfer",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "_orderId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "string",
          name: "_currentLocation",
          type: "string"
        },
        {
          indexed: false,
          internalType: "string",
          name: "_currentOwner",
          type: "string"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "_orderId",
          type: "uint256"
        }
      ],
      name: "getCurrentOwner",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "_orderId",
          type: "uint256"
        }
      ],
      name: "getNextOwner",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "_orderId",
          type: "uint256"
        }
      ],
      name: "isTransferRequested",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ]
};
