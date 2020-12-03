import Score from "./score";
import Argument from "@dikac/t-function/argument/argument";
import Callback from "@dikac/t-function/callback/callback";
import Callable from "@dikac/t-function/callable";
export default class CallbackFromObject<FunctionType extends Callable> implements Readonly<Score<ReturnType<FunctionType>>> {
    private subject;
    constructor(subject: Callback<FunctionType> & Argument<Parameters<FunctionType>>);
    get score(): ReturnType<FunctionType>;
}
