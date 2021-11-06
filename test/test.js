const request = require("supertest");

const app = require("../index");

describe("GET /index", () => {
  it("Debe responder con Hola mundo", (done) => {
    request(app).get("/").expect("Hola mundo", done);
  })
});