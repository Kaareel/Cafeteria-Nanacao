const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Obteniendo un 200 y obtener 1 objeto", async () => {
        const response = await request(server).get("/cafes").send()
        expect(response.statusCode).toBe(200)
        expect(response.body[0]).toBeTruthy()
    });

    it("Agregando nuevo cafe", async () => {

        const newCafe = {
            "id": 6,
            "nombre": "Irish Coffee"
        }

        const response = await request(server)
            .post("/cafes")
            .send(newCafe)

        expect(response.statusCode).toBe(201)

    });

    it("Eliminando un producto", async () => {
        const response = await request(server)
            .delete("/cafes/5")
            .set('Authorization', 'hola')
            .send()

        expect(response.statusCode).toBe(404)
    });

    it("Actualizando productos", async () => {
        const response = await request(server)
            .put("/cafes/2")
            .send({ id: 3, nombre: 'Espresso' })

        expect(response.statusCode).toBe(400)
    });
});
