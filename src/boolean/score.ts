import ScoreInterface from '../score';
import {ExistsParameters} from '@alirya/object/property/boolean/exists';

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
