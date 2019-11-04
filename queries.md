# Database Queries

## Find all customers with postal code 1010

ans: `select * from Customers where PostalCode = 1010;`

## Find the phone number for the supplier with the id 11

ans: `select * from Suppliers where SupplierID = 11;`

## List first 10 orders ever places, descending by the order date

ans: `select * from Orders order by OrderDate desc limit 10;`

## Find all customers that live in London, Madrid, or Brazil

ans: `select * from Customers where country in ("Brazil") or city in ("London", "Madrid");`

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

ans: insert into Customers
(CustomerName, ContactName, Address, City, PostalCode, Country)
values
('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth' )

## Update Bilbo Baggins record so that the postal code changes to "11122"

ans: `update Customers set PostalCode = "11122" where CustomerID = 93`

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
