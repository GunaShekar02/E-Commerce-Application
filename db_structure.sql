drop database if exists ecpDB;
create database ecpDB;
use ecpDB;

create table Seller(
    sellerID int not null auto_increment,
    companyName varchar(70),
    contactName varchar(50),
    address varchar(100),
    city varchar(30),
    state varchar(40),
    PIN varchar(10),
    phone bigint,
    email varchar(150),
    payeeID varchar(150),
    regDate timestamp default current_timestamp,
    primary key (sellerID)
);

create table Category (
    categoryID int not null auto_increment,
    categoryName varchar(200),
    Description varchar(400),
    Active Boolean,
    primary key (categoryID)
);

create table Products (
    productID int not null auto_increment,
    SKUID varchar(100),
    sellerID int,
    categoryID int,
    quantityPerUnit int,
    unitPrice int,
    MSRP int,
    primary key (productID),
    foreign key (sellerID) references Seller(sellerID),
    foreign key (categoryID) references Category(categoryID)
);

create table Shippers (
    shipperID int not null auto_increment,
    companyName varchar(150),
    phone bigint,
    primary key (shipperID)
);

create table Payments (
    paymentID int not null auto_increment,
    paymentType varchar(100),
    processed boolean,
    primary key (paymentID)
);

create table Customers (
    customerID int not null auto_increment, 
    contactName varchar(50),
    billingAddress varchar(100),
    deliveryAddress varchar(200),
    city varchar(30),
    state varchar(40),
    PIN varchar(10),
    phone bigint,
    email varchar(150),
    payerID varchar(150),
    primary key (customerID),
    regDate timestamp default current_timestamp 
);


create table Orders (
    orderID int not null auto_increment,
    customerID int,
    orderNumber int,
    paymentID int,
    orderDate timestamp default current_timestamp,
    shipDate timestamp,
    expectedDelivery datetime,
    shipperID int,
    delivered boolean,
    paid boolean,
    payment_amount bigint,
    primary key (orderID),
    foreign key (customerID) references Customers(customerID),
    foreign key (paymentID) references Payments(paymentID),
    foreign key (shipperID) references Shippers(shipperID)
);


create table OrderDetails (
    orderID int,
    productID int,
    orderDetID int not null auto_increment,
    orderNumber int,
    price bigint,
    quantity int,
    total int,
    shipDate timestamp,
    billDate timestamp,
    fulfilled boolean,
    primary key (orderDetID),
    foreign key (orderID) references Orders(orderID),
    foreign key (productID) references Products(productID)
);
