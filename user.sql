-- create user with name bookstoredev
CREATE USER 'bookstoredev'@'localhost' IDENTIFIED BY 'bookstoredev';

-- provide all the permission
GRANT ALL PRIVILEGES ON * . * TO 'bookstoredev'@'localhost';

-- create password bookstoredev
ALTER USER 'bookstoredev'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bookstoredev';