import Call from "@alirya/function/argument/value/call-parameter";
export default class CallbackFromObject {
    constructor(subject) {
        this.subject = subject;
    }
    get score() {
        return Call(this.subject);
    }
}
//# sourceMappingURL=callback-from-object.js.map