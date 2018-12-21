export class DiscoGameSelection {
    render() {
        return (h("div", { class: "disco-game-selection" },
            h("img", { class: "disco-game-selection__img", src: this.imgUrl }),
            h("div", { class: "disco-game-selection__title" }, this.title),
            h("disco-ratings", { class: "disco-game-selection__ratings", percent: this.percent, count: this.count, hearts: this.hearts }),
            h("div", { class: "disco-game-selection__released-in" },
                "Released in ",
                this.releaseDate)));
    }
    static get is() { return "disco-game-selection"; }
    static get properties() { return {
        "count": {
            "type": String,
            "attr": "count"
        },
        "hearts": {
            "type": String,
            "attr": "hearts"
        },
        "imgUrl": {
            "type": String,
            "attr": "img-url"
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
    static get style() { return "/**style-placeholder:disco-game-selection:**/"; }
}
