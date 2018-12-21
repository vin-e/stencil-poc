import { Component } from '@stencil/core';

@Component({
  tag: 'disco-label',
  styleUrl: 'label.scss'
})
export class DiscoLabel {
  render() {
    return (
      <slot></slot>
    );
  }
}
