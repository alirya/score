import ScoreType from "../../boolean/string/score";
import Callback from "@alirya/function/assert/throwable/callback-parameters";
export default function Score(string, score = ScoreType, error = (string) => new Error(string)) {
    return Callback([string], score, error);
}
//# sourceMappingURL=score.js.map