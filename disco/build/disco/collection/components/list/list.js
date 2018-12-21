import igdb from 'igdb-api';
export class DiscoList {
    constructor() {
        this.isLoading = true;
        this.sortBy = 'name:asc';
        this.sortOptions = [
            { value: 'name:asc', label: 'Game title (A to Z)' },
            { value: 'release_dates.date:desc', label: 'Recently released' }
        ];
    }
    componentWillLoad() {
        this.fetchData();
    }
    onDiscoGameSelected(e) {
        e.preventDefault();
        const data = e.detail;
        if (this.selectedId === data.id) {
            this.selectedId = undefined;
            this.discoGameSelected.emit(undefined);
        }
        else {
            this.selectedId = data.id;
            this.discoGameSelected.emit(data);
        }
    }
    onDiscoInput(e) {
        this.searchField = e.detail;
        this.fetchData();
    }
    onDiscoDropDownSelected(e) {
        this.sortBy = e.detail.value;
        this.fetchData();
    }
    onDiscoReleaseYears(e) {
        this.releaseEndYear = e.detail.endYear ? `${e.detail.endYear}-12-31` : undefined;
        this.releaseStartYear = e.detail.startYear ? `${e.detail.startYear}-01-01` : undefined;
        this.fetchData();
    }
    fetchData() {
        this.games = [];
        this.isLoading = true;
        igdb
            .list(this.searchField, this.releaseStartYear, this.releaseEndYear, '*', this.sortBy)
            .then(result => {
            const x = result.map(element => igdb.get(element.id));
            this.games = [];
            Promise.all(x).then(res => {
                res.forEach((game) => {
                    game.popularity = game.popularity
                        ? +parseFloat(game.popularity).toFixed(2)
                        : 0;
                    this.games.push(game);
                });
                this.isLoading = false;
            });
        })
            .catch(_ => {
            this.isLoading = false;
        });
    }
    render() {
        return (h("div", { class: "disco-list" },
            h("div", { class: "disco-list__filter" },
                h("disco-input", { placeholder: "Find games by title", label: " " })),
            h("div", { class: "disco-list__release-year" },
                h("disco-release-years", null)),
            h("div", { class: "disco-list__sort" },
                h("disco-dropdown", { value: this.sortBy, placeholder: "", label: "Sort By", options: this.sortOptions })),
            h("div", { class: "disco-list__main" }, this.games && this.games.length > 0
                ? this.games.map(game => (h("disco-game-card", { selected: game.id === this.selectedId, game: game })))
                : h("disco-label", null, this.isLoading
                    ? 'Please be patient while I load these games for you.'
                    : 'Is this the apocalypse because there are no games'))));
    }
    static get is() { return "disco-list"; }
    static get properties() { return {
        "games": {
            "state": true
        },
        "isLoading": {
            "state": true
        },
        "releaseEndYear": {
            "state": true
        },
        "releaseStartYear": {
            "state": true
        },
        "searchField": {
            "state": true
        },
        "selectedId": {
            "state": true
        },
        "sortBy": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "discoGameSelected",
            "method": "discoGameSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "discoGameCardSelected",
            "method": "onDiscoGameSelected"
        }, {
            "name": "discoInput",
            "method": "onDiscoInput"
        }, {
            "name": "discoDropDownSelected",
            "method": "onDiscoDropDownSelected"
        }, {
            "name": "discoReleaseYears",
            "method": "onDiscoReleaseYears"
        }]; }
    static get style() { return "/**style-placeholder:disco-list:**/"; }
}
