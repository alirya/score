import Score from "./score";
import Infer from "./score/infer";
/**
 * Wrap {@link Score} and cache its score
 *
 * suitable to cached score from heave operation
 */
export default class Memoize<Container extends Score = Score> implements Readonly<Score<Infer<Container>>> {
    subject: Container;
    protected memoize: Score<Infer<Container>> | undefined;
    constructor(subject: Container);
    get memoized(): boolean;
    /**
     * clear cached score
     */
    clear(): void;
    get score(): Infer<Container>;
}
