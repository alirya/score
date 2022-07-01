import Readonly from '../dist/readonly';

it('enable console log', () => spyOn(console, 'log').and.callThrough());


describe('constructor', function() {

    let standard = {score:1};
    let wrapped = new Readonly(standard);

    it(`number`, () => expect(wrapped.score).toBe(1));
});


describe('set', function() {

    let standard = {score:1};
    let wrapped = new Readonly(standard);


    it(`subject score`, () => {
        standard.score = 10;
        expect(wrapped.score).toBe(10);
    });

    it(`subject`, () => {
        wrapped.subject = {score:20};
        expect(wrapped.score).toBe(20);
    });
});




