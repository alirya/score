import Score from './score.js';
import Callable from '@alirya/function/callable.js';
import Argument from '@alirya/function/argument/argument.js';
import {CallParameter} from '@alirya/function/argument/value/call.js';
import Callback from '@alirya/function/callback/callback.js';

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
