import Infer from "./infer";
import Score from "../score";
/**
 * get {@link Score.score} score
 *
 * @param score
 * object to be extracted
 */
export default function Score<ScoreTemplate extends Score>(score: ScoreTemplate): Infer<ScoreTemplate>;
//# sourceMappingURL=score.d.ts.map