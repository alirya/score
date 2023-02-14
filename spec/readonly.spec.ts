import Readonly from '../dist/readonly.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());


describe('constructor', function() {

    const standard = {score:1};
    const wrapped = new Readonly(standard);

    it(`number`, () => expect(wrapped.score).toBe(1));
});


describe('set', function() {

    const standard = {score:1};
    const wrapped = new Readonly(standard);


    it(`subject score`, () => {
        standard.score = 10;
        expect(wrapped.score).toBe(10);
    });

    it(`subject`, () => {
        wrapped.subject = {score:20};
        expect(wrapped.score).toBe(20);
    });
});




