# Desafio-08-SQL-y-Node

Agregar **.env** con los datos de tu BD
```
HOST=localhost
DBUSER=
DBPASSWORD=
DB=knex

Script crear tabla chat
use knex;
create table chat(id int primary key not null auto_increment,author varchar(30) not null , text varchar (1000) not null , fyh varchar (100) not null)
```
