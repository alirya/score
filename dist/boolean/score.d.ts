import ScoreInterface from "../score";
/**
 * check if {@param score} is compatible with {@link ScoreInterface}
 */
export default function Score(score: object): score is ScoreInterface;
