import Score from '../score.js';
import Infer from './infer.js';

export type Extend<ScoreT extends Score, Extend extends Infer<ScoreT>> = {
    [Key in keyof ScoreT]: Key extends 'score' ? Extend : ScoreT[Key];
};

export default Extend;
