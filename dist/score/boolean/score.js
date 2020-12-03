import ScoreObject from "../../boolean/score";
export default function Score(score, guard) {
    return ScoreObject(score) && guard(score.score);
}
//# sourceMappingURL=score.js.map