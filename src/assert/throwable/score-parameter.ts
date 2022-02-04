import Score from '../../score';
import Message from '@alirya/message/message';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import ScoreParameters from './score-parameters';

export default function ScoreParameter(
    {
        score,
        message,
        error
    } : Score<unknown> & Message<Dynamic<unknown, string>> & {error : (message:string)=>Error}
) : Error {

    return ScoreParameters(
        score,
        (value, valid) => message({value, valid}),
        error
    );
}
