import ScoreType from '../../boolean/string/score-parameters';
import Callback from '@alirya/function/assert/throwable/callback-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export default function ScoreParameters(
    score : unknown,
    message : Dynamic<unknown, string> = ScoreType,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return Callback([score], message, error);
}
