import {afterAll, beforeAll} from "bun:test";

beforeAll(() => {
    console.log("Global test setup");
});

afterAll(() => {
    console.log("Global test teardown");
});