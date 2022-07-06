import Score from '../../dist/score/score.js';
import ScoreContainer from '../../dist/score.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function() {

    let score : ScoreContainer<string> = {score:'string'};

    let result : string = Score(score);

});

it('result equal', function() {

    let score : ScoreContainer<string> = {score:'string'};

    let result : string = Score(score);

    expect(result).toBe('string');

});

