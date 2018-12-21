import { h } from '../disco.core.js';

class DiscoCard {
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
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-card .disco-card{background-color:var(--paper);border-radius:4px;-webkit-box-shadow:5px 6px 7px 0 var(--text-light);box-shadow:5px 6px 7px 0 var(--text-light);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:180px;margin:12px 0;max-height:180px;min-height:180px;padding:18px 24px}disco-card .disco-card hr{margin:0}disco-card .disco-card p{margin:0;margin-top:9px;max-height:100px;overflow:auto;padding:0}disco-card .disco-card--selected{-webkit-box-shadow:8px 9px 11px 0 var(--text-light);box-shadow:8px 9px 11px 0 var(--text-light);-webkit-transform:translate3d(-6px,-7px,0);transform:translate3d(-6px,-7px,0);-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:-webkit-box-shadow,-webkit-transform;transition-property:-webkit-box-shadow,-webkit-transform;transition-property:box-shadow,transform;transition-property:box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.16,1,.29,.99);transition-timing-function:cubic-bezier(.16,1,.29,.99)}"; }
}

class DiscoDropDown {
    constructor() {
        this.value = '';
        this.valueLabel = '';
        this.width = '192';
        this.maxlength = '';
        this.minlength = '';
        this.placeholder = '';
    }
    componentWillLoad() {
        if (this.value && this.options && this.options.length > 0) {
            const option = this.options.find((opt) => opt.value === this.value);
            if (option) {
                this.valueLabel = option.label;
            }
        }
    }
    discoDropDownOptionSelectedHandler(event) {
        this.value = event.detail.value || '';
        this.valueLabel = event.detail.label || '';
        this.discoDropDownSelected.emit({ value: this.value, label: this.valueLabel });
        this.onInputClickAway();
    }
    onInputClick(ev) {
        const parent = this;
        document.addEventListener('click', function dropdownClicked(e) {
            if (!ev.target.parentElement.contains(e.target) || ev.target.className === 'disco-dropdown__list-option') {
                parent.show = false;
                this.removeEventListener('click', dropdownClicked);
            }
        });
        this.show = true;
    }
    onInputClickAway() {
        this.show = false;
    }
    render() {
        const label = this.label
            ? h("disco-label", null, this.label)
            : undefined;
        const error = this.error
            ? h("disco-error", null, this.error)
            : undefined;
        const classes = [
            'disco-dropdown__list',
            this.show ? 'disco-dropdown__list--show' : undefined
        ];
        return [
            label,
            h("div", { class: "disco-dropdown__value-container", style: { width: `${this.width}px` }, onClick: ev => this.onInputClick(ev), onBlur: this.onInputClickAway.bind(this) },
                this.value
                    ? h("div", { class: "disco-dropdown__value" }, this.valueLabel)
                    : h("div", { class: "disco-dropdown__placeholder" }, this.placeholder),
                h("div", { class: classes.join(' ') },
                    h("ul", { class: "disco-dropdown__list-ul" }, this.show && this.options && this.options.map((option) => {
                        return h("disco-option", { selected: this.value === option.value, value: option.value, label: option.label });
                    })))),
            error
        ];
    }
    static get is() { return "disco-dropdown"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "error": {
            "type": String,
            "attr": "error"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "maxlength": {
            "type": String,
            "attr": "maxlength"
        },
        "minlength": {
            "type": String,
            "attr": "minlength"
        },
        "options": {
            "type": "Any",
            "attr": "options"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "show": {
            "state": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        },
        "valueLabel": {
            "type": String,
            "attr": "value-label",
            "mutable": true
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "discoDropDownSelected",
            "method": "discoDropDownSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "discoDropDownOptionSelected",
            "method": "discoDropDownOptionSelectedHandler"
        }]; }
    static get style() { return "\@charset \"UTF-8\";:root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-dropdown .disco-dropdown__value-container{display:inline-block;margin-bottom:6px;margin-top:9px;position:relative;width:100%}disco-dropdown .disco-dropdown__placeholder,disco-dropdown .disco-dropdown__value{font-family:var(--font-family);font-size:1rem;font-weight:300;line-height:1rem;border-radius:var(--border-radius);border:1px solid var(--text-light);-webkit-box-sizing:border-box;box-sizing:border-box;height:36px;padding:.6rem 1rem;width:100%}disco-dropdown .disco-dropdown__placeholder:after,disco-dropdown .disco-dropdown__value:after{content:\"▿\";position:absolute;top:6px;right:1rem}disco-dropdown .disco-dropdown__placeholder{color:var(--text-light)}disco-dropdown .disco-dropdown__list{display:none;background:#fff;border-radius:4px;-webkit-box-shadow:0 1px 4px 0 var(--text-light);box-shadow:0 1px 4px 0 var(--text-light);position:absolute;left:0;top:36px;width:100%;z-index:100}disco-dropdown .disco-dropdown__list--show{display:block}disco-dropdown .disco-dropdown__list-ul{list-style:none;padding:0;margin:12px 0}"; }
}

class DiscoList {
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
    static get style() { return ""; }
}

class DiscoHeader {
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
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-header{font-family:var(--font-family);font-size:1rem;font-weight:300;line-height:1rem}disco-header .disco-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}disco-header .disco-header__left{-ms-flex:1;flex:1;margin:0;min-width:400px}disco-header .disco-header__right{vertical-align:middle}disco-header .disco-header__title{font-family:var(--font-family);font-size:1.4rem;font-weight:800;line-height:1.4rem}disco-header .disco-header__release-date{color:var(--text-light);margin:1rem 0}"; }
}

