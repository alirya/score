/**
 * Readonly wrapper for {@link Score}
 */
export default class Readonly {
    constructor(subject) {
        this.subject = subject;
    }
    get score() {
        return this.subject.score;
    }
}
//# sourceMappingURL=readonly.js.map