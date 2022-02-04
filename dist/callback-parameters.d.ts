import Score from "./score";
import Callable from "@alirya/function/callable";
export default function CallbackParameters<FunctionType extends Callable>(callback: FunctionType, argument: Parameters<FunctionType>): Readonly<Score<ReturnType<FunctionType>>>;
//# sourceMappingURL=callback-parameters.d.ts.map