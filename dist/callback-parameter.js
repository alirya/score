import Call from "@alirya/function/argument/value/call-parameter";
export default class CallbackParameter {
    constructor(subject) {
        this.subject = subject;
    }
    get score() {
        return Call(this.subject);
    }
}
//# sourceMappingURL=callback-parameter.js.map