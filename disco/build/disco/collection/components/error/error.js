export class DiscoError {
    render() {
        return (h("slot", null));
    }
    static get is() { return "disco-error"; }
    static get style() { return "/**style-placeholder:disco-error:**/"; }
}
