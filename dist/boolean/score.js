import PropertyExists from "@alirya/object/property/boolean/exists";
/**
 * check if {@param score} is compatible with {@link ScoreInterface}
 */
export default function Score(score) {
    if (!PropertyExists(score, 'score')) {
        return false;
    }
    return true;
}
//# sourceMappingURL=score.js.map