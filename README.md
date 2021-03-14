# Backend Trial

You are expected to implement a REST API for CRUD operations using Node/Express & (MongoDB or SQL). You will also have to deploy the API on an AWS EC2 machine (OPTIONAL, if not possible then just do deployment locally or you can deploy APIs on herouku, atlas etc..)

```bash
#I have used Node and Express with SQL to complete this task.
#And deployed them locally test the implemetation.
```


## Installation

Use the [npm](https://www.npmjs.com/get-npm) package manager to install dependencies of this project.

```bash
npm install express --save
```

```bash
npm install mysql --save
```

```bash
npm install --save-dev nodemon
```
Moreover your system must has a copy of [MySQL](https://dev.mysql.com/downloads/mysql/) installed to run this project. In my case I have used 8.0.23 version.

## TASKS

1. Model a database to store products and their categories. 
    1. Each Product will have a Unique id, price, quantity, Name and category.
    2. Categories will have a Unique id and Name.

![DB MODEL](https://drive.google.com/uc?export=view&id=1NE6JzT3owqZfjXMXVX34NX5TxLinpISS)


### TABELS
```sql
CREATE TABLE IF NOT EXISTS Category (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                                     name VARCHAR(100), created_at DATETIME);

CREATE TABLE Product (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), 
                      price DOUBLE, quantity INT, created_at DATETIME,
                      category_id INT,
                      FOREIGN KEY (category_id) REFERENCES Category (id));
```

2. Write CRUD(Create, Read, Update and Delete)  APIs for products and their categories.
3. Authentication mechanism is required. Only allowed users can use/invoke the APIs. Create dummy users in db with Name and id. There are multiple ways to do api authentication for instance JWT tokens.  
4. Apart from the basic CRUD endpoints, you are also expected to implement the following:
    1. Get products by category
    2. Search products by name
5. Each of the `GET` endpoint should have the following functionality:
    1. Pagination: When user asks for products and we have 1000 products in db don't return all in a single API, implement pagination to send N products to user at a time.
    2. Sorting (Sort by name, sort by price; ascending & descending) 
    3. Select (The ability to select specific fields to be included/omitted from the response)
    4. Filters: 
        - Price; greater than, less than
        - (Category eg 'Laptop') and (Brand eg 'ASUS')
        - Logical operators for filtering:
        lt – lower than
        gt – greater than
        le – lower or equal
        ge – greater or equal
        eq – equals (only for textual type fields)
        - You can combine any number of filters by using the and / or filter operators. You can negate any filter condition by using the not operator.

## WHERE TO LOOK
You can find implementations of above mentioned tasks in node application
  - checkout the root of project
  - hit npm start
  - open postman collection node_sql_crud.postman_collection.json
  - demo screen shots of working for each can be seen under /working_screenshots directory 
  - NOTE if you have different pre-configured mysql settings on your system 
    then do update /config/db.config.js
