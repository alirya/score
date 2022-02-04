import Score from "./score";
import Argument from "@alirya/function/argument/argument";
import Callback from "@alirya/function/callback/callback";
import Callable from "@alirya/function/callable";
export default class CallbackFromObject<FunctionType extends Callable> implements Readonly<Score<ReturnType<FunctionType>>> {
    private subject;
    constructor(subject: Callback<FunctionType> & Argument<Parameters<FunctionType>>);
    get score(): ReturnType<FunctionType>;
}
//# sourceMappingURL=callback-from-object.d.ts.map