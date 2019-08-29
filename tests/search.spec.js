import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
        promise = fetchedStub.resolves({ json: () => ({ album: 'name' }) });
    });

    afterEach(() => {
        fetchedStub.restore();
    });

    describe('Smoke tests', () => {
        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the searchAlbuns method', () => {
            expect(search).to.exist;
        });

        it('should exist the searchArtistis method', () => {
            expect(search).to.exist;
        });

        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the search method', () => {
            expect(search).to.exist;
        });
    });

    describe('Generic Search', () => {

        it('should call fetch function', () => {
            const artists = search();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct url', () => {

            context('passing one type', () => {
                const artists = search('skillet', 'artist');

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=skillet&type=artist');

                const albums = search('skillet', 'album');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=skillet&type=album');
            });

            context('passing more than one type', () => {
                const artistisAndAlbums = search('Skillet', ['artist', 'album']);
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Skillet&type=artist,album');
            });

        });

        it('should return the JSON data from the Promise', () => {

            const artists = search('skillet', 'artist');

            artists.then(data => {
                expect(data).to.be.eql({ album: 'name' });
            });

            //expect(artists.resolveValue).to.be.eql({album: 'name'});
        });
    });

    describe('searchArtists', () => {

        it('should call fetch function', () => {
            const artists = searchArtists('Skillet');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const artists = searchArtists('Skillet');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Skillet&type=artist');
        });
    });

    describe('searchAlbums', () => {

        it('should call fetch function', () => {
            const albums = searchAlbums('Skillet');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const albums = searchAlbums('Skillet');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Skillet&type=album');
        });
    });

    describe('searchTracks', () => {

        it('should call fetch function', () => {
            const tracks = searchTracks('Skillet');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const tracks = searchTracks('Skillet');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Skillet&type=track');
        });
    });

    describe('searchPlaylists', () => {

        it('should call fetch function', () => {
            const playlists = searchPlaylists('Skillet');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const playlists = searchPlaylists('Skillet');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Skillet&type=playlist');
        });
    });

});
