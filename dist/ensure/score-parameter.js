import ValueParameters from './score-parameters';
/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function ValueParameter({ score, error, }) {
    return ValueParameters(score, error);
}
//# sourceMappingURL=score-parameter.js.map