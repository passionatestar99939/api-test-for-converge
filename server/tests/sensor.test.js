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

describe("## sensor APIs", () => {
  let sensor = {
    id: 9,
    threshold: 39,
  };

  describe(`${apiVersionPath}/sensors`, () => {
    test("it should create a new sensor", (done) => {
      testApp
        .post(`${apiVersionPath}/sensors`)
        .set("Content-Type", "application/x-www-form-urlencoded")
        .send(sensor)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).toEqual({ status: 204 });
          sensor = res.body;
          done();
        })
        .catch(done);
    });
    test("it should GET the sensors", (done) => {
      testApp
        .get(`${apiVersionPath}/sensors`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(Array.isArray(res.body));
          done();
        })
        .catch(done);
    });
  });

  // describe(`${apiVersionPath}/sensors/:id`, () => {
  //   test("it should update the sensor", (done) => {
  //     testApp
  //       .put(`${apiVersionPath}/sensors/${sensor.id}`)
  //       .set("Content-Type", "application/x-www-form-urlencoded")
  //       .send(sensor)
  //       .expect(httpStatus.OK)
  //       .then((res) => {
  //         expect(res.body).toEqual({ status: 204 });
  //         sensor = res.body;
  //         done();
  //       })
  //       .catch(done);
  //   });
  // });
});
