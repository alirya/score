import Guard from "../boolean/score";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/score";
/**
 * assert {@param score} is compatible with {@link ScoreInterface}
 *
 * @param score
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param score} is not compatible
 */
export default function Score(score, error = StringError) {
    Callback(score, Guard, error);
}
//# sourceMappingURL=score.js.map