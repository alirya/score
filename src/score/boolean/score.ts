import ScoreInterface from '../../score';
import ScoreObject from '../../boolean/score';

export default function Score<ScoreType>(
    score : ScoreInterface<unknown>,
    guard : (score:unknown)=>score is ScoreType
) : score is ScoreInterface<ScoreType> {

    return ScoreObject(score) && guard(score.score);
}
