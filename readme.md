# Step To Create the instance of server Locally

1. clone this repository in your machine using command `git clone <url>`
2. `cd <folder name>`
3. open terminal
4. `npm i` or `npm install`
5. Turn on the SQL server
6. Create a database with `user_management` as name with command `create database user_management`
7. Create a table named `users` with command `create table users(id int primary key auto_increment,name varchar(255), username varchar(255), email varchar(255), password varchar(255), contact varchar(255))`
8. Create a table named `roles` with command `create table roles(id int primary key auto_increment, rolename varchar(255))`
9. Create a table named `user_roles` with command `create table user_roles(id int primary key auto_increment, user_id int, role_id int, foreign key (user_id) references users(id), foreign key (role_id) references roles(id))`
10. go to config folder
11. Open the db.js file and check the database configuration
12. run `node server` in terminal
13. the terminal must show `Server is running on port 8989` and `Connected to database `
14. You are now ready to make calls to the api's

## API list

1. 127.0.0.1:8989/register [Post]
2. 127.0.0.1:8989/users [Get]
3. 127.0.0.1:8989/roles [Get]
4. 127.0.0.1:8989/users/:id [Get]
5. 127.0.0.1:8989/roles/:id [Get]
