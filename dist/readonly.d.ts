import Score from "./score";
import Infer from "./score/infer";
/**
 * Readonly wrapper for {@link Score}
 */
export default class Readonly<Container extends Score = Score> implements globalThis.Readonly<Score<Infer<Container>>> {
    subject: Container;
    constructor(subject: Container);
    get score(): Infer<Container>;
}
//# sourceMappingURL=readonly.d.ts.map