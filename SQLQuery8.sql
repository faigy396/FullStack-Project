CREATE DATABASE FaigySegal_Shop_2025
GO

use FaigySegal_Shop_2025
GO

create table Ctegories
(
	code int identity(1,1) primary key,
	name varchar(100)
)
GO

create table Games
(
	code int identity(1,2) primary key,
	name varchar(100),
	categoryCode int references Ctegories(code),
	price float,
	picture varchar(225),
	QuantityInStock int
)
GO

create table Customers
(
	id int identity(100, 2) primary key,
	custName varchar(50),
	pass varchar(10),
	creditDetails varchar(100)
)
GO

create table Shopping
(
	Id int identity(1, 3) primary key,
	custId int references Customers(id),
	sDate date,
	paySum float
)
GO

create table ShoppingDetails
(
	id int identity(1,1) primary key,
	shoppingId int references Shopping(Id),
	game int references Games(code),
	Qty int
)
GO