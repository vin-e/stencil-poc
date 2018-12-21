import { h } from '../disco.core.js';

class DiscoGameSelection {
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
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-game-selection .disco-game-selection{font-family:var(--font-family);font-size:1rem;font-weight:300;line-height:1rem;margin:72px 36px 0}disco-game-selection .disco-game-selection__img{height:210px;padding-bottom:28px;width:210px}disco-game-selection .disco-game-selection__ratings,disco-game-selection .disco-game-selection__released-in,disco-game-selection .disco-game-selection__title{padding:8px 0}"; }
}

export { DiscoGameSelection };
