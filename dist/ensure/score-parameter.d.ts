import ValueInterface from '../score';
import Value from '../score';
/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function ValueParameter({ score, error, }: Value<object> & {
    error: (value: object) => Error;
}): ValueInterface;
//# sourceMappingURL=score-parameter.d.ts.map