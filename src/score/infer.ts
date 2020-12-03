import Score from "../score";

type Infer<Type> = Type extends Score<infer As> ? As : never;

export default Infer;
