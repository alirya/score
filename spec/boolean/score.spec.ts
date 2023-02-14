import Type from '../../dist/boolean/score.js';
import Score from '../../dist/score.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    const data : object = {null:null};

    if(Type(data)) {
        const score : Score = data;
    } else {
        // @ts-expect-error
        const score : Score = data;
    }

    it('', ()=>expect(true).toBeTrue());

});

describe('unvalidated score', function() {

    describe('valid', function() {

        it('string', () => {

            const score = {score : 'string'};
            expect(Type(score)).toBe(true);

        });

        it('integer', () => {

            const score = {score : 1};
            expect(Type(score)).toBe(true);

        });
    });

    describe('invalid', function() {

        it('string', () => {

            const score = {string:'string'};
            expect(Type(score)).toBe(false);

        });

        it('integer', () => {

            const score = {integer:1};
            expect(Type(score)).toBe(false);

        });
    });
});


describe('validated score', function() {

    describe('valid', function() {

        it('object', () => {

            const score = {score :{}};
            expect(Type(score)).toBe(true);
        });

        it('class', () => {

            class C {
                constructor(
                    public score : object = {}
                ){}
            }

            expect(Type(new C)).toBe(true);
        });
    });

    describe('invalid score', function() {

        it('object', () => {

            const score = {};
            expect(Type(score)).toBe(false);
        });

        it('class', () => {

            class C {
                constructor(
                    public string : string = '1'
                ){}
            }

            expect(Type(new C)).toBe(false);
        });
    });
});
