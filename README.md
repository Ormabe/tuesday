![alt text](capital-readme.png "US Capitol Building")

* Code Style:

    - React: https://github.com/facebook/react/wiki/Complementary-Tools
    - ES5: https://github.com/airbnb/javascript

## How to run 'Tuesday' locally:

* Step 1. Install Postgres, Postico and Node.js

    - Install Postgres, Postico and Node.js
    - Create a new `database` named *tuesday* in Postico for Postgres store data
    - Connect using Postico to *tuesday*

* Step 2. Get Tuesday source code and install package

    - Clone Tuesday from github: $ **git clone** https://github.com/Ormabe/tuesday.git
    - Go into tuesday folder and install node package: **cd tuesday && npm install**

* Step 3. Populate seed data from file

    - **node backend/seedData.js**

* Step 4. Turn on **PostgreSQL**

* Step 5. Create a new database in **Postico** named `tuesday`.

* Step 6. Create a `config.json` file in the `backend/config` folder.

    - Insert the following code into the newly created `config.json` file:

    ```JSON
        {
          "development": {
            "username": "root",
            "password": null,
            "database": "tuesday",
            "host": "127.0.0.1",
            "dialect": "postgres"
          },
          "test": {
            "username": "root",
            "password": null,
            "database": "tuesday",
            "host": "127.0.0.1",
            "dialect": "postgres"
          },
          "production": {
            "username": "root",
            "password": null,
            "database": "tuesday",
            "host": "127.0.0.1",
            "dialect": "postgres"
          }
        }
    ```
    - Replace `"root"` with the name that appears before the `$` in your terminal.

* Step 7. Start the server

    - Run tuesday: **npm start**

* Step 8. Pull up Tuesday in your browser

    - http://localhost:2017/

## Technologies

Back-end (for MAC):

* [Node.js](https://nodejs.org/en/)
* [Postgres](https://postgresapp.com/)
* [Postico](https://eggerapps.at/postico/)
* [Express](http://expressjs.com/)
* [Sequelize](http://docs.sequelizejs.com/en/v3/)

Front-end:

* [React.js](https://facebook.github.io/react/)
* [React Router](https://www.npmjs.com/package/react-router)
* [Material-UI](http://www.material-ui.com/#/)

## CRUD App

This is a simple web-based app that uses restful API to create, retrieve, update and delete information from your PostgresSQL data directory, using PostgresSQL, Sequelize, Express.js, and Node.js

- **PostgreSQL** is a powerful, open source object-relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness. It runs on all major operating systems, including Linux, UNIX (AIX, BSD, HP-UX, SGI IRIX, Mac OS X, Solaris, Tru64), and Windows. It is fully ACID compliant, has full support for foreign keys, joins, views, triggers, and stored procedures (in multiple languages). It includes most SQL:2008 data types, including INTEGER, NUMERIC, BOOLEAN, CHAR, VARCHAR, DATE, INTERVAL, and TIMESTAMP. It also supports storage of binary large objects, including pictures, sounds, or video. It has native programming interfaces for C/C++, Java, .Net, Perl, Python, Ruby, Tcl, ODBC, among others, and exceptional documentation.

- **Node.js** is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications

- **Postico** is a modern database app for your Mac. Postico is the perfect tool for data entry, analytics, and application development

- **Sequelize** is a promise-based ORM (Object-Relational Mapping) for Node.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, and read replication.

- **Express.js** or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It is the de facto standard server framework for Node.js.

## For more information about using Node.js, see these Dev Center articles:

* Best Practices for Node.js Development: https://www.codementor.io/mattgoldspink/nodejs-best-practices-du1086jja
* Node Hero - Getting Started with Node.js: https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/
