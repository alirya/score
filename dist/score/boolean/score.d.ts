import ScoreInterface from "../../score";
export default function Score<ScoreType>(score: ScoreInterface<unknown>, guard: (score: unknown) => score is ScoreType): score is ScoreInterface<ScoreType>;
//# sourceMappingURL=score.d.ts.map