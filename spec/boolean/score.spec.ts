import Type from '../../dist/boolean/score';
import Score from '../../dist/score';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let data : object = {null:null};

    if(Type(data)) {
        let score : Score = data;
    } else {
        // @ts-expect-error
        let score : Score = data;
    }

});

describe('unvalidated score', function() {

    describe('valid', function() {

        it('string', () => {

            let score = {score : 'string'};
            expect(Type(score)).toBe(true);

        });

        it('integer', () => {

            let score = {score : 1};
            expect(Type(score)).toBe(true);

        });
    });

    describe('invalid', function() {

        it('string', () => {

            let score = {string:'string'};
            expect(Type(score)).toBe(false);

        });

        it('integer', () => {

            let score = {integer:1};
            expect(Type(score)).toBe(false);

        });
    });
});


describe('validated score', function() {

    describe('valid', function() {

        it('object', () => {

            let score = {score :{}};
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

            let score = {};
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
