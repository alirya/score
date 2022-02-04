import ScoreParameters from './score-parameters';
export default function ScoreParameter({ score, message, error }) {
    return ScoreParameters(score, (value, valid) => message({ value, valid }), error);
}
//# sourceMappingURL=score-parameter.js.map