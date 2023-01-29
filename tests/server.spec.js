const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Obteniendo un 200 y obtener 1 objeto", async () => {
        const response = await request(server).get("/cafes/1").send();
        const status = response.statusCode;
        expect(status).toBe(200);
    });
    it("Agregando nuevo cafe", async () => {
        const id = Math.floor(Math.random() * 1);
        const producto = { id, nombre: "" };
        const { statusCode } = await request(server)
            .post("/cafes")
            .send(producto);
        expect(statusCode).toBe(201)
    });
    it("Eliminando un producto", async () => {
        const jwt = "token";
        const idDeProductoAEliminar = 10
        const { statusCode } = await request(server)
            .delete(`/cafes/${idDeProductoAEliminar}`)
            .set("Authorization", jwt)
            .send();
        expect(statusCode).toBe(404)
    });

    it("Actualizando productos", async () => {

        const { body, statusCode } = await request(server)
            .put("/cafes/3")
            .send({ id: 5 });

        expect(statusCode).toBe(400)
    });


});
