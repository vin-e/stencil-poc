export class DiscoCard {
    render() {
        const classes = ['disco-card'];
        if (this.selected) {
            classes.push('disco-card--selected');
        }
        return [
            h("div", { class: classes.join(' ') },
                h("slot", { name: "header" }),
                h("hr", null),
                h("slot", null))
        ];
    }
    static get is() { return "disco-card"; }
    static get properties() { return {
        "selected": {
            "type": Boolean,
            "attr": "selected"
        }
    }; }
    static get style() { return "/**style-placeholder:disco-card:**/"; }
}
