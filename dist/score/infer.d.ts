import Score from "../score";
declare type Infer<Type> = Type extends Score<infer As> ? As : never;
export default Infer;
