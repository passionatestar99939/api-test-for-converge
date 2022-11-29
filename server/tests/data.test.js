/* eslint-env jest */

import request from "supertest";
import httpStatus from "http-status";
import app from "../../index";
import config from "../../config/config";
import db from "../../config/sequelize";

const apiVersionPath = `/api/v${config.apiVersion}`;

let testApp;

beforeAll(() => {
  testApp = request(app);
});

afterAll((done) => {
  db.sequelize
    .close()
    .then(() => done())
    .catch(done);
});

describe("## data APIs", () => {
  let data = {
    sensorId: 9,
    time: 99,
    value: 1.1,
  };

  let query = {
    sensorId: 9,
    since: 0,
    until: 1000,
  };

  describe(`${apiVersionPath}/sensors`, () => {
    test("it should create a new data", (done) => {
      testApp
        .post(`${apiVersionPath}/data`)
        .set("Content-Type", "application/x-www-form-urlencoded")
        .send(data)
        .expect(httpStatus.OK)
        .then((res) => {

          expect(res.body).toEqual({ status: 204 });
          data = res.body;
          done();
        })
        .catch(done);
    });
    test("it should GET the datas", (done) => {
      testApp

        .get(`${apiVersionPath}/data`)
        .query({ ...query })
        .expect(httpStatus.OK)
        .then((res) => {

          expect(Array.isArray(res.body));
          done();
        })
        .catch(done);
    });
  });
});
