import sqlite3 from "sqlite3";
const data = require("../resources/sharedState.js");
import { faker } from "@faker-js/faker";

fixture`Pruebas de base de datos - SQL lite 3`.meta({ runOrder: 2 }); // Define un orden de ejecución

const firstName = faker.person.firstName();
const AnimalR = faker.animal.bear();

test("Verificar inserción en la base de datos", async (t) => {
  const db = new sqlite3.Database("testCafeDB.db");

  const insertQuery =
    "INSERT INTO Contacts (Name, LastName,Phone,Address) VALUES (?,?,?,?)";
  const insertValues = [
    firstName,
    AnimalR,
    "1167904578",
    "https://reqres.in/api/users?page=2",
  ];

  const response = await new Promise((resolve, reject) => {
    db.run(insertQuery, insertValues, function (error) {
      if (error) reject(error);
      else resolve();
    });
  });

  db.close();
});

test("Verificar lecura en la base de datos", async (t) => {
  const db = new sqlite3.Database("testCafeDB.db");

  // Verificar datos
  const selectQuery = "SELECT Address FROM Contacts WHERE LastName = ?";
  const selectValues = [AnimalR];

  const user = await new Promise((resolve, reject) => {
    db.get(selectQuery, selectValues, (error, row) => {
      if (error) reject(error);
      else resolve(row);
    });
  });

  //console.log(user.Address);
  data.ApiMySql = user.Address;

  db.close();
});
