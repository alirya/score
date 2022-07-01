import Guard from '../boolean/score';
import {CallbackParameters} from '@alirya/function/assert/callback';
import StringError from './throwable/score';
import ScoreInterface from '../score';


/**
 * assert {@param score} is compatible with {@link ScoreInterface}
 *
 * @param score
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param score} is not compatible
 */
export default function Score(
    score : object,
    error : (score:object)=>Error = StringError.Parameters
) : asserts score is ScoreInterface {

    CallbackParameters(score, Guard, error);
}
