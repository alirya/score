import AssertString from '../assert/score.js';
import ScoreError from '../assert/throwable/score.js';
import ScoreInterface from '../score.js';
import ValueInterface from '../score.js';
import Value from '../score.js';

/**
 * return {@param score} is compatible with {@link ScoreInterface}
 *
 * @param score
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param score} is not compatible
 */
export function ScoreParameters(
    score : object,
    error : (score:object)=>Error = ScoreError.Parameters
) : ScoreInterface {

    AssertString(score, error);

    return score;
}


/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export function ScoreParameter(
    {
        score,
        error,
    } : Value<object> & {error : (value:object)=>Error}
) : ValueInterface {

    return ScoreParameters(score, error);
}


namespace Score {
    export const Parameters = ScoreParameters;
    export const Parameter = ScoreParameter;
}
export default Score;
