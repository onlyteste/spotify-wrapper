import chai, {expect} from 'chai';
import sinon from  'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Album', () => {

    let spotify;
    let promise;
    let stubedFetch;

    beforeEach(() => {

        spotify = new SpotifyWrapper({
            token: 'foo',
        });

        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('smoke tests', () => {

        it('should have getAlbum method', () => {
            expect(spotify.album.getAlbum).to.exist;
        });

        it('should have getAlbums method', () => {
            expect(spotify.album.getAlbums).to.exist;
        });

        it('should have getAlbumTracks method', () => {
            expect(spotify.album.getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        //verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = spotify.album.getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        //verifica se o fetch ocorre com a url desejada
        it('should call fetch with the correct URL', () => {
            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

            const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
        });

        //verifica se o dado é recebido pela Promise
        it('should return the correct data from Promise', () => {

            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            album.then(data => {
                expect(data).to.be.eql({album: 'name'});
            });

            //expect(album.resolveValue).to.be.eql({album: 'name'});
        });
    });

    describe('getAlbums', () => {

        it('should call fetch method', () => {
            const albums = spotify.album.getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
        });

        it('should return the correct data form Promise', () => {
            const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTk', '4aawyAB9vmqN3uQ7FjRGTy']);
            albums.then((data) => {
                expect(data).to.be.eql({ album: 'name' });
            });
        });

    });

    describe('getAlbumsTracks', () => {

        it('should call fetch method', () => {
            const tracks = spotify.album.getAlbumTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const tracks = spotify.album.getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
        });

        it('should return the correct data from Promise', () => {
            const tracks = spotify.album.getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            tracks.then((data) => {
                expect(data).to.be.eql({ album: 'name' });
            });
        });

    });

});
