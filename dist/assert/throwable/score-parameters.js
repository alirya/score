import ScoreType from '../../boolean/string/score-parameters';
import Callback from '@alirya/function/assert/throwable/callback-parameters';
export default function ScoreParameters(score, message = ScoreType, error = (string) => new Error(string)) {
    return Callback([score], message, error);
}
//# sourceMappingURL=score-parameters.js.map