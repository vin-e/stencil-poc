import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'disco-header',
  styleUrl: 'header.scss'
})
export class DiscoHeader {

  @Prop({ mutable: false }) title: string
  
  @Prop({ mutable: false }) releaseDate: string

  @Prop({ mutable: false }) count: string

  @Prop({ mutable: false }) hearts: string
  
  @Prop({ mutable: false }) percent: string

  render() {
    return (
      <div class="disco-header">
        <div class="disco-header__left">
          <div class="disco-header__title">{this.title}</div>
          <div class="disco-header__release-date">Release in {this.releaseDate}</div>
        </div>
        <div class="disco-header__right">
          <disco-ratings percent={this.percent} count={this.count} hearts={this.hearts}></disco-ratings>
        </div>
      </div>
    );
  }
}
