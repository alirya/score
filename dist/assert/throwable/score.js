import ScoreType from "../../boolean/string/score";
import Callback from "@dikac/t-function/assert/throwable/callback";
export default function Score(string, score = ScoreType, error = (string) => new Error(string)) {
    return Callback([string], score, error);
}
//# sourceMappingURL=score.js.map