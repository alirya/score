import Score from "./score";
import CallbackParameter from "./callback-parameter";
import Callable from "@alirya/function/callable";

export default function CallbackParameters<
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
