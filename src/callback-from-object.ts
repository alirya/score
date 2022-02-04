import Score from "./score";
import Argument from "@alirya/function/argument/argument";
import Call from "@alirya/function/argument/value/call-parameter";
import Callback from "@alirya/function/callback/callback";
import Callable from "@alirya/function/callable";

export default class CallbackFromObject<
    FunctionType extends Callable,
> implements Readonly<Score<ReturnType<FunctionType>>>
{

    constructor(
        private subject : Callback<FunctionType> & Argument<Parameters<FunctionType>>,
    ) {
    }

    get score () : ReturnType<FunctionType> {

        return Call(this.subject);
    }
}
