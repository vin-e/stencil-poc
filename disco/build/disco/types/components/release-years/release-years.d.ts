import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class DiscoReleaseYears {
    errorMessages: Array<string>;
    startYear: string;
    endYear: string;
    discoReleaseYears: EventEmitter;
    updateStartYear(ev: any): void;
    updateEndYear(ev: any): void;
    validateYears(): void;
    render(): JSX.Element[];
}
