import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class DiscoList {
    isLoading: boolean;
    games: any[];
    releaseEndYear: string;
    releaseStartYear: string;
    searchField: string;
    selectedId: number;
    sortBy: string;
    componentWillLoad(): void;
    discoGameSelected: EventEmitter;
    onDiscoGameSelected(e: any): void;
    onDiscoInput(e: any): void;
    onDiscoDropDownSelected(e: any): void;
    onDiscoReleaseYears(e: any): void;
    sortOptions: object[];
    fetchData(): void;
    render(): JSX.Element;
}
