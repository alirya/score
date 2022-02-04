import ScoreInterface from "../score";
/**
 * return {@param score} is compatible with {@link ScoreInterface}
 *
 * @param score
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param score} is not compatible
 */
export default function Score(score: object, error?: (score: object) => Error): ScoreInterface;
//# sourceMappingURL=score.d.ts.map