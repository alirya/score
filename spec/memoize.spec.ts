import Memoized from '../dist/memoize.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('test', function() {

    let standard = {score:10};
    let memoize = new Memoized(standard);


    it(`check score`, () =>{

        expect(memoize.score).toBe(10);
    });

    it(`change subject score`, () =>{
        standard.score = 20;
        expect(standard.score).toBe(20);
    });

    it(`recheck memoized score`, () => {

        expect(memoize.score).toBe(10);
    });

    it(`reset memoize`, () =>{

        memoize.clear();
        expect(memoize.score).toBe(20);
    });
});
