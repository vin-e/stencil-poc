export class DiscoDropDown {
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
    static get style() { return "/**style-placeholder:disco-dropdown:**/"; }
}
