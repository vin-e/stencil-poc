export class DiscoInput {
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
    static get style() { return "/**style-placeholder:disco-input:**/"; }
}
