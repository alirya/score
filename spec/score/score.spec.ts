import Score from '../../dist/score/score.js';
import ScoreContainer from '../../dist/score.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function() {

    const score : ScoreContainer<string> = {score:'string'};

    const result : string = Score(score);

    it('', ()=>expect(true).toBeTrue());
});

it('result equal', function() {

    const score : ScoreContainer<string> = {score:'string'};

    const result : string = Score(score);

    expect(result).toBe('string');

});

