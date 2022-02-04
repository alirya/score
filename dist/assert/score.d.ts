import ScoreInterface from "../score";
/**
 * assert {@param score} is compatible with {@link ScoreInterface}
 *
 * @param score
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param score} is not compatible
 */
export default function Score(score: object, error?: (score: object) => Error): asserts score is ScoreInterface;
//# sourceMappingURL=score.d.ts.map