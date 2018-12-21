export class DiscoLabel {
    render() {
        return (h("slot", null));
    }
    static get is() { return "disco-label"; }
    static get style() { return "/**style-placeholder:disco-label:**/"; }
}
