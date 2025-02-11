
![Logo](https://testcafe.io/img/testcafe-logo.svg)
# Template Web Testing + BD + API

Complete template for web test automation with database integration and REST APIs. Includes:
E2E test automation with web selectors.
Integration and validation of CRUD operations in databases
REST API endpoint testing
Modular and scalable architecture
Detailed execution reports




## Documentation

[Documentation testcafe.io](https://testcafe.io/documentation/402635/guides/overview/getting-started)
## Resources

 - [Web/Mobile](https://www.saucedemo.com/)
 - [API](https://reqres.in/)
 - [Mysql](https://console.clever-cloud.com)
 - [Local DataBase](https://sqlitestudio.pl/)

## Installation

Install with npm

#### Pre-requisites
```bash
https://nodejs.org/es/download
```
#### Install testCafe
```bash
  node --version
  npm i -g testcafe
  npm install -g npm@latest
  npm install -g testcafe
  npm install --save-dev testcafe
```
    
## Running Tests

To run tests, run the following commands

example run all tests: "npm run AllTests" or individual executions:

```bash
  "loginTest": "testcafe chrome:headless tests/test_01_login --reporter html-testrail-3",
  "ApiTest": "testcafe chrome:headless tests/test_04_apis.js --reporter html-testrail-3",
  "Sql3Test": "testcafe chrome:headless tests/test_02_DBSQL3.js --reporter html-testrail-3",
  "MysqlTest": "testcafe chrome:headless tests/test_03_DBmysql.js --reporter html-testrail-3",
```
## Screenshots

![App Screenshot](https://i.imgur.com/AtqusTd.png)

![App Screenshot](https://i.imgur.com/0rWrEPs.png)



## Authors

- [@maximolpz](https://github.com/maximolpz)

