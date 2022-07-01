import Score from './score';
import Infer from './score/infer';

/**
 * Wrap {@link Score} and cache its score
 *
 * suitable to cached score from heave operation
 */
export default class Memoize<
    Container extends Score = Score
    > implements
    Readonly<Score<Infer<Container>>>
{
    protected memoize : Score<Infer<Container>>|undefined;

    constructor(
        public subject : Container
    ) {
        this.clear();
    }

    get memoized () : boolean {

        return this.memoize !== undefined;
    }

    /**
     * clear cached score
     */
    clear () {

        this.memoize = undefined;
    }

    get score () : Infer<Container> {

        if(!this.memoized) {

            this.memoize = {
                score : <Infer<Container>>this.subject.score
            };
        }

        return (<Score<Infer<Container>>> this.memoize).score;
    }

}
