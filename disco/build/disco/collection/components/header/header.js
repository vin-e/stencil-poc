export class DiscoHeader {
    render() {
        return (h("div", { class: "disco-header" },
            h("div", { class: "disco-header__left" },
                h("div", { class: "disco-header__title" }, this.title),
                h("div", { class: "disco-header__release-date" },
                    "Release in ",
                    this.releaseDate)),
            h("div", { class: "disco-header__right" },
                h("disco-ratings", { percent: this.percent, count: this.count, hearts: this.hearts }))));
    }
    static get is() { return "disco-header"; }
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
        },
        "releaseDate": {
            "type": String,
            "attr": "release-date"
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get style() { return "/**style-placeholder:disco-header:**/"; }
}
