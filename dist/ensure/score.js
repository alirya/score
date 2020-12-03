import AssertString from "../assert/score";
import ScoreError from "../assert/throwable/score";
/**
 * return {@param score} is compatible with {@link ScoreInterface}
 *
 * @param score
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param score} is not compatible
 */
export default function Score(score, error = ScoreError) {
    AssertString(score, error);
    return score;
}
//# sourceMappingURL=score.js.map