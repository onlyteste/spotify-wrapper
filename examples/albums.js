global.fetch = require('node-fetch');

import { searchAlbums } from '../src/index';

const albums = searchAlbums('skillet');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