class DiscoInput {
    constructor() {
        this.value = '';
        this.type = 'text';
        this.width = '240';
        this.maxlength = '';
        this.minlength = '';
        this.placeholder = '';
    }
    onInput(ev) {
        const input = ev.target;
        if (input) {
            this.value = input.value || '';
        }
        this.discoInput.emit(this.value);
    }
    render() {
        const label = this.label
            ? h("disco-label", null, this.label)
            : undefined;
        const error = this.error
            ? h("disco-error", null, this.error)
            : undefined;
        return [
            label,
            h("input", { value: this.value, style: { width: `${this.width}px` }, type: this.type, placeholder: this.placeholder, maxlength: this.maxlength, minlength: this.minlength, onInput: this.onInput.bind(this) }),
            error
        ];
    }
    static get is() { return "disco-input"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "error": {
            "type": String,
            "attr": "error"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "maxlength": {
            "type": String,
            "attr": "maxlength"
        },
        "minlength": {
            "type": String,
            "attr": "minlength"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "discoInput",
            "method": "discoInput",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-input input{font-size:1rem;font-weight:300;line-height:1rem;border:1px solid var(--text-light);border-radius:var(--border-radius);color:var(--text-heavy);font-family:var(--font-family);height:32px;margin-bottom:6px;margin-top:9px;padding-left:var(--padding);padding-right:var(--padding)}disco-input input ::-webkit-input-placeholder{color:var(--text-light)}disco-input input :-ms-input-placeholder{color:var(--text-light)}disco-input input ::-ms-input-placeholder{color:var(--text-light)}disco-input input ::placeholder{color:var(--text-light)}"; }
}

/**
 * Importing this file:
 * import igdb from 'THIS_FILE_LOCATION'
 * == OR ==
 * var igdb = require('THIS_FILE_LOCATION')
 *
 * Then you would use either of the two commands:
 * igdb.get(id, filters)
 * == OR ==
 * igdb.list(query, startYear, endYear, fields, orderBy)
 *
 * See the comments below for the individual api calls.
 *
 * Any questions please reach out immediately
 */
// import axios from 'axios'

// var http = axios.create({
//   baseURL: 'https://disco-api.herokuapp.com/',
//   headers: {
//     /**
//      * To acquire a api key go to https://api.igdb.com/signup and
//      * register for a key. After signing up it will give you an api or as
//      * they state a "user-key". If there are any issues please reach out as soon as you run into issues
//      **/
//     // 'user-key': '418b95d2f972c7d0b1135e53806a94b5',
//   }
// })

/**
 * Get the individual game by id from a list query
 * @param {*} id
 * @param {*} fields the defaults are supplied in the fields line below. But you can also specific a star (*) and get all fields from the api
 */
function get (id, fields) {
  if (!id) throw Error('igdb get requires a game identifier')

  var params = {
    id: id,
    fields: fields || '*'
  };

  let fetchData = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(params)
  };

  return fetch('https://disco-api.herokuapp.com/get', fetchData).then(response => response.json())

  // return http
  //   .post('get', {
  //     params: params
  //   })
  //   .then(res => {
  //     // returning only the element queried
  //     return res.data
  //   })
}

/**
 * List and search igdb api by name, release year.
 * You can also filter out specific fields and order by
 * @param {*} query
 * @param {*} startYear in format of 'YYYY-MM-DD'
 * @param {*} endYear in format of 'YYYY-MM-DD'
 * @param {*} fields the defaults are supplied in the fields line below. But you can also specific a star (*) and get all fields from the api
 * @param {*} orderBy a specific field and define a direction (either asc or desc). With our default fields below you can sort by name, first_release_date, rating, rating_count or any of the other fields in the data
 */
function list (query, startYear, endYear, fields, orderBy) {
  var params = {
    fields: fields || '*',
    orderBy: orderBy || 'popularity:desc'
  };

  if (query) {
    params['search'] = query;
  }

  if (startYear) {
    params['filter[release_dates.date][gte]'] = startYear;
  }

  if (endYear) {
    params['filter[release_dates.date][lte]'] = endYear;
  }

  let fetchData = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ params })
  };

  return fetch('https://disco-api.herokuapp.com/list', fetchData).then(response => response.json())
}

