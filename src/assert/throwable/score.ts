import ScoreType from '../../boolean/string/score';
import {CallbackParameters} from '@alirya/function/assert/throwable/callback';
import Score from '../../score';
import Message from '@alirya/message/message';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable';

export function ScoreParameters(
    score : unknown,
    message : ValidatableParameters<unknown, string> = ScoreType.Parameters,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return CallbackParameters([score], message, error);
}


export function ScoreParameter(
    {
        score,
        message = ScoreType.Parameter,
        error = (string : string) => new Error(string)
    } : Score<unknown> & Partial<Message<ValidatableParameter<unknown, string>>> & {error ?: (message:string)=>Error}
) : Error {

    return ScoreParameters(
        score,
        (value, valid) => message({value, valid}),
        error
    );
}


namespace Score {
    export const Parameters = ScoreParameters;
    export const Parameter = ScoreParameter;
}
export default Score;