export class DiscoReleaseYears {
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
    static get style() { return "/**style-placeholder:disco-release-years:**/"; }
}
