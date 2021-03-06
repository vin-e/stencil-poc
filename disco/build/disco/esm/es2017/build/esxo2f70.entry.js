import { h } from '../disco.core.js';

class DiscoError {
    render() {
        return (h("slot", null));
    }
    static get is() { return "disco-error"; }
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-error{font-size:.8rem;font-weight:300;line-height:.8rem;color:var(--love);display:block;font-family:var(--font-family)}"; }
}

class DiscoLabel {
    render() {
        return (h("slot", null));
    }
    static get is() { return "disco-label"; }
    static get style() { return ":root{--text:#12425b;--text-light:#888;--text-heavy:#092634;--paper:#f2f2f2;--drop-shadow:#d6d6d6;--love:#e55d5d;--font-family:Arial,sans-serif;--font-size:14px;--border-radius:4px;--padding:1rem}disco-label{font-size:.8rem;font-weight:300;line-height:.8rem;text-transform:uppercase;color:var(--text-heavy);display:block;font-family:var(--font-family)}"; }
}

export { DiscoError, DiscoLabel };
