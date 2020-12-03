import ScoreContainer from "../../../dist/score";
import Score from "../../../dist/score/boolean/score";
import Object_ from "@dikac/t-object/boolean/object";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});


it("valid", function() {

    let score : ScoreContainer<object> = {score:{}};

    expect(Score(score, Object_)).toBe(true);

});


it("invalid", function() {

    let score : ScoreContainer<string> = {score:'string'};

    expect(Score(score, Object_)).toBe(false);

});
