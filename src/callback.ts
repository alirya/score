import Score from "./score";
import Callable from "@alirya/function/callable";
import Argument from "@alirya/function/argument/argument";
import {CallParameter} from "@alirya/function/argument/value/call";
import Callback from "@alirya/function/callback/callback";

export function CallbackParameters<
    FunctionType extends Callable
>(
    callback : FunctionType,
    argument : Parameters<FunctionType>
) : Readonly<Score<ReturnType<FunctionType>>> {

    return new CallbackParameter({
        callback : callback,
        argument : argument
    })
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
