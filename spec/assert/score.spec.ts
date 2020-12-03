import Score from "../../dist/assert/score";
import ScoreInterface from "../../dist/score";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    let data : object = {};

    try {
        Score(data);

        let score : unknown = data.score;

        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});


describe("boolean", function() {

    it(`true`, () => {
        try {
            Score(new Boolean(true));
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`false`, () => {
        try {
            Score(new Boolean(false));
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});


describe("object", function() {

    it(`plain`, () => {
        try {
            Score({});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`instance`, () => {
        try {
            Score(new Map());
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        try {
            Score(function () {});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`anonymous arrow`, () => {
        try {
            Score(()=>{});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`named`, () => {
        try {
            Score(isNaN);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});




