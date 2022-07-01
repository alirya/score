import BaseScore from '../../score';
import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';

export function ScoreParameters(
    score : unknown,
    valid : boolean,
) : string {

    if(valid) {

        return `score is compatible with Score interface`;

    } else {

        return `score is not compatible with Score interface`;
    }
}

export type ScoreArgumentValue = Value<unknown> & Validatable;
export type ScoreArgumentScore = BaseScore<unknown> & Validatable;
export type ScoreArgument = ScoreArgumentValue | ScoreArgumentScore;

export function ScoreParameter(
    {
        value,
        valid,
    } : ScoreArgumentValue
) : string;

export function ScoreParameter(
    {
        score,
        valid,
    } : ScoreArgumentScore
) : string;

export function ScoreParameter(
    {
        score,
        value,
        valid,
    } : ScoreArgumentValue & ScoreArgumentScore
) : string {

    return ScoreParameters(score || value, valid);
}


namespace Score {
    export const Parameters = ScoreParameters;
    export const Parameter = ScoreParameter;
    export type ArgumentValue = ScoreArgumentValue;
    export type ArgumentScore = ScoreArgumentScore;
    export type Argument = ScoreArgument;
}
export default Score;
