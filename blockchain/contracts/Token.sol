pragma solidity ^0.5.0;

contract Token{
  struct Order {
    string currentLocation;
    string currentOwner;
    bytes32 currentPassword;
    bool requested;
    string nextLocation;
    string nextOwner;
    bytes32 nextPassword;
  }

  mapping(uint => Order) orders;

  address owner;

  constructor () public {
    owner = msg.sender;
  }

  event Transfer(
    uint indexed _orderId,
    string _currentLocation,
    string _currentOwner
  );

  modifier onlyOwner(address _sender) {
    require(_sender == owner, "Only owner is permitted perform this operation");
    _;
  }

  modifier notExistingOrder(uint _orderId) {
    require(
      bytes(orders[_orderId].currentLocation).length == 0,
      "This order already exists"
    );
    require(
      bytes(orders[_orderId].currentOwner).length == 0,
      "This order already exists"
    );
    _;
  }

  modifier existingOrder(uint _orderId) {
    require(
      bytes(orders[_orderId].currentLocation).length != 0,
      "This order does not exist"
    );
    require(
      bytes(orders[_orderId].currentOwner).length != 0,
      "This order does not exist"
    );
    _;
  }

  modifier validCreation(
    string memory _currentLocation,
    string memory _currentOwner
  )
  {
    require(bytes(_currentLocation).length != 0, "Invalid Current Location");
    require(bytes(_currentOwner).length != 0, "Invalid Current Owner");
    _;
  }

  modifier notAlreadyRequested(uint _orderId) {
    require(
      orders[_orderId].requested == false,
      "This order has been requested by someone else"
    );
    _;
  }

  modifier comparePassword(bytes32 password1, bytes32 password2) {
    require(password1 == password2, "Passwords do not match");
    _;
  }

  function createOrder(
    uint _orderId,
    string memory _currentLocation,
    string memory _currentOwner,
    string memory _currentPassword
  )
    public
    onlyOwner(msg.sender)
    notExistingOrder(_orderId)
    validCreation(_currentLocation, _currentOwner)
  {
    orders[_orderId] = Order({
      currentLocation : _currentLocation,
      currentOwner : _currentOwner,
      currentPassword : keccak256(bytes(_currentPassword)),
      requested : false,
      nextLocation : "",
      nextOwner : "",
      nextPassword: ""
    });
    emit Transfer(
      _orderId,
      orders[_orderId].currentLocation,
      orders[_orderId].currentOwner
    );
  }

  function requestTransfer(
    uint _orderId,
    string memory _nextLocation,
    string memory _nextOwner,
    string memory _nextPassword
  )
    public
    onlyOwner(msg.sender)
    existingOrder(_orderId)
    validCreation(_nextLocation, _nextOwner)
    notAlreadyRequested(_orderId)
  {
    orders[_orderId].requested = true;
    orders[_orderId].nextLocation = _nextLocation;
    orders[_orderId].nextOwner = _nextOwner;
    orders[_orderId].nextPassword = keccak256(bytes(_nextPassword));
  }

  function approveTransfer(
    uint _orderId,
    string memory _currentPassword
  )
    public
    onlyOwner(msg.sender)
    existingOrder(_orderId)
    comparePassword(
      keccak256(bytes(_currentPassword)),
      orders[_orderId].currentPassword
    )
  {
    require(isTransferRequested(_orderId), "No one to transfer to");
    orders[_orderId].currentLocation = orders[_orderId].nextLocation;
    orders[_orderId].currentOwner = orders[_orderId].nextOwner;
    orders[_orderId].currentPassword = orders[_orderId].nextPassword;
    orders[_orderId].nextLocation = "";
    orders[_orderId].nextOwner = "";
    orders[_orderId].nextPassword = "";
    orders[_orderId].requested = false;
    emit Transfer(_orderId, orders[_orderId].currentLocation, orders[_orderId].currentOwner);
  }

  function rejectTransfer(
    uint _orderId,
    string memory _currentPassword
  )
    public
    onlyOwner(msg.sender)
    existingOrder(_orderId)
    comparePassword(
      keccak256(bytes(_currentPassword)),
      orders[_orderId].currentPassword
    )
  {
    require(isTransferRequested(_orderId), "No one to reject transfer from");
    orders[_orderId].nextLocation = "";
    orders[_orderId].nextOwner = "";
    orders[_orderId].nextPassword = "";
    orders[_orderId].requested = false;
  }

  function isTransferRequested(uint _orderId) public view existingOrder(_orderId) returns(bool){
    return orders[_orderId].requested;
  }

  function getCurrentOwner(uint _orderId) public view existingOrder(_orderId) returns(string memory) {
    return orders[_orderId].currentOwner;
  }

  function getNextOwner(uint _orderId) public view existingOrder(_orderId) returns(string memory) {
    return orders[_orderId].nextOwner;
  }
}