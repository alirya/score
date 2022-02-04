import Guard from "../boolean/score";
import Callback from "@alirya/function/assert/callback-parameters";
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