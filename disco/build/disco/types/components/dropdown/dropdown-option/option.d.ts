import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class DiscoDropDown {
    selected: boolean;
    value: string;
    label: string;
    discoDropDownOptionSelected: EventEmitter;
    private onOptionSelected;
    render(): JSX.Element[];
}
