import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Search', () => {

    let fetchedStub;
    let spotify;

    beforeEach(() => {
        spotify = new SpotifyWrapper({
          token: 'foo'
        });

        fetchedStub = sinon.stub(global, 'fetch');
        fetchedStub.resolves({ json: () => {} });
    });

    afterEach(() => {
        fetchedStub.restore();
    });

    describe('smoke tests', () => {
        it('should exist the spotify.search.albums method', () => {
          expect(spotify.search.albums).to.exist;
        });

        it('should exist the spotify.search.artists method', () => {
          expect(spotify.search.artists).to.exist;
        });

        it('should exist the spotify.search.tracks method', () => {
          expect(spotify.search.tracks).to.exist;
        });

        it('should exist the spotify.search.playlists method', () => {
          expect(spotify.search.playlists).to.exist;
        });
    });

    describe('spotify.search.artists', () => {
        it('should call fetch function', () => {
          const artists = spotify.search.artists('skillet');
          expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
          const artists = spotify.search.artists('skillet');
          expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=skillet&type=artist')

        });
    });

    describe('spotify.search.albums', () => {
        it('should call fetch function', () => {
          const albums = spotify.search.albums('Incubus');
          expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
          const albums = spotify.search.albums('Incubus');
          expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
        });
    });

    describe('spotify.search.tracks', () => {
        it('should call fetch function', () => {
          const tracks = spotify.search.tracks('Incubus');
          expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
          const tracks = spotify.search.tracks('Incubus');
          expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')

        });
    });

    describe('spotify.search.playlists', () => {
        it('should call fetch function', () => {
          const playlists = spotify.search.playlists('Incubus');
          expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
          const playlists = spotify.search.playlists('Incubus');
          expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')


        });
    });
});
