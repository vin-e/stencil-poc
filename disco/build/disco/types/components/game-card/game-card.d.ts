import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class DiscoList {
    selected: boolean;
    game: any;
    discoGameCardSelected: EventEmitter;
    render(): JSX.Element;
}
