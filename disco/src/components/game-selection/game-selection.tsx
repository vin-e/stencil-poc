import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'disco-game-selection',
  styleUrl: 'game-selection.scss'
})
export class DiscoGameSelection {

  @Prop({ mutable: false }) imgUrl: string

  @Prop({ mutable: false }) title: string
  
  @Prop({ mutable: false }) releaseDate: string

  @Prop({ mutable: false }) count: string

  @Prop({ mutable: false }) hearts: string
  
  @Prop({ mutable: false }) percent: string

  render() {
    return (
      <div class="disco-game-selection">
        <img class="disco-game-selection__img" src={this.imgUrl} />
        <div class="disco-game-selection__title">{this.title}</div>
        <disco-ratings class="disco-game-selection__ratings" percent={this.percent} count={this.count} hearts={this.hearts}></disco-ratings>
        <div class="disco-game-selection__released-in">Released in {this.releaseDate}</div>
      </div>
    );
  }
}
