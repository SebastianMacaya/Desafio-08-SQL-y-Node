# Desafio-08-SQL-y-Node

Agregar **.env** con los datos de tu BD

```
HOST=localhost
DBUSER=
DBPASSWORD=
DB=knex

Scripts
use knex;
drop  table if exists chat,ecommerce ;
create table chat(id int primary key not null auto_increment,author varchar(30) not null , text varchar (1000) not null , fyh varchar (100) not null);
create table ecommerce(id int primary key not null auto_increment,title varchar(30) not null , price varchar (40) not null , url varchar (200) not null);
```
