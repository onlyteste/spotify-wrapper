"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = void 0;

var _config = require("./config");

var _utils = require("./utils");

/** global fetch */
var search = function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + 'BQCt-CD8oVS2IkyYt77_aGf0SsKCM6P1xF12kJSXt2TKYQVyj5n_UqT1kZPhhYYVyYUHoO-40apHoqsKXSC0_0jJWeq2nkjKOLcCMth8Vr0Th5jy61L7aEaxlNoJlAYzGux_MFVc49z-edXnaMKEK5hOFXrw0vOH0m0PNaI0ku6IZ0AEMQE5O9m_EWyC2DYc8A'
    }
  }).then(_utils.toJSON);
};

exports.search = search;

var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

exports.searchArtists = searchArtists;

var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

exports.searchAlbums = searchAlbums;

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

exports.searchPlaylists = searchPlaylists;