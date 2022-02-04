import Score from '../../score';
import Message from '@alirya/message/message';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
export default function ScoreParameter({ score, message, error }: Score<unknown> & Message<Dynamic<unknown, string>> & {
    error: (message: string) => Error;
}): Error;
//# sourceMappingURL=score-parameter.d.ts.map