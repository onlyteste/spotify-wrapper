import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('SpotifyWrapper library', () => {

    it('should create an instance of SpotifyWrapper', () => {
        const spotify = new SpotifyWrapper({});
        expect(spotify).to.be.an.instanceof(SpotifyWrapper);
    });

    it('should receive apiURL as an option', () => {
        const spotify = new SpotifyWrapper({
            apiURL: 'blabla'
        });

        expect(spotify.apiURL).to.be.equal('blabla');
    });

    it('should use the default apiURL if not provided', () => {
        const spotify = new SpotifyWrapper({});
        expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });

    it('should receive token as an option', () => {
        let spotify = new SpotifyWrapper({
            token: 'foo'
        });

        expect(spotify.token).to.be.equal('foo');
    });

    describe('request method', () => {

        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.resolves({ json: () => ({ album: 'name' }) });
        });

        afterEach(() => {
            fetchedStub.restore();
        });

        it('should have request method', () => {
            let spotify = new SpotifyWrapper({});

            expect(spotify.request).to.exist;
        });

        it('should call fetch when request', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });

            spotify.request('url');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with right url passed', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });

            spotify.request('url');
            expect(fetchedStub).to.have.been.calledWith('url');
        });

        it('should called fetch with right headers passed', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });

            const headers = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer foo`
                }
            };

            spotify.request('url');
            expect(fetchedStub).to.have.been.calledWith('url', headers);
        });

    });
});
