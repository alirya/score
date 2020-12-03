import Score from "../score";
import Infer from "./infer";
export declare type Extend<ScoreT extends Score, Extend extends Infer<ScoreT>> = {
    [Key in keyof ScoreT]: Key extends 'score' ? Extend : ScoreT[Key];
};
export default Extend;
