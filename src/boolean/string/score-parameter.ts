import score from '../../score';
import Validatable from '@alirya/validatable/validatable';
import scoreParameters from './score-parameters';

export default function scoreParameter(
    {
        score,
        valid,
    } : score<unknown> & Validatable
) : string {

    return scoreParameters(score, valid);
}
