import request from "supertest";
import faker from "faker";
import server from "../src";

afterEach(() => {
    server.close();
});

describe("GET /", () => {
    it("should render application name and version", async () => {
        await request(server)
            .get("/")
            .expect(200);
    });
});

describe("POST /", () => {
    it("should create person with proper data", async () => {
        const person = {
            name: faker.name.findName()
        };
        const response = await request(server)
            .post("/")
            .send(person);
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe("created");
    });
});

describe("GET /suggest/:term", () => {
    it("should return JSON Array of persons", async () => {
        const response = await request(server).get("/suggest/ranbir");
        expect(response.statusCode).toBe(200);
        expect(response.body.persons).toBeInstanceOf(Array);
    });
});

describe("GET /404", () => {
    it("should return 404 for non-existent URLs", async () => {
        await request(server)
            .get("/404")
            .expect(404);
        await request(server)
            .get("/notfound")
            .expect(404);
    });
});
