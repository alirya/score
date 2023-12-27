import Score from './score.js';
import Callable from '@axiona/function/callable.js';
import Argument from '@axiona/function/argument/argument.js';
import {CallParameter} from '@axiona/function/argument/value/call.js';
import Callback from '@axiona/function/callback/callback.js';

export function CallbackParameters<
    FunctionType extends Callable
>(
    callback : FunctionType,
    argument : Parameters<FunctionType>
) : Readonly<Score<ReturnType<FunctionType>>> {

    return new CallbackParameter({
        callback : callback,
        argument : argument
    });
}


export class CallbackParameter<
    FunctionType extends Callable,
> implements Readonly<Score<ReturnType<FunctionType>>>
{

    constructor(
        private subject : Callback<FunctionType> & Argument<Parameters<FunctionType>>,
    ) {
    }

    get score () : ReturnType<FunctionType> {

        return CallParameter(this.subject);
    }
}


namespace Callback {
    export const Parameters = CallbackParameters;
    export const Parameter = CallbackParameter;
}
export default Callback;
