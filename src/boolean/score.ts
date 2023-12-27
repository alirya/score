import ScoreInterface from '../score.js';
import {ExistsParameters} from '@axiona/object/property/boolean/exists.js';

/**
 * check if {@param score} is compatible with {@link ScoreInterface}
 */
export default function Score(
    score : object,
) : score is ScoreInterface {

    if(!ExistsParameters(score, 'score')) {

        return false;
    }

    return true;

}
