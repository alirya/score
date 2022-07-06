import ScoreContainer from '../../../dist/score.js';
import Score from '../../../dist/score/boolean/score.js';
import Object_ from '@alirya/object/boolean/object.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('valid', function() {

    let score : ScoreContainer<object> = {score:{}};

    expect(Score(score, Object_)).toBe(true);

});


it('invalid', function() {

    let score : ScoreContainer<string> = {score:'string'};

    expect(Score(score, Object_)).toBe(false);

});
