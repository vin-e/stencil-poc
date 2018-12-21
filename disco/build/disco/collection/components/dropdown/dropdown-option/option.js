export class DiscoDropDown {
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
    static get style() { return "/**style-placeholder:disco-option:**/"; }
}
