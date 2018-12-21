export class DiscoRatings {
    render() {
        return [
            h("div", null,
                h("span", { class: "disco-ratings__hearts-count" }, this.hearts),
                " ",
                h("span", { class: "disco-ratings__heart" }, "\u2764"),
                " | ",
                h("span", { class: "disco-ratings__percentage" },
                    this.percent,
                    "% (",
                    this.count,
                    ")"))
        ];
    }
    static get is() { return "disco-ratings"; }
    static get properties() { return {
        "count": {
            "type": String,
            "attr": "count"
        },
        "hearts": {
            "type": String,
            "attr": "hearts"
        },
        "percent": {
            "type": String,
            "attr": "percent"
        }
    }; }
    static get style() { return "/**style-placeholder:disco-ratings:**/"; }
}
