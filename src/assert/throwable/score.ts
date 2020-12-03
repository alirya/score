import ScoreType from "../../boolean/string/score";
import Callback from "@dikac/t-function/assert/throwable/callback";

export default function Score(
    string : unknown,
    score : (
        valid : boolean,
        score : unknown,
    ) => string = ScoreType,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return Callback([string], score, error);
}
