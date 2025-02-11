import mysql from "mysql";
import dbMysqlConfig from "../resources/dbMysqlConfig.js";
import { faker } from "@faker-js/faker";
const data = require("../resources/sharedState.js");

fixture`Pruebas de base de datos MySQL`.meta({ runOrder: 2 });

const firstName = faker.person.firstName();
const AnimalR = faker.animal.bear();

test("Verificar inserción", async (t) => {
  const connection = mysql.createConnection(dbMysqlConfig);
  connection.connect();

  const insertQuery = "INSERT INTO TABLE_TEST (`NAME`, `STATUS`) VALUES (?,?)";
  const insertValues = [firstName, data.ApiMySql];

  connection.query(insertQuery, insertValues, (error, results) => {
    if (error) throw error;
    t.expect(results).contains(AnimalR);
  });
  connection.end();
});

test("Verificar lectura", async (t) => {
  const connection = mysql.createConnection(dbMysqlConfig);
  connection.connect();

  const selectQuery = "SELECT STATUS FROM TABLE_TEST WHERE NAME=?";
  const selectValue = [firstName];

  connection.query(selectQuery, selectValue, (error, results) => {
    if (error) throw error;
    t.expect(results.affectedRows).eql(1);
    let url = results[0].STATUS;
    let urlToS = String(url);
    data.ApiMySql = urlToS;
    //console.log(data.ApiMySql);
  });
  connection.end();
});
