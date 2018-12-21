import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class DiscoDropDown {
    el: HTMLElement;
    value: string;
    valueLabel: string;
    width: string;
    options: object[];
    maxlength: string;
    minlength: string;
    placeholder: string;
    label: string;
    error: string;
    show: boolean;
    componentWillLoad(): void;
    discoDropDownSelected: EventEmitter;
    discoDropDownOptionSelectedHandler(event: CustomEvent): void;
    private onInputClick;
    private onInputClickAway;
    render(): JSX.Element[];
}
