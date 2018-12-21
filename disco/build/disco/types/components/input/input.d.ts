import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class DiscoInput {
    el: HTMLElement;
    value: string;
    type: string;
    width: string;
    maxlength: string;
    minlength: string;
    placeholder: string;
    label: string;
    error: string;
    discoInput: EventEmitter;
    private onInput;
    render(): JSX.Element[];
}
