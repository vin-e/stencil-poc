import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'disco-card',
  styleUrl: 'card.scss'
})
export class DiscoCard {
  @Prop() selected: boolean

  render() {
    const classes = ['disco-card']
    if (this.selected) {
      classes.push('disco-card--selected')
    }
    return [
      <div class={classes.join(' ')}>
        <slot name="header"></slot>
        <hr />
        <slot></slot>
      </div>
    ]
  }
}
