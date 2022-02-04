import AssertString from "../assert/score";
import ScoreError from "../assert/throwable/score-parameters";
import ScoreInterface from "../score";

/**
 * return {@param score} is compatible with {@link ScoreInterface}
 *
 * @param score
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param score} is not compatible
 */
export default function ScoreParameters(
    score : object,
    error : (score:object)=>Error = ScoreError
) : ScoreInterface {

    AssertString(score, error);

    return score;
}
