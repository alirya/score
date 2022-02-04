import Score from "./score";
import CallbackFromObject from "./callback-from-object";
import Callable from "@alirya/function/callable";

export default function Callback<
    FunctionType extends Callable
>(
    callback : FunctionType,
    argument : Parameters<FunctionType>
) : Readonly<Score<ReturnType<FunctionType>>> {

    return new CallbackFromObject({
        callback : callback,
        argument : argument
    })
}
