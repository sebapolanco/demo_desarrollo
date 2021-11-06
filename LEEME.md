Crear un ambiente de desarrollo con GitHub y Node

1 - Crear repositorio, darle un nombre decente
2 - Clonarlo al PC con gh
    por ejemplo gh repo clone sebapolanco/demo_desarrollo
3 - Hacer npm init y rellenar la informacion
4 - Cargar los modulos que sean necesario, por ejemplo
    npm i express
	npm mocha supertest --save-dev (solo mientras hay desarrollo)
5 - Crear el archivo de entrada por ejemplo index.js
6 - Si se desea se puede crear tests que son archivos js donde usar mocha y supertest para
    ir viendo que no quede la embarrada
	por ejemplo:
	
	const request = require("supertest");

    const app = require("../index");

    describe("GET /index", () => {
      it("Debe responder con Hola mundo", (done) => {
        request(app).get("/").expect("Hola mundo", done);
      })
    });