var igdb = {
  get: get,
  list: list
};

class DiscoList$1 {
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
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-list .disco-list{padding:24px 72px;display:grid;grid-template-columns:240px auto 180px 192px;grid-template-rows:76px auto;grid-template-areas:\"filter . releaseyear sort\" \"main main main main\";grid-column-gap:16px;grid-row-gap:24px}disco-list .disco-list__filter{grid-area:filter}disco-list .disco-list__release-year{grid-area:releaseyear}disco-list .disco-list__sort{grid-area:sort}disco-list .disco-list__main{grid-area:main;min-height:4em;max-height:100%}"; }
}

class DiscoDropDown$1 {
    onOptionSelected() {
        this.discoDropDownOptionSelected.emit({ value: this.value, label: this.label });
    }
    render() {
        const classes = [
            'disco-dropdown__list-option',
            this.selected ? 'disco-dropdown__list-option--selected' : undefined
        ];
        return [
            h("li", { class: classes.join(' '), onClick: _ => this.onOptionSelected() }, this.label)
        ];
    }
    static get is() { return "disco-option"; }
    static get properties() { return {
        "label": {
            "type": String,
            "attr": "label"
        },
        "selected": {
            "type": Boolean,
            "attr": "selected"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "discoDropDownOptionSelected",
            "method": "discoDropDownOptionSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-option .disco-dropdown__list-option{font-family:var(--font-family);font-size:1rem;font-weight:300;line-height:1rem;list-style:none;padding:7px 1rem}disco-option .disco-dropdown__list-option:hover{background-color:var(--paper);cursor:pointer}disco-option .disco-dropdown__list-option--selected{background-color:var(--paper)}"; }
}

class DiscoReleaseYears {
    constructor() {
        this.errorMessages = [];
    }
    updateStartYear(ev) {
        ev.stopPropagation();
        this.startYear = ev.detail;
        this.validateYears();
    }
    updateEndYear(ev) {
        ev.stopPropagation();
        this.endYear = ev.detail;
        this.validateYears();
    }
    validateYears() {
        let start = Number(this.startYear);
        let end = Number(this.endYear);
        this.errorMessages = [];
        if (this.startYear && this.startYear.length > 0 && this.startYear.length < 4) {
            this.errorMessages.push('The starting year must be 4 characters long.');
        }
        if (this.endYear && this.endYear.length > 0 && this.endYear.length < 4) {
            this.errorMessages.push('The ending year must be 4 characters long.');
        }
        if ((this.endYear && this.endYear.length > 0 && isNaN(end))
            || (this.startYear && this.startYear.length > 0 && isNaN(start))) {
            this.errorMessages.push('The values can only be numbers.');
        }
        if (this.errorMessages.length === 0) {
            if (this.startYear && this.endYear && start > end) {
                this.errorMessages.push('The start year cannot be greater than end year.');
            }
        }
        if (this.errorMessages.length === 0) {
            this.discoReleaseYears.emit({ startYear: this.startYear, endYear: this.endYear });
        }
    }
    render() {
        const errors = this.errorMessages.map(msg => {
            return h("disco-error", null, msg);
        });
        return [
            h("disco-label", null, "Release Years"),
            h("div", { class: "disco-release-years__input-container" },
                h("disco-input", { value: this.startYear, type: "text", width: "36", maxlength: "4", minlength: "4", onDiscoInput: ev => this.updateStartYear(ev) }),
                h("span", { class: "disco-release-years__to" }, "to"),
                h("disco-input", { value: this.endYear, type: "text", width: "36", maxlength: "4", minlength: "4", onDiscoInput: ev => this.updateEndYear(ev) })),
            errors
        ];
    }
    static get is() { return "disco-release-years"; }
    static get properties() { return {
        "endYear": {
            "type": String,
            "attr": "end-year",
            "mutable": true
        },
        "startYear": {
            "type": String,
            "attr": "start-year",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "discoReleaseYears",
            "method": "discoReleaseYears",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-release-years .disco-release-years{position:relative;width:180px}disco-release-years .disco-release-years__input-container{width:180px}disco-release-years .disco-release-years__input-container disco-input{display:inline-block}disco-release-years .disco-release-years__input-container disco-input input{padding-left:.9rem;padding-right:.9rem}disco-release-years .disco-release-years__to{padding-left:1rem;padding-right:1rem}disco-release-years disco-error{width:180px}"; }
}

export { DiscoCard, DiscoDropDown as DiscoDropdown, DiscoList as DiscoGameCard, DiscoHeader, DiscoInput, DiscoList$1 as DiscoList, DiscoDropDown$1 as DiscoOption, DiscoReleaseYears };
