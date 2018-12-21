export class DiscoList {
    render() {
        const createdDate = new Date(this.game.created_at);
        const releaseDate = `${createdDate.getMonth() + 1}-${createdDate.getDate()}-${createdDate.getFullYear()}`;
        return (h("disco-card", { selected: this.selected, onClick: _ => this.discoGameCardSelected.emit(this.game) },
            h("disco-header", { slot: "header", title: this.game.name, "release-date": releaseDate, percent: this.game.rating, count: this.game.rating_count, hearts: this.game.popularity }),
            h("p", null, this.game.summary)));
    }
    static get is() { return "disco-game-card"; }
    static get properties() { return {
        "game": {
            "type": "Any",
            "attr": "game"
        },
        "selected": {
            "type": Boolean,
            "attr": "selected"
        }
    }; }
    static get events() { return [{
            "name": "discoGameCardSelected",
            "method": "discoGameCardSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:disco-game-card:**/"; }
}
