import { test } from "testcafe";
const data = require("../resources/sharedState.js");
import { faker } from "@faker-js/faker"; //https://fakerjs.dev/api/

fixture`Requests API`.meta({ runOrder: 4 });

let id = null;
const firstName = faker.person.firstName();
const JobArea = faker.person.jobArea();

test("API - Create user", async (t) => {
  const result = await t.request({
    url: "https://reqres.in/api/users",
    method: "POST",
    body: {
      name: firstName,
      job: JobArea,
    },
  });
  //console.log(result);
  await t.expect(result.status).eql(201);
  id = result.body.id;
  //console.log(id);
});

test("API - Update user", async (t) => {
  const result = await t.request({
    url: "https://reqres.in/api/users/" + id,
    method: "PUT",
    body: {
      name: "Pedro Garcia",
      job: "Contable",
    },
  });
  //console.log(result);
  await t.expect(result.status).eql(200);
});

test("API - GET users", async (t) => {
  const result = await t.request({
    url: data.ApiMySql,
    method: "GET",
  });
  //console.log(data.ApiMySql);
  //console.log(result);
  await t.expect(result.status).eql(200);
});
