/**
 * Wrap {@link Score} and cache its score
 *
 * suitable to cached score from heave operation
 */
export default class Memoize {
    constructor(subject) {
        this.subject = subject;
        this.clear();
    }
    get memoized() {
        return this.memoize !== undefined;
    }
    /**
     * clear cached score
     */
    clear() {
        this.memoize = undefined;
    }
    get score() {
        if (!this.memoized) {
            this.memoize = {
                score: this.subject.score
            };
        }
        return this.memoize.score;
    }
}
//# sourceMappingURL=memoize.js.map