/** global fetch */

import { API_URL } from './config';
import { toJSON } from './utils';

export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    method: 'GET',
    headers: {
       Accept: 'application/json',
       Authorization : 'Bearer ' + 'BQCt-CD8oVS2IkyYt77_aGf0SsKCM6P1xF12kJSXt2TKYQVyj5n_UqT1kZPhhYYVyYUHoO-40apHoqsKXSC0_0jJWeq2nkjKOLcCMth8Vr0Th5jy61L7aEaxlNoJlAYzGux_MFVc49z-edXnaMKEK5hOFXrw0vOH0m0PNaI0ku6IZ0AEMQE5O9m_EWyC2DYc8A'
    }
  })
  .then(toJSON);

export const searchArtists = (query) => search(query, 'artist');
export const searchAlbums = (query) => search(query, 'album');
export const searchTracks = (query) => search(query, 'track');
export const searchPlaylists = (query) => search(query, 'playlist');
