import Score from "../../dist/score/score";
import ScoreContainer from "../../dist/score";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatible", function() {

    let score : ScoreContainer<string> = {score:'string'};

    let result : string = Score(score);

});

it("result equal", function() {

    let score : ScoreContainer<string> = {score:'string'};

    let result : string = Score(score);

    expect(result).toBe('string');

});

