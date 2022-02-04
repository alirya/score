import ScoreInterface from "../score";
import PropertyExists from "@alirya/object/property/boolean/exists";

/**
 * check if {@param score} is compatible with {@link ScoreInterface}
 */
export default function Score(
    score : object,
) : score is ScoreInterface {

    if(!PropertyExists(score, 'score')) {

        return false;
    }

    return true;

}
