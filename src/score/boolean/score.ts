import ScoreInterface from '../../score.js';
import ScoreObject from '../../boolean/score.js';

export default function Score<ScoreType>(
    score : ScoreInterface<unknown>,
    guard : (score:unknown)=>score is ScoreType
) : score is ScoreInterface<ScoreType> {

    return ScoreObject(score) && guard(score.score);
}
