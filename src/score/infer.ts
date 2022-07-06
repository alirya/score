import Score from '../score.js';

type Infer<Type> = Type extends Score<infer As> ? As : never;

export default Infer;
