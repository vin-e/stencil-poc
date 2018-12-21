import { h } from '../disco.core.js';

class DiscoRatings {
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
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-ratings{font-family:var(--font-family);font-size:1rem;font-weight:300;line-height:1rem;color:var(--text-light);margin:1rem 0}disco-ratings .disco-ratings__heart{color:var(--love)}"; }
}

export { DiscoRatings };
