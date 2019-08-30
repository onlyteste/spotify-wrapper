"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQAyUw5wQJV_RpqxH9xbn3Y_zeP9s7uxO7OP0HI4eIvJMRbQMKDVXI8ka0x9Jo4wiz5ftLyrqOk0vPmcJsegTmmnDl0svv9nrsNQyh8mp7craOq2HBwv3wzjDsQydECXW8cLsXapgn9yW6CWmLH9NP9nHqMCcVZ8iNT6_ucpXroiTCuAokZFW6ekf132sTE2xA';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;